"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./survey.module.css";
import Button from "../../elements/Button/Button";
import loader from "../../../public/images/loader.svg";

import QuestionOne from "../components/Questions/QuestionOne";
import QuestionTwo from "../components/Questions/QuestionTwo";
import QuestionThree from "../components/Questions/QuestionThree";
import QuestionFour from "../components/Questions/QuestionFour";
import QuestionFive from "../components/Questions/QuestionFive";

export default function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [direction, setDirection] = useState(0);
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const updateFormData = useCallback(
    (key, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    },
    [setFormData]
  );

  const goToPreviousQuestion = () => {
    if (currentQuestion > 1) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNextQuestion = async () => {
    if (currentQuestion < 5) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Sending Data:", formData);
      setIsLoading(true);

      const apiPromise = fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const minimumTimePromise = delay(5000);

      try {
        const [response] = await Promise.all([apiPromise, minimumTimePromise]);

        const result = await response.json();

        if (response.ok) {
          console.log("Result from the Server:", result);

          router.push(`/results?worthIt=${result.result}`);
        } else {
          console.error("Sending Error", result.message);
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error("Serververbindungsfehler", error);
        alert("Serververbindungsfehler");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderCurrentQuestion = () => {
    const props = {
      updateFormData: updateFormData,
    };

    switch (currentQuestion) {
      case 1:
        return <QuestionOne {...props} />;
      case 2:
        return <QuestionTwo {...props} />;

      case 3:
        return <QuestionThree {...props} />;

      case 4:
        return <QuestionFour {...props} />;

      case 5:
        return <QuestionFive {...props} />;

      default:
        return <div>Danke</div>;
    }
  };
  const questionVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };
  const ifResultBtn = currentQuestion == 5;
  return (
    <div className={styles.surveyContainer}>
      {isLoading && (
        <div className={styles.loaderOverlay}>
          <Image
            src={loader}
            alt="Loading Spinner"
            width={150}
            height={150}
            className={styles.loaderImage}
          />

          <h2>
            Bitte haben Sie einen Augenblick Geduld, während wir Ihre Antworten
            auswerten
          </h2>
        </div>
      )}

      <div className={styles.questionsContainer}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQuestion}
            custom={direction}
            variants={questionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.2 },
            }}
            className={styles.questionContainer}
          >
            {renderCurrentQuestion()}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.surveyButtons}>
        {currentQuestion > 1 && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button text="Vorherige Frage" handleClick={goToPreviousQuestion} />
          </motion.div>
        )}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            text={currentQuestion < 5 ? "Nächste Frage" : "Ergebnis anzeigen"}
            handleClick={goToNextQuestion}
            differentClassName={ifResultBtn ? styles.darkBlue : ""}
          />
        </motion.div>
      </div>
    </div>
  );
}

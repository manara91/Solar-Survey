"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./survey.module.css";
import Button from "../components/Elements/Button/Button";
import loader from "../../../public/images/loader.svg";

import CheckboxQuestions from "../components/Questions/CheckboxQuestions";
import RadioQuestions from "../components/Questions/RadioQuestions";

export default function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [direction, setDirection] = useState(0);
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

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

  //check if the answer exists:
  const isQuestionAnswered = (questionNum) => {
    switch (questionNum) {
      case 1:
        return !!formData.houseType;
      case 2:
        return (
          formData.question2_answer && formData.question2_answer.length > 0
        );
      case 3:
        return !!formData.houseAge;

      case 4:
        return !!formData.electricityConsumption;
      case 5:
        return !!formData.energySolutions;
      default:
        return false;
    }
  };
  const goToNextQuestion = async () => {
    if (!isQuestionAnswered(currentQuestion)) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (currentQuestion < 5) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
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
        return (
          <RadioQuestions
            question="1. Welche Art von Immobilie besitzen Sie?"
            options={[
              "Einfamilienhaus",
              "Mehrfamilienhaus",
              "Gewerbeimmobilie",
            ]}
            name="houseType"
            currentValue={formData.houseType ?? []}
            updateFormData={updateFormData}
          />
        );

      case 2:
        return (
          <CheckboxQuestions
            question="2. Wie ist Ihr Dach ausgerichtet?"
            options={["Süd", "West", "Ost", "Nord"]}
            formKey="question2_answer"
            currentValue={formData.question2_answer ?? []}
            updateFormData={updateFormData}
          />
        );

      case 3:
        return (
          <RadioQuestions
            question="3. Wie alt ist Ihr Dach?"
            options={[
              "Unter 5 Jahre",
              "5-15 Jahre",
              "Über 15 Jahre",
              "Keine Angabe",
            ]}
            name="houseAge"
            currentValue={formData.houseAge ?? []}
            updateFormData={updateFormData}
          />
        );

      case 4:
        return (
          <RadioQuestions
            question="4. Wie hoch ist Ihr Stromverbrach pro Jahr?"
            options={[
              "Unter 3.000 kWh",
              "3.000 - 5.000 kWh",
              "Über 5.000 kWh",
              "Keine Angabe",
            ]}
            name="electricityConsumption"
            currentValue={formData.electricityConsumption ?? []}
            updateFormData={updateFormData}
          />
        );

      case 5:
        return (
          <RadioQuestions
            question="5. Sind Sie auch an weiteren Energielösungen interessiert?"
            options={["Ja", "Nein", "Weis nicht"]}
            name="energySolutions"
            currentValue={formData.energySolutions ?? []}
            updateFormData={updateFormData}
          />
        );

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
      <div className={styles.errorMsg}>
        {showError && (
          <p>
            Bitte beantworten Sie zuerst die aktuelle Frage bevor Sie fortfahren
          </p>
        )}
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

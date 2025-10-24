"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./survey.module.css";
import Button from "../../elements/Button/Button";

import QuestionOne from "../components/Questions/QuestionOne";
import QuestionTwo from "../components/Questions/QuestionTwo";
import QuestionThree from "../components/Questions/QuestionThree";
import QuestionFour from "../components/Questions/QuestionFour";
import QuestionFive from "../components/Questions/QuestionFive";

export default function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const router = useRouter();
  const [formData, setFormData] = useState({});

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
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNextQuestion = async () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Sending Data:", formData);

      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

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
        return <div>Danke! </div>;
    }
  };

  return (
    <div className={styles.surveyContainer}>
      {renderCurrentQuestion()}

      <div className={styles.surveyButtons}>
        {currentQuestion > 1 && (
          <Button text="Vorherige Frage" handleClick={goToPreviousQuestion} />
        )}
        <Button
          text={currentQuestion < 5 ? "Nächste Frage" : "Ergebnis anzeigen"}
          handleClick={goToNextQuestion}
        ></Button>
      </div>
    </div>
  );
}

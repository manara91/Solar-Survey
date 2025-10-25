import React, { useEffect } from "react";
import { useMutuallyExclusive } from "../../../hooks/useMutuallyExclusive";
import styles from "./questions.module.css";

function QuestionFour({ updateFormData }) {
  const {
    selectedOptions,
    noInformation,
    handleRadioChange,
    handleCheckboxChange,
    isRadioDisabled,
  } = useMutuallyExclusive();

  const options = ["Unter 3.000 kWh", "3.000 - 5.000 kWh", "Über 5.000 kWh"];
  const formKey = "question4_options";

  useEffect(() => {
    let valueToStore;

    if (noInformation) {
      valueToStore = "Keine Angabe";
    } else {
      valueToStore = selectedOptions;
    }

    updateFormData(formKey, valueToStore);
  }, [selectedOptions, noInformation]);

  return (
    <div className={styles.questionContainer}>
      <form className={styles.questionForm}>
        <h3>4. Wie hoch ist Ihr Stromverbrach pro Jahr?</h3>
        <p>(Mehrfachauswahl möglich):</p>

        <div className={styles.optionsGroup}>
          {options.map((option) => (
            <label
              key={option}
              className={noInformation ? styles.disabledLabel : ""}
            >
              <input
                type="checkbox"
                value={option}
                name="questionOne"
                onChange={handleCheckboxChange}
                disabled={noInformation}
                checked={selectedOptions.includes(option)}
              />
              {option}
            </label>
          ))}

          <hr />

          <label>
            <input
              type="radio"
              value="Keine Angabe"
              name="questionOneStatus"
              onChange={handleRadioChange}
              checked={noInformation}
              disabled={isRadioDisabled}
            />
            Keine Angabe
          </label>
        </div>
      </form>
    </div>
  );
}

export default QuestionFour;

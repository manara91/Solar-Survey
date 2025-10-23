import React, { useEffect } from "react";
import { useMutuallyExclusive } from "../../../hooks/useMutuallyExclusive";
import styles from "./questions.module.css";

function QuestionTwo({ updateFormData }) {
  const {
    selectedOptions,
    noInformation,
    handleRadioChange,
    handleCheckboxChange,
    isRadioDisabled,
  } = useMutuallyExclusive();

  const options = ["Option A", "Option B", "Option C", "Option D"];
  const formKey = "question2_options";
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
        <h3>2. Was ist Ihre erste Frage?</h3>

        <div className={styles.optionsGroup}>
          <p>Bitte wählen Sie aus (Mehrfachauswahl möglich):</p>
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

export default QuestionTwo;

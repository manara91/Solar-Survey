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

  const options = ["Süd", "West", "Ost", "Nord"];
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
        <h3>2. Wie ist Ihr Dach ausgerichtet?</h3>
        <p>Mehrfachauswahl möglich:</p>

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

export default QuestionTwo;

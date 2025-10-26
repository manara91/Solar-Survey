import React, { useEffect } from "react";
import { useCheckboxRadioToggle } from "../../../hooks/useCheckboxRadioToggle";
import styles from "./questions.module.css";

function CheckboxQuestions({ question, options, formKey, updateFormData }) {
  const {
    selectedOptions,
    noInformation,
    handleRadioChange,
    handleCheckboxChange,
    isRadioDisabled,
  } = useCheckboxRadioToggle();

  useEffect(() => {
    let valueToStore;

    if (noInformation) {
      valueToStore = "Keine Angabe";
    } else {
      valueToStore = selectedOptions;
    }

    updateFormData(formKey, valueToStore);
  }, [selectedOptions, noInformation, formKey, updateFormData]);

  return (
    <div className={styles.questionContainer}>
      <form>
        <h3>{question}</h3>
        <p>(Mehrfachauswahl möglich)</p>

        <div className={styles.questionLabels}>
          {options.map((option) => (
            <label
              key={option}
              className={noInformation ? styles.disabledLabel : ""}
            >
              <input
                type="checkbox"
                value={option}
                name={formKey}
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
              name={`${formKey}Status`}
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

export default CheckboxQuestions;

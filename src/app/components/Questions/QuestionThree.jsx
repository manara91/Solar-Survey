import React, { useEffect } from "react";
import { useMutuallyExclusive } from "../../../hooks/useMutuallyExclusive";
import styles from "./questions.module.css";

function QuestionThree({ updateFormData }) {
  const {
    selectedOptions,
    noInformation,
    handleRadioChange,
    handleCheckboxChange,
    isRadioDisabled,
  } = useMutuallyExclusive();

  const options = ["Unter 5 Jahre", "5-15 Jahre", "Über 15 Jahre"];
  const formKey = "question3_options";

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
      <form>
        <h3>3. Wie alt ist Ihr Dach?</h3>
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

export default QuestionThree;

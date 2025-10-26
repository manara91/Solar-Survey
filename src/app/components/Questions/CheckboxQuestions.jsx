// Reusable checkbox question component for multiple selection

import { useEffect } from "react";
import { useCheckboxButton } from "../../../hooks/useCheckboxButton";
import styles from "./questions.module.css";

function CheckboxQuestions({
  question,
  options,
  formKey,
  currentValue,
  updateFormData,
}) {
  let { selectedOptions, noInfo, handleRadioChange, handleCheckboxChange } =
    useCheckboxButton(currentValue);

  /**
   * Effect to synchronize checkbox selections with parent form state
   * Handles two scenarios:
   * - When "no information" is selected: stores static string
   * - When options are selected: stores array of selected values
   * Ensures form data stays updated with user interactions
   */
  useEffect(() => {
    let valueToStore;

    if (noInfo) {
      valueToStore = "Keine Angabe";
    } else {
      valueToStore = selectedOptions;
    }

    updateFormData(formKey, valueToStore);
  }, [selectedOptions, noInfo, formKey, updateFormData]);

  return (
    <div className={styles.questionContainer}>
      <form>
        <h3>{question}</h3>
        <p>(Mehrfachauswahl möglich)</p>

        <div className={styles.questionLabels}>
          {options.map((option) => (
            <label key={option} className={noInfo ? styles.disabledLabel : ""}>
              <input
                type="checkbox"
                value={option}
                name={formKey}
                onChange={handleCheckboxChange}
                disabled={noInfo}
                checked={currentValue.includes(option)}
              />
              {option}
            </label>
          ))}

          <hr />

          <label>
            <input
              type="checkbox"
              value="Keine Angabe"
              name={`${formKey}Status`}
              onChange={handleRadioChange}
              checked={noInfo}
            />
            Keine Angabe
          </label>
        </div>
      </form>
    </div>
  );
}

export default CheckboxQuestions;

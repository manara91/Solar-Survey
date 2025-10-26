import { useEffect } from "react";
import { useCheckboxButton } from "../../../hooks/useCheckboxButton";
import styles from "./questions.module.css";

function CheckboxQuestions({ question, options, formKey, updateFormData }) {
  const { selectedOptions, noInfo, handleRadioChange, handleCheckboxChange } =
    useCheckboxButton();

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
                checked={selectedOptions.includes(option)}
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

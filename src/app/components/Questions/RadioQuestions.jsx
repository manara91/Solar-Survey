import { useRadioButton } from "../../../hooks/useRadioButton";
import styles from "./questions.module.css";

function RadioQuestions({ question, options, name, updateFormData }) {
  const { handleRadioChange } = useRadioButton(updateFormData);

  return (
    <div className={styles.questionContainer}>
      <form onChange={handleRadioChange}>
        <h3>{question}</h3>

        <div className={styles.questionLabels}>
          {options.map((option) => (
            <label key={option}>
              <input type="radio" name={name} value={option} />
              {option}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
}

export default RadioQuestions;

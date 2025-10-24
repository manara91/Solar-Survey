import styles from "./questions.module.css";

function QuestionFive({ updateFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    updateFormData(name, value);
  };
  return (
    <div className={styles.questionContainer}>
      <form className={styles.questionForm} onChange={handleChange}>
        <h3>5. Sind Sie auch an weiteren Energielösungen interessiert?</h3>
        <div className={styles.questionLabels}>
          <label>
            <input type="radio" name="EnergySolutions" value="yes" />
            Ja
          </label>

          <label>
            <input type="radio" name="EnergySolutions" value="no" />
            Nein
          </label>

          <label>
            <input type="radio" name="EnergySolutions" value="dontKnow" />
            Weis nicht
          </label>
        </div>
      </form>
    </div>
  );
}

export default QuestionFive;

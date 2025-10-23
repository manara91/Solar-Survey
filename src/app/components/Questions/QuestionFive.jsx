import styles from "./questions.module.css";

function QuestionFive() {
  return (
    <div className={styles.questionContainer}>
      <form className={styles.questionForm}>
        <h3>5. Sind Sie auch an weiteren Energielösungen interessiert?</h3>

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
      </form>
    </div>
  );
}

export default QuestionFive;

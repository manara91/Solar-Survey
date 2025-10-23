import styles from "./questions.module.css";

function QuestionOne({ updateFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    updateFormData(name, value);
  };
  return (
    <div className={styles.questionContainer}>
      <form className={styles.questionForm} onChange={handleChange}>
        <h3>1. Welche Art von Immobilie besitzen Sie?</h3>

        <label>
          <input type="radio" name="houseType" value="singleHouse" />
          Einfamilienhaus
        </label>

        <label>
          <input type="radio" name="houseType" value="multiHouses" />
          Mehrfamilienhaus
        </label>

        <label>
          <input type="radio" name="houseType" value="commercialProperty" />
          Gewerbeimmobilie
        </label>
      </form>
    </div>
  );
}

export default QuestionOne;

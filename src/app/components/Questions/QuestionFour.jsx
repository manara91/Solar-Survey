
import styles from "./questions.module.css";


function QuestionFour() {
  return (
    <div className={styles.questionContainer}>
      

     
<form className={styles.questionForm}>
    <h3>4. Wie hoch ist Ihr Stromverbrauch pro Jahr?</h3>

    <label>
            <input 
              type="radio" 
              name="roofArea" 
              value="20-50" 
              
            />
           Einfamilienhaus
        
    </label>

     <label>
            <input 
              type="radio" 
              name="roofArea" 
              value="20-50" 
              
            />
           Mehrfamilienhaus
        
    </label>

     <label>
            <input 
              type="radio" 
              name="roofArea" 
              value="20-50" 
              
            />
           Gewerbeimmobilie
        
    </label>


    
         
       
</form>
        
      
    </div>
  );
}

export default QuestionFour;
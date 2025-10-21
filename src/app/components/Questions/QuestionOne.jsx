
import styles from "./questions.module.css";


function QuestionOne() {
  return (
    <div className={styles.questionContainer}>
      

     
<form className={styles.questionForm}>
    <h3>1. Welche Art von Immobilie besitzen Sie?</h3>

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

export default QuestionOne;
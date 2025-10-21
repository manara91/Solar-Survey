
import styles from "./questions.module.css";


function QuestionFive() {
  return (
    <div className={styles.questionContainer}>
      

     
<form className={styles.questionForm}>
    <h3>5. Sind Sie auch an weiteren Energielösungen interessiert?</h3>

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

export default QuestionFive;
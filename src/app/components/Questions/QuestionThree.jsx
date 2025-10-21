
import styles from "./questions.module.css";


function QuestionThree() {
  return (
    <div className={styles.questionContainer}>
      

     
<form className={styles.questionForm}>
    <h3>3. Wie alt ist Ihr Dach?</h3>

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

export default QuestionThree;
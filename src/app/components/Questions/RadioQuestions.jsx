import React from "react";
// افترض أن مسار الهوك هو هذا المسار
import { useRadioButton } from "../../../hooks/useRadioButton";
import styles from "./questions.module.css";

function RadioQuestions({ question, options, name, updateFormData }) {
  // استدعاء الهوك وتمرير دالة updateFormData
  const { handleRadioChange } = useRadioButton(updateFormData);

  return (
    <div className={styles.questionContainer}>
      {/* تطبيق الهاندلر على حدث onChange للـ form لتبسيط الكود */}
      <form onChange={handleRadioChange}>
        <h3>{question}</h3>

        <div className={styles.questionLabels}>
          {/* استخدام كل خيار كسلسلة نصية لـ value و label */}
          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={name} // اسم مجموعة الراديو
                value={option} // القيمة المخزنة
              />
              {option} {/* النص المعروض */}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
}

export default RadioQuestions;

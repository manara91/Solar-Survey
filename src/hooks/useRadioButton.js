import { useState, useCallback } from "react";

export function useRadioButton(updateFormData) {
  // يمكن استخدام حالة (state) هنا لتتبع القيمة المختارة داخل الهوك،
  // ولكن بما أنك تقوم بتحديث updateFormData مباشرة، يمكننا تبسيط الأمر.

  const [selectedValue, setSelectedValue] = useState(null);

  // استخدام useCallback لضمان عدم إعادة إنشاء الدالة في كل مرة، مما يحسن الأداء
  const handleRadioChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      // تحديث الحالة داخل الهوك
      setSelectedValue(value);

      // تحديث بيانات النموذج الرئيسية فوراً
      if (updateFormData) {
        updateFormData(name, value);
      }
    },
    [updateFormData]
  );

  return {
    selectedValue,
    handleRadioChange,
  };
}

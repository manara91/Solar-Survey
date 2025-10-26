import { useState, useCallback } from "react";

export function useRadioButton(updateFormData) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setSelectedValue(value);

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

import { useState, useCallback } from "react";

export function useRadioButton(updateFormData) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [noInfo, setNoInfo] = useState(false);

  const handleRadioChange = useCallback(
    (event) => {
      const { name, value, checked } = event.target;

      if (value === "Keine Angabe") {
        setNoInfo(checked);
        if (checked) {
          setSelectedValue(null);
          if (updateFormData) {
            updateFormData(name, "Keine Angabe");
          }
        } else {
          if (updateFormData) {
            updateFormData(name, null);
          }
        }
      } else {
        if (checked) {
          setNoInfo(false);
          setSelectedValue(value);
          if (updateFormData) {
            updateFormData(name, value);
          }
        }
      }
    },
    [updateFormData]
  );

  const resetSelection = () => {
    setSelectedValue(null);
    setNoInfo(false);
  };

  return {
    selectedValue,
    noInfo,
    handleRadioChange,
    resetSelection,
  };
}

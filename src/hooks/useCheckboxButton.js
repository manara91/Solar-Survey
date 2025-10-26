import { useState } from "react";

export function useCheckboxButton(initialOptions = []) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [noInfo, setnoInfo] = useState(false);

  const handleRadioClick = (e) => {
    setnoInfo((prev) => {
      const next = !prev;
      if (next) {
        setSelectedOptions([]);
      }
      return next;
    });
  };

  const handleRadioChange = (e) => {
    const checked = e.target.checked;

    setnoInfo(checked);
    if (checked) setSelectedOptions([]);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setnoInfo(false);
      setSelectedOptions((prev) => {
        if (prev.includes(value)) return prev;
        return [...prev, value];
      });
    } else {
      setSelectedOptions((prev) => prev.filter((opt) => opt !== value));
    }
  };

  const resetSelections = () => {
    setSelectedOptions([]);
    setnoInfo(false);
  };

  return {
    selectedOptions,
    noInfo,
    handleRadioClick,
    handleRadioChange,
    handleCheckboxChange,
    resetSelections,

    isCheckboxDisabled: noInfo,
  };
}

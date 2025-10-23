import { useState } from "react";

export function useMutuallyExclusive(initialOptions = []) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [noInformation, setNoInformation] = useState(false);

  const handleRadioClick = (e) => {
    setNoInformation((prev) => {
      const next = !prev;
      if (next) {
        setSelectedOptions([]);
      }
      return next;
    });
  };

  const handleRadioChange = (e) => {
    const checked = e.target.checked;

    setNoInformation(checked);
    if (checked) setSelectedOptions([]);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setNoInformation(false);
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
    setNoInformation(false);
  };

  return {
    selectedOptions,
    noInformation,
    handleRadioClick,
    handleRadioChange,
    handleCheckboxChange,
    resetSelections,

    isCheckboxDisabled: noInformation,
  };
}

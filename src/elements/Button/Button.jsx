"use client";
import styles from "./button.module.css";

function Button({ text, handleClick, differentClassName }) {
  const classNames = [styles.button, differentClassName].filter(Boolean); // تزيل القيم الفارغة/Null من المصفوفة
  return (
    <button className={classNames.join(" ")} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;

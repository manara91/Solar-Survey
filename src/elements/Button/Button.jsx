"use client";
import styles from "./button.module.css";

function Button({ text, handleClick }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        handleClick;
      }}
    >
            {text}
     
    </button>
  );
}

export default Button;

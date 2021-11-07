import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.btnList}>
    {options.map((option) => (
      <li key={option}>
        <button
          type="button"
          onClick={onLeaveFeedback}
          className={styles.button}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

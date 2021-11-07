import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statList}>
    <li>
      <p className={styles.text}>
        Good:<span className={styles.value}>{good}</span>
      </p>
    </li>
    <li>
      <p className={styles.text}>
        Neutral:<span className={styles.value}>{neutral}</span>
      </p>
    </li>
    <li>
      <p className={styles.text}>
        Bad:<span className={styles.value}>{bad}</span>
      </p>
    </li>
    <li>
      <p className={styles.text}>
        Total:<span className={styles.value}>{total}</span>
      </p>
    </li>
    <li>
      <p className={styles.text}>
        Positive feedback:
        <span className={positivePercentage > 50 ? styles.high : styles.low}>
          {positivePercentage}%
        </span>
      </p>
    </li>
  </ul>
);

export default Statistics;

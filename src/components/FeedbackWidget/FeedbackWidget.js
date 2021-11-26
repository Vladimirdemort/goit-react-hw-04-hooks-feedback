import React from "react";
import { useState } from "react";

import FeedbackOptions from "../Feedback/FeedbackOptions";
import Section from "../Section/Section";
import Statistics from "../Statistic/Statistics";
import Notification from "../Notification/Notification";

function FeedbackWidget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onLeaveFeedback = (e) => {
    const value = e.target.innerText;
    switch (value) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countPositiveFeedbackPercentage = () => {
    setPositivePercentage(Math.round((good * 100) / total));

    console.log();
  };

  const countTotalFeedback = () => {
    setTotal(total + 1);
  };

  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </div>
  );
}

export default FeedbackWidget;

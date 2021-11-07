import React from "react";
import FeedbackOptions from "../Feedback/FeedbackOptions";
import Section from "../Section/Section";
import Statistics from "../Statistic/Statistics";
import Notification from "../Notification/Notification";

class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = (e) => {
    const value = e.target.innerText;
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercentage: Math.round((prevState.good * 100) / prevState.total),
    }));
    console.log();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.state.total > 0 ? (
          <Section title={"Statistics"}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          </Section>
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </div>
    );
  }
}

export default FeedbackWidget;

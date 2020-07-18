import React from "react";
import Statistic from "./statistic";

const Statistics = ({ good, neutral, bad }) => {
  const NoFeedback = () => <p>No feedback given</p>;
  const all = good + neutral + bad;
  const average = all ? Number((good - bad) / all).toFixed(2) : 0;
  const positive = all ? Number((good / all) * 100).toFixed(2) : 0;

  return (
    <div>
      <h1>statistics</h1>
      {all ? (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      ) : (
        <NoFeedback />
      )}
    </div>
  );
};

export default Statistics;

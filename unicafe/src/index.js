import React, { useState } from "react";
import ReactDOM from "react-dom";
import Statistics from "./statistics";
import Button from "./button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = {
    good: [good, setGood],
    neutral: [neutral, setNeutral],
    bad: [bad, setBad]
  };

  const handleClick = text => () => {
    let value = state[text][0];
    let setValue = state[text][1];
    setValue(value + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleClick("good")} />
      <Button text="neutral" handleClick={handleClick("neutral")} />
      <Button text="bad" handleClick={handleClick("bad")} />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

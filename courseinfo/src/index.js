import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const content = {
    part1: { name: "Fundamentals of React", exercises: 10 },
    part2: { name: "Using props to pass data", exercises: 7 },
    part3: { name: "State of a component", exercises: 14 }
  };
  const total = Object.entries(content)
    .map(([key, value]) => value.exercises)
    .reduce((total, numberOfExercises) => total + numberOfExercises);

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ content }) => (
  <div>
    {Object.entries(content).map(([key, value]) => (
      <p key={key}>{value.name + " " + value.exercises}</p>
    ))}
  </div>
);

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const App = () => {
  const content = {
    name: "Half Stack application development",
    part1: { name: "Fundamentals of React", exercises: 10 },
    part2: { name: "Using props to pass data", exercises: 7 },
    part3: { name: "State of a component", exercises: 14 }
  };
  const total = Object.entries(content)
    .map(([key, value]) => value.exercises)
    .reduce((total, numberOfExercises) => total + numberOfExercises);

  return (
    <>
      <Header course={content.name} />
      <Content content={content} />
      <Total total={total} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

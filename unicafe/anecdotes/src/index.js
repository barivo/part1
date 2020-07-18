import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const points = new Array(anecdotes.length);
  for (let i = 0; i < anecdotes.length; i++) points[i] = 0;

  const [votes, setVotes] = useState(points);
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const handleVote = () => {
    let points = [...votes];
    points[selected] += 1;
    setVotes(points);
  };

  const indexWithMostVotes = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
      <h1>Anecdote with the most votes</h1>
      {props.anecdotes[indexWithMostVotes]} has {votes[indexWithMostVotes]}{" "}
      votes.
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

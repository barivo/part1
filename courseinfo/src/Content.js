import React from "react";

const Content = ({ content }) => (
  <div>
    {Object.entries(content).map(([key, value]) => (
      <p key={key}>{value.name + " " + value.exercises}</p>
    ))}
  </div>
);

export default Content;

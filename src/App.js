import React from "react";
import data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot) => JSON.stringify(robot, null, 2))}
    </div>
  );
}

export default App;

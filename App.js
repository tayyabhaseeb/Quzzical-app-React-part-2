import React, { useState } from "react";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";

export default function App() {
  const [start, setStart] = useState(false);

  function handleClick() {
    // setStart(true)
    console.log("Hello World");
    setStart(true);
  }

  return (
    <div className="app-container">
      {start === false ? <StartQuiz handleClick={handleClick} /> : <Quiz />}
    </div>
  );
}

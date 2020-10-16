import React, { useState } from "react";
import QuizData from "../data";

function App() {
  const handleChanges = (e) => {
    // setAnswer(e.target.value);
    // console.log("this answer =", answer);
    // console.log("e.target.value =", e.target.value);
  };

  return (
    <div>
      {QuizData.map((question) => {
        return (
          <div>
            <h3> {question.Question}</h3>
            <h2>
              <input type="radio" name="choice" onChange={handleChanges} />
              {question.Answer1}
            </h2>
            <h2><input type="radio" name="choice" onChange={handleChanges} />{question.Answer2}</h2>
            <h2><input type="radio" name="choice" onChange={handleChanges} />{question.Answer3}</h2>
            <h2><input type="radio" name="choice" onChange={handleChanges} />{question.Answer4}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;

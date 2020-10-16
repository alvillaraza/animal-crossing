import React, { useState } from "react";
import QuizData from "../data";
import "../App.css";

function App() {
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState(null);

  console.log(response);

  return (
    <div>
      {QuizData.map((question) => {
        // console.log("question", question);
        return (
          <div className="question-container">
            <p className="question-image-container">
              <img src={question.image} />
            </p>
            <h3 className="question"> {question.question}</h3>
            <h2 className="answers-container">
              {question.answers.map((answer) => {
                return (
                  <div>
                    <button
                      className="answer-button-container"
                      onClick={() => {
                        answer.isCorrect
                          ? setResponse(true)
                          : setResponse(false);
                        setAnswered(true);
                      }}
                    >
                      {answer.answer}
                    </button>
                  </div>
                );
              })}
            </h2>
            <div
              className={`validation-container
            ${answered ? "show" : "hide"}
            ${response ? "result-correct" : "result-incorrect"}`}
            >
              {response === true ? "Answer Correct" : "Wrong"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

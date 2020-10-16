import React, { useState } from "react";

function QuizQuestion({ question }) {
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState(null);

  return (
    <div
      className={`question-container ${
        answered
          ? response
            ? "question-container-border-correct"
            : "question-container-border-incorrect"
          : ""
      }`}
    >
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
                  answer.isCorrect ? setResponse(true) : setResponse(false);
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
}

export default QuizQuestion;

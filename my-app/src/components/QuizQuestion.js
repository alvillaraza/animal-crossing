import React, { useState } from "react";

function QuizQuestion({ question, score, setScore }) {
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState(null);
  

  function checkAnswer(answer) {
    setAnswered(true);
    if (answer.isCorrect) {
      setResponse(true); setScore(score + 1)
    } else {
      setResponse(false)
    }
    console.log('score', answer);
  }

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
                onClick={() => checkAnswer(answer)}
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

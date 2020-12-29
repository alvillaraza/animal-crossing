import React, { useState } from "react";

import correct from "../images/icon-correct.png";
import incorrect from "../images/icon-incorrect.png";

import "./QuizQuestion.css";

function QuizQuestion({ currentSlide, index, question, score, setScore }) {
  const [answered, setAnswered] = useState(false);
  const [response, setResponse] = useState(null);

  function checkAnswer(answer) {
    setAnswered(true);
    if (answer.isCorrect) {
      setResponse(true);
      setScore(score + 1);
    } else {
      setResponse(false);
    }
    console.log("score", answer);
  }

  return (
    <div
      className={`question-container ${
        currentSlide === index ? "show-slide" : "hide-slide"
      }`}
    >
      <div className="question-image-container">
        <div className="question-number">Question #{index + 1}</div>
        <div
          className={`validation-container
            ${answered ? "show" : "hide"}`}
        >
          {response === true ? <img className='correct-image' src={correct} /> : <img src={incorrect} />}
        </div>
        <img
          src={question.image}
          className="question-image"
          alt="ACNH illustration pertaining to question"
        />
      </div>
      <div className="quiz-question-container">
        <h3 className="question speech-bubble-light"> {question.question}</h3>
        <div className="answers-container speech-bubble-brown">
          {question.answers.map((answer) => {
            return (
              <div className="hover-pointer">
                <i class="far fa-hand-point-right"></i>
                <button
                  className="answer-button-container"
                  onClick={() => checkAnswer(answer)}
                >
                  {answer.answer}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;

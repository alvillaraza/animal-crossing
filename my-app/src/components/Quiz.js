import React, { useState } from "react";
import QuizData from "../data";
import QuizQuestion from "./QuizQuestion";
import bell from "../images/icon-bell.png";

import minus from "../images/btn-icon-minus.png";
import plus from "../images/btn-icon-x-remove.png";

import "./QuizQuestion.css";

function App() {
  const [score, setScore] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  function getNextSlide() {
    setCurrentSlide(currentSlide + 1);
    console.log("currentslide=", currentSlide);
  }

  function getPrevSlide() {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div className="quiz-wrapper">
      <button
        className={`nav-button nav-button-previous ${
          currentSlide === 0 ? "prev-button-disable" : ""
        }`}
        onClick={getPrevSlide}
      >
        <img src={minus} /> PREV
      </button>
      <button
        onClick={getNextSlide}
        className={`nav-button nav-button-next ${
          currentSlide === QuizData.length ? "next-button-hide" : ""
        }`}
      >
        <img src={plus} /> NEXT
      </button>

      {QuizData.map((question, index) => {
        return (
          <QuizQuestion
            currentSlide={currentSlide}
            index={index}
            question={question}
            score={score}
            setScore={setScore}
          />
        );
      })}

      <div
        className={`final-container ${
          currentSlide < QuizData.length ? "final-score-hide" : ""
        }`}
      >
        <h1 className="final-score">Final Score</h1>
        <div className="bell-score">
          <img src={bell} alt="ACNH bell icon" />
          {score}/{QuizData.length}
        </div>
        <p>
          <button
            className="restart"
            onClick={() => {
              window.location.reload();
              return false;
            }}
          >
            Start Over
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;

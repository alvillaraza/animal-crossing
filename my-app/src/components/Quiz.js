import React, { useState } from "react";
import QuizData from "../data";
import QuizQuestion from "./QuizQuestion";
import celebrate from "../images/quiz-results.jpg";

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
    <div className='quiz-wrapper'>
      <button 
        className={`nav-button nav-button-previous ${currentSlide === 0 ? "prev-button-disable" : ""}`}
        onClick={getPrevSlide}
      >
        <img src={minus} /> PREV
      </button>
      <button
        onClick={getNextSlide}
        className={`nav-button nav-button-next ${currentSlide === QuizData.length ? "next-button-hide" : ""}`}
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

      <div className={currentSlide < QuizData.length ? "final-score-hide" : ""}>
        <h1>
          Final Score: {score}/{QuizData.length}
        </h1>
        <img src={celebrate} alt="ACNH celebrate" />
        <p>
          <button
            onClick={() => {
              window.location.reload();
              return false;
            }}
          >
            Restart Quiz
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;

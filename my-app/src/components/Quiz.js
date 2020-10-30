import React, { useState } from "react";
import QuizData from "../data";
import QuizQuestion from "./QuizQuestion";
import celebrate from '../images/quiz-results.jpg'

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
    <div>
      <h2>
        Score: {score}/{QuizData.length}{" "}
      </h2>
      <button
        className={currentSlide === 0 ? "prev-button-disable" : ""}
        onClick={getPrevSlide}
      >
        PREV
      </button>
      <button
        onClick={getNextSlide}
        className={currentSlide === QuizData.length ? "next-button-hide" : ""}
      >
        NEXT
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
      <h2>
        Score: {score}/{QuizData.length}{" "}
      </h2>

      <div className={currentSlide < QuizData.length ? "final-score-hide" : ""}>
        <h1>
          Final Score: {score}/{QuizData.length}
        </h1>
        <img src={celebrate} alt='ACNH celebrate'/>
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

      <button
        className={currentSlide === 0 ? "prev-button-disable" : ""}
        onClick={getPrevSlide}
      >
        PREV
      </button>

      <button
        onClick={getNextSlide}
        className={currentSlide === QuizData.length ? "next-button-hide" : ""}
      >
        NEXT
      </button>

      {/* <button onClick={getNextSlide}>
        {currentSlide === QuizData.length - 1 ? (
          <Link to={"/final-score"}>See Your Final Score</Link>
        ) : (
          "NEXT"
        )}
      </button> */}
    </div>
  );
}

export default App;

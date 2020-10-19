import React, { useState } from "react";
import QuizData from "../data";
import QuizQuestion from "./QuizQuestion";
import QuizFinalScore from "./QuizFinalScore";
import { Link } from "react-router-dom";

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

  console.log(currentSlide);

  return (
    <div>
      <h2>
        Score: {score}/{QuizData.length}{" "}
      </h2>
      {/* TODO: disable PREV button on first page*/}
      <button
        className={currentSlide === 0 ? "prev-button-disable" : ""}
        onClick={getPrevSlide}
      >
        PREV
      </button>
      {/* TODO: Restart is a different link as NEXT */}
      <button onClick={getNextSlide}>
        {currentSlide === QuizData.length - 1 ? (
          <Link to={"/final-score"}>See Your Final Score</Link>
        ) : (
          "NEXT"
        )}
      </button>

      {/* <Link to={"/final-score"}>
        <button
          className={
            currentSlide === QuizData.length - 1
              ? ""
              : "final-score-button-hide"
          }
        >
          See Your Final Score
        </button>
      </Link> */}

      {/* if on last slide, button = See Final Score, link to final score other
    wise, next button */}
      {QuizData.map((question, index) => {
        // console.log("question", question);
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
      <div>
        <QuizFinalScore score={score} />
      </div>
      <button
        className={currentSlide === 0 ? "prev-button-disable" : ""}
        onClick={getPrevSlide}
      >
        PREV
      </button>
      {/* TODO: Restart is a different link as NEXT */}
      <button onClick={getNextSlide}>
        {currentSlide === QuizData.length - 1 ? "restart" : "NEXT"}
      </button>
      {/* <Link to={'/quiz'}>Restart</Link> */}
      {/* TODO:
      Create a score component
      Link it after end of currentSlide
      link restart button on score page 
      link restart button as a refresh of the entire quiz*/}
    </div>
  );
}

export default App;

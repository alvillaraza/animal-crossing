import React from "react";
import QuizData from "../data";

function QuizFinalScore({ score }) {
  return (
    <div>
      Final Score: {score}/{QuizData.length}
    </div>
  );
}

export default QuizFinalScore;

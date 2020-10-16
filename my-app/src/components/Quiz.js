import React, { useState } from "react";
import QuizData from "../data";
import QuizQuestion from './QuizQuestion';
// import "../App.css";

function App() {
  
  return (
    <div>
      {QuizData.map((question) => {
        // console.log("question", question);
        return <QuizQuestion question={question}/>
      })}
    </div>
  );
}

export default App;

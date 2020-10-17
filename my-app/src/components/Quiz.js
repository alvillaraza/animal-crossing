import React, {useState} from "react";
import QuizData from "../data";
import QuizQuestion from './QuizQuestion';

function App() {
  const [score, setScore] = useState(0);
  
  return (
    <div>
      <h2>Score: {score}/{QuizData.length}  </h2>
      {QuizData.map((question) => {
        // console.log("question", question);
        return <QuizQuestion question={question} score={score} setScore={setScore}/>
      })}
      <h2>Score: {score}/{QuizData.length}  </h2>
      <button onClick={() => window.location.reload()}>Restart</button>
      
    </div>
  );
}

export default App;

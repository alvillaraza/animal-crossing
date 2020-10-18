import React, {useState} from "react";
import QuizData from "../data";
import QuizQuestion from './QuizQuestion';

function App() {
  const [score, setScore] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0)

  function getNextSlide(){
    setCurrentSlide(currentSlide + 1)
    console.log('currentslide=', currentSlide);
  }
  
  function getPrevSlide() {
    if (currentSlide === 0) {
      return
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }
  
  return (
    <div>
      <h2>Score: {score}/{QuizData.length}  </h2>

      {/* TODO: disable PREV button on first page*/}
      <button onClick={getPrevSlide}>PREV</button>
      {/* TODO: Restart is a different link as NEXT */}
      <button onClick={getNextSlide}>{currentSlide === (QuizData.length - 1) ? "Restart" : "NEXT"}</button>

      {QuizData.map((question, index) => {
        // console.log("question", question);
        return <QuizQuestion currentSlide={currentSlide} index={index} question={question} score={score} setScore={setScore}/>
      })}
      <h2>Score: {score}/{QuizData.length}  </h2>

       {/* TODO: disable PREV button on first page*/}
       <button onClick={getPrevSlide}>PREV</button>
      {/* TODO: Restart is a different link as NEXT */}
      <button onClick={getNextSlide}>{currentSlide === (QuizData.length - 1) ? "Restart" : "NEXT"}</button>
     
      {/* <button onClick={() => window.location.reload()}>Restart</button> */}

    </div>
  );
}

export default App;

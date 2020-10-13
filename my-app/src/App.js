import React, { useState } from "react";
import HeaderChange from "./components/HeaderChange";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(null);

  const handleChanges = (e) => {
    setAnswer(e.target.value);
    console.log("this answer =", answer);
    console.log("e.target.value =", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer === "She closes her eyes") {
      console.log('this is correct')
    } else {
      console.log('incorrect');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Question: "In Animal Crossing: New Horizons, not only are some of Crazy
        Redd's paintings fake, but they're haunted too! What does the girl in
        the haunted Wistful Painting do?"
        <p>
          <input
            type="radio"
            name="choice"
            value="She winks at you"
            onChange={handleChanges}
          />
          She winks at you
        </p>
        <p>
          <input type="radio" name="choice" value="She picks her nose" onChange={handleChanges} />
          She picks her nose
        </p>
        <p>
          <input type="radio" name="choice" value="Her earring falls off" onChange={handleChanges} />
          Her earring falls off
        </p>
        <p>
          <input type="radio" name="choice" value="She closes her eyes" onChange={handleChanges} />
          She closes her eyes
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
      <div className={answer === 'She closes her eyes' ? '' : 'result-correct'}>You are an ACNH pro!</div>
      <div className={!answer === 'She closes her eyes' ? '' : "result-incorrect"}>wamp wamp wamp</div>
      
      <HeaderChange />
    </div>
  );
}

export default App;

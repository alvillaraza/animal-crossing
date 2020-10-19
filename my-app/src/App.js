import React from "react";
import { Route } from "react-router-dom";

import Villagers from "./components/Villagers";
import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz";

import "./App.css";

function App() {
  return (
    <div>
      <LandingPage />
      <Route exact path="/quiz">
        <Quiz />
      </Route>
      <Route exact path="/villagers">
        <Villagers />
      </Route>
    </div>
  );
}

export default App;

import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz";
import Villagers from "./Villagers/Villagers";
import ApprovedVillagers from './Villagers/ApprovedVillagers';
import RejectedVillagers from './Villagers/RejectedVillagers';

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
      <Route path="/approved-villagers">
        <ApprovedVillagers />
      </Route>
      <Route path="/rejected-villagers">
        <RejectedVillagers />
      </Route>
    </div>
  );
}

export default App;

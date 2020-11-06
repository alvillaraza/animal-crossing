import React from "react";
import { Link } from "react-router-dom";

import isabelle from "../images/isabelle-outline.jpg";
import villager from "../images/villager-outline.jpg";

import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="landing-page-icons-container">
        <div>
          <Link to="/villagers">
            <img className="icon" src={villager} alt="villager icon" />
            <div className="landing-page-text speech-bubble-light">
              <p>
                <span>Find Your</span> Villagers
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/quiz">
            <img className="icon" src={isabelle} alt="isabelle icon" />
            <div className="landing-page-text speech-bubble-light">
              <p>
                <span>Do you know</span> ACNH?
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

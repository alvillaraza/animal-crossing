import React from "react";
import { Link } from "react-router-dom";

import isabelle from "../images/isabelle-outline.jpg";
import villager from "../images/villager-outline.jpg";
import bubble from "../images/acnh-speech-bubble-bg.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="landing-page-icons-container">
        <div>
          <Link to="/villagers">
            <img className="icon" src={villager} alt="villager icon" />
            <div className="landing-page-text">
              <p>
                <span>Find Your</span> Villagers
              </p>
            </div>
            {/* <img className="speech-bubble" src={bubble} alt="speech bubble" /> */}
          </Link>
        </div>
        <div>
          <Link to="/quiz">
            <img className="icon" src={isabelle} alt="isabelle icon" />
            <div className="landing-page-text">
              <p>
                <span>Do you know</span> ACNH?
              </p>
              {/* <img className="speech-bubble" src={bubble} alt="speech bubble" /> */}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

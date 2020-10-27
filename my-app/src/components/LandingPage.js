import React from "react";
import { Link } from "react-router-dom";

import nookbros from "../images/nookbros.png";
import isabelle from "../images/isabelle-outline.jpg";
import villager from "../images/villager-outline.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <Link to="/"><h1>ACNH</h1></Link>
      <div className='landing-page-icons-container'>

        <div>
          <Link to="/quiz">
          <img className='icon' src={isabelle} alt='isabelle icon' />
            {/* <p>Are you an ACNH master?</p> */}
          </Link>
        </div>
        <img src={nookbros} alt='photo of nook brothers'/>
        <div>
          <Link to="/villagers">
          <img className='icon' src={villager} alt='villager icon' />
            {/* <p>Which villager do you want on your island?</p> */}
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";

import awning from "../images/acnh-home-page-awning.png";
import title from "../images/acnh-home-page-title.png";

import "./LandingPage.css";

function Header() {
  return (
    <>
      <div className="awning">
      <Link to="/">
        <img className="acnh-title" src={title} alt="acnh title" />
        </Link>
        </div>
     
    </>
  );
}

export default Header;
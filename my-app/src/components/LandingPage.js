import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Link to="/quiz">
        <p>Are you an ACNH master?</p>
      </Link>
      <Link to="/villagers">
        <p>Which villager do you want on your island?</p>
      </Link>
    </div>
  );
}

export default LandingPage;

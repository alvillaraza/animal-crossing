import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import useLocalStorage from "./useLocalStorage";
import RejectedVillagers from "./RejectedVillagers";

import VillagersContainer from "./VillagersContainer";
import axios from "axios";

function Villagers() {

  const [approvedVillagers, setApprovedVillagers] = useState([]);
  const [rejectedVillagers, setRejectedVillagers] = useState([]);


  


  return (
    <>
      <Router>
        <Link to='/rejected-villagers'>Rejected Villagers</Link>


        <Route exact path='/villagers' render={() => <VillagersContainer setApprovedVillagers={setApprovedVillagers} setRejectedVillagers={setRejectedVillagers} approvedVillagers={approvedVillagers} rejectedVillagers={rejectedVillagers}/>}/>
        <Route path='/rejected-villagers' render={() => <RejectedVillagers rejectedVillagers={rejectedVillagers} setRejectedVillagers={setRejectedVillagers}/>}/>
      </Router>
 
    </>
  );
}

export default Villagers;
// TODO: map through villagers in VillagersContainer.js, Route to VillagersContainer.js in Villagers then pass down props




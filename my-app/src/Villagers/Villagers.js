import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RejectedVillagers from "./RejectedVillagers";

import VillagersContainer from "./VillagersContainer";
import ApprovedVillagers from './ApprovedVillagers';


function Villagers() {

  const [approvedVillagers, setApprovedVillagers] = useState([]);
  const [rejectedVillagers, setRejectedVillagers] = useState([]);


  return (
    <>
      
      <Router>
        <Link to='/rejected-villagers'><button>Rejected Villagers</button></Link>
        <Link to='/approved-villagers'><button>Approved Villagers</button></Link>


        <Route exact path='/villagers' render={() => <VillagersContainer setApprovedVillagers={setApprovedVillagers} setRejectedVillagers={setRejectedVillagers} approvedVillagers={approvedVillagers} rejectedVillagers={rejectedVillagers} />} />
        
        <Route path='/rejected-villagers' render={() => <RejectedVillagers rejectedVillagers={rejectedVillagers} setRejectedVillagers={setRejectedVillagers}/>}/>
        <Route path='/approved-villagers' render={() => <ApprovedVillagers approvedVillagers={approvedVillagers} setApprovedVillagers={setApprovedVillagers}/>}/>
      </Router>
 
    </>
  );
}

export default Villagers;





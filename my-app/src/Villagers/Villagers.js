import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import useLocalStorage from "./useLocalStorage";
import ApprovedVillagers from "./ApprovedVillagers";

import VillagersContainer from "./VillagersContainer";
import axios from "axios";

function Villagers() {
  const [villagers, setVillagers] = useState([]);
  const [currentVillager, setCurrentVillager] = useState(0);
  const [approvedVillagers, setApprovedVillagers] = useLocalStorage(
    "Villagers Approved",
    []
  );
  const [rejectedVillagers, setRejectedVillagers] = useLocalStorage(
    "Villagers Rejected",
    []
  );

  useEffect(() => {
    getVillagers();
  }, []);

  const getVillagers = () => {
    axios
      .get(
        "https://api.nookipedia.com/villagers?api_key=341a2ec2-f95e-4712-8577-086064734045"
      )
      .then((res) => {
        let tempArray = res.data;
        setVillagers(shuffle(tempArray));
      })
      .catch((err) => console.log("err"));
  };

  console.log("villagesr", villagers);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function swipeLeft(villager) {
    setRejectedVillagers([...rejectedVillagers, villager]);
    setCurrentVillager(currentVillager + 1);
    // TODO: remove the villager from original list, so that when user comes back, they don't double up on rejecting or approving the same villager twice (so it doesn't show up in rejected/approved array twice)
  }

  function swipeRight(villager) {
    setApprovedVillagers([...approvedVillagers, villager]);
    setCurrentVillager(currentVillager + 1);
    console.log(approvedVillagers);
    // TODO: remove the villager from original list, so that when user comes back, they don't double up on rejecting or approving the same villager twice (so it doesn't show up in rejected/approved array twice)
  }
  return (
    <>
      <div>


        <Link to="/approved-villagers" >Your Approved Villagers</Link>
      </div>
      <div>
        <Link to="/rejected-villagers">Your Rejected Villagers</Link>
      </div>

      <div className="which-villager-app">
        {villagers.map((villager, index) => {
          return (
            <VillagersContainer
              villager={villager}
              currentVillager={currentVillager}
              index={index}
              swipeLeft={swipeLeft}
              swipeRight={swipeRight}
            />
          );
        })}
      </div>
    </>
  );
}

export default Villagers;

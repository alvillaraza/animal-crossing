import React, { useEffect, useState } from "react";
import axios from "axios";

import Villagers from "./Villagers";

function VillagersContainer({ setApprovedVillagers, setRejectedVillagers, approvedVillagers, rejectedVillagers}) {
  const [villagers, setVillagers] = useState([]);
  const [currentVillager, setCurrentVillager] = useState(0);

  useEffect(() => {
    getVillagers();
  }, []);

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

  return (
    <>
      <p>this is villager container</p>

      {villagers.map((villager, index) => (
        <div
          className={`villager-container ${
            currentVillager === index ? "show-slide" : "hide-slide"
          }`}
        ><div className="button-swipe">
        {/* TODO: need to move these buttons so it's outside of the card */}
        <button onClick={() => swipeLeft(villager)}>Swipe Left</button>
        <button onClick={() => swipeRight(villager)}>
          Swipe Right
        </button>
      </div>
          <div className="villager-info">
            <p>"{villager.phrase}"</p>
            <h2>{villager.name}</h2>
            <p>
              <img
                className="villager-img"
                alt="amiibo card of villager"
                src={villager.image_url}
              />
            </p>
            <p>
              {villager.gender} {villager.species}
            </p>
            <p>
              {villager.birthday_month} {villager.birthday_day}
            </p>
            <p>{villager.sign}</p>
            <p>Personality: {villager.personality}</p>
            <p>"{villager.quote}"</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default VillagersContainer;


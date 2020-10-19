import React, { useEffect, useState } from "react";
import axios from "axios";
import VillagersContainer from "./VillagersContainer";

function Villagers() {
  const [villagers, setVillagers] = useState([]);
  const [currentVillager, setCurrentVillager] = useState(0);

  useEffect(() => {
    getVillagers();
  }, []);

  function getCurrentVillager() {
    // randomizer function here: setCurrentVillager(currentVillager)
    // if villager is swiped left, rejectedArray.push[]
    //if villager is swiped right, approvedArray.push[]
  }
  const getVillagers = () => {
    axios
      .get(
        "https://api.nookipedia.com/villagers?api_key=341a2ec2-f95e-4712-8577-086064734045"
      )
      .then((res) => {
        setVillagers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("err"));
  };

  return (
    <div>
      {villagers.map((villager, index) => {
        return (
          <VillagersContainer
            villager={villager}
            currentVillager={currentVillager}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Villagers;

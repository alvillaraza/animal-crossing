import React, { useEffect, useState } from "react";
import VillagersContainer from "./VillagersContainer";
import QuizData from "../data";
import axios from "axios";

function Villagers() {
  const [villagers, setVillagers] = useState([]);
  const [currentVillager, setCurrentVillager] = useState(0);

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

  return (
    <div>
      <button>Swipe Left</button>
      <button>Swipe Right</button>
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

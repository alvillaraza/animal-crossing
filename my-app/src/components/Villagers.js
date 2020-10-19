import React, { useEffect, useState } from "react";
import axios from "axios";
import VillagersContainer from "./VillagersContainer";

function Villagers() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers();
  }, []);

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

  // if (!villagers) {
  //   return null;
  // }

  return (
    <div>
      {villagers.map((villager) => {
        return <VillagersContainer villager={villager} />;
      })}
    </div>
  );
}

export default Villagers;

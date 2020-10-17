import React, { useEffect, useState } from "react";
import axios from "axios";

function Villagers() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers();
  }, []);

  const getVillagers = () => {
    axios
      .get("https://api.nookipedia.com/?api_key=341a2ec2-f95e-4712-8577-086064734045")
      .then((res) => {
        // setVillagers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("err"));
  };

  if (!villagers) {
    return null
  }

  return <div>{villagers.map((villager) => console.log(villager))}</div>;
}

export default Villagers;

import React from "react";

function VillagersContainer({ villager, currentVillager, index }) {
  return (
    <div
      className={`villager-container ${
        currentVillager === index ? "show-slide" : "hide-slide"
      }`}
    >
      <p>"{villager.phrase}"</p>
      <h2>{villager.name}</h2>
      <p>
        <img src={villager.image_url} />
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
  );
}

export default VillagersContainer;

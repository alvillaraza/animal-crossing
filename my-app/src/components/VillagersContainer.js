import React from "react";

function VillagersContainer({
  villager,
  currentVillager,
  index,
  swipeLeft,
  swipeRight,
}) {
  return (
    <div
      className={`villager-container ${
        currentVillager === index ? "show-slide" : "hide-slide"
      }`}
    >
      <div>
        <button onClick={() => swipeLeft(villager)}>Swipe Left</button>
        {/* TODO: when swiped right, put in a approved array */}
        <button onClick={() => swipeRight(villager)}>Swipe Right</button>
      </div>
      <div>
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
    </div>
  );
}

export default VillagersContainer;

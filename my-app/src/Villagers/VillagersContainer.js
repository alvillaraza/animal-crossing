import React from "react";

function VillagersContainer({
  villager,
  currentVillager,
  index,
  swipeLeft,
  swipeRight,
}) {
  return (
    <>
      <div
        className={`villager-container ${
          currentVillager === index ? "show-slide" : "hide-slide"
        }`}
      >
        <div className="button-swipe">
          {/* TODO: need to move these buttons so it's outside of the card */}
          <button onClick={() => swipeLeft(villager)}>Swipe Left</button>
          <button onClick={() => swipeRight(villager)}>Swipe Right</button>
        </div>
        <div className='villager-info'>
          <p>"{villager.phrase}"</p>
          <h2>{villager.name}</h2>
          <p>
            <img className="villager-img" alt='amiibo card of villager' src={villager.image_url}  />
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
    </>
  );
}

export default VillagersContainer;

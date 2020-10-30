import React from "react";

function RejectedVillagers() {
  const rejectedVillagers = JSON.parse(
    window.localStorage.getItem("Villagers Rejected")
  );
  return (
    <div>
      {rejectedVillagers.map((rv) => {
        return (
          <div>
            <p>"{rv.phrase}"</p>
          <h2>{rv.name}</h2>
          <p>
            <img className="villager-img" alt='amiibo card of villager' src={rv.image_url}  />
          </p>
          <p>
            {rv.gender} {rv.species}
          </p>
          <p>
            {rv.birthday_month} {rv.birthday_day}
          </p>
          <p>{rv.sign}</p>
          <p>Personality: {rv.personality}</p>
          <p>"{rv.quote}"</p>
          </div>
        );
      })}
    </div>
  );
}

export default RejectedVillagers;

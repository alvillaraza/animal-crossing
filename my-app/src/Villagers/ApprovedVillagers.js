import React from "react";

function ApprovedVillagers() {
  const approvedVillagers = JSON.parse(
    window.localStorage.getItem("Villagers Approved")
  );

  // TODO: add a button to remove a villager from list

  return (
    <div>
      {approvedVillagers.map((av) => {
        return (
          <div className='villager-container'>
            <p>"{av.phrase}"</p>
          <h2>{av.name}</h2>
          <p>
            <img className="villager-img" alt='amiibo card of villager' src={av.image_url}  />
          </p>
          <p>
            {av.gender} {av.species}
          </p>
          <p>
            {av.birthday_month} {av.birthday_day}
          </p>
          <p>{av.sign}</p>
          <p>Personality: {av.personality}</p>
          <p>"{av.quote}"</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApprovedVillagers;

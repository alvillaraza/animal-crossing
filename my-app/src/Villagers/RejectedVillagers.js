import React from "react";

import x from "../images/btn-icon-x-remove.png";
import "./ChosenVillagers.css";

function RejectedVillagers({ rejectedVillagers, setRejectedVillagers }) {
  const removeVillager = (villager) => {
    setRejectedVillagers(
      rejectedVillagers.filter((v) => v.name !== villager.name)
    );
    console.log(villager);
  };

  return (
    <div className='main-chosen-vill-container'>
      {rejectedVillagers.length !== 0 ? (
        rejectedVillagers.map((rv) => {
          return (
            <div className="chosen-vill-container">
              <button
                className="remove-vill"
                onClick={() => removeVillager(rv)}
              >
                <img src={x} /> Remove
              </button>
              <img
                className="villager-img"
                alt="amiibo card of villager"
                src={rv.image_url}
              />
              <div className="chosen-vill-name">
                <div className="speech-bubble-light">{rv.name}</div>
              </div>
            </div>
          );
        })
      ) : (
        <p>You haven't added any</p>
      )}
    </div>
  );
}

export default RejectedVillagers;

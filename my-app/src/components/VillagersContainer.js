import React from "react";


function VillagersContainer({villager}) {
  

  return (
    <div className="villager-container">
    <h2>{villager.name}</h2>
    </div>
  );
}

export default VillagersContainer;
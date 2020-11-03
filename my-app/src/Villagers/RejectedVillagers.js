import React from "react";

function RejectedVillagers({ rejectedVillagers, setRejectedVillagers }) {
  // const rejectedVillagersFromLocalStorage = JSON.parse(
  //   window.localStorage.getItem("Villagers Rejected")
  // );

  // console.log("props", rejVill);

  // // TODO: add a button to remove a villager from list
  const removeVillager = (villager) => {
    setRejectedVillagers(rejectedVillagers.filter((v) => v.name !== villager.name));
    console.log(villager);
  };

  return (
    <div>
      <p>this is the rejected villagers</p>
      {rejectedVillagers.map((rv) => {
        return (
          <div>
            {/* <p>"{rv.phrase}"</p>
          <h2>{rv.name}</h2> */}
            <button onClick={() => removeVillager(rv)}>Remove Villager</button>
            <img
              className="villager-img"
              alt="amiibo card of villager"
              src={rv.image_url}
            />

            {/* <p>
            {rv.gender} {rv.species}
          </p>
          <p>
            {rv.birthday_month} {rv.birthday_day}
          </p>
          <p>{rv.sign}</p>
          <p>Personality: {rv.personality}</p>
          <p>"{rv.quote}"</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default RejectedVillagers;
import React from "react";

function RejectedVillagers({ rejectedVillagers, setRejectedVillagers }) {
  const removeVillager = (villager) => {
    setRejectedVillagers(
      rejectedVillagers.filter((v) => v.name !== villager.name)
    );
    console.log(villager);
  };

  return (
    <div>
      {rejectedVillagers.length !== 0  ? (
        rejectedVillagers.map((rv) => {
          return (
            <div>
              <button onClick={() => removeVillager(rv)}>
                Remove Villager
              </button>
              <img
                className="villager-img"
                alt="amiibo card of villager"
                src={rv.image_url}
              />
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

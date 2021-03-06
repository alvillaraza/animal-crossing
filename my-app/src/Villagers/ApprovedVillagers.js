import React from 'react';

import x from '../images/btn-icon-x-remove.png';
import './ChosenVillagers.css';

function ApprovedVillagers({ approvedVillagers, setApprovedVillagers }) {
  const removeVillager = (villager) => {
    setApprovedVillagers(
      approvedVillagers.filter((v) => v.name !== villager.name)
    );
    console.log(villager);
  };

  return (
    <div className='main-chosen-vill-container'>
      {approvedVillagers.length !== 0 ? (
        approvedVillagers.map((rv) => {
          return (
            <div className='chosen-vill-container'>
              <div>
                <button
                  className='remove-vill'
                  onClick={() => removeVillager(rv)}
                >
                  <img src={x} />
                  Remove
                </button>
              </div>
              <div>
                <img
                  className='villager-img'
                  alt='amiibo card of villager'
                  src={rv.image_url}
                />
              </div>
              <div className='chosen-vill-name'>
                <div className='speech-bubble-light'>
                  <p>{rv.name}</p>
                </div>
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

export default ApprovedVillagers;

import React, { useState } from "react";


function HeaderChange() {
  const [newHeader, setNewHeader] = useState("Some Header");

  const handleChanges = (e) => {
    setNewHeader(e.target.value);
    console.log(newHeader);
  };



  return (
    <div>
      <div>
        <h1>{newHeader}</h1>
        
        {/* <form> */}
        New Header: <input type="text" name="header" value={newHeader} onChange={handleChanges} />
      
        <p><select onChange={handleChanges}>
          <option>Some Stuff</option>
          <option>Other Things</option>
          <option>Another option</option>
        </select></p>

        <input type='checkbox' value='some other value' onChange={handleChanges} />{newHeader}


       <p> <button
          onClick={() => {
            setNewHeader("blah");
          }}
        >
          Change to blah
        </button></p>
      </div>
    </div>
  );
}

export default HeaderChange;

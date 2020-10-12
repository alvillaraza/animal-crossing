import React from "react";

function Form() {
  const handleChanges = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted");
  };

  return (
    <div>
      <h1>Header here</h1>
      <form onSubmit={handleSubmit}>
        New Input: <input type="text" name="header" onChange={handleChanges} />
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default Form;

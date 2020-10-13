import React from "react";

function Form({handleSubmit, handleChanges}) {


  return (
    <div>
      <h1>Header here</h1>
      <form onSubmit={handleSubmit}>
        New Header: <input type="text" name="header" onChange={handleChanges} />
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default Form;

import React from "react";

function Filter({ toggleGreasedOnly, greasedOnly }) {
  
  return (
    <button onClick={toggleGreasedOnly}>
      {greasedOnly ? "Show All" : "Show Greased Only"}
    </button>
  );
}

export default Filter;
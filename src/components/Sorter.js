import React from "react";

function Sorter({ selectSort, sortBy }) {
  
  return (
    <select value={sortBy} onChange={(event) => selectSort(event.target.value)}>
      <option value="noSort">No Sort</option>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
  );
}

export default Sorter;
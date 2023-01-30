import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sorter from "./Sorter";
import PigList from "./PigList";

import hogs from "../porkers_data";

function App() {

  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("noSort");
  const newHogs = [...hogs];

  const sortedHogs = sortBy !== "noSort" ? newHogs.sort((a,b) => a[sortBy] > b[sortBy]) : hogs;
  const filteredSortedHogs = greasedOnly ? sortedHogs.filter(hog => hog.greased) : sortedHogs;

  function toggleGreasedOnly() {
    const newGreasedOnly = !greasedOnly;
    setGreasedOnly(newGreasedOnly);
  }

  function selectSort(newSortBy) {
    setSortBy(newSortBy);
  }

  console.log(sortedHogs);

  return (
    <div className="App">
      <Nav />
      <Filter toggleGreasedOnly={toggleGreasedOnly} greasedOnly={greasedOnly} />
      <Sorter selectSort={selectSort} sortBy={sortBy} />
      <br />
      <br />
      <PigList filteredSortedHogs={filteredSortedHogs} />
    </div>
  );
}

export default App;

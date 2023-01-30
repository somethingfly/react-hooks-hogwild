import React from "react";
import Pig from "./Pig";

function PigList({ filteredSortedHogs }) {

  const listOfHogs = filteredSortedHogs.map((hog, index) => {
    return (
      <Pig
        key={index}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        highestMedalAchieved={hog["highest medal achieved"]}
      />
    )
  });

  return (
    <div className="ui grid container">
      {listOfHogs}
    </div>
  );
}

export default PigList;
import React, { useState } from "react";

function Pig({ name, image, specialty, weight, greased, highestMedalAchieved }) {
  const [showDetails, setShowDetails] = useState(false);

  const meta = showDetails ? (
    <div className="meta">
      <p>Weight: {weight}</p>
      <p>Greased: {greased ? "yes" : "no"}</p>
      <p>Highest Medal Achieved: {highestMedalAchieved}</p>
    </div>
  ) : null

  const description = showDetails ? (
    <div className="description">
      <p>Specialty: {specialty}</p>
    </div>
  ) : null

  function toggleDetails() {
    const newShowDetails = !showDetails;
    setShowDetails(newShowDetails);
  }

  return (
    <div className="ui eight wide column" onClick={toggleDetails}>
      <div className="ui card">
        <div className="image">
          <img className="ui image" src={image} alt={name}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
          {meta}
          {description}
        </div>
      </div>
    </div>
  );
}

export default Pig;
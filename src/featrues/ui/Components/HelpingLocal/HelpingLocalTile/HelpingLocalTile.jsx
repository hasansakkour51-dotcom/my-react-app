import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HelpingLocalTile.css";
const HelpingLocalTile = ({ label, icon, number }) => {
  return (
    <div className="helpingLocalTile d-flex align-items-center gap-4">
      <div>{icon}</div>
      <div className="helpingLocalTileContent d-flex flex-column">
        <h4>{number}</h4>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default HelpingLocalTile;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DiAndroid, DiAtom, DiBackbone } from "react-icons/di";
import './OurClientsTile.css'
const OurClientsTile = ({ icon, title, description }) => {
  const iconsMap = {
    DiAndroid: <DiAndroid size={32} color="#103E13" />,
    DiAtom: <DiAtom size={32} color="#103E13" />,
    DiBackbone: <DiBackbone size={32} color="#103E13" />,
  };
  return (
    <div className="ourClientsTile d-flex flex-column align-items-center gap-3">
      <div className="iconCard">{iconsMap[icon]}</div>

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default OurClientsTile;

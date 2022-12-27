import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./dest-nav-item.styles.scss";

const DestinationNavItems = ({ filter, setFilter }) => {
  const handleMoon = () => {
    setFilter("Moon");
  };
  const handleMars = () => {
    setFilter("Mars");
  };
  const handleEuropa = () => {
    setFilter("Europa");
  };
  const handleTitan = () => {
    setFilter("Titan");
  };
  return (
    <>
      <div className="destination__nav-item">
        <p
          onClick={handleMoon}
          className={`destination__nav-item-name ${
            filter === "Moon" ? "color" : ""
          }`}
        >
          Moon
        </p>
        <p
          className={`${filter === "Moon" ? "destination__nav-line" : ""}`}
        ></p>
        <p className="destination__nav-line-h"></p>
      </div>

      <div className="destination__nav-item">
        <p
          onClick={handleMars}
          className={`destination__nav-item-name ${
            filter === "Mars" ? "color" : ""
          }`}
        >
          Mars
        </p>
        <p
          className={`${filter === "Mars" ? "destination__nav-line" : ""}`}
        ></p>
        <p className="destination__nav-line-h"></p>
      </div>

      <div className="destination__nav-item">
        <p
          onClick={handleEuropa}
          className={`destination__nav-item-name ${
            filter === "Europa" ? "color" : ""
          }`}
        >
          Europa
        </p>
        <p
          className={`${filter === "Europa" ? "destination__nav-line" : ""}`}
        ></p>
        <p className="destination__nav-line-h"></p>
      </div>

      <div className="destination__nav-item">
        <p
          onClick={handleTitan}
          className={`destination__nav-item-name ${
            filter === "Titan" ? "color" : ""
          }`}
        >
          Titan
        </p>
        <p
          className={`${filter === "Titan" ? "destination__nav-line" : ""}`}
        ></p>
        <p className="destination__nav-line-h"></p>
      </div>
    </>
  );
};

export default DestinationNavItems;

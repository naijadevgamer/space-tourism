import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./dest-nav-item.styles.scss";

const DestinationNavItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <div className="destination__nav-item">
      <p
        onClick={() => navigate(`/destination/${item}`)}
        className={`destination__nav-item-name ${
          location.includes(item) ? "color" : ""
        }`}
      >
        {item}
      </p>
      <p
        className={`${location.includes(item) ? "destination__nav-line" : ""}`}
      ></p>
      <p className="destination__nav-line-h"></p>
    </div>
  );
};

export default DestinationNavItem;

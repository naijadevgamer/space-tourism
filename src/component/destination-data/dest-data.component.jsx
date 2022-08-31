import React from "react";

import "./dest-data.styles.scss";

const DestinationData = ({ distance, travel }) => (
  <div className="destination__data">
    <div className="destination__distance">
      <p className="destination__distance-name subheading--2">Avg. distance</p>
      <p className="destination__distance-value subheading--1">{distance}</p>
    </div>
    <div className="destination__travel-time">
      <p className="destination__travel-time-name subheading--2">
        Est. travel time
      </p>
      <p className="destination__travel-time-value subheading--1">{travel}</p>
    </div>
  </div>
);

export default DestinationData;

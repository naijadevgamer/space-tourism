import React from "react";

import DestinationNavItems from "../destination-nav-item/dest-nav-item.component";
import DestinationData from "../destination-data/dest-data.component";
import Subheader from "../../component/subheader/subheader.component";

import "./destinations.styles.scss";

const Destinations = ({ data, setFilter, filter }) => {
  const {
    name,
    images: { png },
    description,
    distance,
    travel,
  } = data;

  return (
    <div className="destination">
      <Subheader>
        <span className="subheader__number">01</span>
        Pick your destination
      </Subheader>
      <div className="destination__content">
        <img src={png} alt="destination" className="destination__image" />
        <div className="destination__inner-content">
          <div className="destination__nav">
            <DestinationNavItems filter={filter} setFilter={setFilter} />
          </div>
          <h2 className="destination__name heading--2">{name}</h2>
          <p className="destination__description content">{description}</p>
          <div className="destination__line"></div>
          <DestinationData distance={distance} travel={travel} />
        </div>
      </div>
    </div>
  );
};

export default Destinations;

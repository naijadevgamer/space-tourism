import React from "react";

import { useParams } from "react-router";

import Destinations from "../../component/destination/destinations.component";

import DATA from "../../data";

import "./destination.page.styles.scss";

const DestinationPage = () => {
  const destData = DATA.destinations;
  let { name } = useParams();
  return (
    <div className="destination-page">
      {destData
        .filter((destination, index) => {
          return name ? name === destination.name : index === 0;
        })
        .map((destination) => (
          <Destinations key={destination.id} data={destination} />
        ))}
    </div>
  );
};

export default DestinationPage;

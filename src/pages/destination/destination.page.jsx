import React, { useState } from "react";

import Destinations from "../../component/destination/destinations.component";

import DATA from "../../data";

import "./destination.page.styles.scss";

const DestinationPage = () => {
  const destData = DATA.destinations;
  const [filter, setFilter] = useState("Moon");
  const handleFilter = () => {};
  return (
    <div className="destination-page">
      {destData
        .filter((destination) => filter === destination.name)
        .map((destination) => (
          <Destinations
            key={destination.id}
            data={destination}
            handleFilter={handleFilter}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
    </div>
  );
};

export default DestinationPage;

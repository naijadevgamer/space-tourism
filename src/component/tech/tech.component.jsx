import React from "react";

import "./tech.styles.scss";

const Tech = ({ techData, filter, setFilter }) => {
  const {
    name,
    description,
    images: { portrait, landscape },
  } = techData;

  const handleTech0 = () => {
    setFilter(0);
  };
  const handleTech1 = () => {
    setFilter(1);
  };
  const handleTech2 = () => {
    setFilter(2);
  };
  return (
    <div className="tech">
      <ul className="tech__nav heading--4">
        <li
          className={`tech__nav-item ${filter === 0 ? "tech__nav-item-a" : ""}`}
          onClick={handleTech0}
        >
          1
        </li>
        <li
          className={`tech__nav-item ${filter === 1 ? "tech__nav-item-a" : ""}`}
          onClick={handleTech1}
        >
          2
        </li>
        <li
          className={`tech__nav-item ${filter === 2 ? "tech__nav-item-a" : ""}`}
          onClick={handleTech2}
        >
          3
        </li>
      </ul>
      <div className="tech__info">
        <p className="tech__heading content">The terminology...</p>
        <h3 className="tech__name heading--3">{name}</h3>
        <p className="tech__description content">{description}</p>
      </div>
      <img
        src={portrait}
        alt="technology"
        className="tech__image tech__image--portrait"
      />
      <img
        src={landscape}
        alt="technology"
        className="tech__image tech__image--landscape"
      />
    </div>
  );
};

export default Tech;

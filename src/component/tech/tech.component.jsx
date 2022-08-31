import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./tech.styles.scss";

const Tech = ({ data }) => {
  const {
    name,
    description,
    images: { portrait, landscape },
  } = data;
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="tech">
      <ul className="tech__nav heading--4">
        <li
          className={`tech__nav-item ${
            location.includes("0") ? "tech__nav-item-a" : ""
          }`}
          onClick={() => navigate("/technology/0")}
        >
          1
        </li>
        <li
          className={`tech__nav-item ${
            location.includes("1") ? "tech__nav-item-a" : ""
          }`}
          onClick={() => navigate("/technology/1")}
        >
          2
        </li>
        <li
          className={`tech__nav-item ${
            location.includes("2") ? "tech__nav-item-a" : ""
          }`}
          onClick={() => navigate("/technology/2")}
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

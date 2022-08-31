import React from "react";
import { useState, useEffect } from "react";
import "./crew.styles.scss";

const Crew = ({ data, increment, setIncrementDot }) => {
  const {
    name,
    images: { webp },
    role,
    bio,
  } = data;

  const [childState, setChildState] = useState(0);

  useEffect(() => {
    setIncrementDot(childState);
  }, [setIncrementDot, childState]);

  const onClickDot = (n) => {
    //pass slider's event value to child's state
    setChildState(n);
  };

  return (
    <div className="crew">
      <div className="crew__content">
        <h4 className="crew__role heading--4">{role}</h4>
        <h3 className="crew__name heading--3">{name}</h3>
        <p className="crew__bio content">{bio}</p>
        <div className="crew__dot-container">
          <div
            className={`crew__dot ${increment === 0 ? "active" : ""}`}
            onClick={() => onClickDot(0)}
          ></div>
          <div
            className={`crew__dot ${increment === 1 ? "active" : ""}`}
            onClick={() => onClickDot(1)}
          ></div>
          <div
            className={`crew__dot ${increment === 2 ? "active" : ""}`}
            onClick={() => onClickDot(2)}
          ></div>
          <div
            className={`crew__dot ${increment === 3 ? "active" : ""}`}
            onClick={() => onClickDot(3)}
          ></div>
        </div>
      </div>
      <img src={webp} alt="image" className="crew__image" />
    </div>
  );
};

export default Crew;

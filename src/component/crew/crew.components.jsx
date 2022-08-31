import React from "react";
import { useState, useEffect } from "react";
import "./crew.styles.scss";

const Crew = ({ data, increment, setIncrementDot, handleFadeDot }) => {
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
            onClick={(e) => {
              onClickDot(0);
              handleFadeDot(e);
            }}
          ></div>
          <div
            className={`crew__dot ${increment === 1 ? "active" : ""}`}
            onClick={(e) => {
              onClickDot(1);
              handleFadeDot(e);
            }}
          ></div>
          <div
            className={`crew__dot ${increment === 2 ? "active" : ""}`}
            onClick={(e) => {
              onClickDot(2);
              handleFadeDot(e);
            }}
          ></div>
          <div
            className={`crew__dot ${increment === 3 ? "active" : ""}`}
            onClick={(e) => {
              onClickDot(3);
              handleFadeDot(e);
            }}
          ></div>
        </div>
      </div>
      <img src={webp} alt="crew" className="crew__image" />
    </div>
  );
};

export default Crew;

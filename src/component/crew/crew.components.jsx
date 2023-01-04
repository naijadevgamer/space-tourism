import React from "react";
import "./crew.styles.scss";

const Crew = ({ data }) => {
  const {
    name,
    images: { webp },
    role,
    bio,
  } = data;

  return (
    <li className="crew glide__slide">
      <div className="crew__content">
        <h4 className="crew__role heading--4">{role}</h4>
        <h3 className="crew__name heading--3">{name}</h3>
        <p className="crew__bio content">{bio}</p>
        <div
          className="crew__dot-container glide__bullets"
          data-glide-el="controls[nav]"
        >
          <button
            className="crew__dot glide__bullet"
            data-glide-dir="=0"
          ></button>
          <button
            className="crew__dot glide__bullet"
            data-glide-dir="=1"
          ></button>
          <button
            className="crew__dot glide__bullet"
            data-glide-dir="=2"
          ></button>
          <button
            className="crew__dot glide__bullet"
            data-glide-dir="=3"
          ></button>
        </div>
      </div>
      <img src={webp} alt="crew" className="crew__image" />
    </li>
  );
};

export default Crew;

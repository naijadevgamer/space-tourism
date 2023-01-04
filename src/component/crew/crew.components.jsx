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
    <li className="glide__slide">
      <div className="glide__content">
        <h4 className="glide__role heading--4">{role}</h4>
        <h3 className="glide__name heading--3">{name}</h3>
        <p className="glide__bio content">{bio}</p>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
          <button className="glide__bullet" data-glide-dir="=3"></button>
        </div>
      </div>
      <img src={webp} alt="crew" className="glide__image" />
    </li>
  );
};

export default Crew;

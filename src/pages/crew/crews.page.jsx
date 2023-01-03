import React from "react";
import { useState, useCallback } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import glide from "@glidejs/glide";

import Subheader from "../../component/subheader/subheader.component";
import Crew from "../../component/crew/crew.components";

import DATA from "../../data";

import "./crews.page.styles.scss";

const CrewsPage = () => {
  new Glide(".glide").mount();
  const crewData = DATA.crew;
  const [increment, setIncrement] = useState(0);

  const handleFadeDot = (e) => {
    const fadingCrew = e.target.parentNode.parentNode.parentNode;
    fadingCrew.classList.add("fade-for-me");
    setTimeout(function () {
      fadingCrew.classList.remove("fade-for-me");
    }, 400);
  };
  const handleFadePointer = (e) => {
    const fadingCrew = e.target.parentNode.previousSibling.children[1];
    fadingCrew.classList.add("fade-for-me");
    setTimeout(function () {
      fadingCrew.classList.remove("fade-for-me");
    }, 400);
  };

  const handleIncrement = () => {
    switch (increment) {
      case 0:
        setIncrement(increment + 1);
        break;
      case 1:
        setIncrement(increment + 1);
        break;
      case 2:
        setIncrement(increment + 1);
        break;
      case 3:
        setIncrement(0);
        break;
      default:
        break;
    }
  };
  const handleDecrement = () => {
    switch (increment) {
      case 1:
        setIncrement(increment - 1);
        break;
      case 2:
        setIncrement(increment - 1);
        break;
      case 3:
        setIncrement(increment - 1);
        break;
      case 0:
        setIncrement(3);
        break;

      default:
        break;
    }
  };

  const wrapperSetParentState = useCallback(
    (val) => {
      setIncrement(val);
    },
    [setIncrement]
  );

  return (
    <>
      <div className="crews-page">
        <Subheader>
          <span className="subheader__number">02</span>
          Meet your crew
        </Subheader>
        <div className="crews__list" data-glide-el="track">
          {crewData.map((crew, index) => (
            <Crew
              key={index}
              data={crew}
              increment={increment}
              setIncrementDot={wrapperSetParentState}
              handleFadeDot={handleFadeDot}
            />
          ))}
        </div>
      </div>
      <div className="crews__pointer-wrapper">
        <div
          className="crews__pointer crews__pointer--left"
          onClick={(e) => {
            handleDecrement();
            handleFadePointer(e);
          }}
        >
          &#10094;
        </div>
        <div
          className="crews__pointer crews__pointer--right"
          onClick={(e) => {
            handleIncrement();
            handleFadePointer(e);
          }}
        >
          &#10095;
        </div>
      </div>
    </>
  );
};

export default CrewsPage;

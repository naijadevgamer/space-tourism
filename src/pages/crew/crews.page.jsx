import React from "react";
import { useState, useCallback } from "react";

import Subheader from "../../component/subheader/subheader.component";
import Crew from "../../component/crew/crew.components";

import DATA from "../../data";

import "./crews.page.styles.scss";

const CrewsPage = () => {
  const crewData = DATA.crew;
  const [increment, setIncrement] = useState(0);

  // const handleVisibility = (e) => {
  //   const target = e.target.parentNode.previousSibling.children[1];
  //   target.style.display = "flex";
  //   target.style.transition = "display 0.3s";
  // };

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

      default:
        break;
    }
  };

  const handleInterval = () => {
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

  const setIncrementDot = (n) => {
    setIncrement(n);
  };
  const wrapperSetParentState = useCallback(
    (val) => {
      setIncrement(val);
    },
    [setIncrement]
  );

  const handleFade = (e) => {
    const targetElement =
      e.target.parentNode.previousSibling.children[1].children[1];
    //     const keyFrames =
    //       "\
    // @keyframes move-eye {\
    //   from {\
    //     opacity: 0.4;\
    //   }\
    //   to {\
    //     opacity: 1;\
    //   }\
    // }";
    targetElement.style.opacity = "0";
    // if (targetElement.style.opacity == "0") {
    //   targetElement.style.opacity = "1";
    setTimeout(function () {
      targetElement.style.opacity = "1";
    }, 500);
    // }
  };

  // const myInterval = setInterval(() => {
  //   handleInterval();
  // }, 10000);

  // const stopInterval = useEffect(() => {
  //   clearInterval(myInterval);
  // }, [myInterval]);

  // const handleDots = (n) => {
  //   setIncrement(n);
  // };

  return (
    <>
      <div className="crews-page">
        <Subheader>
          <span className="subheader__number">02</span>
          Meet your crew
        </Subheader>

        {crewData
          .filter((crew) => {
            return crew.id === increment;
          })
          .map((crew, index) => (
            <Crew
              key={index}
              data={crew}
              increment={increment}
              setIncrementDot={wrapperSetParentState}
            />
          ))}
      </div>
      <div className="crews__pointer-wrapper">
        <div
          className="crews__pointer crews__pointer--left"
          onClick={(e) => {
            handleDecrement();
            // handleFade(e);
            // stopInterval;
          }}
        >
          &#10094;
        </div>
        <div
          className="crews__pointer crews__pointer--right"
          onClick={(e) => {
            handleIncrement();
            // handleFade(e);
            // stopInterval;
          }}
        >
          &#10095;
        </div>
      </div>
    </>
  );
};

export default CrewsPage;

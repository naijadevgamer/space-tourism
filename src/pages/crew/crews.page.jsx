import React, { useEffect } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import glide from "@glidejs/glide";

import Subheader from "../../component/subheader/subheader.component";
import Crew from "../../component/crew/crew.components";

import DATA from "../../data";

import "./crews.page.styles.scss";

const CrewsPage = () => {
  useEffect(() => {
    new glide(".glide", {
      perView: 1,
      type: "carousel",
    }).mount();
  }, []);

  // useEffect(() => {
  //   // setData();
  //   new glide(".glide", {
  //     perView: 1,
  //     type: "carousel",
  //   });
  // }, []);
  // const setData = glided.mount();
  const crewData = DATA.crew;

  return (
    <>
      <div className="crews-page glide">
        <Subheader>
          <span className="subheader__number">02</span>
          Meet your crew
        </Subheader>
        <div className="crews__list glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {crewData.map((crew, index) => (
              <Crew key={index} data={crew} />
            ))}
          </ul>
        </div>
      </div>
      <div
        className="crews__pointer-wrapper glide__arrows"
        data-glide-el="controls"
      >
        <div
          className="crews__pointer crews__pointer--left glide__arrow glide__arrow--left"
          data-glide-dir="<"
        >
          &#10094;
        </div>
        <div
          className="crews__pointer crews__pointer--right glide__arrow glide__arrow--right"
          data-glide-dir=">"
        >
          &#10095;
        </div>
      </div>
    </>
  );
};

export default CrewsPage;

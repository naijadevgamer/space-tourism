import React, { useEffect } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
// import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import glide from "@glidejs/glide";

import Subheader from "../../component/subheader/subheader.component";
import Crew from "../../component/crew/crew.components";

import DATA from "../../data";

import "./crews.page.styles.scss";

const CrewsPage = () => {
  const crewData = DATA.crew;
  useEffect(() => {
    new glide(".glide", {
      perView: 1,
      type: "carousel",
      gap: 200,
      autoplay: 5000,
    }).mount();
  }, []);

  return (
    <>
      <div className="crew-page">
        <div className="sub-header">
          <Subheader>
            <span className="subheader__number">02</span>
            Meet your crew
          </Subheader>
        </div>

        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {crewData.map((crew, index) => (
                <Crew key={index} data={crew} />
              ))}
            </ul>
          </div>
          {/* <div className="glide__arrows" data-glide-el="controls"> */}
          {/* <div className="glide__arrow glide__arrow--left" data-glide-dir="<">
            &#10094;
          </div>
          <div className="glide__arrow glide__arrow--right" data-glide-dir=">">
            &#10095;
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CrewsPage;

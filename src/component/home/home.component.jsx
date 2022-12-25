import React from "react";
import { Link } from "react-router-dom";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <div className="home__heading-container">
      <h5 className="home__heading heading--5">So, you want to travel to</h5>
      <h1 className="home__heading-big heading--1">Space</h1>
      <div className="home__content content">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </div>
    </div>

    <Link to={"/destination"} className="home__explore heading--4">
      Explore
      <div></div>
    </Link>
  </div>
);

export default Home;

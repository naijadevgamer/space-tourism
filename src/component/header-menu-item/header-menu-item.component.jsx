import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header-menu-item.styles.scss";

const HeaderMenuItems = ({ toggleHidden }) => {
  const location = useLocation().pathname;

  return (
    <>
      <div className="header__menu-item">
        <Link to="/" className="header__menu-item-link" onClick={toggleHidden}>
          <span className="header__menu-number">01</span>Home
        </Link>
        <div className={`${location === "/" ? "menu-bottom-line" : ""}`}></div>
        <div id="hover"></div>
      </div>

      <div className="header__menu-item">
        <Link
          to="/destination"
          className="header__menu-item-link"
          onClick={toggleHidden}
        >
          <span className="header__menu-number">02</span>Destination
        </Link>
        <div
          className={`${location === "/destination" ? "menu-bottom-line" : ""}`}
        ></div>
        <div id="hover"></div>
      </div>

      <div className="header__menu-item">
        <Link
          to="/crews"
          className="header__menu-item-link"
          onClick={toggleHidden}
        >
          <span className="header__menu-number">03</span>Crews
        </Link>
        <div
          className={`${location === "/crews" ? "menu-bottom-line" : ""}`}
        ></div>
        <div id="hover"></div>
      </div>

      <div className="header__menu-item">
        <Link
          to="/technology"
          className="header__menu-item-link"
          onClick={toggleHidden}
        >
          <span className="header__menu-number">04</span>Technology
        </Link>
        <div
          className={`${location === "/technology" ? "menu-bottom-line" : ""}`}
        ></div>
        <div id="hover"></div>
      </div>
    </>
  );
};

export default HeaderMenuItems;

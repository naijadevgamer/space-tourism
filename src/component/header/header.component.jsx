import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderMenuItems from "../header-menu-item/header-menu-item.component";

import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

import "./header.styles.scss";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <Logo className="header__logo" />
      </Link>
      <div className="header__line"></div>
      <div
        className={`${hidden ? "" : "overlay"}`}
        onClick={toggleHidden}
      ></div>
      <div
        className={`nav__button ${hidden ? "" : "nav__button--cross"}`}
        onClick={toggleHidden}
      >
        <span className={`nav__icon ${hidden ? "" : "nav__icon--1"}`}></span>
        <span className={`nav__icon ${hidden ? "" : "nav__icon--2"}`}></span>
        <span className={`nav__icon ${hidden ? "" : "nav__icon--3"}`}></span>
      </div>
      <div
        className={`header__menu-container ${
          hidden ? "header__menu-container--hide" : ""
        }`}
      >
        <HeaderMenuItems toggleHidden={toggleHidden} />
      </div>
    </div>
  );
};

export default Header;

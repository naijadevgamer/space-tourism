import React from "react";
import { Link } from "react-router-dom";

import HeaderMenuItem from "../header-menu-item/header-menu-item.component";

import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

import "./header.styles.scss";
import { useState } from "react";

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
      <ul
        className={`header__menu-container ${
          hidden ? "header__menu-container--hide" : ""
        }`}
      >
        <HeaderMenuItem
          num={"00"}
          name={"Home"}
          link={"/"}
          onClick={toggleHidden}
        />
        <HeaderMenuItem
          num={"01"}
          name={"destination"}
          link={"/destination/Moon"}
          onClick={toggleHidden}
        />
        <HeaderMenuItem
          num={"02"}
          name={"Crews"}
          link={"/crew"}
          onClick={toggleHidden}
        />
        <HeaderMenuItem
          num={"03"}
          name={"technology"}
          link={"/technology/0"}
          onClick={toggleHidden}
        />
      </ul>
    </div>
  );
};

export default Header;

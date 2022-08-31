import React from "react";
import { Link, useParams, useHref } from "react-router-dom";

import HeaderMenuItem from "../header-menu-item/header-menu-item.component";

import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

import "./header.styles.scss";

const Header = () => {
  const handleUnchecked = (e) => {
    const checkBox = e.target.previousSibling;

    if (checkBox.checked) {
      checkBox.checked = false;
    }
  };
  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <Logo className="header__logo" />
      </Link>
      <div className="header__line"></div>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <div className="overlay" onClick={handleUnchecked}></div>
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <ul className="header__menu-container">
        <HeaderMenuItem num={"00"} name={"Home"} link={"/"} />
        <HeaderMenuItem
          num={"01"}
          name={"destination"}
          link={"/destination/Moon"}
        />
        <HeaderMenuItem num={"02"} name={"Crews"} link={"/crew"} />
        <HeaderMenuItem num={"03"} name={"technology"} link={"/technology/0"} />
      </ul>
    </div>
  );
};

export default Header;

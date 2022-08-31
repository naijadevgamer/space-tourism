import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header-menu-item.styles.scss";

const HeaderMenuItem = ({ num, name, link }) => {
  const location = useLocation().pathname;

  return (
    <li className="header__menu-item">
      <Link to={link} className="header__menu-item-link">
        <Link to={link} className="header__menu-number">
          {num}
        </Link>
        {name}
      </Link>
      <div
        className={`${
          location.includes(name) || location === link ? "menu-bottom-line" : ""
        }`}
      ></div>
      <div id="hover"></div>
    </li>
  );
};

export default HeaderMenuItem;

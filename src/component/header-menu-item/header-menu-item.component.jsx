import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header-menu-item.styles.scss";

const HeaderMenuItem = ({ num, name, link }) => {
  const location = useLocation().pathname;

  const handleUnchecked = (e) => {
    const checkBoxNam = e.target.parentNode.parentNode.parentNode.children[2];
    // const checkBox = e.target.parentNode.parentNode.children[2];

    if (checkBoxNam.checked) {
      checkBoxNam.checked = false;
    }
  };

  return (
    <li className="header__menu-item">
      <Link
        to={link}
        className="header__menu-item-link"
        onClick={handleUnchecked}
      >
        <span className="header__menu-number">{num}</span>
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

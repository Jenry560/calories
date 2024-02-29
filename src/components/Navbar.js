import React, { useState } from "react";
import "../stilos/style.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = ({ brand }) => {
  const [clastState, setClastState] = useState(false);

  function handClick() {
    setClastState((clastState) => !clastState);
  }

  let check = clastState
    ? "nav__link nav__link--menu nav__link--show"
    : "nav__link nav__link--menu";

  return (
    <nav className="navbar  bg-dark ">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
        <ul className={`${check}`}>
          <a className="nav-link nav-linkx" href="/#main" onClick={handClick}>
            About us
          </a>
          <a className="nav-link " href="/#footer" onClick={handClick}>
            Contact
          </a>
          <IoMdCloseCircleOutline
            className="nav__close"
            alt="imagen"
            onClick={handClick}
          />
        </ul>
      </div>
      <div className="nav__menu">
        <IoMdMenu className="nav__img" alt="menu-imagen" onClick={handClick} />
      </div>
    </nav>
  );
};

export default Navbar;

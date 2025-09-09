import React from "react";
import "./menu.css";
import Navbar from "./Navbar";
import Account from "./Account";
import siteLogo from "./media/logo.svg";
import burgerMenu from "./media/menu.svg";
const Menu = () => {
  return (
    <section className="menu">
      <div className="menu__div">
        <img src={siteLogo} alt="sitelogo" className="site__logo" />
        <img src={burgerMenu} alt="burgermenu-icon" className="burger__menu" />
      </div>
      <Navbar />
      <Account />
    </section>
  );
};

export default Menu;

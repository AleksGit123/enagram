import React from "react";
import "./menu.css";
import siteLogo from "./media/logo.svg";
import Navbar from "./Navbar";
const Menu = () => {
  return (
    <section className="menu">
      <img src={siteLogo} alt="sitelogo" className="site__logo" />
      <Navbar />
    </section>
  );
};

export default Menu;

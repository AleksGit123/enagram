import React from "react";
import "./loader.css";
const Loader = ({ percents }) => {
  return (
    <div className="loader">
      <div className="circle__loader"></div>

      <div className="loader__text">
        <p className="loader__text__one helvetica_font">
          Converting...Thank you For your Patience
        </p>

        <div className="percents__slide">
          <span className="loader__percents helvetica_font">{percents}%</span>
          <div className="slider"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

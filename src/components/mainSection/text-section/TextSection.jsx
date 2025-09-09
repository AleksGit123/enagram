import React from "react";
import "./textSection.css";
import doubleArrow from "./Arrow.svg";
const TextSection = () => {
  return (
    <section className="text__section">
      <div className="textarea__div">
        <textarea
          name="first_text"
          id="first_text"
          className="helvetica_font"
          placeholder="დაიწყე წერა..."
        ></textarea>

        <img src={doubleArrow} alt="double-arrow" className="double__arrow" />

        <textarea
          name="second_text"
          id="first_text"
          className="helvetica_font"
          placeholder="დაიწყე წერა..."
        ></textarea>
      </div>
      <button className="compare__button helvetica_font">შედარება</button>
    </section>
  );
};

export default TextSection;

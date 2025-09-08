import React from "react";
import check from "./media/check.svg";
import text from "./media/text.svg";
import mic from "./media/mic.svg";
import alignCenter from "./media/align-center.svg";
import document from "./media/programming-code-document.svg";
import arrowRight from "./media/arrow-right.svg";

const Navbar = () => {
  return (
    <nav className="page__nav">
      <ul className="page__nav__list">
        <li className="page__nav__item">
          <img src={check} alt="check-icon" className="page__nav__item__icon" />
          <h2 className="page helvetica_font">მართლმწერი</h2>
        </li>

        <li className="page__nav__item">
          <img src={text} alt="text-icon" className="page__nav__item__icon" />
          <h2 className="page helvetica_font">ტექსტის შედარება</h2>
        </li>

        <li className="page__nav__item">
          <img src={mic} alt="micicon" className="page__nav__item__icon" />
          <h2 className="page helvetica_font">ხმა</h2>
          <img
            src={arrowRight}
            alt="arrow-right-icon"
            className="page__nav__item__icon"
          />
          <h2 className="page helvetica_font">ტექსტი</h2>
        </li>

        <li className="page__nav__item">
          <img
            src={alignCenter}
            alt="alignCenter"
            className="page__nav__item__icon"
          />
          <h2 className="page helvetica_font">ტექსტი</h2>
          <img
            src={arrowRight}
            alt="arrow-right-icon"
            className="page__nav__item__icon"
          />
          <h2 className="page helvetica_font">ხმა</h2>
        </li>

        <li className="page__nav__item">
          <img
            src={document}
            alt="document-icon"
            className="page__nav__item__icon"
          />
          <h2 className="page helvetica_font">PDF კონვერტაცია</h2>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

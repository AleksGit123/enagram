/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./dropdown.css";
import check from "../menu/media/check.svg";
import text from "../menu/media/text.svg";
import mic from "../menu/media/mic.svg";
import document from "../menu/media/programming-code-document.svg";
import alignCenter from "../menu/media/align-center.svg";
import arrowRight from "../menu/media/arrow-right.svg";
import arrowDown from "../mainSection/arrowDown.svg";
const DropDown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="dropdown__menu">
      <div
        className="dropdown__menu__head"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <img src={text} alt="document-icon" className="dropdown__menu__icon" />
        <h2 className="dropdown__menu__text helvetica_font">
          ტექსტის რედაქტირება
        </h2>
        <img
          src={arrowDown}
          alt="arrow-down-icon"
          className="dropdown__menu__icon"
        />
      </div>

      <nav className={`dropdown ${visible ? "dropdown__in" : ""}`}>
        <ul className="dropdown__nav__list">
          <li className="page__nav__item">
            <img
              src={check}
              alt="check-icon"
              className="page__nav__item__icon"
            />
            <h2 className="page helvetica_font">მართლმწერი</h2>
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
    </div>
  );
};

export default DropDown;

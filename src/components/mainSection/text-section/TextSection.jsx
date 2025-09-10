/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./textSection.css";
import doubleArrow from "./Arrow.svg";
import compareText from "../../../constants/compareFunc";
const TextSection = ({ setClicked, clear, setClear, loader, setLoader }) => {
  const [values, setValues] = useState({
    first: "",
    second: "",
  });

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  //function for handling input
  const handleInput = (e, field) => {
    const text = e.target.innerText;
    setValues((prev) => ({ ...prev, [field]: e.target.innerText }));
    if (text.trim() !== "") {
      e.target.classList.add("has_content");
    } else {
      e.target.classList.remove("has_content");
    }
  };
  useEffect(() => {
    setClear((prev) => {
      if (prev) {
        if (firstRef.current) {
          firstRef.current.classList.remove("has_content");
          firstRef.current.innerHTML = "";
        }
        if (secondRef.current) {
          secondRef.current.classList.remove("has_content");
          secondRef.current.innerHTML = "";
        }
      }
    });
    setClear(false);
  }, [clear, setClear]);

  return (
    <section className={`text__section ${loader ? "hidden" : ""}`}>
      
      <div className="textarea__div">
        <div
          ref={firstRef}
          className="textarea helvetica_font"
          contentEditable="true"
          onInput={(e) => {
            handleInput(e, "first");
          }}
        ></div>

        <img src={doubleArrow} alt="double-arrow" className="double__arrow" />

        <div
          ref={secondRef}
          className="textarea helvetica_font"
          contentEditable="true"
          onInput={(e) => {
            handleInput(e, "second");
          }}
        ></div>
      </div>
      <button
        className="compare__button helvetica_font"
        onClick={() => {
          compareText(values.first, values.second, firstRef, secondRef);
          setClicked(true);
          setLoader(true);
        }}
      >
        შედარება
      </button>
    </section>
  );
};

export default TextSection;

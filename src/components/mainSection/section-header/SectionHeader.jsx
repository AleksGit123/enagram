import React from "react";
import Options from "./Options";
import plus from "../plus.svg";

const SectionHeader = ({ clicked, clear, setClear }) => {
  return (
    <div className="section__header">
      <Options />
      <div className={`add__new ${clicked ? "clicked" : ""}`}>
        <img src={plus} alt="plus-icon" className="add__new__icon" />
        <p
          className="add__new__text helvetica_font"
          onClick={(e) => {
            if (!clicked) return;
            setClear(true);
          }}
        >
          ახალის შექმნა
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;

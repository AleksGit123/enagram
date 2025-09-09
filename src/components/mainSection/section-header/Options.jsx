import React, { useState } from "react";
import arrow from "../arrowDown.svg";
const Options = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="options">
      <div className="language__div">
        <p className="language helvetica_font">ქართული</p>
        <img src={arrow} alt="arrow-down-icon" className="arrow__svg" />
      </div>

      <div className="checkbox__div" onClick={() => setChecked(!checked)}>
        <div className={`checkbox ${checked ? "checked" : ""}`}></div>
        
        <p className="checkbox__text helvetica_font">ფორმატის შენარჩუნება</p>
      </div>
    </div>
  );
};

export default Options;

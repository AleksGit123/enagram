/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./mainSection.css";
import SectionHeader from "./section-header/SectionHeader";
import TextSection from "./text-section/TextSection";

const ManiSection = () => {
  const [clicked, setClicked] = useState(false);
  const [clear, setClear] = useState(false);
  const [loader, setLoader] = useState(false);
  const [percents, setPercents] = useState(0);

  useEffect(() => {
    if (loader) {
      const interval = setInterval(() => {
        setPercents((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setPercents(0);
            setLoader(false); // Loader არ გვჭირდება როცა 100%
            // return 100;
          }
          return prev + 1; // გაიზრდება 1%-ით
        });
      }, 100); // აქ 50მს = 0.05s, შეგიძლია უფრო ნელა ან სწრაფად
      return () => clearInterval(interval);
    }
  }, [loader]);

  return (
    <section className="main__section">
      <SectionHeader clicked={clicked} clear={clear} setClear={setClear} />
      {loader ? (
        <div className="loader">
          <div className="circle__loader"></div>

          <div className="loader__text">
            <p className="loader__text__one helvetica_font">
              Converting...Thank you For your Patience
            </p>

            <div className="percents__slide">
              <span className="loader__percents helvetica_font">
                {percents}%
              </span>
              <div className="slider"></div>
            </div>
          </div>
        </div>
      ) : (
        <TextSection
          clicked={clicked}
          setClicked={setClicked}
          clear={clear}
          setClear={setClear}
          loader={loader}
          setLoader={setLoader}
        />
      )}
    </section>
  );
};

export default ManiSection;

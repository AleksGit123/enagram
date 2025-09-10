/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./mainSection.css";
import SectionHeader from "./section-header/SectionHeader";
import TextSection from "./text-section/TextSection";
import Loader from "../loader/Loader";

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
            setLoader(false);
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [loader]);

  return (
    <section className="main__section">
      {loader && <div className="background"></div>}

      <SectionHeader clicked={clicked} clear={clear} setClear={setClear} />

      {loader && <Loader percents={percents} />}
      <TextSection
        setClicked={setClicked}
        clear={clear}
        setClear={setClear}
        setLoader={setLoader}
      />
    </section>
  );
};

export default ManiSection;

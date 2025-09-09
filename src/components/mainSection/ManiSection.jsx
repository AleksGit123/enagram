import React from "react";
import "./mainSection.css";
import SectionHeader from "./section-header/SectionHeader";
import TextSection from "./text-section/TextSection";

const ManiSection = () => {
  return (
    <section className="main__section">
      <SectionHeader />
      <TextSection />
    </section>
  );
};

export default ManiSection;

/** @format */

import React from "react";
import Headers from "../../Shared/Headers/Headers";
import AboutBanner from "../AboutBanner/AboutBanner";
import ExpertLearning from "../ExpertLearning/ExpertLearning";
import GrindingKnowledge from "../GrindingKnowledge/GrindingKnowledge";
import MoneyBack from "../MoneyBack/MoneyBack";
import Started from "../Started/Started";
import Support from "../Support/Support";
import "./About.css";

const About = () => {
  return (
    <div>
      <Headers></Headers>
      <AboutBanner></AboutBanner>
      <ExpertLearning></ExpertLearning>
      <GrindingKnowledge></GrindingKnowledge>
      <MoneyBack></MoneyBack>
      <Support></Support>
      <Started></Started>
    </div>
  );
};

export default About;

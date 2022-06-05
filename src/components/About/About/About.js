/** @format */

import React from "react";
import AboutBanner from "../AboutBanner/AboutBanner";
import ExpertLearning from "../ExpertLearning/ExpertLearning";
import GrindingKnowledge from "../GrindingKnowledge/GrindingKnowledge";
import MoneyBack from "../MoneyBack/MoneyBack";
import Support from "../Support/Support";
import "./About.css";


const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <ExpertLearning></ExpertLearning>
      <GrindingKnowledge></GrindingKnowledge>
      <MoneyBack></MoneyBack>
      <Support></Support>
    </div>
  );
};

export default About;

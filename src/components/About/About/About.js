/** @format */

import React from "react";
import AboutBanner from "../AboutBanner/AboutBanner";
import ExpertLearning from "../ExpertLearning/ExpertLearning";
import GrindingKnowledge from "../GrindingKnowledge/GrindingKnowledge";
import "./About.css";

const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <ExpertLearning></ExpertLearning>
      <GrindingKnowledge></GrindingKnowledge>
    </div>
  );
};

export default About;

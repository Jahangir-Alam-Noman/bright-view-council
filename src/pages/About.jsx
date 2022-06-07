/** @format */

import React from "react";
import AboutBanner from "../components/About/AboutBanner/AboutBanner";
import ExpertLearning from "../components/About/ExpertLearning/ExpertLearning";
import GrindingKnowledge from "../components/About/GrindingKnowledge/GrindingKnowledge";
import MoneyBack from "../components/About/MoneyBack/MoneyBack";
import Started from "../components/About/Started/Started";
import Support from "../components/About/Support/Support";
import Headers from "../components/Shared/Headers/Headers";

const About = () => {
  return (
    <div>
      <Headers />
      <AboutBanner />
      <ExpertLearning />
      <GrindingKnowledge />
      <MoneyBack />
      <Support />
      <Started />
    </div>
  );
};

export default About;

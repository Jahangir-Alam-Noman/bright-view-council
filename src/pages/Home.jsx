/** @format */

import React from "react";
import Headers from "../../Shared/Headers/Headers";
import Banner from "../Banner/Banner";
import DataScienceCourses from "../DataScienceCourses/DataScienceCourses";
import FeatureCourses from "../FeatureCourses/FeatureCourses";
import ItCourses from "../ItCourses/ItCourses";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import NetworkingCourses from "../NetworkingCourses/NetworkingCourses";
import OnlineTraining from "../OnlineTraining/OnlineTraining";
import StudentInfo from "../StudentInfo/StudentInfo";
import TrendingCourses from "../TrendingCourses/TrendingCourses";
import UniversityPartner from "../UniversityPartner/UniversityPartner";
const Home = () => {
  return (
    <div>
      <Headers />
      <Banner />
      <StudentInfo />
      <UniversityPartner />
      <OnlineTraining />
      <TrendingCourses />
      <ItCourses />
      <NetworkingCourses />
      <DataScienceCourses />
      <FeatureCourses />
      <JoinCommunity />
    </div>
  );
};

export default Home;

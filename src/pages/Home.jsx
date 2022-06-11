/** @format */

import React from "react";
import Banner from "../components/Home/Banner/Banner";
import DataScienceCourses from "../components/Home/DataScienceCourses/DataScienceCourses";
import FeatureCourses from "../components/Home/FeatureCourses/FeatureCourses";
import ItCourses from "../components/Home/ItCourses/ItCourses";
import JoinCommunity from "../components/Home/JoinCommunity/JoinCommunity";
import NetworkingCourses from "../components/Home/NetworkingCourses/NetworkingCourses";
import OnlineTraining from "../components/Home/OnlineTraining/OnlineTraining";
import StudentInfo from "../components/Home/StudentInfo/StudentInfo";
import TrendingCourses from "../components/Home/TrendingCourses/TrendingCourses";
import UniversityPartner from "../components/Home/UniversityPartner/UniversityPartner";
import Headers from "../components/Shared/Headers/Headers";

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

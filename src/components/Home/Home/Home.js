/** @format */

import React from "react";
import Footer from "../../Shared/Footer/Footer";
import DataScienceCourses from "../DataScienceCourses/DataScienceCourses";
import FeatureCourses from "../FeatureCourses/FeatureCourses";
import ItCourses from "../ItCourses/ItCourses";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import NetworkingCourses from "../NetworkingCourses/NetworkingCourses";
import OnlineTraining from "../OnlineTraining/OnlineTraining";
import TrendingCourses from "../TrendingCourses/TrendingCourses";
import UniversityPartner from "../UniversityPartner/UniversityPartner";

const Home = () => {
  return (
    <div>
      <UniversityPartner></UniversityPartner>
      <OnlineTraining></OnlineTraining>
      <TrendingCourses></TrendingCourses>
      <ItCourses></ItCourses>
      <NetworkingCourses></NetworkingCourses>
      <DataScienceCourses></DataScienceCourses>
      <FeatureCourses></FeatureCourses>
      {/* <JoinCommunity></JoinCommunity> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;

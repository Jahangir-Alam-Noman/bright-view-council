/** @format */

import React from "react";
import OnlineTraining from "../OnlineTraining/OnlineTraining";
import TrendingCourses from "../TrendingCourses/TrendingCourses";
import UniversityPartner from "../UniversityPartner/UniversityPartner";

const Home = () => {
  return (
    <div>
      <UniversityPartner></UniversityPartner>
      <OnlineTraining></OnlineTraining>
      {/* <TrendingCourses></TrendingCourses> */}
    </div>
  );
};

export default Home;

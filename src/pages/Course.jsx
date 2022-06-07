import React from "react";
import CourseBanner from "../components/Course/CourseBanner/CourseBanner";
import Learn from "../components/Course/Learn/Learn";
import Nav from "../components/Course/Nav/Nav";

const Course = () => {
  return (
    <div>
      <Nav />
      <CourseBanner />
      <Learn />
    </div>
  );
};

export default Course;

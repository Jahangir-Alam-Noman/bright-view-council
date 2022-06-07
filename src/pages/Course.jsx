import React from "react";
import AboutCourse from "../components/Course/AboutCourse/AboutCourse";
import CourseBanner from "../components/Course/CourseBanner/CourseBanner";
import CourseContent from "../components/Course/CourseContent/CourseContent";
import Learn from "../components/Course/Learn/Learn";
import Nav from "../components/Course/Nav/Nav";

const Course = () => {
  return (
    <div>
      <Nav />
      <CourseBanner />
      <Learn />
      <AboutCourse />
      <CourseContent />
    </div>
  );
};

export default Course;

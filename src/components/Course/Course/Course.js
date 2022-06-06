import React from "react";
import CourseBanner from "../CourseBanner/CourseBanner";
import Learn from "../Learn/Learn";
import Nav from "../Nav/Nav";
import "./Course.css";

const Course = () => {
  return (
    <div>
      <Nav></Nav>
      <CourseBanner></CourseBanner>
      <Learn></Learn>
    </div>
  );
};

export default Course;

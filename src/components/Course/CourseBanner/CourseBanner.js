/** @format */

import React from "react";
import image from "../../../assets/img/course-banner/Rectangle _1.png";
import image1 from "../../../assets/img/course-card/Rectangle 14.png";

const CourseBanner = () => {
  return (
    <div className="courseBanner container-fluid text-start">
      <div className="course_content  ">
        <div className="row">
          <div className=" col-xs-12  col-sm-7 offset-sm-1  col-md-7 offset-md-1  col-lg-7 offset-lg-1">
            <h3 className="fw-bolder">Data Science : Full Bootcamp</h3>
            <p>
              We have design some of the top IT courses that will take you hand
              by hand to make your prepare for your career. We guarantee your
              learning Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Numquam dolorum possimus id repellat architecto consequuntur
              quibusdam eligendi cum ipsum magni maxime ab fugiat recusandae aut
              tempore, iste maiores, nesciunt alias. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div>
              <img src={image} alt="" />
              <span>&nbsp;&nbsp; Dr. Angelena Jennifer</span>
              <p>385,378 students enrolled</p>
            </div>
          </div>

          <div className="col-xs-12  col-sm-4 col-md-4 col-lg-4 course_position">
            <div className="card w-75 course_card p-3">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="div">
                  <h5 className="card-title fw-bold pt-2">$250.00</h5>
                  <p className="text-muted">30-days maney back-gurantee</p>
                </div>
                <button type="button" className="btn btn-dark w-100">
                  Enroll Now
                </button>

                <div className="div pt-2">
                  <h6>Course includes : </h6>
                  <ul>
                    <li>80 hours video</li>
                    <li>128 downloadable resources</li>
                    <li>1 coding exercise</li>
                    <li>Assignments</li>
                    <li>Full lifetime access</li>
                    <li>Certification of completion</li>
                  </ul>
                </div>

                <div className="row pt-3">
                  <div className=" col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h6>language</h6>
                    <p>English</p>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <h6>level</h6>
                    <p>Beginner</p>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <h6>Duration:</h6>
                    <p>80 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;

/** @format */

import React from "react";
import "./StudentInfo.css";
import image1 from "../../../images/student_info/student_1.png";
import image2 from "../../../images/student_info/student_2.png";
import image3 from "../../../images/student_info/student_3.png";
import image4 from "../../../images/student_info/student_4.png";
const StudentInfo = () => {
  return (
    <div>
      <div className="container pt-5 pb-5">
        <div className="row row-cols-4">
          <div className="col">
            <div className="row">
              <div className="col-sm-4 studentInfo_icon">
                <img src={image1} alt="" className="pt-4" />
              </div>
              <div className="col-sm-8 pt-3 text-start">
                <h4 className="fw-bolder">3,50,000+</h4>
                <p className="text-muted">Students Enrolled</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm-4 studentInfo_icon">
                <img src={image2} alt="" className="pt-4" />
              </div>
              <div className="col-sm-8 pt-3 text-start">
                <h4 className="fw-bolder">40+ Nations</h4>
                <p className="text-muted">Students Base</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm-4 studentInfo_icon">
                <img src={image3} alt="" className="pt-4" />
              </div>
              <div className="col-sm-8 pt-3 text-start">
                <h4 className="fw-bolder">800k+</h4>
                <p className="text-muted">Learning Hours</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm-4 studentInfo_icon">
                <img src={image4} alt="" className="pt-4" />
              </div>
              <div className="col-sm-8 pt-3 text-start">
                <h4 className="fw-bolder">90+</h4>
                <p className="text-muted">Programming Rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;

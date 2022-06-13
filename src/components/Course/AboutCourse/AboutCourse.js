import React from "react";
import image1 from "../../../assets/img/instructor/Rectangle _3.png";
import image from "../../../assets/img/instructor/Rectangle 33.png";
import image2 from "../../../assets/img/instructor/Rectangle 34.png";

const AboutCourse = () => {
  return (
    <div>
      <div className="container about  mt-4">
        <div className="row">
          <div className="col-8 h-100 about_course p-5 text-start">
            <h2>About This Course</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt iure ex inventore, nemo odit amet quia architecto esse
              eos ratione eaque nihil rem tempore totam, at perferendis
              explicabo maxime, vitae aut? Dolor magnam eaque velit, nulla eos
              vitae totam corrupti aliquam nihil modi fugit ipsa explicabo est
              dignissimos possimus labore, officiis ab blanditiis quae! Iste
              libero soluta, exercitationem asperiores aperiam veritatis quia
              incidunt voluptate labore earum consequuntur deserunt odio,
              maiores laboriosam! Nisi, numquam. Blanditiis minus modi nobis ea.
            </p>
          </div>
          <div className="col-4 d-none d-xl-block instructor text-start">
            <div className="card  p-4 mb-3">
              <h5 className="pb-2">Instructors</h5>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body ps-4">
                    <p className="card-title fw-bolder">Prof Paulo Coelho</p>
                    <p className="card-text">Professor,Hardvard University</p>
                  </div>
                </div>
              </div>
              <div className="row pt-2 ">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quisquam quod nemo possimus quo neque dolorum
                  perspiciatis. Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={image1}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body ps-4">
                    <p className="card-title fw-bolder">
                      Dr. Gabriela czanner{" "}
                    </p>
                    <p className="card-text">Professor,Hardvard University</p>
                  </div>
                </div>
              </div>
              <div className="row pt-2 ">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quisquam quod nemo possimus quo neque dolorum
                  perspiciatis. Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={image2}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body ps-4">
                    <p className="card-title fw-bolder">
                      Prof. Dhiya Al-Jameily{" "}
                    </p>
                    <p className="card-text">Professor,Hardvard University</p>
                  </div>
                </div>
              </div>
              <div className="row pt-2 ">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quisquam quod nemo possimus quo neque dolorum
                  perspiciatis. Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;

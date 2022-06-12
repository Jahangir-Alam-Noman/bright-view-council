/** @format */

import React from "react";

import image1 from "../../../assets/img/Trending-courses/course_1.png";
import image2 from "../../../assets/img/Trending-courses/course_2.jpg";
import image3 from "../../../assets/img/Trending-courses/course_3.jpg";
import image4 from "../../../assets/img/It-courses/itCousres_1.jpg";
import image5 from "../../../assets/img/profile/profile.png";

const ItCourses = () => {
  return (
    <div className="container p-5 mt-5 trending_courses text-start">
      <h2 className="pt-3 pb-3 ">IT Courses</h2>
      <div className="row  row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image3} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>
            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Basics of Data Analysis</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image2} className="card-img-top rounded-0" alt="..." />

            <button
              type="button"
              className="btn-light mt-3 w-25 text-muted d-inline"
            >
              Python
            </button>
            <button
              type="button"
              className="btn-light mt-3 w-25 text-muted d-none"
            >
              Programming
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Web Developemnt Bootcamp</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image3} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Full Stack Development</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image1} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Machine Learning Basics </h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image2} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">AWS Bootcamp</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image3} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Cyber Security Advance</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image1} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Azure administration Advance </h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image2} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Networking Fundamentals</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 rounded-0 h-100">
            <img src={image3} className="card-img-top rounded-0" alt="..." />
            <button type="button" className="btn-light mt-3 w-25 text-muted">
              Flutter
            </button>

            <div className="card-body pt-4 pb-4">
              <h4 className="card-title">Crypto Full Course</h4>
              <h6>
                {" "}
                <span className="dollar_text  pe-2">$250.00</span> 7 days
                session
              </h6>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>

            <div>
              <small className=" fw-bolder">Feb 18, 2022</small>
              <img src={image5} className="rounded float-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItCourses;

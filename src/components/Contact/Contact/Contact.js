import React from "react";
import "./Contact.css";
import image from "../../../images/Trending-courses/course_1.png";
import Headers from "../../Shared/Headers/Headers";

const Contact = () => {
  return (
    <div>
      <Headers></Headers>
      <div className="contact container mt-5 mb-5  ">
        <div className="card mb-3  ">
          <div className="row g-0  ">
            <div className="col-md-4 border text-start p-5">
              <h2 className="fw-bolder">Contact Information</h2>
              <p>
                Fill up the form and mail us, our team will responed in short
                time.
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true">
                  {" "}
                  <span> +917890466296</span>
                </i>{" "}
                <br />
                <span> &nbsp;&nbsp; +01608119494</span> <br />
                <span>&nbsp;&nbsp; +718-795-8628</span>
              </p>

              <p>
                <i className="fa fa-envelope" aria-hidden="true">
                  {" "}
                </i>{" "}
                info@bvcouncil.com
              </p>

              <p>
                <i className="fa fa-map-marker" aria-hidden="true">
                  {" "}
                </i>
                <span>&nbsp; Kalkata - India</span>
                <br />
                <span> &nbsp;&nbsp; Dhaka - Bangladesh</span> <br />
                <span>&nbsp;&nbsp; New York - United States</span>
              </p>
            </div>
            <div className="col-md-8 text-start">
              <div className="row pt-5 ps-5 pe-5">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Your Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      // placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Your Mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      // placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="div">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control message"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <div className="div pt-3">
                  <button type="button" className="btn btn-dark float-end ">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

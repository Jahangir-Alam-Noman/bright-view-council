import React from "react";
import "./Contact.css";
import image from "../../../images/Trending-courses/course_1.png";

const Contact = () => {
  return (
    <div className="contact container mt-5 p-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 border">
            <h2>Contact Information</h2>
            <p>
              Fill up the form and mail us, our team will responed in short time
            </p>
            <p>
              <i className="fa fa-phone" aria-hidden="true"></i> <br />
              <span>+917890466296</span> <br />
              <span>+01608119494</span> <br />
              <span>+718-795-8628</span>
            </p>
            <p></p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Here will be form</h5>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

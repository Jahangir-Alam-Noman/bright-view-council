import React from "react";
import "./Support.css";
import image from "../../../images/supported/image 11.png";
import image0 from "../../../images/supported/logos_microsoft.png";
import image1 from "../../../images/supported/image 14.png";
import image2 from "../../../images/supported/image 13.png";
import image3 from "../../../images/supported/image 15.png";
import image4 from "../../../images/supported/Vector (1).png";

const Support = () => {
  return (
    <div>
      <div className="container mt-5 p-5 support">
        <h1 className="fw-bolder">We love being supported by</h1>
        <p className="text-muted">
          It is of fortune that we are able to get assist from some of the top
          brands of the world.
        </p>

        <div className="row pt-5 pb-4">
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <p>
              <img src={image0} alt="" />
            </p>
          </div>
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <p>
              <img src={image4} alt="" />
            </p>
          </div>
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <p>
              <img src={image} alt="" />
            </p>
          </div>
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <p>
              <img src={image1} alt="" />
            </p>
          </div>
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <p>
              <img src={image2} alt="" />
            </p>
          </div>
          <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <p>
              <img src={image3} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

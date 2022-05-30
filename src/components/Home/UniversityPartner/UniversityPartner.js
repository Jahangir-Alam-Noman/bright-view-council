/** @format */

import React from "react";
import "./UniversityPartner.css";

import image1 from "../../../images/university-partner/Untitled-1.png";
import image2 from "../../../images/university-partner/Untitled-2.png";
import image3 from "../../../images/university-partner/Untitled-3.png";
import image4 from "../../../images/university-partner/Untitled-4.png";
import image5 from "../../../images/university-partner/Untitled-5.png";
import image6 from "../../../images/university-partner/Untitled-6.png";
import image7 from "../../../images/university-partner/Untitled-7.png";
import image8 from "../../../images/university-partner/Untitled-8.png";

const UniversityPartner = () => {
  return (
    <div>
      <div class='container partner'>
        <h2 className='fw-bolder pb-5 pt-5 '>Top University Partners</h2>

        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
          <div class='col'>
            <img src={image1} alt='' className='img-fluid' />
          </div>
          <div class='col'>
            <img src={image2} alt='' className='img-fluid' />
          </div>
          <div class='col'>
            <img src={image3} alt='' className='img-fluid' />
          </div>
          <div class='col'>
            <img src={image4} alt='' className='img-fluid' />
          </div>
        </div>
        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
          <div class='col'>
            <img src={image5} alt='' className='img-fluid' />
          </div>

          <div class='col'>
            <img src={image6} alt='' className='img-fluid' />
          </div>

          <div class='col'>
            <img src={image7} alt='' className='img-fluid' />
          </div>

          <div class='col'>
            <img src={image8} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartner;

/** @format */

import React from "react";
import "./OnlineTraining.css";

const OnlineTraining = () => {
  return (
    <div className='container training text-start pt-5 pb-5'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col'>
          <div className='card h-100 p-4'>
            <p>
              <i className='fa fa-train fs-1 ps-3' aria-hidden='true'></i>
            </p>
            <div className='card-body'>
              <h5 className='card-title fw-bolder'>Online Training</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100 p-4'>
            <p>
              <i className='fa fa-file-text fs-1 ps-3' aria-hidden='true'></i>
            </p>

            <div className='card-body'>
              <h5 className='card-title fw-bolder'>Online Enrollment</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card  h-100 p-4'>
            <i className='fa fa-train fs-1 ps-3' aria-hidden='true'></i>

            <div className='card-body'>
              <h5 className='card-title fw-bolder'>Expert Instruction</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineTraining;

/** @format */

import React from "react";
import "./OnlineTraining.css";

const OnlineTraining = () => {
  return (
    <div className='container training text-start pt-5 pb-5'>
      <div class='row row-cols-1 row-cols-md-3 g-4'>
        <div class='col'>
          <div class='h-100'>
            <p>
              <i class='fa fa-train fs-1 ps-3' aria-hidden='true'></i>
            </p>
            <div class='card-body'>
              <h5 class='card-title fw-bolder'>Online Training</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class='col'>
          <div class='h-100'>
            <p>
              <i class='fa fa-file-text fs-1 ps-3' aria-hidden='true'></i>
            </p>

            <div class='card-body'>
              <h5 class='card-title fw-bolder'>Online Enrollment</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class='col'>
          <div class='h-100'>
            <i class='fa fa-train fs-1 ps-3' aria-hidden='true'></i>

            <div class='card-body'>
              <h5 class='card-title fw-bolder'>Online Training</h5>
              <p class='card-text'>
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

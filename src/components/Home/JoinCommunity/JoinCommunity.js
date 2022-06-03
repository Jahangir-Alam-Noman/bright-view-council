/** @format */

import React from "react";
import "./JoinCommunity.css";
import images from "../../../images/Join-community/join-community.jpg";

const JoinCommunity = () => {
  return (
    <div>
      <div className='container mt-4  join_community'>
        <div className='row'>
          <div className='col-sm-10 col-md-10'>
            <div className='row '>
              <div className='col-sm-2 col-md-2'>
                <img src={images} alt='' className='img-fluid' />
              </div>
              <div className='col-sm-10 col-md-10 pt-4 text-start'>
                <h4>Join The community.</h4>
                <p>
                  Sign up and exciting Offers in this auspicious season of
                  learning. Let's join the
                </p>
              </div>
            </div>
          </div>
          <div className=' col-sm-2 col-md-2 pt-4'>
            <button type='button' className='btn btn-dark'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;

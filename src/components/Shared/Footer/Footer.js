/** @format */

import React from "react";
import "./Footer.css";
import logo from "../../../images/Logo/logo-1.png";

const Footer = () => {
  return (
    <div className='footer mt-4'>
      <div class='container footer_top '>
        <div class='row'>
          <div class='col-lg-6 col-12 text-start'>
            <div>
              <a href=''>
                <img src={logo} alt='' />
              </a>
              <p className='pt-3 text-muted '>Shape your career with us .</p>
              <div className='icon'>
                <p>
                  <a href=''>
                    <i
                      class='fa fa-facebook-square  fs-3'
                      aria-hidden='true'></i>
                  </a>

                  <a href=''>
                    <i class='fa fa-camera fs-3' aria-hidden='true'></i>
                  </a>
                  <a href=''>
                    <i
                      class='fa fa-twitter-square  fs-3'
                      aria-hidden='true'></i>
                  </a>
                  <a href=''>
                    <i class='fa fa-youtube-play  fs-3' aria-hidden='true'></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class='col-lg-6 col-12'>
            <div className='row text-start '>
              <div className='col-md-4 col-sm-4 col-6'>
                <h4 className='footer_header pb-2 '>Navigation</h4>
                <div className='text-muted text-decoration-none'>
                  <p>
                    {" "}
                    <a href=''> Home</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''> Membership</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''> Courses</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''> Prices</a>
                  </p>
                </div>
              </div>
              <div className=' col-md-4 col-sm-4 col-6'>
                <h4 className='footer_header pb-2 '>Quick Links</h4>
                <div className='text-muted text-decoration-none'>
                  <p>
                    {" "}
                    <a href=''> Socila Media</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''> Become Instructor</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''>Help</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''>Term & Conditions</a>
                  </p>
                </div>
              </div>
              <div className=' col-md-4 col-sm-4 col-6'>
                <h4 className='footer_header pb-2 '>Contact Us</h4>
                <div className='text-muted text-decoration-none'>
                  <p>
                    {" "}
                    <a href=''> 01608119498 (BD)</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''>718-795-8628</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''> +917890466296</a>
                  </p>
                  <p>
                    {" "}
                    <a href=''> info@bvcouncil.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row copyrightRow copyright pt-3 pb-3'>
          {/* <p className='copyright pt-3 pb-1'></p> */}
          <div class='col text-start ps-5 '>
            {" "}
            Copyright@2022 . All Right reserved by Bright View Council
          </div>
          <div class='col ps-5'>Developed and maintained by bvcouncil.com</div>
        </div>
      </div>

      {/* <div class='container-fluid'>
        <div class='row copyrightRow'>
          <div class='col'>1 orgrhg</div>
          <div class='col'>1 orhrhrh</div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

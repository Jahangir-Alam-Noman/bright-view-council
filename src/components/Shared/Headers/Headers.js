/** @format */

import React from "react";
import "./Headers.css";
import logo from "../../../images/Logo/logo-1.png";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row copyrightRow copyright pt-3 pb-3'>
          {/* <p className='copyright pt-3 pb-1'></p> */}
          {/* <div className='col text-start ps-5 '>
            {" "}
            Copyright@2022 . All Right reserved by Bright View Council
          </div>
          <div className='col ps-5'>Developed and maintained by bvcouncil.com</div> */}

          <div className='col-md-10 text-start'>
            <p>
              <a href='#' className='text-white'>
                Have any Questions ?
              </a>
              <span>
                <i className='fa fa-phone ps-3' aria-hidden='true'>
                  {" "}
                  &nbsp;+917890466296
                </i>
              </span>
              <span className='text-white'>
                <i className='fa fa-envelope-o ps-3' aria-hidden='true'>
                  {" "}
                  &nbsp; info@bvcouncil.com
                </i>
              </span>
            </p>
          </div>
          <div className='col-6 col-md-2'>
            <select
              className='form-select form-select-sm'
              aria-label='.form-select-sm example'>
              <option selected>Select Language</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
      </div>
      {/* Top nav end */}

      <nav className='navbar navbar-expand-lg  navbar-light bg-white'>
        <div className='container-fluid'>
          <Link to='/home' className='navbar-brand'>
            <img src={logo} alt='' />
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search courses...'
              aria-label='Search'
            />

            <div className='search'>
              <a href=''>
                <i className='fa fa-search pt-2' aria-hidden='true'></i>
              </a>
            </div>
          </form>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  to='/home'
                  className='nav-link active fw-bolder'
                  aria-current='page'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link fw-bolder'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link fw-bolder'>
                  Contact
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle fw-bolder'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Courses
                </a>

                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <form className='d-flex '>
                  <button
                    type='button'
                    className='btn btn-outline-dark me-3 fw-bolder'>
                    Log In
                  </button>

                  <button type='button' className='btn btn-dark'>
                    Sign Up
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className='bar'></hr>
      {/* Navber end */}

      <div class='container-fluid courses_info pt-3 pb-3 '>
        <div class='row '>
          <div class='col'>Data Science</div>
          <div class='col'>Network & Security</div>
          <div class='col'>Programming</div>
          <div class='col'>Web & Mobile</div>
          <div class='col'>Software Testimng</div>
          <div class='col'>Database</div>
          <div class='col'>Software Engineering</div>
        </div>
      </div>
    </div>
  );
};

export default Headers;

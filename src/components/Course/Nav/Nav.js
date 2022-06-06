/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/Logo/logo-1.png";

const Nav = () => {
  return (
    <div>
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
                {/* <a
                  className="nav-link dropdown-toggle fw-bolder"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a> */}

                <Link
                  to='/course'
                  className='nav-link dropdown-toggle fw-bolder'>
                  Courses
                </Link>

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
    </div>
  );
};

export default Nav;

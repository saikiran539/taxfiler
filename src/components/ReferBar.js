import React, { useState } from "react";
import { Link } from "react-router-dom";

function ReferBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#3D56B2" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-logo">
            <i class="fa fa-flag-usa"></i>
          </Link>
          <div>
            <Link to="/" className="">
              xxxx-xxxx-xxx | yyyy-yyyy-yyyy
            </Link>
          </div>
          <br />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active btn btn-primary btn-lg"
                  tabindex="-1"
                  role="button"
                  aria-current="page"
                  to="/"
                >
                  Refer your Friend
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  tabindex="-1"
                  role="button"
                  aria-current="page"
                  to="/"
                >
                  <i class="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  tabindex="-1"
                  role="button"
                  aria-current="page"
                  to="/"
                >
                  <i class="fab fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  tabindex="-1"
                  role="button"
                  aria-current="page"
                  to="/"
                >
                  <i class="fab fa-whatsapp"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ReferBar;

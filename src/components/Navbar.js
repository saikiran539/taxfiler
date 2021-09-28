import React, { useState } from "react";
import { Link } from "react-router-dom";
import elite from "../images/EliteLogo.png";

function NavMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark main-nav">
        <div className="container-fluid">
          <Link to="/" className="navbar-logo main-logo justify-content-start">
            <img src={elite} alt="MainLogo" />
          </Link>
          <br />
          {/* <Link to="/" className='navbar-logo justify-content-start logo-text'>Elite Tax Services</Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars" style={{ color: "#fff" }}></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end nav-right"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Services"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/Services">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Services">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Services">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;

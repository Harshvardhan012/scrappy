import React, { useRef } from "react";
import "./Header.css";
import logo from "../img/logo.png";

import scanner from "../img/scanner.jpeg";
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  const ref = useRef();
  const shedule = () => {
    ref.current.click();
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                <b style={{ fontWeight: "700" }}>Contact Us</b>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex contact-us">
                <img
                  src={scanner}
                  className="scanner"
                  alt="Not available"
                ></img>
                <h6>
                  <b style={{ fontWeight: "750" }}>SCAN FOR PICKUP</b>
                </h6>
                <span className="mb-2">
                  <b>OR</b>
                </span>
                <p>
                  <b className="me-2">Call Us At :</b>
                  <Link to="tel:8740903889">+918740903889</Link>
                </p>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
        ref={ref}
        style={{ display: "none" }}
      >
        Open first modal
      </button>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo" alt="SCRAPPY"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive?"color":"noncolor"}`}  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive?"color":"noncolor"}`} to="/Price">
                  Scrap-Rate
                </NavLink>
              </li>
            </ul>

            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={shedule}
            >
              <b>Schedule Pickup</b>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

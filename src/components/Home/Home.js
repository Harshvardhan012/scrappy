import React, { useRef } from "react";
import "./Home.css";
import "./Home_responsive.css";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import scanner from "../img/scanner.jpeg";
import Rate from "../Rate/Rate";
import { Link } from "react-router-dom";

const Home = () => {
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

      {/* Other Content */}
      <div className="sec_2">
        {/* left part */}
        <div className="left">
          {/* Main text */}
          <div>
            <p className="heading">
              Sell your recyclables online with{" "}
              <span style={{ color: "#bf00ff" }}>SCRAPPY</span>
            </p>
          </div>
          {/* Desc text */}
          <div>
            <p className="small-title">
              Paper - Plastics - Metals - Appliances
              <br></br>
              <button
                className="btn btn-primary custom-btn"
                style={{ backgroundColor: "green" }}
                type="submit"
                onClick={shedule}
              >
                <b>Schedule Pickup</b>
              </button>
            </p>
          </div>
        </div>

        {/* Right part */}
        <div className="right">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/10/38/recycle-310938_640.png"
              className="card-img pic1"
              alt=""
            />
            <h1 className="green-text">
              <b>Reduce</b>
            </h1>
          </div>
          <div>
            <img src={p2} className="card-img pic2" alt="" />
            <h1 className="blue-text">
              <b>Reuse</b>
            </h1>
          </div>
          <div>
            <img src={p3} className="card-img pic3" alt="" />
            <h1 className="red-text">
              <b>Recycle</b>
            </h1>
          </div>
        </div>
      </div>

      <Rate />
    </>
  );
};

export default Home;

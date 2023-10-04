"use client";
import Image from "next/image";
import React from "react";
import jobtank from "../assets/img/project/jobtank.png";
import hpd from "../assets/img/project/hpd.png";
import biometer from "../assets/img/project/biometer.png";

function Project() {
  return (
    <div>
      <br />
      <br />

      <div className="">
        <div className="col-lg-12">
          <div className="main_title text-left">
            <h2 className="text-color-white ">
              <br />
              Recent project
            </h2>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active card">
            <div className="container ">
              <div className="row">
                <div
                  className="d-flex justify-content-center align-items-center p-5 border-0"
                  style={{ backgroundColor: "#d9f8ff", borderColor: "#d9f8ff" }}
                >
                  <div
                    className="card  text-center"
                    style={{
                      backgroundColor: "#d9f8ff",
                      borderColor: "#d9f8ff",
                    }}
                  >
                    <Image
                      src={biometer}
                      className="card-img-top"
                      style="object-fit:contain;"
                      alt="Sunset over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Biometer</h5>

                      <a
                        href="https://github.com/anubhavray678/BiometerApp.git"
                        className="btn btn-info w-75 text-white"
                      >
                        Visit Project &nbsp;
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item card">
            <div className="container">
              <div className="row">
                <div
                  className="d-flex justify-content-center align-items-center p-5 border-0"
                  style={{ backgroundColor: "#d9f8ff", borderColor: "#d9f8ff" }}
                >
                  <div
                    className="card text-center"
                    style={{
                      backgroundColor: "#d9f8ff",
                      borderColor: "#d9f8ff",
                    }}
                  >
                    <Image
                      src={hpd}
                      className="card-img-top"
                      style={{ objectFit: "cover" }}
                      alt="Sunset over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Human Pose Detection</h5>

                      <a
                        href="https://github.com/anubhavray678/pose_detection.git"
                        className="btn btn-info w-75 text-white"
                      >
                        Visit Project &nbsp;
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item card">
            <div className="container">
              <div className="row">
                <div
                  className="d-flex justify-content-center align-items-center p-5 border-0"
                  style={{ backgroundColor: "#d9f8ff", borderColor: "#d9f8ff" }}
                >
                  <div
                    className="card  text-center"
                    style={{
                      backgroundColor: "#d9f8ff",
                      borderColor: "#d9f8ff",
                    }}
                  >
                    <Image
                      src={jobtank}
                      className="card-img-top"
                      style="object-fit:contain;"
                      alt="Sunset over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Jobtank</h5>

                      <a
                        href="https://github.com/anubhavray678/jobtank_website.git"
                        className="btn btn-info w-75 text-white"
                      >
                        Visit Project &nbsp;
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Project;

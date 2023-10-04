"use client";
import Image from "next/image";
import React from "react";
import banner from "../assets/img/banner/home-right.png";

function Banner() {
  return (
    <div>
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase text-color-white">Hello</h3>
                  <h1 className="text-uppercase text-color-white ">
                    I am Anubhav Ray
                  </h1>
                  <h5 className="text-uppercase text-color-white">
                    Software Development engineer
                  </h5>
                  <div className="d-flex align-items-center">
                    <a
                      className="primary_btn"
                      href="https://wa.me/918810525614"
                    >
                      <span>Hire Me</span>
                    </a>
                    <a
                      href="https://docs.google.com/document/d/1XxF3u8N2QbDZGP2mqSfOk-pyDZ7hDgzMzlkyvdSdClQ/edit"
                      className="primary_btn tr-bg"
                    >
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <Image className="card-img" src={banner} alt="" />
                </div>
                {/* @*<img class ="card-img" src="~/assets/img/banner/home-right.png"/>*@ */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;

"use client";
import Image from "next/image";
import React from "react";
import development from "../assets/img/services/development.png";
import appDev from "../assets/img/services/app-development.png";
import ui from "../assets/img/services/ui.png";
import ux from "../assets/img/services/ux.png";

function Service() {
  return (
    <div>
      <section className="features_area mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2 className="text-color-white"> service offers </h2>
                <p>
                  We offer these services <br /> You can contact for any project
                  and future Collaboration.
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={development} alt="" className="w-25" />
                <h4>Web Development</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={ui} alt="" className="w-25" />
                <h4>UI/ux design</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={ux} alt="" className="w-25" />
                <h4>Web design</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={appDev} alt="" className="w-25" />
                <h4>App Development</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;

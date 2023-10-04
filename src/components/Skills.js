"use client";
import Image from "next/image";
import React from "react";
import python from "../assets/img/services/python.png";
import cpp from "../assets/img/services/cpp.png";
import html from "../assets/img/services/HTML.png";
import css from "../assets/img/services/css.png";
import js from "../assets/img/services/js.png";
import react from "../assets/img/services/react.png";
import sql from "../assets/img/services/sql.png";
import next from "../assets/img/services/nextjs.png";
import algorithm from "../assets/img/services/algorithm.png";
import github from "../assets/img/services/github.png";
import node from "../assets/img/services/node.png";
import asp from "../assets/img/services/asp.png";

function Skills() {
  return (
    <div>
      <section className="features_area section_gap_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2 className="text-color-white">Skills </h2>
                <p>
                  You Dont Hire For Skills, You Hire For Attitude. You Can
                  Always Teach Skills.
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6 ">
              <div className="feature_item grid justify-items-center ">
                <Image src={python} alt="" className="w-25 fa-beat" />
                <h4> Python</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={cpp} alt="" className="w-25 fa-beat" />
                <h4>C++</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={html} alt="" className="w-25 fa-beat" />
                <h4>HTML</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={css} alt="" className="w-25 fa-beat" />
                <h4>CSS</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={js} alt="" className="w-25 fa-beat" />
                <h4>Javascript</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={react} alt="" className="w-25 fa-beat" />
                <h4>ReactJS</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={algorithm} alt="" className="w-25 fa-beat" />
                <h4>DSA</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={github} alt="" className="w-25 fa-beat" />
                <h4>Git and Github</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={sql} alt="" className="w-25 fa-beat" />
                <h4>SQL express</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={next} alt="" className="w-25 fa-beat" />
                <h4>Next Js</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={asp} alt="" className="w-25 fa-beat" />
                <h4>Asp.net MVC</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item grid justify-items-center">
                <Image src={node} alt="" className="w-25 fa-beat" />
                <h4>Node</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

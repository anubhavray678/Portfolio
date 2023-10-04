"use client";
import Image from "next/image";
import React from "react";
import ntpc from "../assets/img/ntpc.png";

function Work() {
  return (
    <section id="resume" className="resume mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main_title text-left">
              <h2 className="text-color-white">Experience</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title text-color-white">Objective</h3>
            <div className="resume-item pb-0">
              <h4 className="">Anubhav Kumar Ray</h4>
              <p>
                To enhance my professional skills, capabilities and knowledge in
                an organization which recognizes the value of hard work and
                trusts me with responsibilities and challenges.
              </p>
              <ul>
                <li>Noida, IND</li>
                <li>anubhavray678@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>IT Summer Intern</h4>
              <h5>2023 - Present</h5>
              <p>
                <Image
                  src={ntpc}
                  style={{ height: "40px", width: "60px" }}
                  alt=""
                />
                NTPC ltd, Noida, IND{" "}
              </p>
              <ul>
                <li>
                  Working on the design, development, and implementation of the
                  project.
                </li>
                <li>working on Asp.net MVC, SQL Server ,Bootstrap ,Jquery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;

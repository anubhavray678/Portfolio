"use client";
import Image from "next/image";
import React from "react";
import gu from "../assets/img/gu.png";
import kvs from "../assets/img/kvs.png";
function Education() {
  return (
    <div className="mt-10">
      <section className="resume-section " id="education">
        <div className="col-lg-12">
          <div className="main_title text-left">
            <h2 className="text-color-white">
              <i
                className="fa-solid fa-graduation-cap fa-beat fa-2xl"
                style={{ color: "#406dba" }}
              ></i>{" "}
              Education
            </h2>
          </div>
        </div>
        <div className="resume-section-content text-center">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1  grid justify-items-center">
              <Image
                src={gu}
                className="rounded mb-5 w-25 fa-beat"
                alt=""
                style={{ height: "120px" }}
              />
              <h3 className="mb-0 text-primary">Galgotias University</h3>
              <div className="subheading mb-3">Bachelor of Technology</div>
              <span className="text-success">2021-2025</span>
              <div>Computer Science Engineer</div>
              <p>GPA: 8.88</p>
            </div>
            <div className="flex-grow-1  grid justify-items-center">
              <Image
                src={kvs}
                className="rounded mb-5 w-25"
                alt=""
                style={{ height: "120px" }}
              />
              <h3 className="mb-0 text-primary">Kendriya Vidyalaya</h3>
              <div className="subheading mb-3">High School</div>
              <span className="text-success">2018-2020</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;

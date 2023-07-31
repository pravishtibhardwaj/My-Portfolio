import React from "react";
import { MdSchool } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles/Education.css";
const Experience = () => {
  return (
    <>
      <div
        className="education"
        id="education"
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
      >
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Experience
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<CgOrganisation />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development Intern
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              National Fertilizers Limited , Vijaipur
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;

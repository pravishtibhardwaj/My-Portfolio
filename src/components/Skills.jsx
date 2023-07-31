import React from "react";
import "./styles/Skills.css";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import {
  SiHtml5,
  SiCplusplus,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiGithub,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";
const Skills = () => {
  const tech_array = [
    {
      _id: 1,
      name: "HTML",
      icon: SiHtml5,
    },
    {
      _id: 2,
      name: "CSS",
      icon: SiCss3,
    },
    {
      _id: 3,
      name: "Javascript",
      icon: SiJavascript,
    },
    {
      _id: 4,
      name: "C++",
      icon: SiCplusplus,
    },
    {
      _id: 5,
      name: "React",
      icon: SiReact,
    },
    {
      _id: 6,
      name: "MongoDb",
      icon: SiMongodb,
    },
    {
      _id: 7,
      name: "NodeJs",
      icon: SiNodedotjs,
    },
    {
      _id: 8,
      name: "MySQL",
      icon: SiMysql,
    },
    {
      _id: 8,
      name: "EcpressJs",
      icon: SiExpress,
    },
    {
      _id: 7,
      name: "Github",
      icon: SiGithub,
    },
    {
      _id: 7,
      name: "Bootsrap",
      icon: SiBootstrap,
    },
  ];
  return (
    <div className="skills-container" id="skill" data-aos="slide-up">
      <h3
        style={{
          fontSize: "40px",
          fontWeight: "600",
          textAlign: "center",
          color: " rgba(128, 0, 128, 0.84)",
          paddingBottom: "60px",
        }}
      >
        SKILLS
      </h3>
      <div className="skills" data-aos="slide-up">
        <div
          className="circle"
          data-aos="flip-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <DevicesRoundedIcon />
          <span>Web Development</span>
        </div>
        <div
          className="circle"
          data-aos="flip-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <CodeRoundedIcon />
          <span>Problem Solving</span>
        </div>
        <div
          className="circle"
          data-aos="flip-up"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <Groups3RoundedIcon />
          <span>Team Work</span>
        </div>
      </div>
      <h3
        style={{
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
          color: " rgba(128, 0, 128, 0.84)",
          paddingBottom: "40px",
          marginTop: "10vw",
        }}
      >
        TECHNOLOGIES STACK
      </h3>
      <div className="tech-stack">
        <div
          className="tech1"
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out-quad"
        >
          {tech_array.map((ele) => (
            <div className="media">
              {" "}
              <div className="tech-item">
                <div className="icon">
                  <ele.icon className="tech-icon" />
                </div>
                <div className="name">
                  <p>{ele.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

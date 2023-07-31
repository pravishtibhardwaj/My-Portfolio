import React, { useEffect } from "react";
import profile_pic from "../Assets/final_profile.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Resume from "./Resume.jsx";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Home = () => {
  return (
    <div className="home-container " id="home">
      <div className="intro">
        <div className="right" data-aos="slide-left" data-aos-duration="800">
          <img src={profile_pic} alt="" className="img-fluid" />
        </div>
        <div
          className="left"
          data-aos="slide-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-cube"
        >
          <p className="head-text">
            Hi , I am
            <span className="myname"> PRAVISHTI BHARDWAJ</span>
          </p>
          <p className="low-text">
            A programmer with keen interest in developing Web Applications
          </p>
          <p className="myprofile">
            <Typewriter
              options={{
                strings: ["FULL-STACK DEVELOPER"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </p>

          <h6 style={{ marginTop: "6vw" }}>
            {" "}
            <Link
              to="https://drive.google.com/file/d/1mvFXRmI1uJWRxFxEioNgWnZTehiJZx0i/view?usp=sharing"
              target="_blank"
              className="home-btn"
            >
              <SaveAltIcon />
              Download Resume
            </Link>
          </h6>

          {/* <div id="profile" className="myprofile"></div>*/}
        </div>
      </div>
      <div
        className="about-me"
        id="about"
        data-aos="slide-up"
        data-aos-duration="800"
      >
        <h3 className="intro-head">
          A Brief <span>INTRODUCTION</span> About Myself{" "}
        </h3>

        <p>
          <span>Welcome to my portfolio!</span>
          <br />
          <br />I am a <span>B.Tech Computer Science</span> student eager to
          showcase my skills, projects, and achievements in the field of
          computer science and technology. <br />
          <br />
          <span className="extra-detail">
            {" "}
            Through my academic journey, I have gained a strong foundation in
            various programming languages, algorithms, data structures, and
            software development methodologies. <br />
            <br />I am committed to applying my knowledge to real-world
            challenges and creating innovative solutions.
          </span>
        </p>
      </div>

      {/* <div className="social-media" data-aos="slide-up" data-aos-duration="800">
        <div className="my-img">
          <img src="" alt="" />
        </div>
        <h3>
          <span>Connect</span> With Me On{" "}
        </h3>
        <div className="social-icons">
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div> */}
    </div>
  );
};

export default Home;

import React from "react";
import project1 from "../Assets/project_1.png";
import project2 from "../Assets/project_2.png";
import "./styles/Projects.css";
const Projects = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="project-head">
        {" "}
        <h2 style={{ textAlign: "center" }}>
          My Recent{" "}
          <span
            style={{ fontWeight: "bold", color: "rgba(128, 0, 128, 0.84)" }}
          >
            PROJECT{" "}
          </span>
          WORKS
        </h2>
      </div>

      <div className="project-container d-flex" id="projects">
        <div className="project-card-container">
          <div className="card">
            <img src={project1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">E-Commerce Web App</h4>

              <p className="card-text">
                <strong>Tech Stack :</strong> ReactJS , MongoDb , NodeJs ,
                ExpressJS
              </p>
              <p className="d-flex">
                {" "}
                <a
                  href="https://github.com/pravishtibhardwaj/ShopWay-ECommerce"
                  className="project-card-btn "
                >
                  Github Repo
                </a>
                <a
                  href="https://github.com/pravishtibhardwaj/ShopWay-ECommerce/"
                  className="project-card-btn"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="project-card-container">
          <div className="card" style={{ width: "20rem", height: "22rem" }}>
            <img src={project2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Movie-App</h4>

              <p className="card-text">
                <strong>Tech Stack :</strong> ReactJS
              </p>
              <p className="d-flex">
                <a
                  href="https://github.com/pravishtibhardwaj/Movie-app"
                  className="project-card-btn"
                >
                  Github Repo
                </a>
                <a
                  href="https://movie-app-omega-six-14.vercel.app/"
                  className="project-card-btn"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

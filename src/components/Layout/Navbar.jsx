import React from "react";
import { Link } from "react-scroll";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { NavLink } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resume from "../../Assets/201b195_Pravishti Bhardwaj.pdf";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeProvider";
const Navbar = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg   fixed-top">
        <div className="container-fluid">
          <div className="logo">
            <Link to="/" className="navbar-brand ">
              PB
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={
              theme === "dark" ? "#offcanvasNavbar" : "#offcanvasDarkNavbar"
            }
            aria-controls={
              theme === "dark" ? "offcanvasNavbar" : "offcanvasDarkNavbar"
            }
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end "
            tabIndex={-1}
            id={theme === "dark" ? "offcanvasNavbar" : "offcanvasDarkNavbar"}
            aria-labelledby={
              theme === "dark"
                ? "offcanvasNavbarLabel"
                : "offcanvasDarkNavbarLabel"
            }
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id={
                  theme === "dark"
                    ? "offcanvasNavbarLabel"
                    : "offcanvasDarkNavbarLabel"
                }
              >
                PB
              </h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-600}
                    duration={100}
                    className="nav-link"
                  >
                    <Person3OutlinedIcon /> About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={100}
                    className="nav-link nav-btn"
                  >
                    <SchoolRoundedIcon /> Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={-1500}
                    duration={100}
                    className="nav-link"
                  >
                    <ChecklistOutlinedIcon /> Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={100}
                    className="nav-link"
                  >
                    <TerminalOutlinedIcon /> Projects
                  </Link>
                </li>
                {/* <li className="nav-item">
              <Link to="/experience" className="nav-link">
                Experience
              </Link>
            </li> */}
                <li className="nav-item">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    <InventoryOutlinedIcon /> Resume
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to="contact-me"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={100}
                    className="nav-link nav-btn"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "14px",
                    }}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="change-theme" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill fontSize="20px" />
        ) : (
          <BsSun fontSize="25px" />
        )}
      </div>
      <div className="media-links">
        <div className="media-link">
          <NavLink to="https://www.linkedin.com/in/pravishti/" target="_blank">
            <LinkedInIcon /> <span className="media-name">LinkedIn</span>
          </NavLink>
        </div>
        <div className="media-link">
          <NavLink to="https://github.com/pravishtibhardwaj" target="_blank">
            <GitHubIcon />
            <span className="media-name">Github</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

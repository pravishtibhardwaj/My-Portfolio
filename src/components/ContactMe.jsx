import React from "react";
import "./styles/contact.css";
import contact_img from "../Assets/home-girl2.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const ContactMe = () => {
  return (
    <div className="contact-container" id="contact-me">
      <h1>CONTACT ME</h1>
      <div
        className="contact-img"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <img src={contact_img} alt="" />
      </div>
      <div className="contact-details">
        <strong>
          Send me an E-mail -{" "}
          <span style={{ fontSize: "18px" }}>bhard.pravi08@gmail.com</span>
        </strong>
        <div className="social-icons">
          <Link to="https://www.linkedin.com/in/pravishti/">
            <LinkedInIcon />
          </Link>
          <Link to="https://github.com/pravishtibhardwaj">
            <GitHubIcon />
          </Link>
        </div>
        <div className="message">
          <form action="">
            <label>Email</label>
            <input type="email" placeholder="your email" required />
            <textarea
              name="text"
              id=""
              cols="30"
              rows="5"
              placeholder="Your message here"
            />
            <button className="nav-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

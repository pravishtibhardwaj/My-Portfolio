import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <div className="footer">
        <h5>
          {" "}
          Designed and Developed By <strong>Pravishti Bhardwaj</strong>
        </h5>
        <h5>Copyright © {year} PB</h5>
      </div>
    </div>
  );
};

export default Footer;

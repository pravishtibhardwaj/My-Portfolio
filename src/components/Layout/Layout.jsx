import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          position: "absolute",
          top: "20%",
          zIndex: "-1",
          width: "100%",
        }}
      >
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

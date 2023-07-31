import React from "react";
import ContactMe from "./components/ContactMe.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Navbar from "./components/Layout/Navbar.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Layout/Footer.jsx";
import { useTheme } from "./components/context/ThemeProvider.jsx";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div className="my-container" id={theme}>
        <Navbar />
        <Home />
        <Education />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;

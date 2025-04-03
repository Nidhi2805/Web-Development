import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Explore from "./components/Explore";
import About from "./components/About";
import Footer from "./components/Footer";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu />
      <Explore />
      <About />
      <Footer />
    </div>
  );
};

export default Hero;

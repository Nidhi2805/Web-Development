import React from "react";
import Nav from "./components/Navbar1";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Explore from "./components/Explore";
import About from "./components/About";
import Footer from "./components/Footer";

const Hero = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Menu />
      <Explore />
      <About />
      <Footer />
    </div>
  );
};

export default Hero;

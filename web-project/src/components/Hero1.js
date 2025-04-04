import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Explore from "./Explore";
import About from "./About";
import Footer from "./Footer";

const Hero1 = () => {
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

export default Hero1;

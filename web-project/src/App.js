import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Explore from "./components/Explore";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu />
      <Explore />
    </div>
  );
}

export default Hero;
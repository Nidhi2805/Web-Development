import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname === "../Hero.js") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("../Hero.js");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleMenuClick = () => {
    if (location.pathname === "../Hero.js") {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("../Hero.js");
      setTimeout(() => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const navStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "black",
    zIndex: 1000,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const logoContainer = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const navLinks = {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    marginLeft: "60rem",
    padding: 0,
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    fontSize: "14px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginRight: "3rem",
  };

  return (
    <nav style={navStyles}>
      <div style={logoContainer}>
        <img src="/logo.png" alt="Logo" width="50" height="50" />
        <h1 style={{ fontSize: "18px", margin: 0, color: "black" }}>Flavourful Fare</h1>
      </div>
      <ul style={navLinks}>
        <li><button style={linkStyle} onClick={() => navigate("../Hero.js")}>Home</button></li>
        <li><button style={linkStyle} onClick={() => handleMenuClick("menu")}>Menu</button></li>
        <li><button style={linkStyle} onClick={() => handleScrollOrNavigate("explore")}>Explore</button></li>
        <li><button style={linkStyle} onClick={() => handleScrollOrNavigate("about")}>About</button></li>
      </ul>
      <button style={buttonStyle} onClick={() => navigate("/SignIn.js")}>Sign In</button>
    </nav>
  );
};

export default Nav;

import React from "react";

const Navbar = () => {
  const navStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "white",
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
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
  };

  const buttonStyle = {
    backgroundColor: "black", 
    color: "white",
    padding: "8px 16px",
    fontSize: "14px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginLeft: "10px", 
  };

  return (
    <nav style={navStyles}>
      <div style={logoContainer}>
        <img src="/logo.png" alt="Logo" width="50" height="50" />
        <h1 style={{ fontSize: "18px", margin: 0, color: "black" }}>Flavourful Fare</h1>
      </div>
      <ul style={navLinks}>
        <li><a href="#" style={linkStyle}>Home</a></li>
        <li><a href="#" style={linkStyle}>Menu</a></li>
        <li><a href="#" style={linkStyle}>Explore</a></li>
        <li><a href="#" style={linkStyle}>About</a></li>
      </ul>
      <button style={buttonStyle}>Order</button>
    </nav>
  );
};

export default Navbar;

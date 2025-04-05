import React from "react";
import { useNavigate } from "react-router-dom"; 

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    onSignIn(); 
    navigate("/Hero1.js"); 
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url('/bg.jpeg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative"
    }}>
      
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)", 
        backdropFilter: "blur(10px)", 
        zIndex: 1
      }}></div>

      <div style={{
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)", 
        border: "2px solid #E1DB2E", 
        borderRadius: "12px",
        padding: "30px",
        width: "400px",
        height: "360px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 2 
      }}>
        <h2 style={{
          color: "#222",
          textAlign: "center",
          fontSize: "2.2em",
          marginBottom: "40px"
        }}>Sign In</h2>

        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={{ display: "block", color: "#444", marginBottom: "6px", marginLeft: "5px" }}>Username</label>
          <input 
            type="text" 
            style={{
              width: "96%",
              padding: "12px",
              border: "1px solid #999",
              backgroundColor: "#fff",
              color: "#222", 
              borderRadius: "6px",
              outline: "none",
              marginLeft: "-3px"
            }} 
          />
        </div>

        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={{ display: "block", color: "#444", marginBottom: "6px", marginLeft: "5px" }}>Password</label>
          <input 
            type="password" 
            style={{
              width: "96%",
              padding: "12px",
              border: "1px solid #999",
              backgroundColor: "#fff",
              color: "#222",
              borderRadius: "6px",
              outline: "none",
              marginLeft: "-3px"
            }} 
          />
          <a href="#" style={{
            color: "#222",
            fontSize: "14px",
            float: "right",
            marginTop: "6px",
            textDecoration: "none"
          }}>Forgot Password?</a>
        </div>

        <button 
          style={{
            width: "100%",
            backgroundColor: "#222", 
            color: "white",
            padding: "14px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "18px",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#444"} 
          onMouseOut={(e) => e.target.style.backgroundColor = "#222"} 
          onClick={() => navigate("/Hero1.js")} 
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;

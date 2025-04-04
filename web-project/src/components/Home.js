import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    { id: 1, imgSrc: "/offer1.jpg", altText: "Offer 1" },
    { id: 2, imgSrc: "/offer2.jpg", altText: "Offer 2" },
    { id: 3, imgSrc: "/offer3.jpg", altText: "Offer 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentOffer((prevOffer) => (prevOffer + 1) % offers.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div id="home"
      style={{
        overflowX: "hidden", 
      }}
    >
      <div
        style={{
          width: "100%",
          height: "550px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", 
          marginTop: "4.5rem"
        }}
      >
        <img
          src={offers[currentOffer].imgSrc}
          alt={offers[currentOffer].altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "12rem", 
          backgroundColor: "black",
          display: "flex",
          justifyContent: "flex-start", 
          alignItems: "center",
          paddingLeft: "2rem", 
        }}
      >
        <p
  style={{
    color: "white",
    fontSize: "2.5rem", 
    fontWeight: "bold", 
    margin: 30, 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
  }}
>
  <span>Indulge</span>
  <span style={{ textAlign: "center" }}>In!</span> 
</p>

            <p
            style={{
                color: "white",
                fontSize: "1.5rem", 
                fontWeight: "normal", 
                margin: "12rem", 
            }}
            >
            Enjoy a wide variety of mouthwatering dishes, from classic comfort
            <span
                style={{
                display: "block", 
                textAlign: "center", 
                }}
            >
                foods to innovative culinary creations
            </span>
            </p>

          <button
          style={{
            backgroundColor: "white", 
            color: "black", 
            fontSize: "1.5rem", 
            padding: "1rem 2rem", 
            border: "none", 
            borderRadius: "10rem", 
            cursor: "pointer", 
            marginRight: "6rem" 
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "lightgrey")} 
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white")} 
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Home;

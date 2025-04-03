import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);

  const cuisines = [
    {
      id: 0,
      name: "Indian",
      tagline: "A Symphony of Spices and Aromas",
      description:
        "Dive into India's rich flavors with aromatic curries, tandoori delights, and fluffy naan—a celebration of bold spices.",
      image: "/indian.webp",
    },
    {
      id: 1,
      name: "Italian",
      tagline: "A Taste of Italy on Every Plate",
      description:
        "Savor Italy's rich flavors with handcrafted pasta, wood-fired pizzas, and decadent desserts—authentic tradition in every bite.",
      image: "/italian.jpg",
    },
    {
      id: 2,
      name: "Chinese",
      tagline: "Timeless Flavors, Crafted with Mastery",
      description:
        "Experience China's rich traditions with wok-tossed delights, aromatic dim sum, and bold Sichuan flavors.",
      image: "/chinese.webp",
    },
    {
      id: 3,
      name: "Mexican",
      tagline: "Vibrant Traditions, Bold Flavors",
      description:
        "Experience the fiery passion of Mexican cuisine with zesty tacos, rich moles, and fresh guacamole—a celebration of heritage.",
      image: "/mexican.jpg",
    },
    {
      id: 4,
      name: "Japanese",
      tagline: "Precision and Elegance in Every Bite",
      description:
        "Discover the delicate balance of Japanese cuisine with fresh sushi, hearty ramen, and perfectly grilled yakitori.",
      image: "/japanese.jpg",
    },
  ];

  const rotateLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cuisines.length - 1
    );
  };

  const rotateRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < cuisines.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleCardClick = (name) => {
    if (name === "Chinese") {
      window.location.href = "/Chinese.js"; 
    }
    else if(name === "Indian") {
      window.location.href = "/Indian.js"; 
    }
    else if(name === "Italian") {
      window.location.href = "/Italian.js"; 
    }
    else if(name === "Japanese") {
      window.location.href = "/Japanese.js"; 
    }
    else if(name === "Maxican") {
      window.location.href = "/Maxican.js"; 
    }
  };
  
  const getCardStyle = (index) => {
    let position = (index - activeIndex + cuisines.length) % cuisines.length;

    if (position > 2) position = position - cuisines.length;

    if (position === 0) {
      return {
        zIndex: 3,
        transform: "scale(1.1) translateZ(100px)",
        opacity: 1,
        display: "block",
      };
    } else if (position === -1) {
      return {
        zIndex: 1,
        transform: "scale(0.9) translateZ(-100px) translateX(-240px)",
        opacity: 1,
        display: "block",
      };
    } else if (position === 1) {
      return {
        zIndex: 1,
        transform: "scale(0.9) translateZ(-100px) translateX(240px)",
        opacity: 1,
        display: "block",
      };
    } else if (position === -2) {
      return {
        zIndex: 0,
        transform: "scale(0.7) translateZ(-200px) translateX(-560px)",
        opacity: 0.7,
        display: "block",
      };
    } else if (position === 2) {
      return {
        zIndex: 0,
        transform: "scale(0.7) translateZ(-200px) translateX(560px)",
        opacity: 0.7,
        display: "block",
      };
    } else {
      return {
        zIndex: 0,
        display: "none",
        opacity: 0,
      };
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold" }}>
        Our Delectable Cuisines
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "normal",
          marginTop: 0,
          padding: "0 20rem",
        }}
      >
        Explore a curated selection of exquisite cuisines, from flavorful main
        courses to fresh salads and sides, all crafted to satisfy every craving.
      </p>

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "450px",
          perspective: "1200px",
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "5%",
            zIndex: 10,
            fontSize: "3rem",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={rotateLeft}
        >
          &#8249;
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "90%",
            marginTop: "-24rem",
          }}
        >
          {cuisines.map((cuisine, index) => (
            <div
              key={cuisine.id}
              style={{
                width: "300px",
                height: "400px",
                backgroundColor: "#f4f4f4",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.5s ease-in-out",
                cursor: "pointer",
                position: "absolute",
                ...getCardStyle(index),
              }}
              onClick={() => {
                setActiveIndex(index);
                handleCardClick(cuisine.name);
              }}
            >
              <img
                src={cuisine.image}
                alt={`${cuisine.name} Cuisine`}
                style={{
                  width: "100%",
                  height: "200px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ textAlign: "center", padding: "1rem" }}>
                {cuisine.name}
              </h3>
              <h5 style={{ textAlign: "center", marginTop: "-2rem" }}>
                "{cuisine.tagline}"
              </h5>
              <p
                style={{ textAlign: "center", marginTop: "-2rem", padding: "1rem" }}
              >
                {cuisine.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            right: "5%",
            zIndex: 10,
            fontSize: "3rem",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={rotateRight}
        >
          &#8250;
        </div>
      </div>
    </div>
  );
};

export default Menu;

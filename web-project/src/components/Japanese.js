import React from "react";
import { useNavigate } from "react-router-dom"; 

const japaneseDishes = [
    { id: 1, name: "Sushi", description: "Vinegared rice with fresh seafood and vegetables.", image: "/japanese/Sushi.webp" },
    { id: 2, name: "Ramen", description: "Noodles in a rich, flavorful broth with toppings.", image: "/japanese/Ramen.jpg" },
    { id: 3, name: "Tempura", description: "Lightly battered and deep-fried seafood or vegetables.", image: "/japanese/Tempura.jpg" },
    { id: 4, name: "Takoyaki", description: "Ball-shaped snacks filled with octopus and topped with sauce.", image: "/japanese/Takoyaki.jpg" },
    { id: 5, name: "Okonomiyaki", description: "Savory Japanese pancake with various ingredients.", image: "/japanese/Okonomiyaki.jpeg" },
    { id: 6, name: "Yakitori", description: "Grilled chicken skewers with a sweet-savory glaze.", image: "/japanese/Yakitori.jpeg" },
    { id: 7, name: "Miso Soup", description: "Traditional soup with miso paste, tofu, and seaweed.", image: "/japanese/MisoSoup.jpeg" },
    { id: 8, name: "Onigiri", description: "Rice balls wrapped in seaweed, often with fillings.", image: "/japanese/Onigiri.jpeg" },
    { id: 9, name: "Matcha Ice Cream", description: "Creamy green tea-flavored ice cream.", image: "/japanese/MatchaIceCream.jpeg" },
    { id: 10, name: "Dorayaki", description: "Sweet pancakes filled with red bean paste.", image: "/japanese/Dorayaki.jpeg" }
];

const Japanese = () => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Taste of Japan</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Discover the Delicacies of Japanese Cuisine</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {japaneseDishes.map((dish) => (
                    <div 
                        key={dish.id} 
                        style={{
                            width: "250px",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            textAlign: "center",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "pointer"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img 
                            src={dish.image} 
                            alt={dish.name} 
                            style={{ 
                                width: "100%", 
                                height: "160px", 
                                objectFit: "cover" 
                            }} 
                        />
                        <div style={{ padding: "15px", flexGrow: 1 }}>
                            <h3 style={{ fontSize: "1.5rem", marginTop: "10px" }}>{dish.name}</h3>
                            <p style={{ fontSize: "1rem", color: "#666" }}>{dish.description}</p>
                        </div>
                        <button style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#ff704d",
                            color: "white",
                            fontSize: "1rem",
                            border: "none",
                            cursor: "pointer",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            transition: "background 0.3s"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#cc0000"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#ff704d"}
                        onClick={() => navigate("/Addcart.js")}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Japanese;

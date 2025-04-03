import React from "react";
import { useNavigate } from "react-router-dom"; 

const dishes = [
    { id: 1, name: "Kung Pao Chicken", description: "Spicy, nutty stir-fried chicken with peanuts.", image: "/chinese/kungpao.jpeg" },
    { id: 2, name: "Sweet & Sour Pork", description: "Crispy pork in tangy sweet & sour sauce.", image: "/chinese/sweetsourpork.webp" },
    { id: 3, name: "Dim Sum", description: "A variety of bite-sized steamed dumplings.", image: "/chinese/dimsum.webp" },
    { id: 4, name: "Peking Duck", description: "Crispy roasted duck served with pancakes.", image: "/chinese/pekingduck.jpg" },
    { id: 5, name: "Chow Mein", description: "Stir-fried noodles with vegetables & meat.", image: "/chinese/chowmein.jpg" },
    { id: 6, name: "Mapo Tofu", description: "Spicy tofu dish with minced pork & chilies.", image: "/chinese/mapotofu.jpg" },
    { id: 7, name: "Hot & Sour Soup", description: "Savory soup with mushrooms and tofu.", image: "/chinese/hotsour.jpg" },
    { id: 8, name: "Spring Rolls", description: "Crispy rolls stuffed with veggies & meat.", image: "/chinese/springrolls.jpeg" },
    { id: 9, name: "Fried Rice", description: "Classic fried rice with eggs & veggies.", image: "/chinese/friedrice.jpg" },
    { id: 10, name: "Wonton Soup", description: "Dumpling soup with a light broth.", image: "/chinese/wonton.jpeg" }
];

const Chinese = () => {
    const navigate = useNavigate(); 

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Imperial Feast</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Where Tradition Meets the Perfect Bite</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {dishes.map((dish) => (
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

export default Chinese;

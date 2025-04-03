import React from "react";
import { useNavigate } from "react-router-dom"; 

const italianDishes = [
    { id: 1, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and fresh basil.", image: "/italian/pizza.jpg" },
    { id: 2, name: "Lasagna", description: "Layered pasta with rich meat sauce and creamy béchamel.", image: "/italian/Lasagna.jpg" },
    { id: 3, name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, pancetta, and pepper.", image: "/italian/SpaghettiCarbonara.jpeg" },
    { id: 4, name: "Risotto", description: "Creamy Italian rice dish cooked with broth and Parmesan.", image: "/italian/Risotto.jpg" },
    { id: 5, name: "Tiramisu", description: "Coffee-flavored Italian dessert with layers of mascarpone.", image: "/italian/Tiramisu.jpg" },
    { id: 6, name: "Fettuccine Alfredo", description: "Pasta tossed in a rich and creamy Parmesan sauce.", image: "/italian/FettuccineAlfredo.jpg" },
    { id: 7, name: "Bruschetta", description: "Grilled bread topped with fresh tomatoes and basil.", image: "/italian/Bruschetta.jpeg" },
    { id: 8, name: "Gnocchi", description: "Soft potato dumplings served with sauce.", image: "/italian/Gnocchi.jpg" },
    { id: 9, name: "Panna Cotta", description: "Silky Italian dessert topped with fruit or caramel.", image: "/italian/PannaCotta.jpg" },
    { id: 10, name: "Caprese Salad", description: "Fresh tomatoes, mozzarella, basil, and olive oil.", image: "/italian/CapreseSalad.jpeg" }
];

const Italian = () => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>La Bella Italia</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Savor the Authentic Taste of Italy</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {italianDishes.map((dish) => (
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

export default Italian;

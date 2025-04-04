import React, { useState } from "react";
import Navbar from "./Navbar";

const dishes = [
    { id: 1, name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken.", image: "/indian/ButterChicken.png" },
    { id: 2, name: "Margherita Pizza", description: "Classic Italian pizza with fresh tomatoes and basil.", image: "/italian/pizza.jpg" },
    { id: 3, name: "Sushi", description: "Traditional Japanese rice rolls with fresh fish.", image: "/japanese/sushi.webp" }
];

const AddtoCart = () => {
    const [quantities, setQuantities] = useState(dishes.reduce((acc, dish) => ({ ...acc, [dish.id]: 1 }), {}));

    const [address, setAddress] = useState("");

    const increment = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const decrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
    };

    return (
        <div style={{ textAlign: "center" }}> 
            <Navbar />
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", marginTop: "6rem" }}>Cart</h1>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {dishes.map((dish) => (
                    <div key={dish.id} style={{
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
                    }}>
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

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            backgroundColor: "#f0f0f0"
                        }}>
                            <button 
                                onClick={() => decrement(dish.id)}
                                style={{
                                    padding: "5px 10px",
                                    fontSize: "1.2rem",
                                    border: "none",
                                    backgroundColor: "#ff4d4d",
                                    color: "white",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    marginRight: "10px"
                                }}
                            >
                                -
                            </button>
                            
                            <span style={{ fontSize: "1.2rem", fontWeight: "bold", minWidth: "30px" }}>
                                {quantities[dish.id]}
                            </span>

                            <button 
                                onClick={() => increment(dish.id)}
                                style={{
                                    padding: "5px 10px",
                                    fontSize: "1.2rem",
                                    border: "none",
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    marginLeft: "10px"
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <label style={{ fontSize: "1.5rem", fontWeight: "bold", marginRight: "10px" }}>Address:</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your delivery address..."
                    style={{
                        padding: "10px",
                        fontSize: "1rem",
                        width: "46%",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        outline: "none"
                    }}
                />
            </div>

            <div style={{ marginTop: "2rem" }}>
                <button 
                    style={{
                        padding: "15px 30px",
                        fontSize: "1.5rem",
                        backgroundColor: "#2E8B57",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s"
                    }}
                    onClick={() => alert("Proceeding to Payment...")}
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
}

export default AddtoCart;

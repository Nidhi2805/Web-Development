import React from "react";
import { useNavigate } from "react-router-dom"; 

const dishes = [
    { id: 1, name: "Tacos al Pastor", description: "Marinated pork tacos topped with pineapple, onions, and cilantro.", image: "/mexican/TacosAlPastor.png" },
    { id: 2, name: "Burritos", description: "Flour tortillas stuffed with seasoned meat, beans, cheese, and veggies.", image: "/mexican/Burritos.png" },
    { id: 3, name: "Enchiladas", description: "Corn tortillas filled with meat or cheese, smothered in chili sauce.", image: "/mexican/Enchiladas.png" },
    { id: 4, name: "Quesadillas", description: "Grilled tortillas filled with melted cheese and your choice of meat or veggies.", image: "/mexican/Quesadillas.png" },
    { id: 5, name: "Nachos", description: "Tortilla chips topped with cheese, jalapeños, beans, and salsa.", image: "/mexican/Nachos.png" },
    { id: 6, name: "Chiles Rellenos", description: "Roasted poblano peppers stuffed with cheese or meat, dipped in egg batter, and fried.", image: "/mexican/ChilesRellenos.png" },
    { id: 7, name: "Guacamole", description: "Roasted poblano peppers stuffed with cheese or meat, dipped in egg batter, and fried.", image: "/mexican/Guacamole.png" },
    { id: 8, name: "Tamales", description: "Steamed masa dough stuffed with meats, cheese, or veggies, wrapped in corn husks.", image: "/mexican/Tamales.png" },
    { id: 9, name: "Pozole", description: "Hearty soup made with hominy, pork, and red or green chili broth.", image: "/mexican/Pozole.png" },
    { id: 10, name: "Churros", description: "Deep-fried dough sticks coated in cinnamon sugar, often served with chocolate sauce.", image: "/mexican/Churros.png" }
];


const MexicanFood = () =>{
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>THE FIESTA MENU</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Where Every Bite Dances with Spice</p>

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

export default MexicanFood;
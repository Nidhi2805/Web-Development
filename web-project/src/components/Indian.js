import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; 


const dishes = [
    { id: 1, name: "Butter Chicken", description: "Tender chicken cooked in a creamy tomato sauce with Indian spices.", image: "/indian/ButterChicken.png" },
    { id: 2, name: "Paneer Tikka", description: "Grilled cottage cheese cubes marinated with yogurt and spices.", image: "/indian/PaneerTikka.png" },
    { id: 3, name: "Biryani", description: "Aromatic rice dish with flavorful spices and tender meat or veggies.", image: "/indian/Biryani.png" },
    { id: 4, name: "Masala Dosa", description: "Crispy, thin pancake filled with spiced potato stuffing.", image: "/indian/MasalaDosa.png" },
    { id: 5, name: "Rogan Josh", description: "Slow-cooked lamb in a rich, aromatic curry sauce.", image: "/indian/RoganJosh.png" },
    { id: 6, name: "Palak Paneer", description: "Cottage cheese cubes cooked in creamy spinach gravy.", image: "/indian/PalakPaneer.png" },
    { id: 7, name: "Chole Bhature", description: "Spicy chickpea curry served with fluffy deep-fried bread.", image: "/indian/CholeBhature.png" },
    { id: 8, name: "Samosa", description: "Deep-fried pastry filled with spicy potato and peas.", image: "/indian/Samosa.png" },
    { id: 9, name: "Tandoori Chicken", description: "Chicken marinated with yogurt and spices, roasted to perfection.", image: "/indian/TandooriChicken.png" },
    { id: 10, name: "Gulab Jamun", description: "Soft, spongy milk solids soaked in rose-flavored syrup.", image: "/indian/GulabJamun.png" }
];

 
const Indian = () =>{
    const navigate = useNavigate(); 
    return (
        <div style={{ textAlign: "center" }}> 
            <Navbar />
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem", marginTop: "6rem" }}>Spice Kingdom</h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Where Every Dish Tells a Royal Tale</p>

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

export default Indian;
import React from "react";

const dishes = [
    { id: 1, name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken.", image: "/butterchicken.jpg" },
    { id: 2, name: "Margherita Pizza", description: "Classic Italian pizza with fresh tomatoes and basil.", image: "/pizza.jpg" },
    { id: 3, name: "Sushi", description: "Traditional Japanese rice rolls with fresh fish.", image: "/sushi.webp" }
];

const AddtoCart = () => {
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Cart</h1>

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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddtoCart;

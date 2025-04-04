import React from "react";

const About = () => {
    const styles = {
        container: {
            backgroundColor: "black",
            color: "white",
            height: "46vh", 
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            position: "relative",
            flexDirection: "column" 
        },
        topSection: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingTop: "20px"
        },
        image: {
            width: "3rem", 
            height: "3rem",
            marginLeft: "2rem",
            marginTop: "5rem"
        },
        text: {
            fontSize: "2.5rem",
            marginLeft: "1rem",
            marginTop: "7rem"
        },
        topRightText: {
            position: "absolute",
            top: "0rem",
            right: "48rem",
            fontSize: "3rem"
        },
        subText: {
            position: "absolute",
            top: "6rem",
            right: "20.5rem",
            fontSize: "1.2rem",
            color: "gray",
            width: "40rem"
        },
        rectangle: {
            backgroundColor: "white",
            width: "50%",  
            height: "4.5rem", 
            position: "absolute",
            bottom: "4rem", 
            left: "62%",
            transform: "translateX(-50%)",
            borderRadius: "4rem", 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", 
            padding: "0 1.5rem"
        },
        rectangleText: {
            color: "gray",
            fontSize: "1.2rem",
            marginLeft: "1rem"
        },
        button: {
            backgroundColor: "black",
            color: "lightgrey",
            border: "none",
            padding: "0.5rem 2rem",
            borderRadius: "2rem",
            cursor: "pointer",
            fontSize: "1rem"
        }
    };

    return (
        <div id="about" style={styles.container}>
            <p style={styles.topRightText}>Our Story</p>
            <p style={styles.subText}>
                At Flavourful Fare, we combine great food with modern convenience, delivering exceptional meals right to your doorstep.
            </p>
            <div style={styles.topSection}>
                <img src="/meet.png" alt="About Us" style={styles.image} />
                <p style={styles.text}>About Us</p>
            </div>
            <div style={styles.rectangle}>
                <p style={styles.rectangleText}>Behind every order is a team of</p>
                <button style={styles.button}>Learn More</button>
            </div>
        </div>
    );
}

export default About;

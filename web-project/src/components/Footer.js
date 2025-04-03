import React from "react";

const Footer = () => {
    const styles = {
        container: {
            backgroundColor: "#232323",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            overflowY: "hidden"
        },
        leftSection: {
            display: "flex",
            alignItems: "center"
        },
        image: {
            width: "3rem", 
            height: "3rem",
            marginLeft: "4rem"
        },
        text: {
            color: "gray",
            fontSize: "1.5rem",
            marginLeft: "1rem"
        },
        rightSection: {
            display: "flex",
            gap: "2rem",
            marginRight: "4rem"
        },
        rightImage: {
            width: "2.5rem",
            height: "2.5rem"
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.leftSection}>
                <img src="/footerlogo.png" alt="Footer Logo" style={styles.image} />
                <p style={styles.text}>Flavourful Fare</p>
            </div>
            <div style={styles.rightSection}>
                <img src="/youtube.png" alt="Image 1" style={styles.rightImage} />
                <img src="/facebook.png" alt="Image 2" style={styles.rightImage} />
                <img src="/instagram.png" alt="Image 3" style={styles.rightImage} />
                <img src="/twitter.png" alt="Image 4" style={styles.rightImage} />
            </div>
        </div>
    );
}

export default Footer;
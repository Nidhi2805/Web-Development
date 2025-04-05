import React from "react";

const Footer = () => {
    const styles = {
        container: {
            backgroundColor: "#232323",
            minHeight: "10vh", // ✅ Let it expand if content overflows
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            overflowY: "hidden",
            flexWrap: "wrap" // ✅ Allows wrapping on smaller screens
        },
        leftSection: {
            display: "flex",
            alignItems: "flex-start", // ✅ Align items at the top to fit multi-line contributions
            gap: "1.5rem",
            flexWrap: "wrap",
            marginLeft: "4rem"
        },
        image: {
            width: "3rem", 
            height: "3rem"
        },
        text: {
            color: "gray",
            fontSize: "1.5rem",
            marginTop: "0.5rem"
        },
        contributionContainer: {
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: "0.9rem",
            lineHeight: "1.5"
        },
        contributionTitle: {
            fontWeight: "bold",
            marginBottom: "0.2rem"
        },
        rightSection: {
            display: "flex",
            gap: "2rem",
            marginRight: "4rem",
            marginTop: "1rem"
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

                <div style={styles.contributionContainer}>
                    <p style={styles.contributionTitle}>Contributions:</p>
                    <p>Nidhi Anand Karva (23BDS0031) </p>
                    <p>Aditya Atul Deshmukh (23BAI0072) </p>
                    <p>Nakul Dipesh Kamdar (23BAI0120) </p>
                </div>
            </div>

            <div style={styles.rightSection}>
                <img src="/youtube.png" alt="YouTube" style={styles.rightImage} />
                <img src="/facebook.png" alt="Facebook" style={styles.rightImage} />
                <img src="/instagram.png" alt="Instagram" style={styles.rightImage} />
                <img src="/twitter.png" alt="Twitter" style={styles.rightImage} />
            </div>
        </div>
    );
};

export default Footer;

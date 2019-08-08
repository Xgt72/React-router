import React, { Component } from "react";

class Home extends Component {
    render() {
        const styles = {
            padding: "1rem",
            margin: "2rem",
            fontSize: "1.5rem"
        };
        return (
            <p style={styles}>Bienvenue sur l'accueil.</p>
        );
    }
}

export default Home;
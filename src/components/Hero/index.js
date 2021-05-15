import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="jumbotron text-center" style={{ backgroundColor: `skyblue` }}>
      <h1>Search Users</h1>
      <p>Use the text below to search for a name. Use 🔃 to sort names ascending or descending alphabetically by first name.</p>
    </div>
  );
}

export default Hero;

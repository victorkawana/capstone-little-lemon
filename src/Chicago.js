import React from "react";
import "./App.css";
import marioAndAdrian from "./assets/Mario and Adrian b.jpg"

function Chicago() {
    return (
        <div className="restaurant">
            <h2> Little Lemon</h2>
            <p className="restaurant-subtitle"> Chicago </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
            <img src={marioAndAdrian} />
        </div>
    )
}

export default Chicago
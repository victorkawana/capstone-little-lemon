import React from "react";
import mainImage from './assets/restauranfood.jpg'

function Main() {
    return (
        <main>
            <div className="main-grid">
                <h1>Little Lemon</h1>
                <h2>Chigago</h2>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <button>Reserve a table</button>
                <img className="main-image" src={mainImage} />
            </div>
        </main>
    )
}

export default Main
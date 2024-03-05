import React from "react";
import "./App.css";

function Specials() {
    return(
        <>
            <div className="week-specials-title">
                <h3>This Week Specials!</h3>
            </div>

            <div className="week-specials">
                <div className="week-specials-1">
                    <h3>Greek Salad</h3>
                    <p>$12.99</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

                <div className="week-specials-2">
                    <h3>Greek Salad</h3> <p>$12.99</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>
            
                <div className="week-specials-3">
                    <h3>Greek Salad</h3>
                    <p>$12.99</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>
            </div>
            <div>
                <button>Online Menu</button>
            </div>
        </>
    )
}

export default Specials;
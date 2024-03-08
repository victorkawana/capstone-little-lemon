import React from "react";
import "./App.css";
import iconAvatar from "./assets/batman.png"


function Testimonials() {
    return (
        <div className="testimonials-section">
            <div className="testimonials-title">
                <h2>Testimonials</h2>
            </div>
            <div className="testimonials-group">
                <div className="testimonal-1">
                    <h3>Bruce</h3>
                    <img src={iconAvatar}/>
                    <p className="rating">5 ★</p>
                    <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

                <div className="testimonal-2">
                    <h3>Bruce</h3>
                    <img src={iconAvatar}/>
                    <p className="rating">5 ★</p>
                    <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

                <div className="testimonal-3">
                    <h3>Bruce</h3>
                    <img src={iconAvatar}/>
                    <p className="rating">5 ★</p>
                    <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
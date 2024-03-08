import React from "react";
import "./App.css";
import imageAvatar from "./assets/avatar.svg"

function Testimonials() {
    return (
        <>
            <div className="testimonials-title">
                <h2>Test</h2>
            </div>
            <div className="testimonials-group">
                <div className="testimonal-1">
                    <h6>John</h6>
                    <img src="{avatarImage}"></img>
                    <p className="rating">5 star</p>
                    <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

                <div className="testimonal-2">
                    <h6>John</h6>
                    <img></img>
                    <p className="rating">5 star</p>
                    <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

                <div className="testimonal-3">
                    <h6>John</h6>
                    <img></img>
                    <p className="rating">5 star</p>
                    <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci sit amet odio triste.</p>
                </div>

            </div>
        </>
    )
}

export default Testimonials
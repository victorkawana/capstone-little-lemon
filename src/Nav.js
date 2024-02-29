import React from "react";
import "./App.css";
import littleLemonLogo from './assets/Logo.svg';


function Nav() {
    return (
        <nav className="navigation">
            <div className="img-box">
                <a href="/">
                    <img src={littleLemonLogo} alt="Restaurant Logo"/>
                </a>
            </div>
            <div class="box box1"><a href="/">HOME</a></div>
            <div class="box box2"><a href="/about">ABOUT</a></div>
            <div class="box box3"><a href="/menu">MENU</a></div>
            <div class="box box4"><a href="/reservations">RESERVATIONS</a></div>
            <div class="box box5"><a href="/order">ORDER ONLINE</a></div>
            <div class="box box7"><a href="/login">LOGIN</a></div>
        </nav>
    )
}

export default Nav
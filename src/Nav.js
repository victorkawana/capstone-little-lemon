import React from "react";
import "./App.css";
import littleLemonLogo from './assets/Logo.svg';
import {Routes , Route, Link} from 'react-router-dom';
import Chicago from './Chicago';

function Nav() {
    return (
        <>
            <nav className="navigation">
                <div className="img-box">
                    <a href="/">
                        <img src={littleLemonLogo} alt="Restaurant Logo"/>
                    </a>
                </div>
                <Link to="/chicago" className="box box1">HOME</Link>
                <div class="box box2"><a href="/about">ABOUT</a></div>
                <div class="box box3"><a href="/menu">MENU</a></div>
                <div class="box box4"><a href="/reservations">RESERVATIONS</a></div>
                <div class="box box5"><a href="/order">ORDER ONLINE</a></div>
                <div class="box box7"><a href="/login">LOGIN</a></div>
            </nav>

            <Routes>
                <Route path="/chicago" element={<Chicago />}></Route>
            </Routes>
        </>
    )
}

export default Nav
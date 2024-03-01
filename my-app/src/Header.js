import React from "react";
import littleLemonLogo from './assets/Logo.svg';

function Header() {
    return (
        <header>
            <img src={littleLemonLogo} alt="Restaurant Logo"/>
        </header>
    )
}

export default Header
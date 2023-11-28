import React from 'react';
import './stylesheets/nav.css'
import logowhite from './images/logo-bookmark-white.svg'

const NavFooter:React.FC=()=>{

    return(
        <div className="nav-section">
            <div className="logo">
                <img src={logowhite}></img>
            </div>
            <div className="nav-bar">
                <nav id='--nav'>
                    <ul id='--list'>
                        <li>FEATURES</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
                <button id='--login'>LOGIN</button>
            </div>
        </div>
    )
}

export default NavFooter;
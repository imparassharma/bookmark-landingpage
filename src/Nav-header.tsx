import React from 'react';
import './stylesheets/nav.css'
import logo from './images/logo-bookmark.svg'

const NavHeader:React.FC=()=>{

    return(
        <div className="nav-section">
            <div className="logo">
                <img src={logo}></img>
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

export default NavHeader;
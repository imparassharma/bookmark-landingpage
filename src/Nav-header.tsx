import React from 'react';
import './stylesheets/nav.css'
import logo from './images/logo-bookmark.svg'
import mobileDrop from './images/icon-hamburger.svg'
import whitelogo from './images/white-logo-mobile.svg'
import exit from './images/icon-close.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'

const NavHeader:React.FC=()=>{


    const handleMenu = (e:React.MouseEvent<HTMLElement>)=>{
        const mobileNav = document.getElementById('--mobile-nav');
        const mobileNavBar = document.getElementById('--mobile-nav-bar');
        const navsection = document.getElementById('--mobileSection');
        mobileNav?.classList.add('hidden');
        mobileNavBar?.classList.remove('hidden');
    }

    const handleExit = (e:React.MouseEvent<HTMLElement>)=>{
        const mobileNav = document.getElementById('--mobile-nav');
        const mobileNavBar = document.getElementById('--mobile-nav-bar');
        mobileNav?.classList.remove('hidden');
        mobileNavBar?.classList.add('hidden');
    }
    
    return(
        <div className="nav-desktop-mobile">
            <div className="desktop-section" id='--desktopSection'>
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
            <div className="mobile-section hidden" id='--mobileSection'>
                <div className="mobile-nav"  id='--mobile-nav'>
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                    <img src={mobileDrop} onClick={handleMenu}></img>
                </div>
                <div className="nav-bar hidden" id='--mobile-nav-bar'>
                    <div className="white-logo">
                        <img src={whitelogo}></img>
                        <img src={exit} id='--exit' onClick={handleExit}></img>
                    </div>
                    <nav id='--nav'>
                        <ul id='--list'>
                            <li>FEATURES</li>
                            <li className='inner-list'>PRICING</li>
                            <li>CONTACT</li>
                        </ul>
                    </nav>
                    <button id='--login'>LOGIN</button>
                    <div className="social-media">
                        <img src={facebook} alt='facebook-logo'/>
                        <img src={twitter} alt='twitter-logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavHeader;
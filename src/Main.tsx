import React from 'react'
import './stylesheets/style.css'
import NavHeader from './Nav-header'
import NavFooter from './Nav-footer'
import bgHome from './images/illustration-hero.svg'
import dots from './images/bg-dots.svg'
import feature1 from './images/illustration-features-tab-1.svg'
import feature2 from './images/illustration-features-tab-2.svg'
import feature3 from './images/illustration-features-tab-3.svg'
import opera from './images/logo-opera.svg'
import chrome from './images/logo-chrome.svg'
import firefox from './images/logo-firefox.svg'
import dropdown from './images/icon-arrow.svg'
import whitelogo from './images/logo-bookmark-white.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import warning from './images/icon-error.svg'
import dropup from './images/icon-red-arrow.svg'
import { transform } from 'typescript'

const Main:React.FC=()=>{

    const handleFeature = (e:React.MouseEvent<HTMLElement>)=>{
        
        const allFeatures = document.querySelectorAll('.feature-row h3');
        allFeatures.forEach((feature) => {
            const h3Element = feature as HTMLElement;
            h3Element.style.borderBottom = '5px solid rgba(128, 128, 128, 0.215)'; // Set the original border-bottom color here
            h3Element.style.color = 'hsl(229, 8%, 60%)';
        });

        const id = e.currentTarget.id;
        const feature  = document.getElementById(`${id}`);
        if(feature){
            feature.style.borderBottom = "5px solid hsl(0, 94%, 66%)";
            feature.style.color = ' hsl(229, 31%, 21%)'
        }
    }

    const handleEmail = (e:React.MouseEvent<HTMLElement>)=>{
        const email = document.getElementById('--email-input') as HTMLInputElement;
        const warningInput = document.getElementById('--warning-input');
        const error = document.getElementById('--error-icon');
        let email_value = email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        email_value = email_value.trim();

        if(!emailRegex.test(email_value)){
            warningInput?.classList.remove('hidden');
            email.style.border = '2px solid red';
            error?.classList.remove('hidden');
        }
        else{
            warningInput?.classList.add('hidden');
            email.style.border = '2px solid transparent';
            error?.classList.add('hidden');
        }

    }

    const handleFaq = (e: React.MouseEvent<HTMLElement>) => {
        const answer = e.currentTarget.nextSibling as HTMLElement;
        const arrowbtn = e.currentTarget.lastChild as HTMLImageElement;
    
        if (answer.classList.contains('hidden')) {
            arrowbtn.src = dropup;
            arrowbtn.style.transform = 'rotate(180deg)';
        } else {
            arrowbtn.src = dropdown;
            arrowbtn.style.transform = 'rotate(0deg)';
        }
    
        answer.classList.toggle('hidden'); // Toggle the visibility of the answer
    };
    
    

    return(
        <div className="main-section">
            <header>
                <NavHeader/>
            </header>
            <div className="home-section">

                <div className="leftSection-home">
                    <h1>A simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize you favourite websites. Open a new bfaqsser tab and see your sites load instantly. Try it for free.</p>
                    <div className="buttons-home">
                        <button className='btn'>Get it on Chrome</button>
                        <button className='btn' id='--whiteBtn'>Get it on Firefox</button>
                    </div>
                </div>
                <div className="rightSection-home">
                    <div className="overlay1 overlay"></div>
                    <img src={bgHome} alt='bg-img'></img>
                </div>

            </div>

            <div className="feature-section">

                <h2>Features</h2>
                <p id='feature-text'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your devices so you can access them on the go.</p>
                <div className="feature-row">
                    <h3 id='--feature-bookmark' onClick={handleFeature}>Simple Bookmarking</h3>
                    <h3 id='--feature-search' onClick={handleFeature}>Speedy Searching</h3>
                    <h3 id='--feature-share' onClick={handleFeature}>Easy Sharing</h3>
                </div>
                <div className="feature-page">
                    <div className="leftSection-feature">
                        <div className='overlay2 overlay'></div>
                        <img src={feature1} alt='img'></img>
                    </div>
                    <div className="rightSection-feature">
                        <h2>Bookmark in one click</h2>
                        <p>Organize your bookmark however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <button className='btn' id='--moreinfo-btn'>More Info</button>
                    </div>
                </div>

            </div>

            <div className="download-section">

                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                <div className="download-row">
                    <div className="card1 card">
                        <img src={chrome} alt='chrome-img'/>
                        <h3>Add to chrome</h3>
                        <p>Minimum version 62</p>
                        <img src={dots}/>
                        <button className='btn'>Add & Install Extension</button>
                    </div>
                    <div className="card2 card">
                        <img src={firefox} alt='firefox-mg'/>
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                        <img src={dots}/>
                        <button className='btn'>Add & Install Extension</button>
                    </div>
                    <div className="card3 card">
                        <img src={opera} alt='opera-img'/>
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                        <img src={dots}/>
                        <button className='btn'>Add & Install Extension</button>
                    </div>
                </div>

            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                <div className="faq-container">
                    <div className="faqs">
                        
                        <div className="question-row" onClick={handleFaq}>
                            <h3>What is Bookmark?</h3>
                            <img src={dropdown} alt='drop-icon' id='--ques1-dropdown'/>
                        </div>
                        <div className="answer-row hidden">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus neque reiciendis possimus ex vel cumque, officia ipsum aliquam beatae eos eveniet, voluptate rem, corrupti iusto. At, consequatur quas? Facilis, fuga.</p>
                        </div>
                    </div>
                    <div className="faqs inner-row">
                        <div className="question-row" onClick={handleFaq}>
                            <h3>How can I request a new bfaqsser?</h3>
                            <img src={dropdown} alt='drop-icon' id='--ques2-dropdown'/>
                        </div>
                        <div className="answer-row hidden">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus neque reiciendis possimus ex vel cumque, officia ipsum aliquam beatae eos eveniet, voluptate rem, corrupti iusto. At, consequatur quas? Facilis, fuga.</p>
                        </div>
                    </div>
                    <div className="faqs inner-row">
                        <div className="question-row" onClick={handleFaq}>
                            <h3>Is there a mobile app?</h3>
                            <img src={dropdown} alt='drop-icon' id='--ques3-dropdown'/>
                        </div>
                        <div className="answer-row hidden">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus neque reiciendis possimus ex vel cumque, officia ipsum aliquam beatae eos eveniet, voluptate rem, corrupti iusto. At, consequatur quas? Facilis, fuga.</p>
                        </div>
                    </div>
                    <div className="faqs inner-row">
                        <div className="question-row" onClick={handleFaq}>
                            <h3>What about other chromium browsers?</h3>
                            <img src={dropdown} alt='drop-icon' id='--ques4-dropdown'/>
                        </div>
                        <div className="answer-row hidden">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus neque reiciendis possimus ex vel cumque, officia ipsum aliquam beatae eos eveniet, voluptate rem, corrupti iusto. At, consequatur quas? Facilis, fuga.</p>
                        </div>
                    </div>
                </div>
                <button className='btn' id='--moreinfo-btn'>More Info</button>
            </div>

            <div className="contact-section">
                <p>35,000+ ALREADY JOINED</p>
                <h2>Stay up-to-date with what we're doing</h2>
                <div className="input-section">
                    <div className="input-box">
                        <div className="input-row">
                            <input placeholder='Enter your email address' id='--email-input' ></input>
                            <img className='error hidden' src={warning} alt='error-icon' id='--error-icon'/>
                        </div>
                        <div className="warning-input hidden" id='--warning-input'>Whoops, make sure it's an email.</div>
                    </div>
                    <button className='btn' onClick={handleEmail}>Contact Us</button>
                </div>
            </div>

            <footer>
                <div className="footer-section">
                    <NavFooter/>
                    <div className="social-media">
                        <img src={facebook} alt='facebook-logo'/>
                        <img src={twitter} alt='twitter-logo'/>
                    </div>
                </div>
            </footer>

        </div>
    )

}


export default Main;
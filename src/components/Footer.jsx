import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-style">
           <div className="footerp1">
                <cite>Mention Illégales</cite>
                <cite>A propos</cite>
           </div>
           <div className="footerp2">
               <img src="logoFb"></img>
               <img src="logoTwitter"></img>
               <img src="logoInsta"></img>
           </div>
        </div>
    )
}

export default Footer;
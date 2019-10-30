import React from 'react';
import './Footer.css';
import LogoFaceBook from '../assets/facebook.png';
import LogoTwitter from '../assets/twitter.png';
import LogoWild from '../assets/wild.jpg';
import LogoInstagram from '../assets/instagram.png';

function Footer() {
    return (
        <div className="footer-style">
            <div className="footerp1">
                <p>Mention Illégales</p>
                <p>A propos</p>
            </div>
            <div className="footerp2">
                <img src={LogoFaceBook} alt="FaceBook" />
                <img src={LogoInstagram} alt="Instagram" />
                <img src={LogoTwitter} alt="Twitter" />
                <img id="LogoWild" src={LogoWild} alt="Wild"/>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import './css/footer.css';
import LogoFaceBook from './assets/facebook.png';
import LogoTwitter from './assets/twitter.png';
import LogoWild from './assets/wild.jpg';
import LogoInstagram from './assets/instagram.png';

function Footer() {
    // Affichage du footer
    return (
        <div className="footer-style">
            <div className="footerp1">
                <p className="para-footer">Mention Illégales</p>
                <p className="para-footer">A propos</p>
            </div>
            <div className="footerp2">
                <img className="logo-style" src={LogoFaceBook} alt="FaceBook" />
                <img className="logo-style" src={LogoInstagram} alt="Instagram" />
                <img className="logo-style" src={LogoTwitter} alt="Twitter" />
                <img className="logo-style" src={LogoWild} alt="Wild"/>
            </div>
        </div>
    )
}

export default Footer;
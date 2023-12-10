import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    <h3>Thank you for exploring the MoviFleX Website! </h3>
                    This project is a testament to the fusion of cutting-edge technology and a passion for cinema. Designed and developed with meticulous attention to detail, this platform aims to provide an immersive experience for movie enthusiasts worldwide. Your journey through the world of movies starts here.
                    
                    <h3>For feedback, inquiries, or to stay updated on future enhancements, please contact us at yourmoviflex01@gmail.com.</h3>
                    
                    Follow us on social media links for the latest updates and exciting movie recommendations.!!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

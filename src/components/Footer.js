import React from 'react'
import "./FooterStyles.css"
import logo from "../assets/logo-1.png"
import { Link } from "react-router-dom"

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <a href="/"><img src={logo} className="logo" alt="Future Archievement Logo" /></a>
                    <p>Make your vision a reality!</p>
                </div>
                <div>
                    <a href="mailto:ceo@fa-trd.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa-solid fa-envelope"></i> 
                    </a>
                    <a href="https://www.linkedin.com/company/the-future-achievement-trading-company" rel="noopener noreferrer" target="_blank">
                        <i className="fa-brands fa-linkedin"></i> 
                    </a> 
                    <a href="tel:+966550870588">
                        <i className="fa-solid fa-phone-volume"></i> 
                    </a>   
                </div>
            </div>

            <div className="bottom">
    <div>
        <h4>Project</h4>
        <a href="/#team-section">Our Team</a>
        <Link to="/services" onClick={scrollToTop}>Our Services</Link>
    </div>
    <div>
        <h4>Community</h4>
        <a href="https://www.linkedin.com/company/the-future-achievement-trading-company" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <Link to="/clients" onClick={scrollToTop}>Our Clients</Link>
    </div>
    <div>
        <h4>Help</h4>
        <a href="tel:+966550870588">Call Us</a>
        <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>

    </div>
</div>
        </div>
    )
}

export default Footer

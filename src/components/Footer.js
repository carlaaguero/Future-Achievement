import "./FooterStyles.css"
import logo from "../assets/logo-1.png"
import { Link } from "react-router-dom";


const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <Link to="/"><img src={logo} className="logo" alt="Future Archievement Logo" /></Link>
                    <p>Make your vision a reality!</p>
                </div>
                <div>
                    <a href="mailto:ceo@fa-trd.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa-solid fa-envelope"></i> 
                    </a>
                    <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
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
        <Link to="/">Our Team</Link>
        <Link to="/services">Our Services</Link>
    </div>
    <div>
        <h4>Community</h4>
        <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <Link to="/clients">Our Clients</Link>
    </div>
    <div>
        <h4>Help</h4>
        <Link to="/contact">Contact Us</Link>
        <a href="tel:+966550870588">Call Us</a>
    </div>
    <div>
        <h4>Others</h4>
        <Link to="/contact">Terms of Services</Link>
        <Link to="/contact">License</Link>
    </div>
</div>
        </div>
    )
}

export default Footer

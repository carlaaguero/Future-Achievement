import "./FooterStyles.css"
import logo from "../assets/logo-1.png"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <img src={logo} className="logo-footer" alt="Future Archievement Logo" />
                    <p>Make your vision a reality!</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-solid fa-envelope"></i> 
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i> 
                    </a> 
                    <a href="/">
                        <i className="fa-solid fa-phone-volume"></i> 
                    </a>   
                </div>
            </div>

           <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Our Team</a>
                <a href="/services">Our Services</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="https://www.linkedin.com/feed/">LinkedIn</a>
                <a href="/clients">Our Clients</a>

                
            </div>
            <div>
                <h4>Help</h4>
                <a href="/services">Contact Us</a>
                <a href="tel:+966550870588">Call Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/contact">Terms of Services</a>
                <a href="/s">License</a>
            </div>

            </div> 
        </div>
    )
}

export default Footer

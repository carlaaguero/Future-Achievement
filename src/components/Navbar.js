import React, { Component } from "react"
import "./NavbarStyles.css"
import logo from "../assets/logo-1.png"
import { Link } from "react-router-dom"
import { MenuItems as DesktopMenuItems } from "./MenuItems"
import { MobileMenuItems } from "./MobileMenuItems"

class Navbar extends Component {
    state = {
        clicked: false,
        isMobile: false
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        const isMobile = window.innerWidth < 950;
        this.setState({ isMobile });
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        const { isMobile, clicked } = this.state;
        const MenuItems = isMobile ? MobileMenuItems : DesktopMenuItems;

        return (
            <nav className="NavbarItems">
                <div className="logo-container">
                    <a href="/">
                        <img src={logo} className="logo" alt="Future Archievement Logo" />
                    </a>
                    {!isMobile && (
                        <a href="https://futureachievement.netlify.app/" className="language-button">
                            <i className="fa-solid fa-globe"></i>
                            AR
                        </a>
                    )}
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    {!isMobile && (
                        <li>
                            <a href="tel:+966550870588" className="phone-button">
                                <i className="fa-solid fa-phone"></i>
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Navbar

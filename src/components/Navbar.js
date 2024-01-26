import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems"
import logo from "../assets/logo.png"

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <img src={logo} className="logo" alt="Future Archievement Logo" />

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                       <a className={item.cName} href="/">
                       <i className={item.icon}></i>{item.title}
                       </a> 
                    </li>

                        );
                    })}
                    <button> Call Us</button>
                </ul>
            </nav>
        );

    }
}

export default Navbar
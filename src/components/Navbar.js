import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems"
import logo from "../assets/logo-1.png"
import { Link } from "react-router-dom"

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                 <Link to="/"><img src={logo} className="logo" alt="Future Archievement Logo" /></Link>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                       <Link className={item.cName} to={item.url}>
                       <i className={item.icon}></i>{item.title}
                       </Link> 
                    </li>

                        );
                    })}
                    <a href="tel:+966550870588"><button> <i class="fa-solid fa-phone"></i></button></a>
                </ul>
            </nav>
        );

    }
}

export default Navbar
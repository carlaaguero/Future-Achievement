import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <img src={logo} className="logo" alt="Future Archievement Logo" />

                <ul className="nav-menu">
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
        )

    }
}

export default Navbar
import "../Stylesheets/Navbar.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"

export const Navbar = ({}) =>{

    return(
        <div className="navbar font-bold underline" style={{top: "1%", left: "1%"}}>
            <img src={logo} alt="Our Tree Logo" id="logo"/>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}
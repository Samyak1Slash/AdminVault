import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar=()=>{
    const {isLoggedIn}=useAuth()
    return(
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink style={{textDecoration:"None"}} to="/">Samyak Mern</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li> <NavLink style={{textDecoration:"None"}} to="/">Home</NavLink>   </li>
                            <li> <NavLink style={{textDecoration:"None"}} to="/about">About</NavLink>   </li>
                            <li> <NavLink style={{textDecoration:"None"}} to="/contact">Contact</NavLink> </li>
                            <li> <NavLink style={{textDecoration:"None"}} to="/service">Services</NavLink> </li>
                            {!isLoggedIn ?  <>
                                <li> <NavLink style={{textDecoration:"None"}} to="/register">Register</NavLink></li>
                                <li> <NavLink style={{textDecoration:"None"}} to="/login">Login</NavLink>   </li>
                            </>
                            : 
                            <li> <NavLink style={{textDecoration:"None"}} to="/logout">Logout</NavLink></li> 
                            }
                            
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
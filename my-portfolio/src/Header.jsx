import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Link, NavLink} from 'react-router-dom';
import Drag from '@material-ui/icons/DragIndicator';



function Header() {
    return(
        <>
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <NavLink className="main_link me-auto my-4 ms-3" to="/"><h1 style={{fontFamily: "'Great Vibes', cursive", fontWeight:"900"}}>Pankaj Sharma.</h1></NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Drag/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{fontFamily: "'Encode Sans SC', sans-serif"}}>
                        <li className="nav-item ms-5">
                            <NavLink exact activeClassName="active_link" to="/" className="nav_link">Home</NavLink> 
                        </li>
                        <li className="nav-item ms-5">
                        <NavLink exact activeClassName="active_link" to="/About" className="nav_link">About</NavLink> 
                        </li>
                        <li className="nav-item ms-5">
                        <NavLink exact activeClassName="active_link" to="/Resume" className="nav_link">Resume</NavLink> 
                        </li>
                        <li className="nav-item ms-5">
                        <NavLink exact activeClassName="active_link" to="/Portfolio" className="nav_link">Portfolio</NavLink> 
                        </li>
                        {/* <li className="nav-item ms-5">
                        <NavLink exact activeClassName="active_link" to="/Blog" className="nav_link">Blog</NavLink> 
                        </li> */}
                        <li className="nav-item ms-5">
                        <NavLink exact activeClassName="active_link" to="/Contact" className="nav_link">Contact</NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Header;
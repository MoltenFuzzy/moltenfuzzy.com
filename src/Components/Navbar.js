import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="navbar-name">
                                Kent Phan
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Experience" className="nav-links">
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AboutMe" className="nav-links">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="mailto:kentphan2000@gmail.com"
                                className="nav-links"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

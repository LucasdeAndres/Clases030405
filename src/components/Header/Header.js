import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Header(){
    return(
        <React.Fragment>
            <h2>Logo</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/personajes">Personajes</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header;
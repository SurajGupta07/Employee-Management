import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div>
            <nav className="navigation container">
                <h1 style={{textAlign:"center"}}>Employee Management</h1>
                <ul className="non-bullet nav-pills">
                    <li className="list-item-inline">
                    <Link to="/employees" style={{textDecoration:'none'}}>Employees</Link>
                    </li>
                    <li className="list-item-inline">
                    <Link to="/create-employee" style={{textDecoration:'none'}}>Create</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


export default function Navbar() {
    return (
        <nav className="navbar dashboard-left">
            <ul className="nav-links-container">
                <li><Link className="nav-link" to="/books">Book Management</Link></li>
                <li><Link className="nav-link" to="/authors">Author Management</Link></li>
            </ul>
        </nav>
    )
}
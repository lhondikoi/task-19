import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/header.css'

export default function Header() {
    return (
        <header className="header-container">
            <div className="container">
                <h2><Link to="/">Library Management System</Link></h2>
            </div>
        </header>
    )
}
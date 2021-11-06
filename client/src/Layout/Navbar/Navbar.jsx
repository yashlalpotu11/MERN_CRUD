import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <nav className="NavBar-Wrapper">
                <div>
                    <h3 className="NavBar-Title">Mern Crud app</h3>
                </div>
                <div className="NavBar-Links">
                    <Link to="/" className="NavBar-Link">Home</Link>
                    <Link to="/add" className="NavBar-Link">Add</Link>
                </div>
            </nav>
        </>
    )
}

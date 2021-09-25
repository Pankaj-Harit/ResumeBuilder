import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li className="Home"><NavLink to="/">Home</NavLink></li>
                    <li className="About"><NavLink to="/About">About</NavLink></li>
                    <li className="Resume"><NavLink to="/Resume">Resume</NavLink></li>
                    <li className="Contact"><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        )
    }
}

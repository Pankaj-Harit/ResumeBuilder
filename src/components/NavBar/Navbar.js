import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li className="Home">Home</li>
                    <li className="About">About</li>
                    <li className="Resume">Resume</li>
                    <li className="Contact">Contact</li>
                </ul>
            </div>
        )
    }
}

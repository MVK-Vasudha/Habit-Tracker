import React, { Component } from 'react'
import './Side_Navbar.css';

class Side_Navbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">All Tasks</a></li>
                    <li><a href="#">Tracker</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
        )
    }
}

export default Side_Navbar;
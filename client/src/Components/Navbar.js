import React, { Component } from 'react'
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar'>
                    <a href="#" className='navbar-item'>Home</a>
                    <a href="#" className='navbar-item'>All Tasks</a>
                    <a href="#" className='navbar-item'>Tracker</a>
                    <a href="#" className='navbar-item'>Dashboard</a>
                    <a href="#" className='navbar-item'>Profile</a>
                </nav>
            </div>
        )
    }
}

export default Navbar;
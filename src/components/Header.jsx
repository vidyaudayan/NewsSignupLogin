import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className="navbar">
                <img className="logo" src={logo} alt="Entry news logo" />
                <nav className="links">
                    <ul>
                        <li>
                            <Link to='/home' className="link">Home</Link>

                        </li>
                        <li>
                            <Link to='#' className="link">New</Link>

                        </li>
                        <li>
                            <Link to='#' className="link">Popular</Link>

                        </li>
                        <li>
                            <Link to='/trending' className="link">Trending</Link>
                        </li>
                        <li>
                            <Link to='#' className="link">Categories</Link>
                        </li>
                        <li>
                            <Link to='/signup' className="link">Signup/Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header
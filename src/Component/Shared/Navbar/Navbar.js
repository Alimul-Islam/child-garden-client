import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <a class="navbar-brand ms-5" href="/"><img src={logo} width="200" height="40" alt=""></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link style={{ color: '#42f569' }} className="nav-link ms-5" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link style={{ color: '#1c1fd4' }} className="nav-link ms-4" to="/dashboard">Dashboard</Link>
                    </li>

                    <li className="nav-item">
                        <Link style={{ color: '#b7d435' }} className="nav-link ms-4 " to="/">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ color: '#993ede' }} className="nav-link ms-4" to="/">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-4 " to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ color: '#e05393' }} className="nav-link ms-4" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
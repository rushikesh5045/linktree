import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" end>Linktree</NavLink>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                {!user ? (
                    <>
                        <NavLink to="/signin">Sign In</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </>
                ) : (
                    <>
                        <span>Welcome, {user.username}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

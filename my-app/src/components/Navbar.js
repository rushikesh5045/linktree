import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" end>Linktree Clone</NavLink>
            </div>
            <div className="navbar-links">
                {!user ? (
                    <>
                        <NavLink to="/signin">Sign In</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </>
                ) : (
                    <>
                        <span>Welcome, {user.username}</span>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

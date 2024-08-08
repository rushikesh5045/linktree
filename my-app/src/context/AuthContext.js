
import React, { createContext, useState } from 'react';
import axios from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const userId = localStorage.getItem('userId');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('authToken');
        return userId && username && token ? { userId, username, token } : null;
    });

    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', { email, password });
            const userData = {
                userId: response.data.userId,
                username: response.data.username,
                token: response.data.token,
            };
            setUser(userData);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            localStorage.setItem('username', response.data.username);
            return userData;
        } catch (err) {
            throw err;
        }
    };
    
    const register = async (username, email, password) => {
        try {
            await axios.post('/auth/register', { username, email, password });
        } catch (err) {
            throw err;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

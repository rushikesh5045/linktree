import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'; 
import { AuthProvider } from './context/AuthContext';
import './styles.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />  
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;

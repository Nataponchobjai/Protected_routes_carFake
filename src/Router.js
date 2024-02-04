import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';
import Login from './components/Login';

// checkAuth function
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies.loggedIn && cookies.loggedIn === 'true';
};

// ProtectedRoute component
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return checkAuth() ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<ProtectedRoute component={About} />} />
            <Route path="/car/:id" element={<ProtectedRoute component={Car} />} />
        </Routes>
    );
};

export default Router;

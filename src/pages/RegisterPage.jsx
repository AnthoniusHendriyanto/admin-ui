import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../shared/api/axios'; // Corrected import path

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/register', { email, password });
            console.log('Registration successful:', response.data);
            // Handle successful registration (e.g., redirect to login)
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
            <div className="toggle-link">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;
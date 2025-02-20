import React, { useState } from 'react';
import "./Login.css";
import logo from './images/Altria-logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission reload

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Logged in successfully", data);

                localStorage.setItem('token', data.token);
                setMessage("Login successful! Redirecting...");

                setTimeout(() => {
                    window.location.href = "/LaptopDetailsPage";
                }, 2000);
            } else {
                const errorData = await response.json();
                console.error("Login failed:", errorData.message);
                setMessage("Login failed: " + errorData.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <img src={logo} alt="Altria Logo" className="login-title" />
                {/* <h2 className="login-title">Welcome Back</h2> */}
                <form onSubmit={handleLogin} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />

                    <button type="submit" className="login-button">Login</button>
                </form>
                {message && <p className="login-message">{message}</p>}
            </div>
        </div>
    );
};

export default Login;

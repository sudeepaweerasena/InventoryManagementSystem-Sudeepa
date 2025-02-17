import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form submission reload

        try {
            // Replace this URL with your Azure hosted login API endpoint
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }) // Sending the login credentials
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Logged in successfully", data);

                // Store token in localStorage
                localStorage.setItem('token', data.token);

                // Set success message
                setMessage("Login successful! Redirecting...");

                // Redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = "/LaptopDetailsPage"; // Change to your desired route
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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;

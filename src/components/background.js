import React, { useState, useEffect } from "react";
import "./Backgroung.css";
import { TextField, Button, Typography } from '@mui/material';

import "./Backgroung.css";

const Background = () => {
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

    return(
        <div className="wrapper1">
                    <div className="wrapper">
                        <div className="form-box login">
                            <form className="form-login">
                            <Typography variant="h5" component="h1" 
                                style={{ 
                                    textAlign: 'center', 
                                    marginBottom: '10px',  
                                    fontWeight: 'bold', 
                                    fontSize: '30px', 
                                    fontFamily: '"Emblema One", serif',  // Added the font family here
                                    fontweight: 400,
                                    
                                }}
                            >
                                Sign in
                            </Typography>
                            <Typography variant="subtitle1" style={{ marginBottom: '10px', textAlign: 'center', fontFamily:'"Sonsie One", serif', color: '#333' }}>
                                Welcome, please sign in to continue
                            </Typography>
                                
                                <TextField
                                        label="Username *"
                                        variant="outlined"
                                        type="text"
                                        value={username}
                                        fullWidth
                                        required
                                        margin="normal"
                                        onChange={(e) => setUsername(e.target.value)}
                                        InputLabelProps={{
                                            style: { color: 'black' }
                                        }}
                                    />
                                    
                                <TextField
                                    label="Password *"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    required
                                    margin="normal"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputLabelProps={{
                                        style: { color: 'black' }
                                    }}
                                />

            
                                <Button variant="contained" color="primary" fullWidth style={{ padding: '10px 0', marginTop:'20px' }} className="loginpage-btn">
                                    Sign In
                                </Button>
                            </form>
                            {message && <p className="login-message">{message}</p>}
                        </div>
                    </div>
            <div className="boxs">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
        </div>
    )

// const Background = () => {
//     return(
//         <div className="wrapper1">
//                     <div className="wrapper">
//                         <div className="form-box login">
//                             <form>
//                             <Typography variant="h5" component="h1" style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '30px' }}>
//                                 Sign in
//                             </Typography>
//                             <Typography variant="subtitle1" style={{ marginBottom: '20px', textAlign: 'center' }}>
//                                 Welcome, please sign in to continue
//                             </Typography>
                                
//                                 <TextField
//                                         label="Email *"
//                                         variant="outlined"
//                                         type="email"
//                                         fullWidth
//                                         required
//                                         margin="normal"
//                                         style={{ color: "black" }}
//                                     />
                                    
//                                 <TextField
//                                     label="Password *"
//                                     variant="outlined"
//                                     type="password"
//                                     fullWidth
//                                     required
//                                     margin="normal"
//                                 />

            
//                                 <Button variant="contained" color="primary" fullWidth style={{ padding: '10px 0', marginTop:'20px' }} className="submit-btn">
//                                     Sign In
//                                 </Button>
//                             </form>
//                         </div>
//                     </div>
//             <div className="box">
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//                <div></div>
//             </div>
//         </div>
//     )
}

export default Background;
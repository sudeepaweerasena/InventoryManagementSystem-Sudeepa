import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Loginnew.css'; // Make sure to import your CSS file

const Background = () => {
    const [showCredentials, setShowCredentials] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    const toggleCredentials = () => {
        setShowCredentials(!showCredentials);
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="login-wrapper">
            <div className="login-form">
                <h1>Login</h1>
                <div className="input-field">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Username" required onFocus={toggleCredentials} />
                </div>
                {showCredentials && (
                    <div className="credentials-popup">
                        Saved Info: admin123 <button onClick={toggleCredentials}>X</button>
                    </div>
                )}
                <div className="input-field">
                    <FaLock className="icon" />
                    <input type={passwordShown ? "text" : "password"} placeholder="Password" required />
                    <button onClick={togglePasswordVisibility} className="password-toggle">
                        {passwordShown ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button type="submit" className="login-button">Login</button>
            </div>
        </div>
    );
};

export default Background;

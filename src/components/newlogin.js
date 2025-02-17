import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import "./Loginnew.css";

const NewLogin = () => {
    return(
        <div className="wrapper">
            <div className="form-box login">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        <FaLock className="icon"/>
                    </div>

                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

export default NewLogin;
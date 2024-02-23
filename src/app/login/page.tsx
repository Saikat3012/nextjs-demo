"use client";
import React, { useState } from "react";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        alert("Submit")
    }
    return (
        <div className="flex ">
            <label>----Login----</label>
            <label>Email :</label>
            <input
                className=""
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <label>Password :</label>
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={onSubmit}>
                Submit
            </button>
        </div>
    )
}

export default LoginPage;
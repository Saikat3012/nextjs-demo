"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import axios from "axios";
const SugnupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [data, setDate] = useState({});
    const onSubmit = async () => {
        try {
            const resData = await axios.post("/api/users/signup", { email: email, password: password });

            console.log(resData)
            setDate(resData.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-blue-800 flex flex-col items-center justify-center p-5 rounded-3xl">
                <label className="mb-5">----SignUp----</label>
                <label>Email :</label>

                <input
                    className=""
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Password :</label>
                <input
                    className="mb-5"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    onClick={onSubmit}>
                    Submit
                </button>

                <Link href="/login">Visit Login</Link>
            </div>


            <span>{JSON.stringify(data)}</span>
        </div>
    )
}

export default SugnupPage;


const userData = {
    userData: [
        {
            id: 0,
            name: "Saikat",
        },
        {
            id: 1,
            name: "Soumen"
        },
        {
            id: 2,
            name: "Atim"
        }
    ]
}
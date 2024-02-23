import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ erroe: "User already exists" }, { status: 400 })
        }

        const newUser = new User({
            email,
            password
        });

        const savedUser = await newUser.save();

        console.log(savedUser)


        return NextResponse.json({
            message: "User created successfully",
            status: 200,
            savedUser
        })


    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
import { connectToDatabase } from "@/libs/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest) {
    try {
        const { email,password} = await request.json()
        if (!email || !password){
            return NextResponse.json(
                {error:"Required Email ad Password"},
                {status:400}
            )
        }

        await connectToDatabase();

        const existingUSer = await User.findOne({email})

        if(existingUSer){
            return NextResponse.json(
                {error:"User already registered"},
                {status:400}
            )
        }

        await User.create({
            email,
            password
        })
        return NextResponse.json(
                {message:"User registered successfully"},
                {status:200}
            )

    } catch (error) {
        console.log("Registeration Error",error)
        return NextResponse.json(
                {error:"Failed to register User"},
                {status:400}
            )
    }
}
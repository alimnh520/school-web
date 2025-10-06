import { getCollection } from "@/lib/mongoClient";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const POST = async (request) => {
    try {
        const { email, password } = await request.json();

        const usersCollection = await getCollection("admin");
        const admin = await usersCollection.findOne({ email });

        if (!admin) {
            return NextResponse.json({ success: false, message: "ইউজার পাওয়া যায়নি!" });
        }

        if (password !== admin.password) {
            return NextResponse.json({ success: false, message: "পাসওয়ার্ড ভুল!" });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                email: admin.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );


        const response = NextResponse.json({ success: true, message: "লগইন সফল ✅", });

        response.cookies.set('school-admin', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1 * 24 * 60 * 60,
            sameSite: 'strict',
            path: '/'
        });

        return response
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে!" });
    }
}

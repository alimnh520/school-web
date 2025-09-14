import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export const GET = async (request) => {
    try {
        const cookies = await request.cookies;
        const cookie = await cookies.get('school-admin')?.value;
        const decodedCookie = jwt.verify(cookie, process.env.JWT_SECRET);
        return NextResponse.json({ success: true, message: decodedCookie });
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে!" });
    }
}
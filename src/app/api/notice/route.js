import { getCollection } from "@/lib/mongoClient";
import { NextResponse } from "next/server";

// ✅ নতুন নোটিশ যোগ বা আপডেট (শুধু ১টা থাকবে সবসময়)
export async function PUT(request) {
    try {
        const { title } = await request.json();
        const collection = await getCollection("notices");

        // সবসময় ১টা নোটিশ রাখবে
        await collection.updateOne(
            {}, // যেকোনো নোটিশ match হবে
            { $set: { title, createdAt: new Date() } },
            { upsert: true } // না থাকলে নতুন তৈরি হবে
        );

        return NextResponse.json({ success: true, message: "✅ নোটিশ আপডেট হয়েছে" });

    } catch (error) {
        console.error("PUT Notice Error:", error);
        return NextResponse.json(
            { success: false, message: "❌ নোটিশ আপডেট ব্যর্থ হয়েছে" },
            { status: 500 }
        );
    }
}

// ✅ নোটিশ পাওয়া
export async function GET() {
    try {
        const collection = await getCollection("notices");
        const notice = await collection.findOne({}); // শুধু ১টা notice রাখবো

        return NextResponse.json({
            success: true,
            message: notice || null,
        });
    } catch (error) {
        console.error("GET Notice Error:", error);
        return NextResponse.json(
            { success: false, message: "❌ নোটিশ আনা যায়নি" },
            { status: 500 }
        );
    }
}

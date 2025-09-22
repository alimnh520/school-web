import { connectDB } from "@/lib/connectDb";
import { getCollection } from "@/lib/mongoClient";
import studentsMarks from "@/model/studentsMarks";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request) {
    try {
        const {
            name_bn,
            name_en,
            class_name,
            rollNumber,
            section,
            year,
            bangla,
            english,
            math,
            science,
            religion,
            social
        } = await request.json();

        if (!name_bn ||
            !name_en ||
            !class_name ||
            !rollNumber ||
            !section ||
            !year ||
            !bangla ||
            !english ||
            !math ||
            !science ||
            !religion ||
            !social) {
            return NextResponse.json({ success: false, message: "required all" });
        }

        await connectDB();

        const saveMark = new studentsMarks({
            name_bn,
            name_en,
            class_name,
            rollNumber,
            section,
            year,
            bangla,
            english,
            math,
            science,
            religion,
            social
        });

        await saveMark.save();

        return NextResponse.json({ success: true, message: "Student added successfully" });
    } catch (err) {
        console.error("❌ Backend Error:", err.message);
        return NextResponse.json({ success: false, message: err.message || "Server error" });
    }
}

export async function GET() {
    try {
        const collection = await getCollection('studentsmarks');
        const data = await collection.find({}).toArray();
        return NextResponse.json({ success: true, message: data });
    } catch (err) {
        console.error("❌ Backend Error:", err.message);
        return NextResponse.json({ success: false, message: err.message || "Server error" });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const collection = await getCollection("studentsmarks");
        await collection.deleteOne({ _id: new ObjectId(id) });
        return NextResponse.json({ success: true, message: 'ডাটা মুছে ফেলা হয়েছে' });
    } catch (error) {
        return NextResponse.json({ message: 'failed', success: false });
    }
}

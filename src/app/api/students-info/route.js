import cloudinary from "@/cloudinary/cloudConfig";
import { UploadImage } from "@/cloudinary/cloudUpload";
import { connectDB } from "@/lib/connectDb";
import { getCollection } from "@/lib/mongoClient";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import studentInfo from "@/model/StudentInfo";

export async function POST(req) {

    try {
        const body = await req.formData();
        const getField = (name) => body.get(name);

        let photo_url = "", photo_id = "";
        const photoFile = body.get("photo");

        if (photoFile) {
            const uploadedResponse = await UploadImage(photoFile, "image", "student_info");
            photo_url = uploadedResponse.secure_url;
            photo_id = uploadedResponse.public_id;
        }

        await connectDB();

        const student = new studentInfo({
            student: {
                photo_url,
                photo_id,
                nameBn: getField("nameBn"),
                nameEn: getField("nameEn"),
                gender: getField("gender"),
                dob: getField("dob"),
                birthCertificateNo: getField("birthCertificateNo"),
                class_name: getField("class_name"),
                rollNumber: getField("rollNumber"),
                year: getField("year"),
                mobile: getField("mobile"),
                address: getField("address"),
            },
            father: {
                nameBn: getField("fatherNameBn"),
                nameEn: getField("fatherNameEn"),
                nid: getField("fatherNid"),
                mobile: getField("fatherMobile"),
                occupation: getField("fatherOccupation"),
                income: getField("fatherIncome"),
            },
            mother: {
                nameBn: getField("motherNameBn"),
                nameEn: getField("motherNameEn"),
                nid: getField("motherNid"),
                mobile: getField("motherMobile"),
                occupation: getField("motherOccupation"),
                income: getField("motherIncome"),
            },
        });

        await student.save();
        return NextResponse.json({ success: true, message: "Student added successfully" }, { status: 201 });
    } catch (err) {
        console.error("❌ Backend Error:", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}


export async function GET() {
    try {
        const collection = await getCollection("studentinfos");
        const data = await collection.find({}).sort({ createdAt: -1 }).toArray();
        return NextResponse.json({ success: true, message: data });
    } catch (err) {
        console.error("Gallery GET error:", err);
        return NextResponse.json({ success: false, message: "সার্ভার এরর" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { id, photo_id } = await req.json();
        if (!id) return NextResponse.json({ success: false, message: "ID প্রয়োজন" }, { status: 400 });

        if (photo_id) {
            await cloudinary.uploader.destroy(photo_id, { resource_type: "image" });
        }

        const collection = await getCollection("studentinfos");
        await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true, message: "ডিলেট সম্পন্ন" });
    } catch (err) {
        console.error("Gallery DELETE error:", err);
        return NextResponse.json({ success: false, message: "সার্ভার এরর" }, { status: 500 });
    }
}

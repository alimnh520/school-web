import { NextResponse } from "next/server";
import { getCollection } from "@/lib/mongoClient"; // তোমার MongoDB helper function
import { connectDB } from "@/lib/connectDb";
import admissionForm from "@/model/admissionForm";
import { UploadImage } from "@/cloudinary/cloudUpload";
import { ObjectId } from "mongodb";
import cloudinary from "@/cloudinary/cloudConfig";
import notification from "@/model/notification";

export async function POST(request) {
    try {
        const formData = await request.formData();

        // এখানে File অবজেক্ট আলাদা করে নিতে হবে
        const photoFile = formData.get("photo");
        const documentFile = formData.get("documents");

        // বাকিগুলো string ফিল্ড
        const newStudent = Object.fromEntries(formData.entries());

        const documentsType = documentFile && documentFile.type.startsWith("image") ? "image" : "raw";

        const [photoResult, documentResult] = await Promise.all([
            UploadImage(photoFile, "image", "admission"),
            UploadImage(documentFile, documentsType, "admission"),
        ]);



        await connectDB();

        const saveNotification = new notification({
            title: '👨‍🎓 নতুন ভর্তি আবেদন!',
        });
        await saveNotification.save();

        const saveForm = new admissionForm({
            student: {
                photo_url: photoResult.secure_url,
                photo_id: photoResult.public_id,
                nameBn: newStudent.nameBn,
                nameEn: newStudent.nameEn,
                gender: newStudent.gender,
                dob: new Date(newStudent.dob),
                birthCertificateNo: newStudent.birthCertificateNo,
                class: newStudent.class,
                mobile: newStudent.mobile,
                address: newStudent.address,
            },
            father: {
                nameBn: newStudent["পিতার_nameBn"],
                nameEn: newStudent["পিতার_nameEn"],
                nid: newStudent["পিতার_nid"],
                mobile: newStudent["পিতার_mobile"],
                occupation: newStudent["পিতার_occupation"],
                income: Number(newStudent["পিতার_income"]),
            },
            mother: {
                nameBn: newStudent["মাতার_nameBn"],
                nameEn: newStudent["মাতার_nameEn"],
                nid: newStudent["মাতার_nid"],
                mobile: newStudent["মাতার_mobile"],
                occupation: newStudent["মাতার_occupation"],
                income: Number(newStudent["মাতার_income"]),
            },
            guardian: {
                name: newStudent.guardian_name,
                nid: newStudent.guardian_nid,
                mobile: newStudent.guardian_mobile,
                occupation: newStudent.guardian_occupation,
            },
            others: {
                file_url: documentResult.secure_url,
                url_id: documentResult.public_id,
                file_type: documentsType,
            },
        });

        await saveForm.save();

        return NextResponse.json({ success: true, message: "ডাটা সফলভাবে জমা হয়েছে" });

    } catch (error) {
        console.error("Admission Form Error:", error);
        return NextResponse.json({ success: false, message: "সার্ভারে সমস্যা হয়েছে!" }, { status: 500 });
    }
}

// GET – সব ডাটা পাওয়া
export async function GET() {
    try {
        const collection = await getCollection("admissionforms");
        const students = await collection.find({}).toArray();

        return NextResponse.json({ success: true, message: students });
    } catch (error) {
        console.error("Fetch Admission Data Error:", error);
        return NextResponse.json({ success: false, message: "ডাটা আনা যায়নি!" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id, photo_id, document_id, dc_type } = await request.json();

        const files = [
            { id: photo_id, type: "image" },
            { id: document_id, type: dc_type },
        ];

        for (const file of files) {
            if (file.id) {
                await cloudinary.uploader.destroy(file.id, {
                    resource_type: file.type,
                });
            }
        }

        const collection = await getCollection("admissionforms");
        await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true, message: 'ডাটা মুছে ফেলা হয়েছে' });
    } catch (error) {
        console.error("Fetch Admission Data Error:", error);
        return NextResponse.json({ success: false, message: "ডাটা আনা যায়নি!" }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id } = await request.json();
        const collection = await getCollection("admissionforms");
        await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { status: "accepted" } },
        );

        return NextResponse.json({ success: true, message: 'আবেদন গৃহীত হয়েছে' });

    } catch (error) {
        console.error("Fetch Admission Data Error:", error);
        return NextResponse.json({ success: false, message: "ডাটা আনা যায়নি!" }, { status: 500 });
    }
}

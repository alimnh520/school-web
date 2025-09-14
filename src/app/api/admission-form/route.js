import { NextResponse } from "next/server";
import { getCollection } from "@/lib/mongoClient"; // তোমার MongoDB helper function
import { connectDB } from "@/lib/connectDb";
import admissionForm from "@/model/admissionForm";
import { UploadImage } from "@/cloudinary/cloudUpload";

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
        const collection = await getCollection("admissions");
        const students = await collection.find().toArray();

        return NextResponse.json({ success: true, data: students });
    } catch (error) {
        console.error("Fetch Admission Data Error:", error);
        return NextResponse.json({ success: false, message: "ডাটা আনা যায়নি!" }, { status: 500 });
    }
}

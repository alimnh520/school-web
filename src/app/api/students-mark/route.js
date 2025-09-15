import { UploadImage } from "@/cloudinary/cloudUpload";
import { connectDB } from "@/lib/connectDb";
import studentsMarks from "@/model/studentsMarks";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const form = await request.formData();
        const rawData = form.get("data");
        const { personalInfo, test, halfyearly, final } = JSON.parse(rawData);

        const testFile = form.get("testMarkSheet");
        const halfYearlyFile = form.get("halfYearlyMarkSheet");
        const finalFile = form.get("finalMarkSheet");

        // 1. ফাইল সাইজ লিমিট (1.5MB = 1.5 * 1024 * 1024)
        const FILE_SIZE_LIMIT = 1.5 * 1024 * 1024;
        const validateFile = (file) => {
            if (file && file.size > FILE_SIZE_LIMIT) {
                throw new Error("File size exceeds 1.5MB");
            }
            return file;
        };

        validateFile(testFile);
        validateFile(halfYearlyFile);
        validateFile(finalFile);

        // 2. ফাইল টাইপ নির্ধারণ
        const testType = testFile && testFile.type.startsWith("image") ? "image" : "raw";
        const halfYearlyType = halfYearlyFile && halfYearlyFile.type.startsWith("image") ? "image" : "raw";
        const finalType = finalFile && finalFile.type.startsWith("image") ? "image" : "raw";

        // 3. নিরাপদ আপলোড
        const testMarkSheet = testFile
            ? await UploadImage(testFile, testType, "admission")
            : null;

        const halfYearlyMarkSheet = halfYearlyFile
            ? await UploadImage(halfYearlyFile, halfYearlyType, "admission")
            : null;

        const finalMarkSheet = finalFile
            ? await UploadImage(finalFile, finalType, "admission")
            : null;

        await connectDB();

        // 4. DB তে সেভ
        const saveMark = new studentsMarks({
            personalInfo,
            test: {
                bangla: test?.bangla || "",
                english: test?.english || "",
                math: test?.math || "",
                science: test?.science || "",
                religion: test?.religion || "",
                social: test?.social || "",
                marksheet_url: testMarkSheet?.secure_url || null,
                marksheet_id: testMarkSheet?.public_id || null,
            },
            halfyearly: {
                bangla: halfyearly?.bangla || "",
                english: halfyearly?.english || "",
                math: halfyearly?.math || "",
                science: halfyearly?.science || "",
                religion: halfyearly?.religion || "",
                social: halfyearly?.social || "",
                marksheet_url: halfYearlyMarkSheet?.secure_url || null,
                marksheet_id: halfYearlyMarkSheet?.public_id || null,
            },
            final: {
                bangla: final?.bangla || "",
                english: final?.english || "",
                math: final?.math || "",
                science: final?.science || "",
                religion: final?.religion || "",
                social: final?.social || "",
                marksheet_url: finalMarkSheet?.secure_url || null,
                marksheet_id: finalMarkSheet?.public_id || null,
            },
        });

        await saveMark.save();

        return NextResponse.json({ success: true, message: "Student added successfully" });
    } catch (err) {
        console.error("❌ Backend Error:", err.message);
        return NextResponse.json({ success: false, message: err.message || "Server error" });
    }
}

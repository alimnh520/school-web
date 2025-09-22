import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    student: {
        photo_url: { type: String }, // Cloudinary secure_url
        photo_id: { type: String }, // Cloudinary public_id
        nameBn: { type: String, required: true },
        nameEn: { type: String, required: true },
        gender: { type: String, enum: ["পুত্র", "কন্যা", "অন্যান্য"], required: true },
        dob: { type: Date, required: true },
        birthCertificateNo: { type: String, required: true },
        class_name: { type: String, required: true }, // 🆕 শ্রেণী
        rollNumber: { type: Number, required: true }, // 🆕 রোল নাম্বার
        year: { type: String, required: true },       // 🆕 বছর
        mobile: { type: String, required: true },
        address: { type: String, required: true },
    },

    father: {
        nameBn: { type: String, required: true },
        nameEn: { type: String, required: true },
        nid: { type: String, required: true },
        mobile: { type: String, required: true },
        occupation: { type: String },
        income: { type: Number },
    },

    mother: {
        nameBn: { type: String, required: true },
        nameEn: { type: String, required: true },
        nid: { type: String, required: true },
        mobile: { type: String, required: true },
        occupation: { type: String },
        income: { type: Number },
    },
}, { timestamps: true });

export default mongoose.models.StudentInfo || mongoose.model("StudentInfo", studentSchema);

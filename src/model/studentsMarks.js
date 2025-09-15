// models/Student.js
import mongoose from "mongoose";

const markSchema = new mongoose.Schema({
    personalInfo: {
        name_bn: { type: String, required: true },
        name_en: { type: String, required: true },
        class: { type: String, required: true },
        rollNumber: { type: Number, required: true },
        section: { type: String },
    },
    test: {
        bangla: String,
        english: String,
        math: String,
        science: String,
        religion: String,
        social: String,
        marksheet_url: String,
        marksheet_id: String,
    },
    halfYearly: {
        bangla: String,
        english: String,
        math: String,
        science: String,
        religion: String,
        social: String,
        marksheet_url: String,
        marksheet_id: String,
    },
    final: {
        bangla: String,
        english: String,
        math: String,
        science: String,
        religion: String,
        social: String,
        marksheet_url: String,
        marksheet_id: String,
    },
}, { timestamps: true });

export default mongoose.models.StudentsMark || mongoose.model("StudentsMark", markSchema);

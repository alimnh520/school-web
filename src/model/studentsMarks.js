// models/Student.js
import mongoose from "mongoose";

const markSchema = new mongoose.Schema({
    name_bn: { type: String, required: true },
    name_en: { type: String, required: true },
    class_name: { type: String, required: true },
    rollNumber: { type: Number, required: true },
    section: String,
    year: String,
    bangla: String,
    english: String,
    math: String,
    science: String,
    religion: String,
    social: String,
}, { timestamps: true });

export default mongoose.models.StudentsMark || mongoose.model("StudentsMark", markSchema);

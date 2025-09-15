// models/AdmissionForm.js
import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    subject: { type: String, required: true },
    details: { type: String, required: true },

}, { timestamps: true });

export default mongoose.models.complaint || mongoose.model('complaint', complaintSchema);

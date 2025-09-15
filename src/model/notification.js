// models/AdmissionForm.js
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    title: String,
    isRead: { type: Boolean, default: false }

}, { timestamps: true });

export default mongoose.models.Notification || mongoose.model('Notification', notificationSchema);

// models/AdmissionForm.js
import mongoose from 'mongoose';

const admissionFormSchema = new mongoose.Schema({
    student: {
        photo_url: {
            type: String, // Image URL or base64 encoded string
        },
        photo_id: {
            type: String, // Image URL or base64 encoded string
        },
        nameBn: {
            type: String,
            required: true,
        },
        nameEn: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['পুত্র', 'কন্যা', 'অন্যান্য'],
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        birthCertificateNo: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            enum: ['প্লে', 'নার্সারি', 'প্রথম', 'দ্বিতীয়', 'তৃতীয়', 'চতুর্থ', 'পঞ্চম'],
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },

    father: {
        nameBn: {
            type: String,
            required: true,
        },
        nameEn: {
            type: String,
            required: true,
        },
        nid: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
        },
        income: {
            type: Number,
        },
    },

    mother: {
        nameBn: {
            type: String,
            required: true,
        },
        nameEn: {
            type: String,
            required: true,
        },
        nid: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
        },
        income: {
            type: Number,
        },
    },

    guardian: {
        name: String,
        nid: String,
        mobile: String,
        occupation: String,
    },

    others: {
        file_url: String,
        url_id: String,
        file_type: String,
    },

}, { timestamps: true });

export default mongoose.models.AdmissionForm || mongoose.model('AdmissionForm', admissionFormSchema);

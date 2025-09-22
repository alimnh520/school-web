import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Notice || mongoose.model('Notice', noticeSchema);

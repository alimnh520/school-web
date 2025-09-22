import mongoose, { Schema } from "mongoose";

const GallerySchema = new Schema(
    {
        caption: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            default: "",
            trim: true,
        },
        product_image: {
            type: String, // Cloudinary secure_url
            required: true,
        },
        image_id: {
            type: String, // Cloudinary public_id
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true } // createdAt + updatedAt অটো যুক্ত হবে
);

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);

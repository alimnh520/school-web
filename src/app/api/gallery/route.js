// app/api/gallery/route.js
import { NextResponse } from "next/server";
import cloudinary from "@/cloudinary/cloudConfig";
import { ObjectId } from "mongodb";
import Gallery from "@/model/Gallery";
import { UploadImage } from "@/cloudinary/cloudUpload";
import { connectDB } from "@/lib/connectDb";
import { getCollection } from "@/lib/mongoClient";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const image = formData.get("image");
        const caption = formData.get("caption") || "";
        const description = formData.get("description") || "";

        if (!image) {
            return NextResponse.json({ success: false, message: "ছবি প্রয়োজন" }, { status: 400 });
        }

        const imageResult = await UploadImage(image, "image", "gallery");

        await connectDB();

        const saveGallery = new Gallery({
            product_name: caption,
            caption,
            description,
            product_image: imageResult.secure_url,
            image_id: imageResult.public_id,
            createdAt: new Date(),
        });

       await saveGallery.save();

        return NextResponse.json({ success: true, message: "আপলোড সম্পন্ন", });
    } catch (err) {
        console.error("Gallery POST error:", err);
        return NextResponse.json({ success: false, message: "সার্ভার এরর" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const collection = await getCollection("galleries");
        const data = await collection.find({}).sort({ createdAt: -1 }).toArray();
        return NextResponse.json({ success: true, message: data });
    } catch (err) {
        console.error("Gallery GET error:", err);
        return NextResponse.json({ success: false, message: "সার্ভার এরর" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { id, image_id } = await req.json();
        if (!id) return NextResponse.json({ success: false, message: "ID প্রয়োজন" }, { status: 400 });

        if (image_id) {
            await cloudinary.uploader.destroy(image_id, { resource_type: "image" });
        }

        const collection = await getCollection("galleries");
        await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({ success: true, message: "ডিলেট সম্পন্ন" });
    } catch (err) {
        console.error("Gallery DELETE error:", err);
        return NextResponse.json({ success: false, message: "সার্ভার এরর" }, { status: 500 });
    }
}

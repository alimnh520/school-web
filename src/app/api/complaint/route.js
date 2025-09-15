import { ObjectId } from "mongodb";
import { getCollection } from "@/lib/mongoClient";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDb";
import notification from "@/model/notification";
import complaint from "@/model/complaint";

export async function POST(request) {
    try {
        const { formData } = await request.json();
        const { name, mobile, subject, message } = formData;

        if (!name || !mobile || !subject || !message) {
            return NextResponse.json({ message: 'failed', success: false });
        }

        await connectDB();

        const saveNotification = new notification({
            title: '⚠️নতুন অভিযোগ এসেছে!',
        });
        await saveNotification.save();

        const saveComplaint = new complaint({
            name,
            mobile,
            subject,
            details: message,
        });

        await saveComplaint.save();
        return NextResponse.json({ message: 'success', success: true });

    } catch (error) {
        return NextResponse.json({ message: 'failed', success: false });
    }
}

export async function GET() {
    try {
        const collection = await getCollection("complaints");
        const complaint = await collection.find({}).toArray();
        return NextResponse.json({ success: true, message: complaint });
    } catch (error) {
        return NextResponse.json({ message: 'failed', success: false });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        const collection = await getCollection("complaints");
        await collection.deleteOne({ _id: new ObjectId(id) });
        return NextResponse.json({ success: true, message: 'ডাটা মুছে ফেলা হয়েছে' });
    } catch (error) {
        return NextResponse.json({ message: 'failed', success: false });
    }
}

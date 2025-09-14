import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing in .env.local");
}

// Reuse connection (hot reload এ বারবার connect বন্ধ করবে)
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: "school", // আপনার ডাটাবেজ নাম দিন
                bufferCommands: false,
            })
            .then((mongoose) => {
                console.log("✅ MongoDB Connected");
                return mongoose;
            })
            .catch((err) => {
                console.error("❌ MongoDB Connection Error:", err);
                throw err;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NoticesPage() {
    const [notice, setNotice] = useState(null); // শুধু একটাই নোটিশ থাকবে
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    // নতুন নোটিশ যোগ করা
    const handleAdd = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        setLoading(true);
        try {
            const res = await fetch("/api/notice", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title }),
            });
            const data = await res.json();
            if (data.success) {
                setTitle("");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // বর্তমান নোটিশ লোড করা
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const res = await fetch("/api/notice", { method: 'GET' });
                const data = await res.json();
                if (data.success) setNotice(data.message);
            } catch (err) {
                console.error(err);
            }
        };
        fetchNotice();
    }, [loading]);


    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-6">📢 নোটিশ বোর্ড</h2>

            {/* Form */}
            <form onSubmit={handleAdd} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="নতুন নোটিশ লিখুন..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg dark:text-white"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    {loading ? "⏳ যোগ হচ্ছে..." : "➕ যোগ করুন"}
                </button>
            </form>

            {/* Notice Show */}
            {notice ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-gray-100 dark:text-white dark:bg-gray-700 rounded-lg shadow"
                >
                    <p className="font-medium">{notice.title}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        🕒 {new Date(notice.createdAt).toLocaleString("bn-BD")}
                    </p>
                </motion.div>
            ) : (
                <p className="text-gray-500">❌ কোনো নোটিশ পাওয়া যায়নি</p>
            )}
        </div>
    );
}

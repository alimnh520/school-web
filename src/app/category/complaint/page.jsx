'use client'
import { useEffect, useState } from "react";

export default function Complaint() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || অভিযোগ বাক্স"
    }, []);

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/complaint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formData })
            });
            const data = await res.json();
            if (data.success) setSubmitted(true);
        } catch (error) {
            toast.error("সার্ভারে সমস্যা!", { position: "top-center", autoClose: 500, });
            console.error("Login Error:", error);
        } finally {
            setLoading(false);
        }
        setFormData({ name: "", mobile: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-900 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">অভিযোগ বক্স 📝</h1>
                <p className="mt-2 text-sm">আপনার মতামত বা অভিযোগ আমাদের জানান।</p>
            </header>

            <main className="flex-grow flex justify-center items-center bg-gray-100 py-10 px-4">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    {submitted ? (
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-green-600">ধন্যবাদ! ❤️</h2>
                            <p className="mt-2">আপনার অভিযোগ আমরা পেয়েছি।</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">নাম</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">মোবাইল</label>
                                <input
                                    type="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">বিষয়</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">আপনার অভিযোগ / মন্তব্য</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-900 flex items-center justify-center text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
                            >
                                {loading ? (
                                    <div className="flex">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                                            ></path>
                                        </svg>
                                        লোড হচ্ছে...
                                    </div>
                                ) : (
                                    "পাঠান"
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
}

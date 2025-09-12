'use client'
import { useState } from "react";

export default function Complaint() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে তুমি API কল বা কোনো ব্যাকএন্ড লগিক যোগ করতে পারো
        console.log("Complaint submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
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
                                <label className="block text-sm font-medium mb-1">ইমেইল</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
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
                                className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors"
                            >
                                পাঠান
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
}

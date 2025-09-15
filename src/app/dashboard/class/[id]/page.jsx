"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ClassPage() {
    const params = useParams();
    const classId = params.id;

    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        roll: "",
        বাংলা: "",
        ইংরেজি: "",
        গণিত: "",
        বিজ্ঞান: "",
        ধর্ম: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents((prev) => [...prev, { ...formData, id: Date.now() }]);
        setFormData({ name: "", roll: "", বাংলা: "", ইংরেজি: "", গণিত: "", বিজ্ঞান: "", ধর্ম: "" });
    };

    return (
        <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition">
            <h1 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">
                শ্রেণী {classId} - শিক্ষার্থী ব্যবস্থাপনা
            </h1>

            {/* Add Student Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4 mb-8"
            >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    🧑‍🎓 নতুন শিক্ষার্থী যোগ করুন
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="নাম"
                        className="border rounded p-2 dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <input
                        name="roll"
                        value={formData.roll}
                        onChange={handleChange}
                        placeholder="রোল"
                        type="number"
                        className="border rounded p-2 dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <input name="বাংলা" value={formData.বাংলা} onChange={handleChange} placeholder="বাংলা" type="number" className="border rounded p-2 dark:bg-gray-700 dark:text-white" />
                    <input name="ইংরেজি" value={formData.ইংরেজি} onChange={handleChange} placeholder="ইংরেজি" type="number" className="border rounded p-2 dark:bg-gray-700 dark:text-white" />
                    <input name="গণিত" value={formData.গণিত} onChange={handleChange} placeholder="গণিত" type="number" className="border rounded p-2 dark:bg-gray-700 dark:text-white" />
                    <input name="বিজ্ঞান" value={formData.বিজ্ঞান} onChange={handleChange} placeholder="বিজ্ঞান" type="number" className="border rounded p-2 dark:bg-gray-700 dark:text-white" />
                    <input name="ধর্ম" value={formData.ধর্ম} onChange={handleChange} placeholder="ধর্ম" type="number" className="border rounded p-2 dark:bg-gray-700 dark:text-white" />
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    ➕ যোগ করুন
                </button>
            </form>

            {/* Student List */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                    📋 শিক্ষার্থী তালিকা
                </h2>
                {students.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300">কোনো শিক্ষার্থী নেই।</p>
                ) : (
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                                <th className="p-2">নাম</th>
                                <th className="p-2">রোল</th>
                                <th className="p-2">বাংলা</th>
                                <th className="p-2">ইংরেজি</th>
                                <th className="p-2">গণিত</th>
                                <th className="p-2">বিজ্ঞান</th>
                                <th className="p-2">ধর্ম</th>
                                <th className="p-2">সামাজিক</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((st) => (
                                <tr key={st.id} className="border-b dark:border-gray-600">
                                    <td className="p-2">{st.name}</td>
                                    <td className="p-2">{st.roll}</td>
                                    <td className="p-2">{st.বাংলা}</td>
                                    <td className="p-2">{st.ইংরেজি}</td>
                                    <td className="p-2">{st.গণিত}</td>
                                    <td className="p-2">{st.বিজ্ঞান}</td>
                                    <td className="p-2">{st.ধর্ম}</td>
                                    <td className="p-2">{st.ধর্ম}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

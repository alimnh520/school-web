"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from "lucide-react";

const classes = [
    { id: 1, name: "প্রথম শ্রেণী" },
    { id: 2, name: "দ্বিতীয় শ্রেণী" },
    { id: 3, name: "তৃতীয় শ্রেণী" },
    { id: 4, name: "চতুর্থ শ্রেণী" },
    { id: 5, name: "পঞ্চম শ্রেণী" },
];

export default function Dashboard() {
    const [selectedClass, setSelectedClass] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("Test");
    const [formData, setFormData] = useState({
        personalInfo: {
            name_bn: "",
            name_en: "",
            class: "",
            rollNumber: "",
            section: "",
        },
        test: { bangla: "", english: "", math: "", science: "", religion: "", social: "", marksheet: null },
        halfyearly: { bangla: "", english: "", math: "", science: "", religion: "", social: "", marksheet: null },
        final: { bangla: "", english: "", math: "", science: "", religion: "", social: "", marksheet: null },
    });

    const activeKey = activeTab.toLowerCase();

    const handleInputChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    const handleFileChange = (section, field, file) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: file },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formPayload = new FormData();

            formPayload.append("data", JSON.stringify(formData));

            if (formData.test.marksheet) formPayload.append("testMarkSheet", formData.test.marksheet);
            if (formData.halfyearly.marksheet) formPayload.append("halfYearlyMarkSheet", formData.halfyearly.marksheet);
            if (formData.final.marksheet) formPayload.append("finalMarkSheet", formData.final.marksheet);

            const res = await fetch("/api/students-mark", {
                method: "POST",
                body: formPayload,
            });
            const data = await res.json();
            if (data.success) {
                setShowForm(false);
                setFormData({
                    personalInfo: {
                        name_bn: "",
                        name_en: "",
                        class: "",
                        rollNumber: "",
                        section: "",
                    },
                    test: { bangla: "", english: "", math: "", science: "", religion: "", social: "", marksheet: null },
                    halfyearly: { bangla: "", english: "", math: "", science: "", religion: "", social: "", marksheet: null },
                    final: { bangla: "", english: "", math: "", science: "", religion: "", social: "", marksheet: null },
                })
            };
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-600 dark:text-green-400 flex justify-center items-center gap-2">
                    <GraduationCap className="w-8 h-8" /> শ্রেণী ভিত্তিক তথ্য
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    ক্লাস নির্বাচন করুন এবং শিক্ষার্থীর তথ্য পূরণ করুন 📖
                </p>
            </div>

            {/* Class List */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {classes.map((cls) => (
                    <motion.div
                        key={cls.id}
                        whileHover={{ scale: 1.05 }}
                        className={`cursor-pointer rounded-2xl shadow-md p-6 text-center font-semibold border transition-all ${selectedClass === cls.id
                            ? "bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg"
                            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:shadow-xl"
                            }`}
                        onClick={() => {
                            setSelectedClass(cls.id);
                            setShowForm(false);
                        }}
                    >
                        <Users className="w-8 h-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
                        {cls.name}
                    </motion.div>
                ))}
            </div>

            {/* Add Student Button */}
            {selectedClass && (
                <div className="mt-4 text-right">
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow"
                        onClick={() => {
                            setShowForm(true);
                            setFormData((prev) => ({
                                ...prev,
                                personalInfo: {
                                    ...prev.personalInfo,
                                    class: classes.find((c) => c.id === selectedClass)?.name,
                                },
                            }));
                        }}
                    >
                        ➕ শিক্ষার্থী যোগ করুন
                    </Button>
                </div>
            )}

            {/* Form Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center"
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50"
                            onClick={() => setShowForm(false)}
                        ></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-3xl w-full z-50"
                        >
                            {/* Tabs */}
                            <div className="flex gap-4 mb-4 border-b border-gray-300 dark:border-gray-600">
                                {["Test", "HalfYearly", "Final"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === tab
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Personal Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="নাম (বাংলা)"
                                        value={formData.personalInfo.name_bn}
                                        onChange={(e) => handleInputChange("personalInfo", "name_bn", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Name (English)"
                                        value={formData.personalInfo.name_en}
                                        onChange={(e) => handleInputChange("personalInfo", "name_en", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                        required
                                    />
                                    <input
                                        type="number"
                                        placeholder="Roll Number"
                                        value={formData.personalInfo.rollNumber}
                                        onChange={(e) => handleInputChange("personalInfo", "rollNumber", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Section"
                                        value={formData.personalInfo.section}
                                        onChange={(e) => handleInputChange("personalInfo", "section", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Class"
                                        value={formData.personalInfo.class}
                                        disabled
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-200 dark:bg-gray-600 text-gray-500"
                                    />
                                </div>

                                {/* Active Tab Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(formData[activeKey]).map(([field, value]) => {
                                        if (field === "marksheet") {
                                            return (
                                                <div key={field} className="flex flex-col">
                                                    <label className="text-sm mb-1 text-gray-500">Marksheet Upload</label>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,image/*"
                                                        onChange={(e) =>
                                                            handleFileChange(activeKey, field, e.target.files[0])
                                                        }
                                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                                    />
                                                </div>
                                            );
                                        }
                                        return (
                                            <input
                                                key={field}
                                                type="text"
                                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                                value={value}
                                                onChange={(e) =>
                                                    handleInputChange(activeKey, field, e.target.value)
                                                }
                                                className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                            />
                                        );
                                    })}
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-2 mt-4">
                                    <Button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="bg-red-500 hover:bg-red-600 text-white"
                                    >
                                        ❌ Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className={`${loading
                                            ? "bg-green-400 cursor-not-allowed"
                                            : "bg-green-500 hover:bg-green-600"
                                            } text-white flex items-center gap-2`}
                                    >
                                        {loading ? (
                                            <>
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
                                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                    ></path>
                                                </svg>
                                                Loading...
                                            </>
                                        ) : (
                                            "✅ Submit"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

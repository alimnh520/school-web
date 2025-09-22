"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
    const [studentResult, setStudentResult] = useState([]);
    const [marksYear, setMarksYear] = useState("");
    const [personalInfo, setPersonalInfo] = useState({
        name_bn: "",
        name_en: "",
        class_name: "",
        rollNumber: "",
        section: "",
        year: "",
        bangla: "",
        english: "",
        math: "",
        science: "",
        religion: "",
        social: "",
    });

    // Fetch all student marks
    useEffect(() => {
        async function studentMarks() {
            try {
                const res = await fetch("/api/students-mark", { method: "GET" });
                const data = await res.json();
                if (data.success) setStudentResult(data.message);
            } catch (error) {
                console.log(error);
            }
        }
        studentMarks();
    }, []);
    
    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const res = await fetch("/api/students-mark", {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const data = await res.json();
            toast.success(data.message, { position: "bottom-right" });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (field, value) => {
        setPersonalInfo((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/students-mark", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(personalInfo),
            });
            const data = await res.json();
            if (data.success) {
                setShowForm(false);
                setPersonalInfo({
                    name_bn: "",
                    name_en: "",
                    class_name: "",
                    rollNumber: "",
                    section: "",
                    year: "",
                    bangla: "",
                    english: "",
                    math: "",
                    science: "",
                    religion: "",
                    social: "",
                });
            }
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

            {/* Add Student Button + Year Filter */}
            <div className="mt-4 flex items-center space-x-3 justify-end text-right">
                <input
                    type="number"
                    placeholder="Year"
                    value={marksYear}
                    onChange={(e) => {
                        const value = e.target.value.slice(0, 4);
                        setMarksYear(value);
                    }}
                    className="p-2 w-20 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                />

                {selectedClass && (
                    <Button
                        className="dark:bg-gray-700 h-10 text-gray-800 dark:text-gray-100 shadow"
                        onClick={() => {
                            setShowForm(true);
                            setPersonalInfo((prev) => ({
                                ...prev,
                                class_name: classes.find((c) => c.id === selectedClass)?.name,
                            }));
                        }}
                    >
                        ➕ শিক্ষার্থী যোগ করুন
                    </Button>
                )}
            </div>

            {/* Student Results */}
            <div className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md min-h-[200px]">
                {studentResult
                    .filter(
                        (elem) =>
                            elem.year?.toString() === (marksYear || "2025") &&
                            elem.class_name ===
                            (classes.find((c) => c.id === selectedClass)?.name || "প্রথম শ্রেণী")
                    )
                    .sort((a, b) => a.rollNumber - b.rollNumber) // ✅ রোল নাম্বার অনুযায়ী সাজানো
                    .map((mark) => (
                        <div
                            key={mark._id}
                            className="p-4 mb-3 flex justify-between items-center rounded-lg border bg-gray-50 dark:bg-gray-700 shadow-sm"
                        >
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-100">
                                    নাম: {mark.name_bn} | রোল: {mark.rollNumber}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    ক্লাস: {mark.class_name} | বছর: {mark.year}
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-200">
                                    বাংলা: {mark.bangla}, ইংরেজি: {mark.english}, গণিত: {mark.math},
                                    বিজ্ঞান: {mark.science}, ধর্ম: {mark.religion}, সামাজিক: {mark.social}
                                </p>
                            </div>

                            <button
                                onClick={() => handleDelete(mark._id)}
                                className="ml-4 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
                            >
                                {loading ? 'লোডিং হচ্ছে':'❌ ডিলেট'}
                            </button>
                        </div>
                    ))}
            </div>

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
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Personal Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="নাম (বাংলা)"
                                        value={personalInfo.name_bn}
                                        onChange={(e) => handleChange("name_bn", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Name (English)"
                                        value={personalInfo.name_en}
                                        onChange={(e) => handleChange("name_en", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                        required
                                    />
                                    <input
                                        type="number"
                                        placeholder="Roll Number"
                                        value={personalInfo.rollNumber}
                                        onChange={(e) => handleChange("rollNumber", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Section"
                                        value={personalInfo.section}
                                        onChange={(e) => handleChange("section", e.target.value)}
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Class"
                                        value={personalInfo.class_name}
                                        disabled
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-200 dark:bg-gray-600 text-gray-500"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Year"
                                        value={personalInfo.year}
                                        onChange={(e) =>
                                            handleChange("year", e.target.value.slice(0, 4))
                                        }
                                        className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                    />
                                </div>

                                {/* Subject Marks */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["bangla", "english", "math", "science", "religion", "social"].map(
                                        (field) => (
                                            <input
                                                key={field}
                                                type="number"
                                                placeholder={`${field.toUpperCase()} Marks`}
                                                value={personalInfo[field]}
                                                onChange={(e) => handleChange(field, e.target.value)}
                                                className="p-2 rounded border dark:border-gray-600 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                                            />
                                        )
                                    )}
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
                                        {loading ? "Loading..." : "✅ Submit"}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <ToastContainer />
        </div>
    );
}

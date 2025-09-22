"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

export default function ResultPage() {
    const [studentResult, setStudentResult] = useState([]);
    const [selectedClass, setSelectedClass] = useState("প্রথম শ্রেণী"); // 🟢 ডিফল্ট
    const [marksYear, setMarksYear] = useState("2025"); // 🟢 ডিফল্ট
    const [searchRoll, setSearchRoll] = useState(""); // 🆕 রোল সার্চ
    const [selectedStudent, setSelectedStudent] = useState(null);

    const classes = [
        { id: 1, name: "প্রথম শ্রেণী" },
        { id: 2, name: "দ্বিতীয় শ্রেণী" },
        { id: 3, name: "তৃতীয় শ্রেণী" },
        { id: 4, name: "চতুর্থ শ্রেণী" },
        { id: 5, name: "পঞ্চম শ্রেণী" },
    ];

    // 🟢 ডাটা ফেচ
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

    // 🟢 ফিল্টার করা রেজাল্ট
    const filteredResults = studentResult
        .filter(
            (s) =>
                s.year?.toString() === (marksYear || "2025") &&
                s.class_name === (selectedClass || "প্রথম শ্রেণী") &&
                (searchRoll ? String(s.rollNumber).includes(searchRoll) : true) // 🆕 রোল ফিল্টার
        )
        .sort((a, b) => Number(a.rollNumber) - Number(b.rollNumber));

    return (
        <main className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-600 dark:text-green-400 flex justify-center items-center gap-2">
                    <GraduationCap className="w-8 h-8" />বার্ষিক পরীক্ষার ফলাফল
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    শ্রেণি, সাল এবং রোল দিয়ে সার্চ করুন 📖
                </p>
            </div>

            {/* Class List */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {classes.map((cls) => (
                    <motion.div
                        key={cls.id}
                        whileHover={{ scale: 1.05 }}
                        className={`cursor-pointer rounded-2xl shadow-md p-6 text-center font-semibold border transition-all ${selectedClass === cls.name
                            ? "bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg"
                            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:shadow-xl"
                            }`}
                        onClick={() => setSelectedClass(cls.name)}
                    >
                        <Users className="w-8 h-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
                        {cls.name}
                    </motion.div>
                ))}
            </div>

            {/* Year + Roll Filter */}
            <div className="mt-4 flex items-center space-x-3 justify-end text-right">
                <input
                    type="number"
                    placeholder="Year"
                    value={marksYear}
                    onChange={(e) => {
                        const value = e.target.value.slice(0, 4);
                        setMarksYear(value);
                    }}
                    className="p-2 w-24 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                />
                <input
                    type="number"
                    placeholder="Roll"
                    value={searchRoll}
                    onChange={(e) => setSearchRoll(e.target.value)}
                    className="p-2 w-28 rounded border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                />
            </div>

            {/* Student Results */}
            <div className="w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md min-h-[200px] overflow-x-auto">
                {filteredResults.length > 0 ? (
                    <table className="min-w-full border text-sm text-gray-700 dark:text-gray-200">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="border px-4 py-2">নাম (বাংলা)</th>
                                <th className="border px-4 py-2">নাম (English)</th>
                                <th className="border px-4 py-2">রোল</th>
                                <th className="border px-4 py-2">শ্রেণি</th>
                                <th className="border px-4 py-2">সেকশন</th>
                                <th className="border px-4 py-2">সাল</th>
                                <th className="border px-4 py-2">অপশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredResults.map((mark, i) => (
                                <tr
                                    key={mark._id}
                                    className={`${i % 2 === 0 ? "bg-white dark:bg-gray-700" : "bg-gray-50 dark:bg-gray-600"} hover:bg-gray-100 dark:hover:bg-gray-500 transition`}
                                >
                                    <td className="border px-4 text-center py-2">{mark.name_bn}</td>
                                    <td className="border px-4 text-center py-2">{mark.name_en}</td>
                                    <td className="border px-4 text-center py-2">{mark.rollNumber}</td>
                                    <td className="border px-4 text-center py-2">{mark.class_name}</td>
                                    <td className="border px-4 text-center py-2">{mark.section || "-"}</td>
                                    <td className="border px-4 text-center py-2">{mark.year}</td>
                                    <td className="border px-4 text-center py-2">
                                        <button
                                            onClick={() => setSelectedStudent(mark)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                        >
                                            📑 মার্কশীট
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 py-6">
                        ❌ কোনো ফলাফল পাওয়া যায়নি
                    </p>
                )}
            </div>


            {/* Modal for Marksheet */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                        <button
                            onClick={() => setSelectedStudent(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ✖
                        </button>
                        <h2 className="text-xl font-bold text-center text-green-600 mb-4">
                            মার্কশীট - {selectedStudent.name_bn}
                        </h2>
                        <p className="text-center text-gray-600 mb-4">
                            রোল: {selectedStudent.rollNumber} | শ্রেণি: {selectedStudent.class_name} | সাল: {selectedStudent.year}
                        </p>
                        <table className="min-w-full border text-sm text-gray-700">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-4 py-2">বিষয়</th>
                                    <th className="border px-4 py-2">নম্বর</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border px-4 py-2">বাংলা</td><td className="border px-4 py-2">{selectedStudent.bangla}</td></tr>
                                <tr><td className="border px-4 py-2">ইংরেজি</td><td className="border px-4 py-2">{selectedStudent.english}</td></tr>
                                <tr><td className="border px-4 py-2">গণিত</td><td className="border px-4 py-2">{selectedStudent.math}</td></tr>
                                <tr><td className="border px-4 py-2">বিজ্ঞান</td><td className="border px-4 py-2">{selectedStudent.science}</td></tr>
                                <tr><td className="border px-4 py-2">ধর্ম</td><td className="border px-4 py-2">{selectedStudent.religion}</td></tr>
                                <tr><td className="border px-4 py-2">সামাজিক বিজ্ঞান</td><td className="border px-4 py-2">{selectedStudent.social}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </main>
    );
}

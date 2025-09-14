"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";
import { FaTrophy, FaMedal, FaChartLine } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export default function ResultPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || ফলাফল"
    }, []);


    const resultSections = [
        {
            titleBn: "অভ্যন্তরীণ ফলাফল",
            titleEn: "Internal Results",
            descBn:
                "মাসিক ও সাপ্তাহিক পরীক্ষার ফলাফল এখানে প্রকাশিত হয়। শিক্ষার্থীরা তাদের ফলাফল অনলাইনে দেখতে ও ডাউনলোড করতে পারে।",
            descEn:
                "Monthly and weekly exam results are published here. Students can view and download their results online.",
            icon: <FaChartLine className="text-4xl" />,
            color: "from-blue-500 to-indigo-500",
            table: [
                { subject: "বাংলা", grade: "A", marks: 85 },
                { subject: "গণিত", grade: "A+", marks: 92 },
                { subject: "ইংরেজি", grade: "B+", marks: 78 },
            ],
        },
        {
            titleBn: "বার্ষিক পরীক্ষা ফলাফল",
            titleEn: "Annual Exam Results",
            descBn:
                "প্রতিটি শিক্ষাবর্ষ শেষে বার্ষিক পরীক্ষার ফলাফল প্রকাশ করা হয়। এটি শিক্ষার্থীদের পরবর্তী শ্রেণিতে উত্তীর্ণ হওয়ার জন্য বিবেচনা করা হয়।",
            descEn:
                "At the end of each academic year, annual exam results are published. These are considered for promotion to the next grade.",
            icon: <MdSchool className="text-4xl" />,
            color: "from-green-500 to-emerald-500",
            table: [
                { subject: "বাংলা", grade: "A+", marks: 95 },
                { subject: "গণিত", grade: "A", marks: 88 },
                { subject: "বিজ্ঞান", grade: "A+", marks: 91 },
                { subject: "ইংরেজি", grade: "A", marks: 85 },
            ],
        },
        {
            titleBn: "বৃত্তি পরীক্ষা ফলাফল",
            titleEn: "Scholarship Exam Results",
            descBn:
                "প্রতিভাবান শিক্ষার্থীদের উৎসাহিত করার জন্য বৃত্তি পরীক্ষার ফলাফল প্রকাশ করা হয়। নির্বাচিত শিক্ষার্থীরা বিশেষ পুরস্কার পেয়ে থাকে।",
            descEn:
                "Scholarship exam results are published to encourage talented students. Selected students receive special awards and recognition.",
            icon: <FaTrophy className="text-4xl" />,
            color: "from-yellow-500 to-orange-500",
            table: [
                { name: "রাকিবুল হাসান", grade: "Class 5", scholarship: "Talent Pool" },
                { name: "মাহমুদা আক্তার", grade: "Class 8", scholarship: "General" },
                { name: "সাইফুল ইসলাম", grade: "Class 5", scholarship: "General" },
            ],
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "ফলাফল" : "Results"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "এখানে অভ্যন্তরীণ, বার্ষিক এবং বৃত্তি পরীক্ষার সকল ফলাফল প্রকাশিত হয়।"
                            : "Here you can find all internal, annual, and scholarship exam results."}
                    </p>
                </header>

                {/* Sections */}
                <div className="space-y-12">
                    {resultSections.map((section, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
                        >
                            <div
                                className={`bg-gradient-to-r ${section.color} text-white p-6 flex flex-col items-center justify-center`}
                            >
                                {section.icon}
                                <h2 className="mt-2 text-xl font-bold text-center">
                                    {lang ? section.titleBn : section.titleEn}
                                </h2>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-700 text-center mb-6">
                                    {lang ? section.descBn : section.descEn}
                                </p>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border text-sm text-gray-700">
                                        <thead className="bg-gray-100 text-gray-800">
                                            <tr>
                                                {i === 2 ? (
                                                    <>
                                                        <th className="border px-4 py-2">নাম / Name</th>
                                                        <th className="border px-4 py-2">শ্রেণি / Class</th>
                                                        <th className="border px-4 py-2">বৃত্তি / Scholarship</th>
                                                    </>
                                                ) : (
                                                    <>
                                                        <th className="border px-4 py-2">বিষয় / Subject</th>
                                                        <th className="border px-4 py-2">গ্রেড / Grade</th>
                                                        <th className="border px-4 py-2">মার্কস / Marks</th>
                                                    </>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table.map((row, j) => (
                                                <tr
                                                    key={j}
                                                    className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                                                >
                                                    {i === 2 ? (
                                                        <>
                                                            <td className="border px-4 py-2">{row.name}</td>
                                                            <td className="border px-4 py-2">{row.grade}</td>
                                                            <td className="border px-4 py-2">{row.scholarship}</td>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <td className="border px-4 py-2">{row.subject}</td>
                                                            <td className="border px-4 py-2">{row.grade}</td>
                                                            <td className="border px-4 py-2">{row.marks}</td>
                                                        </>
                                                    )}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="text-center mt-6">
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                                        {lang ? "আরও দেখুন" : "View More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Notice */}
                <div className="mt-12 bg-white rounded-2xl shadow p-6 text-center border">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {lang ? "ফলাফল সম্পর্কিত নোটিশ" : "Result Notice"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {lang
                            ? "ফলাফল প্রকাশের নির্ধারিত তারিখ ওয়েবসাইটে আগেই জানানো হবে। শিক্ষার্থীরা লগইন করে বিস্তারিত ফলাফল দেখতে পারবে।"
                            : "The date of result publication will be announced earlier on the website. Students will be able to log in and view detailed results."}
                    </p>
                </div>
            </div>
        </main>
    );
}

"use client";
import React, { useContext } from "react";
import { UserContext } from "@/app/Provider";
import { FaBookOpen, FaCalendarAlt, FaFileAlt, FaClipboardList } from "react-icons/fa";

export default function ExamInfoPage() {
    const { lang } = useContext(UserContext);

    const examInfo = [
        {
            titleBn: "পরীক্ষার নিয়মাবলী",
            titleEn: "Examination Rules",
            descBn:
                "শিক্ষার্থীদের পরীক্ষা চলাকালীন শৃঙ্খলা বজায় রাখা বাধ্যতামূলক। অসদুপায় অবলম্বন করলে কঠোর ব্যবস্থা নেওয়া হবে।",
            descEn:
                "Students must maintain discipline during exams. Any unfair means will result in strict action.",
            icon: <FaClipboardList className="text-4xl" />,
            color: "from-red-500 to-pink-500",
        },
        {
            titleBn: "পরীক্ষার সময়সূচী",
            titleEn: "Exam Schedule",
            descBn:
                "প্রতিটি পরীক্ষার পূর্বে বিস্তারিত সময়সূচী প্রকাশ করা হয়। দয়া করে সময়সূচী অনুসরণ করুন।",
            descEn:
                "A detailed exam schedule is published before each exam. Please follow the routine carefully.",
            icon: <FaCalendarAlt className="text-4xl" />,
            color: "from-blue-500 to-indigo-500",
        },
        {
            titleBn: "সিলেবাস",
            titleEn: "Syllabus",
            descBn:
                "প্রতিটি শ্রেণির জন্য আলাদা সিলেবাস তৈরি করা হয়, যা পরীক্ষা পূর্বে শিক্ষার্থীদের প্রদান করা হয়।",
            descEn:
                "Each class has a separate syllabus which is provided to students before the exam.",
            icon: <FaBookOpen className="text-4xl" />,
            color: "from-green-500 to-emerald-500",
        },
        {
            titleBn: "পাঠ পরিক্রমা",
            titleEn: "Lesson Plan",
            descBn:
                "বার্ষিক পাঠ পরিক্রমা অনুসারে প্রতিটি বিষয় পড়ানো হয় এবং পরীক্ষা গ্রহণ করা হয়।",
            descEn:
                "Exams are conducted based on the yearly lesson plan followed for each subject.",
            icon: <FaFileAlt className="text-4xl" />,
            color: "from-yellow-500 to-orange-500",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "পরীক্ষার তথ্য" : "Examination Information"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "পরীক্ষা সম্পর্কিত সকল তথ্য ও নির্দেশিকা এখানে দেওয়া হলো।"
                            : "Here are all the details and guidelines regarding examinations."}
                    </p>
                </header>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {examInfo.map((info, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            <div
                                className={`bg-gradient-to-r ${info.color} text-white p-6 flex flex-col items-center justify-center`}
                            >
                                {info.icon}
                                <h2 className="mt-2 text-xl font-bold text-center">
                                    {lang ? info.titleBn : info.titleEn}
                                </h2>
                            </div>
                            <div className="p-6 text-center text-gray-700">
                                <p>{lang ? info.descBn : info.descEn}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Section */}
                <div className="mt-12 bg-white rounded-2xl shadow p-6 text-center border">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {lang ? "পরীক্ষা সম্পর্কে বিশেষ নোটিশ" : "Special Exam Notice"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {lang
                            ? "প্রতিটি পরীক্ষার ফলাফল নির্ধারিত সময়ের মধ্যে প্রকাশ করা হবে এবং তা ওয়েবসাইটে প্রকাশিত হবে।"
                            : "The results of each exam will be published within the scheduled time and made available on the website."}
                    </p>
                </div>
            </div>
        </main>
    );
}

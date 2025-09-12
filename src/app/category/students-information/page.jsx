"use client";
import React, { useContext } from "react";
import { UserContext } from "@/app/Provider";
import { FaUsers, FaPray, FaAward, FaHome } from "react-icons/fa";

export default function StudentInfoPage() {
    const { lang } = useContext(UserContext);

    const studentInfo = [
        {
            titleBn: "ছাত্র/ছাত্রীর সংখ্যা",
            titleEn: "Total Students",
            descBn: "আমাদের বিদ্যালয়ে বর্তমানে ৮৫০ জন শিক্ষার্থী অধ্যয়নরত।",
            descEn: "Currently, our school has 850 students enrolled.",
            icon: <FaUsers className="text-4xl" />,
            color: "from-blue-500 to-indigo-500",
        },
        {
            titleBn: "ধর্ম ভিত্তিক শিক্ষার্থী",
            titleEn: "Students by Religion",
            descBn: "বিভিন্ন ধর্মের শিক্ষার্থী এখানে সমানভাবে শিক্ষা গ্রহণ করছে।",
            descEn: "Students from different religions study together with harmony.",
            icon: <FaPray className="text-4xl" />,
            color: "from-green-500 to-emerald-500",
        },
        {
            titleBn: "উপবৃত্তি প্রাপ্ত শিক্ষার্থী",
            titleEn: "Scholarship Holders",
            descBn: "১০০ এর বেশি মেধাবী শিক্ষার্থী উপবৃত্তি পাচ্ছে।",
            descEn: "More than 100 meritorious students receive scholarships.",
            icon: <FaAward className="text-4xl" />,
            color: "from-yellow-500 to-orange-500",
        },
        {
            titleBn: "ছাত্রাবাস তথ্য",
            titleEn: "Hostel Information",
            descBn: "ছাত্র-ছাত্রীদের জন্য আলাদা হোস্টেল সুবিধা রয়েছে।",
            descEn: "Separate hostel facilities are available for boys and girls.",
            icon: <FaHome className="text-4xl" />,
            color: "from-pink-500 to-rose-500",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "ছাত্র/ছাত্রী সংক্রান্ত তথ্য" : "Student Information"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "আমাদের শিক্ষার্থীদের সংখ্যা ও অন্যান্য তথ্য এখানে দেওয়া হলো।"
                            : "Here are details about our students and related information."}
                    </p>
                </header>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {studentInfo.map((info, i) => (
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
                        {lang ? "আমাদের প্রতিশ্রুতি" : "Our Commitment"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {lang
                            ? "আমরা প্রতিটি শিক্ষার্থীর মানসম্মত শিক্ষা, সমান সুযোগ ও নিরাপদ পরিবেশ নিশ্চিত করি।"
                            : "We ensure quality education, equal opportunities, and a safe environment for every student."}
                    </p>
                </div>
            </div>
        </main>
    );
}

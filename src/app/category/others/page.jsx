"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";
import { FaBusAlt, FaFutbol, FaTheaterMasks, FaUserFriends } from "react-icons/fa";

export default function OthersPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || অন্যান্য কার্যক্রম"
    }, []);

    const activities = [
        {
            titleBn: "শিক্ষা সফর",
            titleEn: "Educational Tour",
            descBn: "শিক্ষার্থীদের জ্ঞানার্জন ও অভিজ্ঞতা সমৃদ্ধ করার জন্য প্রতিবছর শিক্ষা সফরের আয়োজন করা হয়।",
            descEn: "Every year, educational tours are organized to enrich students’ knowledge and experience.",
            icon: <FaBusAlt className="text-4xl text-blue-600" />,
            color: "from-blue-100 to-blue-50",
        },
        {
            titleBn: "ক্রীড়া কার্যক্রম",
            titleEn: "Sports Activities",
            descBn: "শারীরিক ও মানসিক বিকাশে ক্রীড়ার গুরুত্ব অপরিসীম। নিয়মিত ক্রীড়া প্রতিযোগিতা আয়োজন করা হয়।",
            descEn: "Sports are essential for physical and mental growth. Regular competitions are organized.",
            icon: <FaFutbol className="text-4xl text-green-600" />,
            color: "from-green-100 to-green-50",
        },
        {
            titleBn: "সাংস্কৃতিক কার্যক্রম",
            titleEn: "Cultural Programs",
            descBn: "শিক্ষার্থীদের প্রতিভা বিকাশের জন্য নাটক, গান, নাচ ও বিতর্কের মতো সাংস্কৃতিক কার্যক্রম অনুষ্ঠিত হয়।",
            descEn: "To develop students’ talents, cultural programs like drama, music, dance, and debate are arranged.",
            icon: <FaTheaterMasks className="text-4xl text-pink-600" />,
            color: "from-pink-100 to-pink-50",
        },
        {
            titleBn: "স্কাউটস",
            titleEn: "Scouts",
            descBn: "শৃঙ্খলা, সেবাবোধ ও নেতৃত্ব গুণ বিকাশে শিক্ষার্থীদের স্কাউটস কার্যক্রমে অংশগ্রহণ নিশ্চিত করা হয়।",
            descEn: "Scouting ensures discipline, service, and leadership skills among students.",
            icon: <FaUserFriends className="text-4xl text-indigo-600" />,
            color: "from-indigo-100 to-indigo-50",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "অন্যান্য কার্যক্রম" : "Other Activities"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "শিক্ষার্থীদের মানসিক, সামাজিক ও সাংস্কৃতিক বিকাশের জন্য বিভিন্ন কার্যক্রম পরিচালিত হয়।"
                            : "Various activities are conducted for students’ mental, social, and cultural growth."}
                    </p>
                </header>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {activities.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-r ${item.color} rounded-2xl shadow-lg p-6 hover:shadow-2xl transition`}
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {lang ? item.titleBn : item.titleEn}
                                    </h2>
                                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                        {lang ? item.descBn : item.descEn}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-12 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} মা-মনি শিশু-কিশোর একাডেমি। সর্বস্বত্ব সংরক্ষিত।
                </footer>
            </div>
        </main>
    );
}

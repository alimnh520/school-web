"use client";
import React, { useContext } from "react";
import { UserContext } from "@/app/Provider";
import { FaSchool, FaIdCard, FaHashtag, FaCode } from "react-icons/fa";

export default function SchoolInfoPage() {
    const { lang } = useContext(UserContext);

    const info = [
        {
            titleBn: "বিদ্যালয়ের স্থাপনকাল",
            titleEn: "Establishment Year",
            valueBn: "১৯৮৫",
            valueEn: "1985",
            icon: <FaSchool className="text-3xl text-blue-600" />,
        },
        {
            titleBn: "EIIN নম্বর",
            titleEn: "EIIN Number",
            valueBn: "123456",
            valueEn: "123456",
            icon: <FaIdCard className="text-3xl text-green-600" />,
        },
        {
            titleBn: "MPO কোড",
            titleEn: "MPO Code",
            valueBn: "98765",
            valueEn: "98765",
            icon: <FaHashtag className="text-3xl text-indigo-600" />,
        },
        {
            titleBn: "বিদ্যালয়ের কোড",
            titleEn: "School Code",
            valueBn: "54321",
            valueEn: "54321",
            icon: <FaCode className="text-3xl text-rose-600" />,
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "স্কুল সংক্রান্ত তথ্য" : "School Information"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "বিদ্যালয়ের প্রয়োজনীয় তথ্য এখানে প্রদর্শিত হয়েছে।"
                            : "Important details about the school are presented here."}
                    </p>
                </header>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {info.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl transition"
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-700">
                                        {lang ? item.titleBn : item.titleEn}
                                    </h2>
                                    <p className="mt-1 text-xl font-bold text-gray-900">
                                        {lang ? item.valueBn : item.valueEn}
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

"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSecurity, MdChildCare } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";

export default function ImportantNumbersPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || গুরুত্বপূর্ণ নাম্বার"
    }, []);

    const numbers = [
        {
            titleBn: "সরকারি তথ্য",
            titleEn: "Government Information",
            number: "333",
            icon: <FaPhoneAlt className="text-3xl text-blue-600" />,
            color: "from-blue-100 to-blue-50",
        },
        {
            titleBn: "জরুরী সেবা",
            titleEn: "Emergency Service",
            number: "999",
            icon: <GiPoliceOfficerHead className="text-3xl text-red-600" />,
            color: "from-red-100 to-red-50",
        },
        {
            titleBn: "নারী ও শিশু নির্যাতন",
            titleEn: "Women & Child Abuse",
            number: "109",
            icon: <MdChildCare className="text-3xl text-pink-600" />,
            color: "from-pink-100 to-pink-50",
        },
        {
            titleBn: "দুদক",
            titleEn: "Anti-Corruption Commission",
            number: "106",
            icon: <MdOutlineSecurity className="text-3xl text-green-600" />,
            color: "from-green-100 to-green-50",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "গুরুত্বপূর্ণ নাম্বার সমূহ" : "Important Numbers"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "জরুরি প্রয়োজনে নিচের নাম্বারগুলো ব্যবহার করুন।"
                            : "Use the following numbers in case of emergency."}
                    </p>
                </header>

                {/* Numbers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {numbers.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-gradient-to-r ${item.color} rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition flex items-center gap-4`}
                        >
                            {item.icon}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-700">
                                    {lang ? item.titleBn : item.titleEn}
                                </h2>
                                <p className="mt-1 text-2xl font-bold text-gray-900">
                                    {item.number}
                                </p>
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

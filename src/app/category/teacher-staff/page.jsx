"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";

export default function TeachersAndStaffPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || শিক্ষক এবং কর্মচারী"
    }, []);

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "শিক্ষক ও কর্মচারী" : "Teachers & Staff"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "আমাদের নিবেদিতপ্রাণ শিক্ষক ও কর্মচারীদের তথ্য"
                            : "Information about our dedicated teachers and staff."}
                    </p>
                </header>

                {/* Teachers Info */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-blue-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "শিক্ষকদের তথ্য" : "Teachers Information"}
                        </h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "মোঃ আব্দুল হাকিম", role: "সহকারী শিক্ষক", img: "/gallary/teacher1.jpg" },
                            { name: "জনাবা রুবিনা আক্তার", role: "সহকারী শিক্ষক", img: "/gallary/teacher2.jpg" },
                            { name: "মোঃ কামাল হোসেন", role: "সহকারী শিক্ষক", img: "/gallary/teacher3.jpg" },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 border rounded-xl p-4 text-center hover:shadow-lg transition"
                            >
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-200 shadow"
                                />
                                <h3 className="mt-4 font-semibold text-gray-800">{t.name}</h3>
                                <p className="text-sm text-gray-600">{t.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Staff Info */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-green-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "কর্মচারীদের তথ্য" : "Staff Information"}
                        </h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: "মোঃ রফিকুল ইসলাম", role: "অফিস সহকারী", img: "/gallary/staff1.jpg" },
                            { name: "জনাবা শিরিন বেগম", role: "আয়া", img: "/gallary/staff2.jpg" },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 bg-gray-50 border rounded-xl p-4 hover:shadow-md transition"
                            >
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">{s.name}</h3>
                                    <p className="text-sm text-gray-600">{s.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Former Members */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-purple-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "প্রাক্তন সদস্যদের তথ্য" : "Former Members"}
                        </h2>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3 text-gray-700 list-disc list-inside">
                            <li>
                                {lang
                                    ? "মোঃ শহিদুল ইসলাম - সাবেক প্রধান শিক্ষক (২০০৫ - ২০২০)"
                                    : "Mr. Shahidul Islam - Former Principal (2005 - 2020)"}
                            </li>
                            <li>
                                {lang
                                    ? "জনাবা সালমা আক্তার - সাবেক সহকারী শিক্ষক (২০১০ - ২০১৮)"
                                    : "Mrs. Salma Akter - Former Assistant Teacher (2010 - 2018)"}
                            </li>
                            <li>
                                {lang
                                    ? "মোঃ আজিজুল হক - সাবেক অফিস সহকারী (২০০০ - ২০১৫)"
                                    : "Mr. Azizul Haque - Former Office Assistant (2000 - 2015)"}
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}

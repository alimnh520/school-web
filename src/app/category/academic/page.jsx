"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";

export default function AcademicInfoPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || একাডেমিক তথ্য"
    }, []);

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "একাডেমিক তথ্য" : "Academic Information"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "আমাদের প্রতিষ্ঠানের একাডেমিক কার্যক্রম সম্পর্কে বিস্তারিত"
                            : "Details about our institution’s academic activities."}
                    </p>
                </header>

                {/* Notices */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-indigo-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "নোটিশ সমূহ" : "Notices"}
                        </h2>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3 text-gray-700 list-disc list-inside">
                            <li>{lang ? "বার্ষিক পরীক্ষার ফলাফল প্রকাশ" : "Annual Exam Results Published"}</li>
                            <li>{lang ? "এসএসসি পরীক্ষার সূচি প্রকাশ" : "SSC Exam Schedule Announced"}</li>
                            <li>{lang ? "ভর্তি সংক্রান্ত জরুরি বিজ্ঞপ্তি" : "Important Admission Notice"}</li>
                        </ul>
                        <button className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                            {lang ? "সব নোটিশ দেখুন" : "View All Notices"}
                        </button>
                    </div>
                </section>

                {/* E-Lesson */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-blue-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "ই-লেসন" : "E-Lesson"}
                        </h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "গণিত অধ্যায় ১", link: "#" },
                            { title: "বাংলা ব্যাকরণ", link: "#" },
                            { title: "ইংরেজি ব্যাকরণ", link: "#" },
                            { title: "বিজ্ঞান অধ্যায় ৩", link: "#" },
                        ].map((lesson, i) => (
                            <a
                                key={i}
                                href={lesson.link}
                                className="block p-4 bg-gray-50 border rounded-lg hover:bg-blue-50 hover:shadow-md transition"
                            >
                                📘 {lesson.title}
                            </a>
                        ))}
                    </div>
                </section>

                {/* Textbook Info */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-green-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "পাঠ্যপুস্তক তথ্য" : "Textbook Information"}
                        </h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { subject: "বাংলা", year: "২০২৫", file: "#" },
                            { subject: "গণিত", year: "২০২৫", file: "#" },
                            { subject: "বিজ্ঞান", year: "২০২৫", file: "#" },
                        ].map((book, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 border rounded-xl p-4 hover:shadow-lg transition text-center"
                            >
                                <h3 className="font-semibold text-gray-800">{book.subject}</h3>
                                <p className="text-sm text-gray-600">{lang ? `সাল: ${book.year}` : `Year: ${book.year}`}</p>
                                <a
                                    href={book.file}
                                    className="inline-block mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    {lang ? "ডাউনলোড" : "Download"}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hostel Info */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-purple-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "ছাত্রাবাস তথ্য" : "Hostel Information"}
                        </h2>
                    </div>
                    <div className="p-6 text-gray-700 space-y-3">
                        <p>
                            {lang
                                ? "আমাদের প্রতিষ্ঠানে ছাত্রদের জন্য সুসজ্জিত ছাত্রাবাস রয়েছে। নিরাপদ পরিবেশ, স্বাস্থ্যকর খাবার এবং পড়াশোনার জন্য নিরিবিলি আবহ প্রদান করা হয়।"
                                : "Our institution provides well-furnished hostels for students with a safe environment, hygienic meals, and a calm study atmosphere."}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>{lang ? "আসন সংখ্যা: ২০০" : "Total Seats: 200"}</li>
                            <li>{lang ? "খাবার: ৩ বেলা" : "Meals: 3 times daily"}</li>
                            <li>{lang ? "সুপারভিশন: আবাসিক শিক্ষক" : "Supervision: Residential Teacher"}</li>
                        </ul>
                        <button className="mt-4 px-5 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
                            {lang ? "আবেদন করুন" : "Apply Now"}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}

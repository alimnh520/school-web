"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";

export default function AdministrativeInfoPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || প্রশাসনিক তথ্য"
    }, []);

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "প্রশাসনিক তথ্য" : "Administrative Information"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "বিদ্যালয়ের প্রশাসনিক কাঠামো ও দায়িত্বশীল ব্যক্তিদের তথ্য"
                            : "Administrative structure and key authorities of the school."}
                    </p>
                </header>

                {/* Principal Message */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-blue-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "প্রধান শিক্ষকের বাণী" : "Message from the Head Teacher"}
                        </h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex flex-col justify-center items-center space-y-1">
                            <img
                                src="/gallary/546418052_1271174001450094_7641773692659982191_n.jpg"
                                alt="Principal"
                                className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow"
                            />
                            <h2 className="text-xl font-semibold text-gray-800">
                                {lang ? "মোঃ আশরাফুল আলম" : "MD Asraful Alam"}
                            </h2>
                        </div>
                        <div className="md:col-span-2 text-gray-700 leading-relaxed text-justify">
                            {lang
                                ? "শিক্ষার আলো ছড়িয়ে দিতে আমরা প্রতিশ্রুতিবদ্ধ। শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও সৃজনশীলতাই আমাদের মূল লক্ষ্য।"
                                : "We are committed to spreading the light of education. Knowledge, morality, and creativity of students are our core goals."}
                        </div>
                    </div>
                </section>

                {/* Chairman Message */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-indigo-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "সভাপতির বাণী" : "Message from the Chairman"}
                        </h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex flex-col justify-center items-center space-y-1">
                            <img
                                src="/gallary/546404152_24531347109814854_5838466105101725304_n.jpg"
                                alt="Chairman"
                                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-200 shadow"
                            />
                            <h2 className="text-xl font-semibold text-gray-800">
                                {lang ? "নিশাত আনজুম অনন্যা" : "Nishat Anjum Anana"}
                            </h2>
                        </div>
                        <div className="md:col-span-2 text-gray-700 leading-relaxed text-justify">
                            {lang
                                ? "শিক্ষার্থীদের সাফল্যই আমাদের আসল প্রাপ্তি। এ প্রতিষ্ঠানকে এগিয়ে নিতে সবাইকে ঐক্যবদ্ধ থাকতে হবে।"
                                : "The true achievement lies in students’ success. Everyone must remain united to move this institution forward."}
                        </div>
                    </div>
                </section>

                {/* Management Board */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-green-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "পরিচালনা পর্ষদ" : "Management Board"}
                        </h2>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3 text-gray-700 list-disc list-inside">
                            <li>{lang ? "সভাপতি: জনাব আব্দুল করিম" : "Chairman: Mr. Abdul Karim"}</li>
                            <li>{lang ? "সদস্য: জনাবা রহিমা বেগম" : "Member: Mrs. Rahima Begum"}</li>
                            <li>{lang ? "সদস্য: জনাব কামাল উদ্দিন" : "Member: Mr. Kamal Uddin"}</li>
                            <li>{lang ? "সদস্য সচিব: প্রধান শিক্ষক" : "Member Secretary: Head Teacher"}</li>
                        </ul>
                    </div>
                </section>

                {/* Donors List */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="bg-purple-600 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">
                            {lang ? "দাতা সদস্যদের তালিকা" : "Donor Members"}
                        </h2>
                    </div>
                    <div className="p-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="border p-2 text-left">#</th>
                                    <th className="border p-2 text-left">
                                        {lang ? "নাম" : "Name"}
                                    </th>
                                    <th className="border p-2 text-left">
                                        {lang ? "ঠিকানা" : "Address"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">1</td>
                                    <td className="border p-2">{lang ? "জনাব রফিকুল ইসলাম" : "Mr. Rafiqul Islam"}</td>
                                    <td className="border p-2">{lang ? "রাজশাহী" : "Rajshahi"}</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">2</td>
                                    <td className="border p-2">{lang ? "জনাবা শিরিন আক্তার" : "Mrs. Shirin Akter"}</td>
                                    <td className="border p-2">{lang ? "ঢাকা" : "Dhaka"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}

"use client";
import { UserContext } from "@/app/Provider";
import React, { useContext } from "react";

export default function ChairmanMessagePage() {
    const { lang } = useContext(UserContext);
    return (
        <main className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Hero / Header */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <h1 className="text-2xl md:text-3xl font-bold">সভাপতির বাণী</h1>
                    <p className="mt-1 opacity-90">
                        শিক্ষা ও মানবিক মূল্যবোধের সমন্বয়ে ভবিষ্যৎ প্রজন্মকে গড়ে তোলা আমাদের দায়িত্ব
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Left: Photo + Basic Info */}
                    <div className="flex flex-col items-center md:items-start md:col-span-1">
                        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md -mt-12">
                            <img
                                src="/gallary/546404152_24531347109814854_5838466105101725304_n.jpg"
                                alt="সভাপতি"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="text-center md:text-left mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {lang ? "নিশাত আনজুম অনন্যা" : "Nishat Anjum Anana"}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">সভাপতি</p>

                            <div className="mt-4 space-y-2 text-sm text-gray-700">
                                <p><strong>ঠিকানা:</strong> ৪৫৬, বিদ্যালয় রোড, রাজশাহী</p>
                                <p><strong>ফোন:</strong> +88 01811-654321</p>
                                <p><strong>ইমেইল:</strong> chairman@example.edu.bd</p>
                            </div>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href="#"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                                >
                                    বিস্তারিত
                                </a>
                                <a
                                    href="#"
                                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 transition"
                                >
                                    প্রিন্ট
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Message + Bio */}
                    <div className="md:col-span-2">
                        <div className="bg-white p-6 rounded-xl shadow-sm border">
                            <h3 className="text-lg font-bold text-gray-800">সভাপতির বাণী</h3>

                            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                                একটি শিক্ষাপ্রতিষ্ঠান শুধু জ্ঞান বিতরণের স্থান নয়, বরং মানবিক
                                মূল্যবোধ, নৈতিকতা ও সামাজিক দায়িত্ববোধ গঠনের ক্ষেত্রও বটে।{" "}
                                <span className="font-semibold">মা-মনি শিশু-কিশোর একাডেমি</span>
                                প্রতিষ্ঠার মূল লক্ষ্যই হলো প্রতিটি শিক্ষার্থীকে আলোকিত মানুষ হিসেবে গড়ে তোলা।
                            </p>

                            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                                আধুনিক সমাজে প্রতিযোগিতার সাথে টিকে থাকতে হলে মানসম্পন্ন শিক্ষার
                                বিকল্প নেই। এই বিদ্যালয়ের শিক্ষক, অভিভাবক এবং পরিচালনা পর্ষদের সম্মিলিত
                                প্রচেষ্টায় একটি আদর্শ শিক্ষা পরিবেশ সৃষ্টি হয়েছে। আমি আশা করি এই
                                ধারাবাহিকতা অব্যাহত থাকবে।
                            </p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border">
                                    <h4 className="font-semibold text-gray-800">আমাদের অঙ্গীকার</h4>
                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                                        <li>সবার জন্য শিক্ষার সমান সুযোগ</li>
                                        <li>নৈতিক ও চারিত্রিক উন্নয়ন</li>
                                        <li>আধুনিক প্রযুক্তিনির্ভর শিক্ষা</li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border">
                                    <h4 className="font-semibold text-gray-800">পরিচালনা পর্ষদের ভিশন</h4>
                                    <p className="mt-2 text-sm text-gray-700">
                                        শিক্ষা ও সংস্কৃতির সমন্বয়ে একটি আলোকিত প্রজন্ম তৈরি করা যারা জাতি ও দেশের
                                        উন্নয়নে অবদান রাখবে।
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                                <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-gray-800">অফিস সময়</h5>
                                    <p className="text-sm text-gray-700">শনিবার - বৃহস্পতিবার: ৯:০০ AM - ২:০০ PM</p>
                                </div>

                                <div className="flex gap-3">
                                    <a href="#" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">যোগাযোগ করুন</a>
                                    <a href="#" className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg border hover:bg-emerald-100 transition">বার্ষিক প্রতিবেদন</a>
                                </div>
                            </div>
                        </div>

                        {/* Map or gallery placeholder */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="h-44 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border">
                                Map / Location Embed
                            </div>
                            <div className="h-44 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border">
                                Gallery / Achievement photos
                            </div>
                        </div>

                    </div>
                </div>

                <footer className="bg-gray-50 p-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} মা-মনি শিশু-কিশোর একাডেমি। সর্বস্বত্ব সংরক্ষিত।
                </footer>
            </div>
        </main>
    );
}

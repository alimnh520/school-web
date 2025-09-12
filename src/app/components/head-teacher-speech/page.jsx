"use client";
import React from "react";

export default function PrincipalMessagePage() {
    return (
        <main className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Hero / Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                    <h1 className="text-2xl md:text-3xl font-bold">প্রধান শিক্ষিকার বাণী</h1>
                    <p className="mt-1 opacity-90">শিক্ষা, নৈতিকতা ও সৃজনশীলতায় শিক্ষার্থীদের গড়ে তোলা আমাদের লক্ষ্য</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Left: Photo + Basic Info */}
                    <div className="flex flex-col items-center md:items-start md:col-span-1">
                        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md -mt-20">
                            <img
                                src="/principal.jpg"
                                alt="প্রধান শিক্ষিকা"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="text-center md:text-left mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">মিসেস আফাজা রহমান</h2>
                            <p className="text-sm text-gray-500 mt-1">প্রধান শিক্ষিকা</p>

                            <div className="mt-4 space-y-2 text-sm text-gray-700">
                                <p><strong>ঠিকানা:</strong> ১২৩, পল্লী রোড, রাজশাহী</p>
                                <p><strong>ফোন:</strong> +88 01711-123456</p>
                                <p><strong>ইমেইল:</strong> principal@example.edu.bd</p>
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
                            <h3 className="text-lg font-bold text-gray-800">প্রধান শিক্ষিকার বাণী</h3>

                            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                                মানুষের জ্ঞানের তৃষ্ণা আছে। তৃষ্ণা মেটানোর জন্য মানুষ শিক্ষা
                                প্রতিষ্ঠান থেকে জ্ঞান অর্জন করে। অন্ধকারের কুহেলিকা দূর করে
                                শিক্ষার আলোয় জগতকে উদ্ভাসিত করার নিমত্তে সর্বোপরি শিক্ষার
                                গুরুত্ব অনুধাবন করে <span className="font-semibold">মা-মনি শিশু-কিশোর একাডেমি</span> নামক এই ঐতিহ্যবাহী
                                বিদ্যাপীঠটি প্রতিষ্ঠিত।
                            </p>

                            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                                শহরের প্রাত্যহিক কোলাহল থেকে মুক্ত, পল্লী-শোভিত সবুজ আবহে
                                বেষ্টিত এই প্রতিষ্ঠানটি অবস্থিত। এটি ছাত্র ও ছাত্রীর সমন্বয়ে
                                একটি সহ-শিক্ষার প্রতিষ্ঠান, যেখানে সকল শিক্ষার্থীকে মানসম্মত শিক্ষার
                                মাধ্যমে জীবন-দক্ষ, নৈতিক ও সৃজনশীল করে গড়ে তোলা হয়।
                            </p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-lg border">
                                    <h4 className="font-semibold text-gray-800">প্রতিষ্ঠার লক্ষ্য</h4>
                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                                        <li>সকল শিক্ষার্থীর মানসম্মত ও সুষম শিক্ষা নিশ্চিত করা</li>
                                        <li>নৈতিক ও সামাজিক দায়বদ্ধতা গঠন করা</li>
                                        <li>শিক্ষার্থীদের সৃজনশীলতা ও আত্মবিশ্বাস বৃদ্ধি করা</li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border">
                                    <h4 className="font-semibold text-gray-800">অ্যাকাডেমিক পরিবেশ</h4>
                                    <p className="mt-2 text-sm text-gray-700">
                                        উন্নত পাঠদান পদ্ধতি, সহায়ক প্রশিক্ষিত শিক্ষকবৃন্দ ও আধুনিক
                                        ল্যাব সুবিধার মাধ্যমে শিক্ষার্থীরা বাস্তব অভিজ্ঞতা অর্জন করে।
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                                <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-gray-800">অফিস সময়</h5>
                                    <p className="text-sm text-gray-700">শনিবার - বৃহস্পতিবার: ৮:০০ AM - ৩:০০ PM</p>
                                </div>

                                <div className="flex gap-3">
                                    <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">যোগাযোগ করুন</a>
                                    <a href="#" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg border hover:bg-indigo-100 transition">মাসিক রিপোর্ট</a>
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

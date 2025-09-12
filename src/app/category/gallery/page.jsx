"use client";
import React, { useContext } from "react";
import { UserContext } from "@/app/Provider";
import { FaPhotoVideo, FaImages, FaBookOpen } from "react-icons/fa";

export default function GalleryPage() {
    const { lang } = useContext(UserContext);

    const gallerySections = [
        {
            titleBn: "ফটো গ্যালারি",
            titleEn: "Photo Gallery",
            descBn:
                "বিদ্যালয়ের বিভিন্ন অনুষ্ঠান, প্রতিযোগিতা ও স্মরণীয় মুহূর্তের ছবি এখানে সংরক্ষিত।",
            descEn:
                "Photos of school events, competitions, and memorable moments are stored here.",
            icon: <FaImages className="text-4xl" />,
            color: "from-pink-500 to-rose-500",
            items: [
                "/gallery/photo1.jpg",
                "/gallery/photo2.jpg",
                "/gallery/photo3.jpg",
                "/gallery/photo4.jpg",
            ],
            type: "photo",
        },
        {
            titleBn: "ভিডিও গ্যালারি",
            titleEn: "Video Gallery",
            descBn:
                "বিদ্যালয়ের অনুষ্ঠান ও কার্যক্রমের ভিডিও এখানে দেখা যাবে।",
            descEn:
                "Videos of school programs and activities can be found here.",
            icon: <FaPhotoVideo className="text-4xl" />,
            color: "from-blue-500 to-indigo-500",
            items: [
                "https://www.youtube.com/embed/ysz5S6PUM-U",
                "https://www.youtube.com/embed/J---aiyznGQ",
            ],
            type: "video",
        },
        {
            titleBn: "ম্যাগাজিন",
            titleEn: "Magazine",
            descBn:
                "বিদ্যালয়ের বার্ষিক ম্যাগাজিন ও প্রকাশনা এখানে পাওয়া যাবে।",
            descEn:
                "Annual school magazines and publications are available here.",
            icon: <FaBookOpen className="text-4xl" />,
            color: "from-green-500 to-emerald-500",
            items: [
                { name: "School Magazine 2023", link: "/magazine/magazine2023.pdf" },
                { name: "School Magazine 2022", link: "/magazine/magazine2022.pdf" },
            ],
            type: "magazine",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "গ্যালারি" : "Gallery"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "এখানে বিদ্যালয়ের ফটো, ভিডিও এবং ম্যাগাজিন প্রকাশিত হয়।"
                            : "Here you can find school photos, videos, and magazines."}
                    </p>
                </header>

                {/* Sections */}
                <div className="space-y-12">
                    {gallerySections.map((section, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition"
                        >
                            {/* Header */}
                            <div
                                className={`bg-gradient-to-r ${section.color} text-white p-6 flex flex-col items-center justify-center`}
                            >
                                {section.icon}
                                <h2 className="mt-2 text-xl font-bold text-center">
                                    {lang ? section.titleBn : section.titleEn}
                                </h2>
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                <p className="text-gray-700 text-center mb-6">
                                    {lang ? section.descBn : section.descEn}
                                </p>

                                {/* Photo Grid */}
                                {section.type === "photo" && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {section.items.map((src, idx) => (
                                            <div
                                                key={idx}
                                                className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Photo ${idx + 1}`}
                                                    className="w-full h-40 object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Video Grid */}
                                {section.type === "video" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {section.items.map((link, idx) => (
                                            <div
                                                key={idx}
                                                className="overflow-hidden rounded-lg shadow"
                                            >
                                                <iframe
                                                    className="w-full h-60 rounded-lg"
                                                    src={link}
                                                    title={`Video ${idx + 1}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Magazine List */}
                                {section.type === "magazine" && (
                                    <ul className="space-y-4">
                                        {section.items.map((mag, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition"
                                            >
                                                <span className="font-medium text-gray-700">
                                                    {mag.name}
                                                </span>
                                                <a
                                                    href={mag.link}
                                                    target="_blank"
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                                                >
                                                    {lang ? "ডাউনলোড" : "Download"}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

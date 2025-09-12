"use client";
import React, { useContext } from "react";
import { UserContext } from "@/app/Provider";

export default function CocurricularPage() {
    const { lang } = useContext(UserContext);

    const activities = [
        {
            titleBn: "সাংস্কৃতিক অনুষ্ঠান",
            titleEn: "Cultural Program",
            descBn: "প্রতি বছর বার্ষিক সাংস্কৃতিক অনুষ্ঠান আয়োজন করা হয় যেখানে ছাত্রছাত্রীরা গান, নাচ, নাটক ও আবৃত্তি পরিবেশন করে।",
            descEn: "Every year a cultural program is organized where students perform songs, dance, drama, and recitations.",
            color: "bg-pink-500",
        },
        {
            titleBn: "ক্রীড়া প্রতিযোগিতা",
            titleEn: "Sports Competition",
            descBn: "বার্ষিক ক্রীড়া প্রতিযোগিতায় দৌড়, ফুটবল, ক্রিকেট, ভলিবলসহ নানা খেলার আয়োজন করা হয়।",
            descEn: "Annual sports competitions include races, football, cricket, volleyball, and more.",
            color: "bg-green-500",
        },
        {
            titleBn: "বিতর্ক প্রতিযোগিতা",
            titleEn: "Debate Competition",
            descBn: "বিতর্ক প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের যুক্তি উপস্থাপন ও বক্তৃতা দক্ষতা বৃদ্ধি করা হয়।",
            descEn: "Debate competitions help students enhance their reasoning and public speaking skills.",
            color: "bg-indigo-500",
        },
        {
            titleBn: "বিজ্ঞান মেলা",
            titleEn: "Science Fair",
            descBn: "বিজ্ঞান মেলায় শিক্ষার্থীরা তাদের সৃজনশীল উদ্ভাবন ও প্রজেক্ট প্রদর্শন করে।",
            descEn: "In the science fair, students showcase their creative innovations and projects.",
            color: "bg-yellow-500",
        },
        {
            titleBn: "স্কাউট ও গার্লস গাইড",
            titleEn: "Scouts & Girls Guide",
            descBn: "স্কাউটিং কার্যক্রম শিক্ষার্থীদের শৃঙ্খলা, নেতৃত্বগুণ ও সামাজিক দায়িত্ববোধ শেখায়।",
            descEn: "Scouting teaches students discipline, leadership, and social responsibility.",
            color: "bg-purple-500",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "সহপাঠ্যক্রম" : "Co-curricular Activities"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "আমাদের প্রতিষ্ঠানে সহপাঠ্যক্রম কার্যক্রম শিক্ষার্থীদের মানসিক, শারীরিক ও সামাজিক উন্নয়নে ভূমিকা রাখে।"
                            : "Our institution's co-curricular activities play a vital role in the mental, physical, and social development of students."}
                    </p>
                </header>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            <div className={`${activity.color} text-white p-6`}>
                                <h2 className="text-xl font-bold">
                                    {lang ? activity.titleBn : activity.titleEn}
                                </h2>
                            </div>
                            <div className="p-6 text-gray-700">
                                <p>
                                    {lang ? activity.descBn : activity.descEn}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";

export default function AdmissionPage() {
    const { lang } = useContext(UserContext);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || ভর্তি সংক্রান্ত তথ্য"
    }, []);


    const admissionInfo = [
        {
            titleBn: "ভর্তি প্রক্রিয়া",
            titleEn: "Admission Process",
            descBn:
                "ভর্তি আবেদনপত্র স্কুল অফিস থেকে সংগ্রহ করে নির্দিষ্ট সময়ে জমা দিতে হবে। নির্বাচিত প্রার্থীদের নাম বিজ্ঞপ্তির মাধ্যমে প্রকাশ করা হবে।",
            descEn:
                "Admission forms must be collected from the school office and submitted within the given time. Selected candidates will be announced through notice.",
            color: "bg-blue-500",
        },
        {
            titleBn: "যোগ্যতা",
            titleEn: "Eligibility",
            descBn:
                "প্রথম শ্রেণিতে ভর্তির জন্য শিক্ষার্থীর বয়স ন্যূনতম ৬ বছর হতে হবে। অন্যান্য শ্রেণিতে ভর্তির জন্য পূর্ববর্তী শ্রেণির সনদ প্রয়োজন।",
            descEn:
                "For Class 1 admission, the student must be at least 6 years old. For higher classes, a certificate of the previous class is required.",
            color: "bg-green-500",
        },
        {
            titleBn: "প্রয়োজনীয় কাগজপত্র",
            titleEn: "Required Documents",
            descBn:
                "জন্ম সনদ, পূর্ববর্তী শ্রেণির সনদপত্র, ২ কপি পাসপোর্ট সাইজ ছবি এবং অভিভাবকের জাতীয় পরিচয়পত্রের কপি।",
            descEn:
                "Birth certificate, previous class certificate, 2 passport-size photos, and a copy of guardian's national ID card.",
            color: "bg-purple-500",
        },
        {
            titleBn: "ভর্তি ফি",
            titleEn: "Admission Fee",
            descBn:
                "ভর্তি ফি অত্যন্ত সামান্য এবং এটি স্কুল কর্তৃপক্ষ নির্ধারণ করে। বিস্তারিত অফিস নোটিশ বোর্ডে পাওয়া যাবে।",
            descEn:
                "Admission fee is minimal and determined by the school authority. Details are available on the office notice board.",
            color: "bg-pink-500",
        },
        {
            titleBn: "ভর্তি সময়সূচি",
            titleEn: "Admission Schedule",
            descBn:
                "প্রতি শিক্ষাবর্ষের শুরুতে জানুয়ারি মাসে ভর্তি কার্যক্রম সম্পন্ন করা হয়।",
            descEn:
                "The admission process is conducted every academic year in the month of January.",
            color: "bg-yellow-500",
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {lang ? "ভর্তি সংক্রান্ত তথ্য" : "Admission Information"}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {lang
                            ? "ভর্তি সংক্রান্ত সকল তথ্য এখানে বিস্তারিতভাবে দেওয়া হলো।"
                            : "Here you will find all the details about admission."}
                    </p>
                </header>

                {/* Admission Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {admissionInfo.map((info, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden border hover:shadow-2xl transition transform hover:-translate-y-1"
                        >
                            <div className={`${info.color} text-white p-6`}>
                                <h2 className="text-xl font-bold">
                                    {lang ? info.titleBn : info.titleEn}
                                </h2>
                            </div>
                            <div className="p-6 text-gray-700">
                                <p>{lang ? info.descBn : info.descEn}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

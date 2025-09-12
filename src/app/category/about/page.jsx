// app/about/page.tsx
"use client";
import React, { useState } from "react";


export default function AboutPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState (
        "idle"
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    const timeline = [
        { year: "1920", title: "প্রতিষ্ঠা", desc: "প্রতিষ্ঠার প্রারম্ভিক নথি অনুযায়ী বিদ্যালয় প্রতিষ্ঠিত হয়।" },
        { year: "1955", title: "প্রথম সম্প্রসারণ", desc: "শিক্ষার্থীর সংখ্যা বৃদ্ধির কারণে নতুন ভবনের নির্মাণ।" },
        { year: "1988", title: "আধুনিকীকরণ", desc: "লাইব্রেরি ও ল্যাব স্থাপন করা হয়।" },
        { year: "2015", title: "ডিজিটাল শিক্ষা", desc: "ই-লার্নিং ও মাল্টিমিডিয়া ক্লাস রুম চালু।" },
        { year: "2024", title: "সদ্য হালনাগাত", desc: "স্কুলের ওয়েবসাইট ও অনলাইন রেজিস্ট্রি ব্যবস্থা যুক্ত।" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* HERO */}
            <section
                className="relative bg-cover bg-center h-56 bg-[url('/logos/footer-wide.jpg')] "
            >
                <div className="px-4 md:px-20 h-full flex items-center bg-black/50">
                    <div className="text-white">
                        <p className="text-sm md:text-base bg-white/10 inline-block px-3 py-1 rounded-md">
                            মা-মনি শিশু-কিশোর একাডেমি
                        </p>
                        <h1 className="mt-4 text-2xl md:text-4xl font-extrabold leading-tight">
                            আমাদের সম্পর্কে
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm md:text-base">
                            শিক্ষার আলো ছড়িয়ে যাওয়া, নৈতিকতা ও মানবিক গুণাবলীর বিকাশ—এটাই আমাদের মূল উদ্দেশ্য।
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border-t-2 border-t-green-950">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Anchor nav (left on desktop) */}
                        <aside className="md:w-56 sticky top-6 self-start hidden md:block">
                            <nav className="bg-white border rounded-lg p-3 shadow-sm">
                                <h3 className="text-sm font-semibold mb-2">সেকশন</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-100">
                                            প্রতিষ্ঠান সম্পর্কে
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#aims" className="block px-2 py-2 rounded hover:bg-gray-100">
                                            লক্ষ্য ও উদ্দেশ্য
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#history" className="block px-2 py-2 rounded hover:bg-gray-100">
                                            ইতিহাস
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="block px-2 py-2 rounded hover:bg-gray-100">
                                            যোগাযোগ করুন
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="mt-4 p-3 rounded-lg border bg-gradient-to-r from-green-50 to-blue-50 text-sm">
                                <h4 className="font-semibold">দ্রুত লিঙ্ক</h4>
                                <ul className="mt-2 space-y-1">
                                    <li><a className="text-green-600 hover:underline" href="#about">প্রতিষ্ঠান পরিচিতি</a></li>
                                    <li><a className="text-green-600 hover:underline" href="#history">ইতিহাস</a></li>
                                    <li><a className="text-green-600 hover:underline" href="#contact">যোগাযোগ</a></li>
                                </ul>
                            </div>
                        </aside>

                        {/* Main content */}
                        <div className="flex-1 space-y-8">
                            {/* ABOUT */}
                            <section id="about" className="pt-2">
                                <h2 className="text-2xl font-bold mb-3">প্রতিষ্ঠান সম্পর্কে</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-2 space-y-3">
                                        <p className="text-gray-700 leading-relaxed">
                                            মা-মনি শিশু-কিশোর একাডেমি শতবর্ষের ঐতিহ্যবাহী একটি শিক্ষা প্রতিষ্ঠান,
                                            যা সমাজে উন্নতমানের শিক্ষা পৌঁছে দিতে কাজ করে আসছে। এখানে কেবল
                                            পাঠ্য পাঠানো হয় না — প্রত্যেক ছাত্র/ছাত্রীর সার্বিক বিকাশে জোর দেওয়া হয়।
                                        </p>

                                        <p className="text-gray-700 leading-relaxed">
                                            বিদ্যালয়ে রয়েছে সুসজ্জিত শ্রেণিকক্ষ, পাঠাগার, কম্পিউটার ল্যাব ও ক্রীড়া মাঠ।
                                            শিক্ষকবৃন্দ পেশাদার ও শিক্ষাবাস্তব অভিজ্ঞতাসম্পন্ন। স্কুলটি একাডেমিক ও নৈতিক
                                            উন্নয়নের সমন্বয় সাধনের মাধ্যমে শিক্ষার্থীর ভবিষ্যৎ গড়তে উৎসর্গিত।
                                        </p>

                                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                                            <div className="p-4 border rounded-lg bg-green-50">
                                                <h4 className="font-semibold">প্রতিষ্ঠার বছর</h4>
                                                <p className="text-sm">1920</p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-blue-50">
                                                <h4 className="font-semibold">EIIN</h4>
                                                <p className="text-sm">123456</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1">
                                        <img src="/logos/logo01.png" alt="School Logo" className="w-36 h-36 object-contain rounded-md mx-auto md:ml-auto" />
                                        <div className="mt-3 text-sm text-gray-600 text-center md:text-left">
                                            <p><strong>ঠিকানা:</strong> ১২৩, পল্লী রোড, রাজশাহী</p>
                                            <p className="mt-1"><strong>ফোন:</strong> +88 01711-123456</p>
                                            <p className="mt-1"><strong>ইমেইল:</strong> info@example.edu.bd</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* AIMS */}
                            <section id="aims">
                                <h2 className="text-2xl font-bold mb-3">লক্ষ্য ও উদ্দেশ্য</h2>
                                <div className="space-y-3 text-gray-700">
                                    <p>আমাদের লক্ষ্য ও উদ্দেশ্যগুলো সংক্ষিপ্তভাবে নিম্নরূপ:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>সব শিশুকে মানসম্মত শিক্ষা প্রদানে সমান সুযোগ নিশ্চিত করা।</li>
                                        <li>নৈতিকতা, সহমর্মিতা এবং সামাজিক দায়িত্ববোধ গঠনে ভূমিকা রাখা।</li>
                                        <li>প্রাতিষ্ঠানিক পরিবেশে সৃজনশীলতা ও চিন্তাশীলতাকে উৎসাহিত করা।</li>
                                        <li>স্থানীয় ও জাতীয় পর্যায়ে শিক্ষার্থীদের প্রতিযোগিতামূলক সক্ষমতা বৃদ্ধি করা।</li>
                                    </ul>
                                </div>
                            </section>

                            {/* HISTORY */}
                            <section id="history">
                                <h2 className="text-2xl font-bold mb-3">ইতিহাস</h2>
                                <p className="text-gray-700 mb-4">
                                    স্কুলটির স্থাপনার দীর্ঘ ইতিহাস, সম্প্রসারণ ও আধুনিকীকরণের পর্যায়গুলো নীচে টাইমলাইন আকারে দেওয়া হলো।
                                </p>

                                <div className="relative border-l-2 border-gray-200 pl-6">
                                    {timeline.map((item, idx) => (
                                        <div key={idx} className="mb-8 relative">
                                            <div className="absolute -left- top-0 w-8 h-8 bg-white rounded-full border flex items-center justify-center shadow">
                                                <span className="text-xs text-gray-500">{item.year}</span>
                                            </div>
                                            <div className="ml-10">
                                                <h4 className="font-semibold">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* CONTACT */}
                            <section id="contact">
                                <h2 className="text-2xl font-bold mb-3">যোগাযোগ করুন</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <p className="text-gray-700">
                                            যদি আপনি আমাদের সাথে যোগাযোগ করতে চান — যোগাযোগ ফর্মটি পূরণ করুন বা সরাসরি ফোন/ইমেইলে যোগাযোগ করুন।
                                        </p>

                                        <div className="bg-white border rounded-lg p-4 shadow-sm">
                                            <h4 className="font-semibold mb-2">স্কুলের অফিস</h4>
                                            <p className="text-sm text-gray-700"><strong>ঠিকানা:</strong> ১২৩, পল্লী রোড, রাজশাহী</p>
                                            <p className="text-sm text-gray-700"><strong>ফোন:</strong> +88 01711-123456</p>
                                            <p className="text-sm text-gray-700"><strong>ইমেইল:</strong> info@example.edu.bd</p>
                                        </div>

                                        <div className="bg-white border rounded-lg p-4 shadow-sm">
                                            <h4 className="font-semibold mb-2">বাজার/অনার্স অফিস সময়</h4>
                                            <p className="text-sm text-gray-700">শনিবার - বৃহস্পতিবার: ৮:০০ AM - ৩:০০ PM</p>
                                        </div>
                                    </div>

                                    <div>
                                        <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded-lg border shadow-sm">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">নাম</label>
                                                <input
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">ইমেইল</label>
                                                <input
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">বার্তা</label>
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    rows={4}
                                                    required
                                                    className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
                                                />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <button
                                                    type="submit"
                                                    disabled={status === "sending"}
                                                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                                                >
                                                    {status === "sending" ? "পাঠাচ্ছি..." : "পাঠিয়ে দিন"}
                                                </button>

                                                <div className="text-sm text-gray-500">
                                                    {status === "sent" && <span className="text-green-600">ধন্যবাদ! আমরা আপনার বার্তা পেয়েছি।</span>}
                                                    {status === "error" && <span className="text-red-600">কিছু ভুল হয়েছে, পরে চেষ্টা করুন।</span>}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* MAP */}
                                <div className="mt-6 bg-white border rounded-lg overflow-hidden">
                                    <div className="w-full h-56 md:h-72">
                                        {/* Replace the src of the iframe with your place's Google Maps embed link */}
                                        <iframe
                                            className="w-full h-full border-0"
                                            loading="lazy"
                                            title="School location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9036690455256!2d90.406...">
                                        </iframe>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Page footer */}
                <div className="text-center text-sm text-gray-500 mt-6 mb-12">
                    © {new Date().getFullYear()} মা-মনি শিশু-কিশোর একাডেমি • তৈরি করেছেন Nahid Hasan
                </div>
            </div>
        </div>
    );
}

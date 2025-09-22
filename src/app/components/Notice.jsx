"use client";
import Marquee from "react-fast-marquee";
import { Bell, Link as LinkIcon } from "lucide-react";
import AboutInstitute from "./AboutSchool";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Provider";

export default function NoticeAndLinks() {

    const [notice, setNotice] = useState(null);
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const res = await fetch("/api/notice", { method: 'GET' });
                const data = await res.json();
                if (data.success) setNotice(data.message);
            } catch (err) {
                console.error(err);
            }
        };
        fetchNotice();
    }, []);

    const { lang } = useContext(UserContext);
    const notices = [
        lang ? "ইউনিক আইডি" : "Unique ID",
        lang ? "বার্ষিক পরীক্ষার ফলাফল প্রকাশ" : "Annual Exam Result Release",
        lang ? "প্রাথমিক শিক্ষা সমাপনী পরীক্ষার সূচি প্রকাশ" : "Primary Education Final Examination Schedule Published",
        lang ? "নির্বাচনী পরীক্ষার নোটিশ" : "Election Exam Notice",
    ];

    const links = [
        { name: lang ? "এন-টি-আর-সি-এ (NTRCA)" : "NTRCA", url: "#" },
        { name: lang ? "প্রাথমিক শিক্ষা অধিদপ্তর" : "Department of Secondary and Higher Education", url: "#" },
        { name: lang ? "শিক্ষা মন্ত্রণালয়" : "Ministry of Education", url: "#" },
        { name: lang ? "রাজশাহী শিক্ষা বোর্ড" : "Rajshahi Education Board", url: "#" },
        { name: lang ? "National Text Book Board (NCTB)" : "National Text Book Board (NCTB)", url: "#" },
        { name: lang ? "ই-লার্নিং (E-Learn)" : "E-Learning", url: "#" },
        { name: lang ? "Multimedia Classroom Management" : "Multimedia Classroom Management", url: "#" },
        { name: lang ? "ব্যানবেইস (Banbeis)" : "Banbeis", url: "#" },
        { name: lang ? "শিক্ষক বাতায়ন" : "Teacher Portal", url: "#" },
        { name: lang ? "মুক্তপাঠ (Muktopaath)" : "Muktopaath", url: "#" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 sm:p-6 bg-gray-50">
            {/* Notice Board */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-[#f5f5f5] shadow-lg overflow-hidden rounded-2xl pt-4 sm:p-6 border-t-4 border-green-500 relative">
                    {/* Marquee */}
                    <div className="bg-blue-600 text-white py-2 mb-4 sm:rounded-lg">
                        <Marquee pauseOnHover={true} speed={60}>
                            <span className="mx-8">{notice ? notice.title : ''}</span>
                        </Marquee>
                    </div>

                    <img
                        src="/logos/notice.png"
                        className="rotate-90 absolute right-0 top-0 size-16 sm:size-20 opacity-80"
                        alt="notice"
                    />
                    <h2 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-green-700 mb-4">
                        <Bell className="w-6 h-6" /> {lang ? "নোটিশ বোর্ড" : "Notice Board"}
                    </h2>
                    <ul className="space-y-3">
                        {notices.map((notice, i) => (
                            <li
                                key={i}
                                className="p-3 bg-green-50 rounded-xl hover:bg-green-100 cursor-pointer transition text-sm sm:text-base"
                            >
                                {notice}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-4 px-4 sm:px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm sm:text-base">
                        {lang ? "সকল নোটিশ" : "All notice"}
                    </button>
                </div>

                {/* About Institute Section */}
                <AboutInstitute />
            </div>

            {/* Important Links */}
            <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 border-t-4 border-purple-500">
                <h2 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-purple-700 mb-4">
                    <LinkIcon className="w-6 h-6" /> {lang ? "গুরুত্বপূর্ণ লিংক" : "Important Links"}
                </h2>
                <ul className="space-y-3">
                    {links.map((link, i) => (
                        <li key={i}>
                            <a
                                href={link.url}
                                className="block p-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition text-sm sm:text-base"
                            >
                                ➤ {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

'use client'
import React, { useEffect, useState } from "react";

import {
    Home,
    Users,
    BookOpen,
    ClipboardList,
    Camera,
    Bell,
    FileText,
    MessageCircle,
    Grid,
    Menu,
    Sun,
    Trash2,
} from "lucide-react";

import AdmissionDashboard from "./AdmissionForm";
import Main from "./Main";
import Notifications from "./Notifications";
import Result from "./Result";
import ComplaintsPage from "./Complaint";

const sidebarItems = [
    { key: "about", label: "প্রতিষ্ঠান সম্পর্কে", icon: Home },
    { key: "admin", label: "প্রশাসনিক তথ্য", icon: Users },
    { key: "staff", label: "শিক্ষক এবং কর্মচারী", icon: Users },
    { key: "academic", label: "একাডেমিক তথ্য", icon: BookOpen },
    { key: "cocurr", label: "সহপাঠ্যক্রম", icon: Grid },
    { key: "admission-form", label: "ভর্তি ফরম", icon: FileText },
    { key: "students", label: "ছাত্র/ছাত্রী তথ্য", icon: Users },
    { key: "exam", label: "পরীক্ষা সংক্রান্ত তথ্য", icon: ClipboardList },
    { key: "result", label: "ফলাফল", icon: FileText },
    { key: "gallery", label: "গ্যালারী", icon: Camera },
    { key: "complaint", label: "অভিযোগ বাক্স", icon: MessageCircle },
];

const COLORS = ["#60A5FA", "#34D399"];

export default function SchoolDashboard() {
    const [active, setActive] = React.useState("");
    const [search, setSearch] = React.useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredItems = sidebarItems.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
    );
    const [dark, setDark] = React.useState(true);

    useEffect(() => {
        const activeBtn = localStorage.getItem("active");
        if (activeBtn) {
            setActive(activeBtn);
        }
        document.title = "বি,স,প্রা,বি || ড্যাসবোর্ড"
    }, []);

    useEffect(() => {
        localStorage.setItem("active", active);
    }, [active]);

    return (
        <div className={`${dark ? "dark" : ""}`}>
            <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors">
                {/* Sidebar */}
                <aside className="w-72 bg-white dark:bg-gray-800 shadow-lg hidden md:flex flex-col">
                    <div className="px-6 py-6 flex items-center gap-3 border-b dark:border-gray-700">
                        <img
                            src="/logos/547777440_668007619127256_3503730407665985454_n.png"
                            alt="School Logo"
                            className="h-12 w-12 rounded-full border border-gray-200 shadow"
                        />
                        <div>
                            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-300">ড্যাশবোর্ড</p>
                        </div>
                    </div>

                    <nav className="flex-1 overflow-auto px-3 py-4">
                        {sidebarItems.map((it) => {
                            const Icon = it.icon;
                            const isActive = active === it.key;
                            return (
                                <button
                                    key={it.key}
                                    onClick={() => setActive(it.key)}
                                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg mb-1 text-sm text-left transition-all ${dark && 'text-white'} ${isActive
                                        ? "bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <Icon className="w-5 h-5 text-green-600" />
                                    <span className="flex-1">{it.label}</span>
                                    {isActive && <span className="text-xs text-green-600">Active</span>}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="px-4 py-4 border-t dark:border-gray-700">
                        <button className="w-full px-3 py-2 rounded-md bg-green-600 text-white font-semibold">নতুন নোটিশ</button>
                    </div>
                </aside>

                {/* Main content */}
                <div className="flex-1">
                    {/* Topbar */}
                    <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-white dark:bg-gray-800 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="md:hidden">
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                            </div>
                            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">ড্যাশবোর্ড</h2>
                            <div className="ml-4 hidden md:block text-sm text-gray-500">সেগমেন্টস • সংক্ষিপ্ত তথ্য • দ্রুত লিঙ্ক</div>
                        </div>

                        <div className={`flex items-center gap-3 ${dark && "text-white"}`}>
                            <div className="hidden sm:flex items-center dark:bg-gray-700 rounded-full px-3 py-1 relative">
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onFocus={() => setShowDropdown(true)} // ইনপুটে ক্লিক করলে ওপেন
                                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // বাইরে ক্লিক করলে হাইড
                                    className="bg-transparent w-48 outline-none text-sm px-2 py-1"
                                    placeholder="Search..."
                                />
                                {showDropdown && (
                                    <div className="w-52 rounded-md z-20 overflow-y-auto max-h-72 bg-white dark:bg-gray-700 absolute left-1/2 -translate-x-1/2 top-10 shadow-lg">
                                        {filteredItems.length > 0 ? (
                                            filteredItems.map((it) => {
                                                const Icon = it.icon;
                                                const isActive = active === it.key;
                                                return (
                                                    <button
                                                        key={it.key}
                                                        onClick={() => {
                                                            setActive(it.key);
                                                            setSearch(""); // select করলে সার্চ ক্লিয়ার
                                                            setShowDropdown(false); // dropdown বন্ধ
                                                        }}
                                                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg mb-1 text-sm text-left transition-all ${dark && "text-white"
                                                            } ${isActive
                                                                ? "bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800"
                                                                : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            }`}
                                                    >
                                                        <Icon className="w-5 h-5 text-green-600" />
                                                        <span className="flex-1">{it.label}</span>
                                                        {isActive && (
                                                            <span className="text-xs text-green-600">Active</span>
                                                        )}
                                                    </button>
                                                );
                                            })
                                        ) : (
                                            <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                                                কোনো ফলাফল পাওয়া যায়নি
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <button title="Toggle theme" onClick={() => setDark((d) => !d)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                            </button>

                            <Notifications active={active} />

                            <img
                                src="/logos/547777440_668007619127256_3503730407665985454_n.png"
                                alt="School Logo"
                                className="w-10 h-10 rounded-full border border-gray-200 shadow"
                            />
                        </div>
                    </header>

                    {/* Content grid */}

                    <div className="overflow-y-scroll h-screen">
                        {
                            (active === 'about' || active === '') && (
                                <Main COLORS={COLORS} />
                            )
                        }
                        {active === "admission-form" && (
                            <AdmissionDashboard dark={dark} />
                        )}
                        {active === "result" && (
                            <Result dark={dark} />
                        )}
                        {active === "complaint" && (
                            <ComplaintsPage dark={dark} active={active} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

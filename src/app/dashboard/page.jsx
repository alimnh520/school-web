'use client'
import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
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
} from "lucide-react";
import AdmissionDashboard from "./AdmissionForm";

const sidebarItems = [
    { key: "about", label: "প্রতিষ্ঠান সম্পর্কে", icon: Home },
    { key: "admin", label: "প্রশাসনিক তথ্য", icon: Users },
    { key: "staff", label: "শিক্ষক এবং কর্মচারী", icon: Users },
    { key: "academic", label: "একাডেমিক তথ্য", icon: BookOpen },
    { key: "cocurr", label: "সহপাঠ্যক্রম", icon: Grid },
    { key: "admission", label: "ভর্তি সংক্রান্ত তথ্য", icon: FileText },
    { key: "admission-form", label: "ভর্তি ফরম", icon: FileText },
    { key: "students", label: "ছাত্র/ছাত্রী তথ্য", icon: Users },
    { key: "exam", label: "পরীক্ষা সংক্রান্ত তথ্য", icon: ClipboardList },
    { key: "result", label: "ফলাফল", icon: FileText },
    { key: "gallery", label: "গ্যালারী", icon: Camera },
    { key: "complaint", label: "অভিযোগ বাক্স", icon: MessageCircle },
];

const visitorData = [
    { name: "Jan", visitors: 400 },
    { name: "Feb", visitors: 520 },
    { name: "Mar", visitors: 680 },
    { name: "Apr", visitors: 610 },
    { name: "May", visitors: 770 },
    { name: "Jun", visitors: 820 },
];

const pieData = [
    { name: "Boys", value: 520 },
    { name: "Girls", value: 480 },
];
const COLORS = ["#60A5FA", "#34D399"]; // blue, green

export default function SchoolDashboard() {
    const [active, setActive] = React.useState("");
    const [search, setSearch] = React.useState("");
    const [dark, setDark] = React.useState(true);

    useEffect(() => {
        const activeBtn = localStorage.getItem("active");
        if (activeBtn) {
            setActive(activeBtn);
        }
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
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">MK</div>
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

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent outline-none text-sm px-2" placeholder="Search..." />
                            </div>

                            <button title="Toggle theme" onClick={() => setDark((d) => !d)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                            </button>

                            <button title="Notifications" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                            </button>

                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">S</div>
                        </div>
                    </header>

                    {/* Content grid */}

                    {
                        (active === 'about' || active === '') && (
                            <main className="p-4 md:p-8">
                                {/* Quick stats */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <h4 className="text-xs text-gray-400">ছাত্র সংখ্যা</h4>
                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">1,002</div>
                                                <div className="text-sm text-gray-500 mt-1">গত মাসের তুলনায় +4.5%</div>
                                            </div>
                                            <div className="p-2 rounded-md bg-green-50 text-green-600">🎒</div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <h4 className="text-xs text-gray-400">শিক্ষক</h4>
                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">58</div>
                                                <div className="text-sm text-gray-500 mt-1">নতুন: ২</div>
                                            </div>
                                            <div className="p-2 rounded-md bg-blue-50 text-blue-600">👩‍🏫</div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <h4 className="text-xs text-gray-400">বর্তমান ভর্তি</h4>
                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">120</div>
                                                <div className="text-sm text-gray-500 mt-1">এপ্রিল — জুন</div>
                                            </div>
                                            <div className="p-2 rounded-md bg-yellow-50 text-yellow-600">📝</div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <h4 className="text-xs text-gray-400">নোটিশ</h4>
                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">৩</div>
                                                <div className="text-sm text-gray-500 mt-1">হালনাগাদ: আজ</div>
                                            </div>
                                            <div className="p-2 rounded-md bg-red-50 text-red-600">🔔</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Charts + Quick links */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <h3 className="text-sm text-gray-600 mb-3">ভিজিটরস (6 মাস)</h3>
                                        <div style={{ width: "100%", height: 220 }}>
                                            <ResponsiveContainer width="100%" height={220}>
                                                <LineChart data={visitorData}>
                                                    <XAxis dataKey="name" stroke="#94a3b8" />
                                                    <YAxis stroke="#94a3b8" />
                                                    <Tooltip />
                                                    <Line type="monotone" dataKey="visitors" stroke="#60A5FA" strokeWidth={3} dot={{ r: 2 }} />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border flex flex-col items-center justify-center">
                                        <h3 className="text-sm text-gray-600 mb-3">ছাত্র/ছাত্রীর অনুপাত</h3>
                                        <div style={{ width: 160, height: 160 }}>
                                            <ResponsiveContainer width={160} height={160}>
                                                <PieChart>
                                                    <Pie data={pieData} dataKey="value" innerRadius={30} outerRadius={60} paddingAngle={2}>
                                                        {pieData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick links & table */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">সাম্প্রতিক নোটিশ</h3>
                                            <a className="text-sm text-blue-600 hover:underline" href="#">সব নোটিশ</a>
                                        </div>

                                        <ul className="space-y-2">
                                            <li className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 flex items-start justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-gray-100">বার্ষিক পরীক্ষা সময়সূচি প্রকাশ</p>
                                                    <p className="text-sm text-gray-500">25 Aug 2025</p>
                                                </div>
                                                <a className="text-sm text-green-600 hover:underline" href="#">বিস্তারিত</a>
                                            </li>
                                            <li className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 flex items-start justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-gray-100">ভর্তি ঘোষনা</p>
                                                    <p className="text-sm text-gray-500">10 Jul 2025</p>
                                                </div>
                                                <a className="text-sm text-green-600 hover:underline" href="#">বিস্তারিত</a>
                                            </li>
                                            <li className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 flex items-start justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-gray-100">গ্রীষ্মকালীন শিবির</p>
                                                    <p className="text-sm text-gray-500">18 Jun 2025</p>
                                                </div>
                                                <a className="text-sm text-green-600 hover:underline" href="#">বিস্তারিত</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border">
                                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-3">দ্রুত লিঙ্ক</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <a className="p-2 bg-green-50 hover:bg-green-100 rounded-lg text-sm text-center">ভর্তি ফরম</a>
                                            <a className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm text-center">ফলাফল</a>
                                            <a className="p-2 bg-yellow-50 hover:bg-yellow-100 rounded-lg text-sm text-center">গ্যালারী</a>
                                            <a className="p-2 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-center">শিক্ষক তালিকা</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Sample table */}
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border mb-6 overflow-auto">
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4">শিক্ষক তালিকা (সাম্পল)</h3>
                                    <table className="w-full text-left text-sm">
                                        <thead className="text-xs text-gray-500 uppercase">
                                            <tr>
                                                <th className="p-2">Name</th>
                                                <th className="p-2">Position</th>
                                                <th className="p-2">Subject</th>
                                                <th className="p-2">Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t">
                                                <td className="p-2">মোঃ আশরাফুল আলম</td>
                                                <td className="p-2">প্রধান শিক্ষক</td>
                                                <td className="p-2">বাংলা, গণিত</td>
                                                <td className="p-2">+88 01711-123456</td>
                                            </tr>
                                            <tr className="border-t">
                                                <td className="p-2">মোছাঃ রুমানা আফরোজ</td>
                                                <td className="p-2">সহ-সভাপতি</td>
                                                <td className="p-2">ইংলিশ</td>
                                                <td className="p-2">+88 01711-654321</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Footer quick */}
                                <footer className="text-center text-sm text-gray-500">
                                    © {new Date().getFullYear()} মা-মনি শিশু-কিশোর একাডেমি • তৈরি করেছেন আপনার সোনা ❤️
                                </footer>
                            </main>
                        )
                    }
                    {active === "admission-form" && (
                        <AdmissionDashboard dark={dark}/>
                    )}
                </div>
            </div>
        </div>
    );
}

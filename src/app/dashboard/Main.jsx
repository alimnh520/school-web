'use client'
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

import React from 'react'

const Main = ({ COLORS }) => {

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

    return (
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
                        <PieChart>
                            <Pie data={pieData} dataKey="value" innerRadius={30} outerRadius={60} paddingAngle={2}>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
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

export default Main
"use client";
import React, { useState, useContext } from "react";
import { UserContext } from "@/app/Provider";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default function AdmissionDashboard({ dark }) {
    const { lang } = useContext(UserContext);

    // ডেমো ডাটা
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Rahim Uddin",
            class: "৫ম",
            father: "Karim Uddin",
            phone: "01712345678",
            status: "pending",
        },
        {
            id: 2,
            name: "Fatema Khatun",
            class: "৪র্থ",
            father: "Abdul Haque",
            phone: "01812345678",
            status: "pending",
        },
        {
            id: 3,
            name: "Hasan Ali",
            class: "৩য়",
            father: "Nurul Islam",
            phone: "01912345678",
            status: "pending",
        },
    ]);

    const handleStatus = (id, status) => {
        setStudents(
            students.map((s) => (s.id === id ? { ...s, status: status } : s))
        );
    };

    return (
        <main
            className={`min-h-screen py-10 px-4 relative transition-colors duration-300 ${dark ? "dark" : ""
                }`}
        >
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl shadow-xl p-6 border-t-4 border-blue-600 dark:border-blue-400">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center mb-8">
                    {lang ? "ভর্তি আবেদনকারীদের তালিকা" : "Admission Applicants"}
                </h1>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg shadow">
                        <thead>
                            <tr className="bg-blue-600 dark:bg-blue-700 text-white text-left">
                                <th className="p-3">{lang ? "আইডি" : "ID"}</th>
                                <th className="p-3">{lang ? "শিক্ষার্থীর নাম" : "Name"}</th>
                                <th className="p-3">{lang ? "ক্লাস" : "Class"}</th>
                                <th className="p-3">{lang ? "পিতার নাম" : "Father's Name"}</th>
                                <th className="p-3">{lang ? "মোবাইল" : "Phone"}</th>
                                <th className="p-3">{lang ? "বিবরণ" : "Details"}</th>
                                <th className="p-3">{lang ? "স্ট্যাটাস" : "Status"}</th>
                                <th className="p-3 text-center">{lang ? "অ্যাকশন" : "Actions"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr
                                    key={student.id}
                                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                >
                                    <td className="p-3">{student.id}</td>
                                    <td className="p-3 font-semibold">{student.name}</td>
                                    <td className="p-3">{student.class}</td>
                                    <td className="p-3">{student.father}</td>
                                    <td className="p-3">{student.phone}</td>
                                    <td className="p-3">
                                        <Link
                                            href={`/dashboard/${student.id}`}
                                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-flex items-center gap-1"
                                        >
                                            {lang ? "দেখুন" : "See"}
                                        </Link>
                                    </td>
                                    <td className="p-3">
                                        {student.status === "pending" && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100">
                                                {lang ? "অপেক্ষমান" : "Pending"}
                                            </span>
                                        )}
                                        {student.status === "accepted" && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100">
                                                {lang ? "গৃহীত" : "Accepted"}
                                            </span>
                                        )}
                                        {student.status === "rejected" && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-red-100 dark:bg-red-700 text-red-800 dark:text-red-100">
                                                {lang ? "প্রত্যাখ্যাত" : "Rejected"}
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-3 text-center space-x-2">
                                        <button
                                            onClick={() => handleStatus(student.id, "accepted")}
                                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-flex items-center gap-1"
                                        >
                                            <Check size={16} /> {lang ? "গ্রহণ" : "Accept"}
                                        </button>
                                        <button
                                            onClick={() => handleStatus(student.id, "rejected")}
                                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition inline-flex items-center gap-1"
                                        >
                                            <X size={16} /> {lang ? "প্রত্যাখ্যান" : "Reject"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

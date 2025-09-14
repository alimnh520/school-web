"use client";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "@/app/Provider";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Loader2, Trash2 } from "lucide-react";

export default function AdmissionDashboard({ dark }) {
    const { lang } = useContext(UserContext);
    const [reCall, setRecall] = useState(0);
    const [students, setStudents] = useState('');

    const [acceptLoadingId, setAcceptLoadingId] = useState(null);
    const [deleteLoadingId, setDeleteLoadingId] = useState(null);

    const handleAccept = async (id) => {
        setAcceptLoadingId(id);
        try {
            const res = await fetch('/api/admission-form', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const data = await res.json();
            toast.success(data.message, { position: "bottom-right" });
            if (data.success) setRecall((prev) => prev + 1);
        } catch (error) {
            console.log(error);
        } finally {
            setAcceptLoadingId(null);
        }
    };

    const handleDelete = async (elem) => {
        setDeleteLoadingId(elem._id);
        const photo_id = elem.student.photo_id;
        const document_id = elem.others.url_id;
        try {
            const res = await fetch('/api/admission-form', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: elem._id,
                    photo_id,
                    document_id,
                    dc_type: elem.others.file_type
                })
            });
            const data = await res.json();
            toast.success(data.message, { position: "bottom-right" });
            if (data.success) setRecall((prev) => prev + 1);
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteLoadingId(null);
        }
    };


    useEffect(() => {
        const admissionData = async () => {
            try {
                const res = await fetch('/api/admission-form', { method: 'GET' });
                const data = await res.json();
                if (data.success) setStudents(data.message);
            } catch (error) {
                console.log(error);
            }
        }
        admissionData();
    }, [reCall]);

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
                                <th className="p-3">{lang ? "ক্রমিক নং" : "ID"}</th>
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
                            {students && students.length > 0 ? (students.slice().reverse().map((elem, index) => (
                                <tr
                                    key={elem._id}
                                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                >
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3 font-semibold">{elem.student.nameBn}</td>
                                    <td className="p-3">{elem.student.class}</td>
                                    <td className="p-3">{elem.father.nameBn}</td>
                                    <td className="p-3">{elem.student.mobile}</td>
                                    <td className="p-3">
                                        <Link
                                            href={`/dashboard/${elem._id}`}
                                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-flex items-center gap-1"
                                        >
                                            {lang ? "দেখুন" : "See"}
                                        </Link>
                                    </td>
                                    <td className="p-3">
                                        {elem?.status === "pending" && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100">
                                                {lang ? "অপেক্ষমান" : "Pending"}
                                            </span>
                                        )}
                                        {elem?.status === "accepted" && (
                                            <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100">
                                                {lang ? "গৃহীত" : "Accepted"}
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-3 text-center space-x-2">
                                        {elem?.status === "pending" && (
                                            <>
                                                {/* Accept Button */}
                                                <button
                                                    onClick={() => handleAccept(elem._id)}
                                                    className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-flex items-center gap-1"
                                                >
                                                    {acceptLoadingId === elem._id ? (
                                                        <>
                                                            <Loader2 className="animate-spin" size={18} /> গ্রহণ হচ্ছে...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Check size={16} /> {lang ? "গ্রহণ" : "Accept"}
                                                        </>
                                                    )}
                                                </button>

                                                {/* Delete Button */}
                                                <button
                                                    onClick={() => handleDelete(elem)}
                                                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition inline-flex items-center gap-1"
                                                >
                                                    {deleteLoadingId === elem._id ? (
                                                        <>
                                                            <Loader2 className="animate-spin" size={18} /> মুছে ফেলা হচ্ছে...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <X size={16} /> {lang ? "প্রত্যাখ্যান" : "Reject"}
                                                        </>
                                                    )}
                                                </button>
                                            </>
                                        )}

                                        {elem?.status === "accepted" && (
                                            <span className="px-3 py-1 rounded-lg text-sm bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100">
                                                ✅ {lang ? "গৃহীত হয়েছে" : "Admission Confirmed"}
                                            </span>
                                        )}
                                    </td>

                                </tr>
                            ))) : (
                                <tr>
                                    <td colSpan={8} className="text-center p-3">
                                        {lang ? "কোনো তথ্য নেই" : "No data"}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </div>
        </main>
    );
}

"use client";
import { useEffect, useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { Loader2 } from "lucide-react"; // Spinner

export default function ComplaintsPage({ dark, active }) {
    const [complaints, setComplaints] = useState('');
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [deleteLoadingId, setDeleteLoadingId] = useState(null);

    const fetchComplaint = async () => {
        try {
            const res = await fetch('/api/complaint', { method: 'GET' });
            const data = await res.json();
            if (data.success) setComplaints(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchComplaint();
    }, [active]);

    const handleDelete = async (id) => {
        setDeleteLoadingId(id);
        try {
            const res = await fetch('/api/complaint', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const data = await res.json();
            if (data.success) {
                setSelectedComplaint(null);
                fetchComplaint();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteLoadingId(null);
        }
    };

    return (
        <main className={`${dark ? "dark" : ""} min-h-screen py-10 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100`}>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">অভিযোগ বক্স</h1>

                {/* Complaint List */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-200 dark:bg-gray-700">
                            <tr>
                                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">নাম</th>
                                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">মোবাইল</th>
                                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">বিষয়</th>
                                <th className="p-3 border border-gray-300 dark:border-gray-600 text-center">একশন</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.length > 0 ? (
                                complaints.map((c) => (
                                    <tr
                                        key={c._id}
                                        className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                                    >
                                        <td className="p-3 border border-gray-300 dark:border-gray-600">{c.name}</td>
                                        <td className="p-3 border border-gray-300 dark:border-gray-600">{c.mobile}</td>
                                        <td className="p-3 border border-gray-300 dark:border-gray-600">{c.subject}</td>
                                        <td className="p-3 border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => setSelectedComplaint(c)}
                                                className="px-3 py-1 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded flex items-center gap-1 transition"
                                            >
                                                <FaEye /> বিস্তারিত
                                            </button>
                                            <button
                                                onClick={() => handleDelete(c._id)}
                                                className="px-3 py-1 bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white rounded flex items-center gap-1 transition"
                                            >
                                                {deleteLoadingId === c._id ? (
                                                    <Loader2 className="animate-spin h-5 w-5" />
                                                ) : (
                                                    <>
                                                        <FaTrash /> মুছুন
                                                    </>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-6 text-center text-gray-500 dark:text-gray-300">
                                        কোনো অভিযোগ পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Complaint Modal */}
                {selectedComplaint && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                        <div className="rounded-lg p-6 max-w-lg w-full shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                            <h2 className="text-xl font-bold mb-4">অভিযোগের বিস্তারিত</h2>
                            <p className="mb-2"><strong>নাম:</strong> {selectedComplaint.name}</p>
                            <p className="mb-2"><strong>মোবাইল:</strong> {selectedComplaint.mobile}</p>
                            <p className="mb-2"><strong>বিষয়:</strong> {selectedComplaint.subject}</p>
                            <p className="mb-4"><strong>বিস্তারিত:</strong> {selectedComplaint.details}</p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setSelectedComplaint(null)}
                                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded transition"
                                >
                                    বন্ধ করুন
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

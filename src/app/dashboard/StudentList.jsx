"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function StudentsList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalStudent, setModalStudent] = useState(null);

    const [searchRoll, setSearchRoll] = useState("");
    const [searchClass, setSearchClass] = useState("");
    const [searchYear, setSearchYear] = useState("");

    const fetchStudents = async () => {
        try {
            const res = await fetch("/api/students-info");
            const data = await res.json();
            if (data.success) setStudents(data.message);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => { fetchStudents(); }, []);

    const handleDelete = async (id, photo_id) => {
        if (!confirm("❌ আপনি কি নিশ্চিতভাবে মুছে ফেলতে চান?")) return;
        setLoading(true);
        try {
            const res = await fetch("/api/students-info", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, photo_id }),
            });
            const result = await res.json();
            if (result.success) {
                toast.success("✅ শিক্ষার্থী ডিলেট হয়েছে!", { position: "bottom-right" });
                fetchStudents();
            } else {
                toast.error("❌ ডিলেট করা যায়নি!", { position: "bottom-right" });
            }
        } catch (err) {
            console.error(err);
            toast.error("⚠️ সার্ভার এরর!", { position: "bottom-right" });
        } finally { setLoading(false); }
    };

    const filteredStudents = students.filter((s) =>
        (searchRoll === "" || s.student.rollNumber.toString().includes(searchRoll)) &&
        (searchClass === "" || s.student.class_name === searchClass) &&
        (searchYear === "" || s.student.year.includes(searchYear))
    );

    const downloadPhoto = (url, studentName) => {
        fetch(url)
            .then(res => res.blob())
            .then(blob => {
                // Blob type ঠিক করা
                const imageBlob = new Blob([blob], { type: "image/jpeg" });

                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(imageBlob);
                link.download = `AdmissionForm_${studentName}.jpg`; // filename + extension
                link.click();

                // Temporary object URL clean up
                window.URL.revokeObjectURL(link.href);
            })
            .catch(err => console.error("Image download failed:", err));
    };

    return (
        <div className="bg-white dark:text-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-green-600 mb-4">📋 শিক্ষার্থীর তালিকা</h2>

            {/* Search */}
            <div className="flex flex-col md:flex-row gap-2 mb-4">
                <input type="text" placeholder="রোল নাম্বার" value={searchRoll} onChange={e => setSearchRoll(e.target.value)} className="p-2 border rounded w-full md:w-1/4" />
                <select value={searchClass} onChange={e => setSearchClass(e.target.value)} className="p-2 border rounded w-full md:w-1/4">
                    <option className="dark:text-black" value="">-- শ্রেণি --</option>
                    <option className="dark:text-black" value="প্লে">প্লে</option>
                    <option className="dark:text-black" value="নার্সারি">নার্সারি</option>
                    <option className="dark:text-black" value="প্রথম">প্রথম</option>
                    <option className="dark:text-black" value="দ্বিতীয়">দ্বিতীয়</option>
                    <option className="dark:text-black" value="তৃতীয়">তৃতীয়</option>
                    <option className="dark:text-black" value="চতুর্থ">চতুর্থ</option>
                    <option className="dark:text-black" value="পঞ্চম">পঞ্চম</option>
                </select>
                <input type="text" placeholder="শিক্ষাবর্ষ" value={searchYear} onChange={e => setSearchYear(e.target.value)} className="p-2 border rounded w-full md:w-1/4" />
            </div>

            {/* Student List */}
            {filteredStudents.length > 0 ? (
                filteredStudents.map((s) => (
                    <div key={s._id} className="flex justify-between items-center border-b py-3">
                        <div>
                            <p className="font-semibold">{s.student.nameBn} ({s.student.class_name})</p>
                            <p className="text-sm text-gray-300">রোল: {s.student.rollNumber} | মোবাইল: {s.student.mobile}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setModalStudent(s)}
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                👁️ দেখুন
                            </button>
                            <button
                                onClick={() => handleDelete(s._id, s.student.photo_id)}
                                disabled={loading}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                {loading ? "⏳ মুছে ফেলা হচ্ছে..." : "❌ ডিলেট"}
                            </button>
                        </div>
                    </div>
                ))
            ) : <p className="text-gray-500">❌ কোনো শিক্ষার্থী পাওয়া যায়নি</p>}

            {/* Modal */}
            {modalStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-11/12 md:w-2/3 max-h-[80vh] overflow-y-auto relative">
                        <button onClick={() => setModalStudent(null)} className="absolute top-2 right-2 text-red-500 font-bold text-xl">✖️</button>
                        <h3 className="text-xl font-bold mb-4">{modalStudent.student.nameBn} এর বিস্তারিত তথ্য</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p><strong>নাম (BN):</strong> {modalStudent.student.nameBn}</p>
                                <p><strong>নাম (EN):</strong> {modalStudent.student.nameEn}</p>
                                <p><strong>জেন্ডার:</strong> {modalStudent.student.gender}</p>
                                <p><strong>জন্ম তারিখ:</strong> {modalStudent.student.dob}</p>
                                <p><strong>জন্ম নিবন্ধন নং:</strong> {modalStudent.student.birthCertificateNo}</p>
                                <p><strong>শ্রেণি:</strong> {modalStudent.student.class_name}</p>
                                <p><strong>রোল:</strong> {modalStudent.student.rollNumber}</p>
                                <p><strong>শিক্ষাবর্ষ:</strong> {modalStudent.student.year}</p>
                                <p><strong>মোবাইল:</strong> {modalStudent.student.mobile}</p>
                                <p><strong>ঠিকানা:</strong> {modalStudent.student.address}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">👨 পিতার তথ্য</h4>
                                <p><strong>নাম (BN):</strong> {modalStudent.father.nameBn}</p>
                                <p><strong>নাম (EN):</strong> {modalStudent.father.nameEn}</p>
                                <p><strong>NID:</strong> {modalStudent.father.nid}</p>
                                <p><strong>মোবাইল:</strong> {modalStudent.father.mobile}</p>
                                <p><strong>পেশা:</strong> {modalStudent.father.occupation}</p>
                                <p><strong>আয়:</strong> {modalStudent.father.income}</p>

                                <h4 className="font-semibold mt-4">👩 মাতার তথ্য</h4>
                                <p><strong>নাম (BN):</strong> {modalStudent.mother.nameBn}</p>
                                <p><strong>নাম (EN):</strong> {modalStudent.mother.nameEn}</p>
                                <p><strong>NID:</strong> {modalStudent.mother.nid}</p>
                                <p><strong>মোবাইল:</strong> {modalStudent.mother.mobile}</p>
                                <p><strong>পেশা:</strong> {modalStudent.mother.occupation}</p>
                                <p><strong>আয়:</strong> {modalStudent.mother.income}</p>
                            </div>
                        </div>

                        {/* Student Photo */}
                        {modalStudent.student.photo_url && (
                            <div className="mt-4 flex items-center gap-4">
                                <img src={modalStudent.student.photo_url} alt="ছবি" className="w-32 h-32 object-cover rounded" />
                                <button
                                    onClick={() => downloadPhoto(modalStudent.student.photo_url, `AdmissionForm_${modalStudent.student.nameBn}`, "image")}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    📥 ডাউনলোড
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

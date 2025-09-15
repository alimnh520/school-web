// app/dashboard/student-form/page.jsx
"use client";

import { useState } from "react";

export default function StudentForm() {
    const [formData, setFormData] = useState({
        // personalInfo
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        photo: "",

        // contactInfo
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",

        // parentInfo
        fatherName: "",
        motherName: "",
        guardianPhone: "",

        // academicInfo
        class: "",
        section: "",
        rollNumber: "",
        subjects: "",
        admissionDate: "",

        // additionalInfo
        bloodGroup: "",
        nationality: "",
        religion: "",
        remarks: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                alert("✅ শিক্ষার্থীর তথ্য সফলভাবে সেভ হয়েছে!");
            } else {
                alert("❌ সেভ করতে ব্যর্থ হয়েছে।");
            }
        } catch (error) {
            console.error(error);
            alert("❌ সেভ করার সময় ত্রুটি ঘটেছে।");
        }
    };

    return (
        <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
            <div className="max-w-5xl mx-auto bg-gray-850 shadow-xl rounded-2xl p-8 border border-gray-700">
                <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-400">
                    🎓 শিক্ষার্থী ভর্তি ফরম
                </h1>

                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* PERSONAL INFO */}
                    <section>
                        <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                            🧑 ব্যক্তিগত তথ্য
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="নামের প্রথম অংশ" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="নামের শেষ অংশ" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            <input type="date" className="bg-gray-700 p-3 rounded-lg" name="dob" value={formData.dob} onChange={handleChange} required />
                            <select className="bg-gray-700 p-3 rounded-lg" name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">লিঙ্গ নির্বাচন করুন</option>
                                <option value="Male">পুরুষ</option>
                                <option value="Female">মহিলা</option>
                                <option value="Other">অন্যান্য</option>
                            </select>
                            <input className="bg-gray-700 p-3 rounded-lg md:col-span-2" placeholder="ছবির লিংক (URL)" name="photo" value={formData.photo} onChange={handleChange} />
                        </div>
                    </section>

                    {/* CONTACT INFO */}
                    <section>
                        <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                            📞 যোগাযোগের তথ্য
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="email" className="bg-gray-700 p-3 rounded-lg" placeholder="ইমেইল" name="email" value={formData.email} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="মোবাইল নাম্বার" name="phone" value={formData.phone} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="রাস্তা" name="street" value={formData.street} onChange={handleChange} />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="শহর" name="city" value={formData.city} onChange={handleChange} />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="জেলা/রাজ্য" name="state" value={formData.state} onChange={handleChange} />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="পোস্টাল কোড" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                            <input className="bg-gray-700 p-3 rounded-lg md:col-span-2" placeholder="দেশ" name="country" value={formData.country} onChange={handleChange} />
                        </div>
                    </section>

                    {/* PARENT INFO */}
                    <section>
                        <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                            👨‍👩‍👦 অভিভাবকের তথ্য
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="পিতার নাম" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="মাতার নাম" name="motherName" value={formData.motherName} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg md:col-span-2" placeholder="অভিভাবকের মোবাইল নাম্বার" name="guardianPhone" value={formData.guardianPhone} onChange={handleChange} />
                        </div>
                    </section>

                    {/* ACADEMIC INFO */}
                    <section>
                        <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                            📚 শিক্ষাগত তথ্য
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="ক্লাস" name="class" value={formData.class} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="সেকশন" name="section" value={formData.section} onChange={handleChange} />
                            <input type="number" className="bg-gray-700 p-3 rounded-lg" placeholder="রোল নাম্বার" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="বিষয় (কমা দিয়ে আলাদা করুন)" name="subjects" value={formData.subjects} onChange={handleChange} />
                            <input type="date" className="bg-gray-700 p-3 rounded-lg md:col-span-2" name="admissionDate" value={formData.admissionDate} onChange={handleChange} />
                        </div>
                    </section>

                    {/* ADDITIONAL INFO */}
                    <section>
                        <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
                            📝 অতিরিক্ত তথ্য
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="রক্তের গ্রুপ" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="জাতীয়তা" name="nationality" value={formData.nationality} onChange={handleChange} />
                            <input className="bg-gray-700 p-3 rounded-lg" placeholder="ধর্ম" name="religion" value={formData.religion} onChange={handleChange} />
                            <textarea className="bg-gray-700 p-3 rounded-lg md:col-span-2" placeholder="মন্তব্য" name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
                        </div>
                    </section>

                    {/* SUBMIT */}
                    <div className="flex justify-center">
                        <button type="submit" className="w-1/3 bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 px-6 rounded-lg font-semibold">
                            ✅ সেভ করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

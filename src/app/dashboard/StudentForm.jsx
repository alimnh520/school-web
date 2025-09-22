"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function StudentForm({ onAdd }) {
    const [formData, setFormData] = useState({
        photo: null,
        nameBn: "",
        nameEn: "",
        gender: "পুত্র",
        dob: "",
        birthCertificateNo: "",
        class_name: "",
        rollNumber: "",
        year: "",
        mobile: "",
        address: "",
        fatherNameBn: "",
        fatherNameEn: "",
        fatherNid: "",
        fatherMobile: "",
        fatherOccupation: "",
        fatherIncome: "",
        motherNameBn: "",
        motherNameEn: "",
        motherNid: "",
        motherMobile: "",
        motherOccupation: "",
        motherIncome: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            if (files[0].size > 3 * 1024 * 1024) {
                toast.error("⚠️ ছবির সাইজ 3MB এর বেশি হতে পারবে না!", { position: "bottom-right" });
                return;
            }
            setFormData({ ...formData, [name]: files[0] });
            setPreview(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value) data.append(key, value);
            });

            const res = await fetch("/api/students-info", {
                method: "POST",
                body: data,
            });
            const result = await res.json();
            if (result.success) {
                toast.success("✅ শিক্ষার্থীর তথ্য যোগ করা হয়েছে!", { position: "bottom-right" });
                setFormData({
                    photo: null,
                    nameBn: "",
                    nameEn: "",
                    gender: "পুত্র",
                    dob: "",
                    birthCertificateNo: "",
                    class_name: "",
                    rollNumber: "",
                    year: "",
                    mobile: "",
                    address: "",
                    fatherNameBn: "",
                    fatherNameEn: "",
                    fatherNid: "",
                    fatherMobile: "",
                    fatherOccupation: "",
                    fatherIncome: "",
                    motherNameBn: "",
                    motherNameEn: "",
                    motherNid: "",
                    motherMobile: "",
                    motherOccupation: "",
                    motherIncome: "",
                });
                setPreview(null);
                const photoInput = document.querySelector('input[name="photo"]');
                if (photoInput) photoInput.value = "";

                if (onAdd) onAdd(); // ফর্ম সাবমিট হলে লিস্ট আপডেট হবে
            } else {
                toast.error("❌ সমস্যা হয়েছে!", { position: "bottom-right" });
            }
        } catch (err) {
            console.error(err);
            toast.error("⚠️ সার্ভার এরর!", { position: "bottom-right" });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 dark:text-white gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            {/* শিক্ষার্থীর তথ্য */}
            <div className="space-y-4">
                <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-200">👦 শিক্ষার্থীর তথ্য</h2>
                <input type="file" name="photo" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />
                {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover my-2 rounded" />}
                <input type="text" name="nameBn" placeholder="নাম (বাংলা)" onChange={handleChange} value={formData.nameBn} className="w-full p-2 border rounded" />
                <input type="text" name="nameEn" placeholder="নাম (English)" onChange={handleChange} value={formData.nameEn} className="w-full p-2 border rounded" />
                <select name="gender" onChange={handleChange} value={formData.gender} className="w-full p-2 border rounded">
                    <option className="dark:text-black" value="পুত্র">পুত্র</option>
                    <option className="dark:text-black" value="কন্যা">কন্যা</option>
                    <option className="dark:text-black" value="অন্যান্য">অন্যান্য</option>
                </select>
                <input type="date" name="dob" onChange={handleChange} value={formData.dob} className="w-full p-2 border rounded" />
                <input type="text" name="birthCertificateNo" placeholder="জন্ম নিবন্ধন নং" onChange={handleChange} value={formData.birthCertificateNo} className="w-full p-2 border rounded" />
                <select name="class_name" onChange={handleChange} value={formData.class_name} className="w-full p-2 border rounded">
                    <option className="dark:text-black" value="">-- শ্রেণি নির্বাচন করুন --</option>
                    <option className="dark:text-black" value="প্লে">প্লে</option>
                    <option className="dark:text-black" value="নার্সারি">নার্সারি</option>
                    <option className="dark:text-black" value="প্রথম">প্রথম</option>
                    <option className="dark:text-black" value="দ্বিতীয়">দ্বিতীয়</option>
                    <option className="dark:text-black" value="তৃতীয়">তৃতীয়</option>
                    <option className="dark:text-black" value="চতুর্থ">চতুর্থ</option>
                    <option className="dark:text-black" value="পঞ্চম">পঞ্চম</option>
                </select>
                <input type="number" name="rollNumber" placeholder="রোল নাম্বার" onChange={handleChange} value={formData.rollNumber} className="w-full p-2 border rounded" />
                <input type="text" name="year" placeholder="শিক্ষাবর্ষ" onChange={handleChange} value={formData.year} className="w-full p-2 border rounded" />
                <input type="text" name="mobile" placeholder="মোবাইল নাম্বার" onChange={handleChange} value={formData.mobile} className="w-full p-2 border rounded" />
                <textarea name="address" placeholder="ঠিকানা" onChange={handleChange} value={formData.address} className="w-full p-2 border rounded" />
            </div>

            {/* পিতামাতার তথ্য */}
            <div className="space-y-6">
                <div>
                    <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-200">👨 পিতার তথ্য</h2>
                    <input type="text" name="fatherNameBn" placeholder="নাম (বাংলা)" onChange={handleChange} value={formData.fatherNameBn} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="fatherNameEn" placeholder="নাম (English)" onChange={handleChange} value={formData.fatherNameEn} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="fatherNid" placeholder="NID" onChange={handleChange} value={formData.fatherNid} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="fatherMobile" placeholder="মোবাইল নাম্বার" onChange={handleChange} value={formData.fatherMobile} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="fatherOccupation" placeholder="পেশা" onChange={handleChange} value={formData.fatherOccupation} className="w-full p-2 border rounded my-1" />
                    <input type="number" name="fatherIncome" placeholder="আয়" onChange={handleChange} value={formData.fatherIncome} className="w-full p-2 border rounded my-1" />
                </div>
                <div>
                    <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-200">👩 মাতার তথ্য</h2>
                    <input type="text" name="motherNameBn" placeholder="নাম (বাংলা)" onChange={handleChange} value={formData.motherNameBn} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="motherNameEn" placeholder="নাম (English)" onChange={handleChange} value={formData.motherNameEn} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="motherNid" placeholder="NID" onChange={handleChange} value={formData.motherNid} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="motherMobile" placeholder="মোবাইল নাম্বার" onChange={handleChange} value={formData.motherMobile} className="w-full p-2 border rounded my-1" />
                    <input type="text" name="motherOccupation" placeholder="পেশা" onChange={handleChange} value={formData.motherOccupation} className="w-full p-2 border rounded my-1" />
                    <input type="number" name="motherIncome" placeholder="আয়" onChange={handleChange} value={formData.motherIncome} className="w-full p-2 border rounded my-1" />
                </div>
            </div>

            <button type="submit" disabled={submitting} className="col-span-1 md:col-span-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg disabled:opacity-50">
                {submitting ? "⏳ সংরক্ষণ করা হচ্ছে..." : "✅ তথ্য সংরক্ষণ করুন"}
            </button>
        </form>
    );
}

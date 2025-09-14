'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "বি,স,প্রা,বি || ভর্তি ফরম"
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];
            if (file && file.size > 1.5 * 1024 * 1024) {
                toast.error("⚠️ ফাইলের সাইজ 1.5MB এর বেশি হতে পারবে না!", {
                    position: "bottom-right",
                });
                e.target.value = null;
                setFormData((prev) => ({ ...prev, [name]: null }));
                return;
            }

            setFormData((prev) => ({ ...prev, [name]: file }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const requiredFields = [
            "photo", "nameBn", "nameEn", "gender", "dob", "birthCertificateNo", "class", "mobile", "address",
            "পিতার_nameBn", "পিতার_nameEn", "পিতার_nid", "পিতার_mobile", "পিতার_occupation", "পিতার_income",
            "মাতার_nameBn", "মাতার_nameEn", "মাতার_nid", "মাতার_mobile", "মাতার_occupation", "মাতার_income",
            "guardian_name", "guardian_nid", "guardian_mobile", "guardian_occupation",
            "documents"
        ];

        for (const field of requiredFields) {
            if (!formData[field] || formData[field] === "") {
                toast.error("⚠️ সবগুলো ঘর পূরণ করতে হবে!", {
                    position: "bottom-right",
                });
                setLoading(false);
                return;
            }
        }

        try {
            const data = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            });

            const res = await fetch('/api/admission-form', {
                method: 'POST',
                body: data,
            });

            const result = await res.json();
            toast.success(result.message, { position: "bottom-right" });

            if (result.success) window.location.reload();
        } catch (error) {
            console.error('Form submit error:', error);
            toast.error('❌ সার্ভারে সমস্যা হয়েছে!', { position: "bottom-right" });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <Head>
                <title>ভর্তি ফরম - বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className="bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 min-h-screen flex items-center justify-center p-6 print:bg-white">
                <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl print:shadow-none print:rounded-none print:p-0">
                    <h2 className="text-3xl font-bold text-center text-green-700 mb-2 drop-shadow-lg">
                        বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        উপজেলাঃ আদমদীঘি, জেলাঃ বগুড়া
                    </p>
                    <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">
                        ছাত্র/ছাত্রী ভর্তি তথ্য (৩২(ক) ধারা অনুযায়ী)
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <Section title="শিক্ষার্থীর তথ্য" color="green">
                            <StudentInfo onChange={handleChange} />
                        </Section>

                        <Section title="পিতার তথ্য" color="yellow">
                            <ParentInfo parent="পিতার" onChange={handleChange} />
                        </Section>

                        <Section title="মাতার তথ্য" color="pink">
                            <ParentInfo parent="মাতার" onChange={handleChange} />
                        </Section>

                        <Section title="অভিভাবকের তথ্য (যদি পিতা/মাতা অভিভাবক না হন)" color="purple">
                            <GuardianInfo onChange={handleChange} />
                        </Section>

                        <Section title="অতিরিক্ত ডকুমেন্ট আপলোড" color="blue">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    জন্ম নিবন্ধন / NID / অন্যান্য ফাইল:
                                </label>
                                <input
                                    type="file"
                                    name="documents"
                                    className="w-full border rounded-xl p-2 shadow-inner"
                                    onChange={handleChange}
                                />
                            </div>
                        </Section>

                        <div className="text-center no-print">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-8 py-3 rounded-2xl shadow-xl hover:bg-green-700 transform hover:scale-105 transition"
                            >
                                {loading ? (
                                    <div className='flex'>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                                            ></path>
                                        </svg>
                                        লোড হচ্ছে...
                                    </div>
                                ) : (
                                    " ফরম জমা দিন"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

function Section({ title, color, children }) {
    const colorMap = {
        green: 'from-green-50 to-blue-50 text-green-700',
        yellow: 'from-yellow-50 to-orange-50 text-yellow-700',
        pink: 'from-pink-50 to-red-50 text-pink-700',
        purple: 'from-purple-50 to-indigo-50 text-purple-700',
        blue: 'from-blue-50 to-cyan-50 text-blue-700',
    };

    return (
        <div className={`bg-gradient-to-r ${colorMap[color]} rounded-2xl shadow-lg p-6`}>
            <h4 className={`text-xl font-bold mb-4`}>{title}</h4>
            {children}
        </div>
    );
}

function StudentInfo({ onChange }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="শিক্ষার্থীর ছবি:" name="photo" type="file" accept="image/*" onChange={onChange} />
            <Input label="শিক্ষার্থীর নাম (বাংলা):" name="nameBn" onChange={onChange} />
            <Input label="শিক্ষার্থীর নাম (ইংরেজি):" name="nameEn" onChange={onChange} />
            <Select label="লিঙ্গ:" name="gender" options={['পুত্র', 'কন্যা', 'অন্যান্য']} onChange={onChange} />
            <Input label="জন্ম তারিখ:" name="dob" type="date" onChange={onChange} />
            <Input label="জন্ম নিবন্ধন নাম্বার:" name="birthCertificateNo" onChange={onChange} />
            <Select
                label="শ্রেণী:"
                name="class"
                options={['প্লে', 'নার্সারি', 'প্রথম', 'দ্বিতীয়', 'তৃতীয়', 'চতুর্থ', 'পঞ্চম']}
                onChange={onChange}
            />
            <Input label="মোবাইল নাম্বার:" name="mobile" type="tel" placeholder="01XXXXXXXXX" onChange={onChange} />
            <div className="md:col-span-2">
                <Textarea label="ঠিকানা:" name="address" rows="3" onChange={onChange} />
            </div>
        </div>
    );
}

function ParentInfo({ parent, onChange }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label={`${parent} নাম (বাংলা):`} name={`${parent}_nameBn`} onChange={onChange} />
            <Input label={`${parent} নাম (ইংরেজি):`} name={`${parent}_nameEn`} onChange={onChange} />
            <Input label={`${parent} এনআইডি নাম্বার:`} name={`${parent}_nid`} onChange={onChange} />
            <Input label="মোবাইল নাম্বার:" name={`${parent}_mobile`} type="tel" placeholder="01XXXXXXXXX" onChange={onChange} />
            <Input label="পেশা:" name={`${parent}_occupation`} onChange={onChange} />
            <Input label="আয়ের পরিমাণ:" name={`${parent}_income`} type="number" placeholder="৳" onChange={onChange} />
        </div>
    );
}

function GuardianInfo({ onChange }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="অভিভাবকের নাম:" name="guardian_name" onChange={onChange} />
            <Input label="অভিভাবকের এনআইডি নাম্বার:" name="guardian_nid" onChange={onChange} />
            <Input label="মোবাইল নাম্বার:" name="guardian_mobile" type="tel" placeholder="01XXXXXXXXX" onChange={onChange} />
            <Input label="পেশা:" name="guardian_occupation" onChange={onChange} />
        </div>
    );
}

function Input({ label, ...rest }) {
    return (
        <div>
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <input className="w-full border rounded-xl p-2 shadow-inner" {...rest} />
        </div>
    );
}

function Select({ label, options, ...rest }) {
    return (
        <div>
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <select className="w-full border rounded-xl p-2 shadow-inner" {...rest}>
                <option value="">-- নির্বাচন করুন --</option>
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

function Textarea({ label, ...rest }) {
    return (
        <div>
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <textarea className="w-full border rounded-xl p-2 shadow-inner" {...rest}></textarea>
        </div>
    );
}

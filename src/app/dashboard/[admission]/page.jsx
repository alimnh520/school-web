'use client'
import React from 'react';
import { Download } from 'lucide-react';


export default function AdmissionPrint() {
    const data = {
        student: {
            photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
            nameBn: 'আরাফাত হাসান',
            nameEn: 'Arafat Hasan',
            gender: 'পুত্র',
            dob: '২০১৮-০৩-১২',
            birthCertificateNo: 'BCN-2020-012345',
            class: 'প্রথম',
            mobile: '+8801712345678',
            address: 'রোড-৪, বাড়ি-১২, ধানমণ্ডি, ঢাকা',
        },
        father: {
            nameBn: 'মোঃ সাইফুল ইসলাম',
            nameEn: 'Md. Saiful Islam',
            nid: '1987654321',
            mobile: '+8801711112233',
            occupation: 'ব্যবসায়ী',
            income: 45000,
        },
        mother: {
            nameBn: 'নূরজাহান বেগম',
            nameEn: 'Nurjahan Begum',
            nid: '1987654322',
            mobile: '+8801711112244',
            occupation: 'গৃহিণী',
            income: 0,
        },
        guardian: {
            name: 'নূরজাহান বেগম',
            nid: '1987654322',
            mobile: '+8801711112244',
            occupation: 'মাতাও—অভিভাবক',
        },
        documents: [
            { name: 'জন্ম সনদ (Birth Certificate)', url: '#' },
            { name: 'পাসপোর্ট সাইজ ছবি', url: '#' },
        ],
    };

    const downloadPhoto = () => {
        const link = document.createElement('a');
        link.href = data.student.photo_url;
        link.download = `${data.student.nameEn}_photo.jpg`;
        link.click();
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100 text-gray-900">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border p-8 print:shadow-none print:border-none">
                <header className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">ভর্তি ফরম</h1>
                        <p className="text-sm text-gray-600">শিক্ষার্থী তথ্য - প্রিন্ট/সংরক্ষণ উপযোগী</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src={data.student.photo_url} alt="student" className="w-28 h-28 rounded-lg object-cover border shadow" />
                        <button onClick={downloadPhoto} className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                            <Download size={14} /> ডাউনলোড ছবি
                        </button>
                    </div>
                </header>

                {/* Student Info */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 border-b pb-1">শিক্ষার্থীর তথ্য</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <p><span className="font-medium">বাংলা নাম:</span> {data.student.nameBn}</p>
                        <p><span className="font-medium">ইংরেজি নাম:</span> {data.student.nameEn}</p>
                        <p><span className="font-medium">জেন্ডার:</span> {data.student.gender}</p>
                        <p><span className="font-medium">জন্মতারিখ:</span> {data.student.dob}</p>
                        <p><span className="font-medium">জন্ম সনদ নং:</span> {data.student.birthCertificateNo}</p>
                        <p><span className="font-medium">ক্লাস:</span> {data.student.class}</p>
                        <p><span className="font-medium">মোবাইল:</span> {data.student.mobile}</p>
                        <p className="md:col-span-2"><span className="font-medium">ঠিকানা:</span> {data.student.address}</p>
                    </div>
                </section>

                {/* Parent Info */}
                <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 bg-gray-50">
                        <h3 className="font-medium mb-2">পিতা</h3>
                        <p><span className="font-medium">বাংলা নাম:</span> {data.father.nameBn}</p>
                        <p><span className="font-medium">ইংরেজি নাম:</span> {data.father.nameEn}</p>
                        <p><span className="font-medium">NID:</span> {data.father.nid}</p>
                        <p><span className="font-medium">মোবাইল:</span> {data.father.mobile}</p>
                        <p><span className="font-medium">পেশা:</span> {data.father.occupation}</p>
                        <p><span className="font-medium">আয় (BDT):</span> {data.father.income.toLocaleString('bn-BD')}</p>
                    </div>

                    <div className="border rounded-lg p-4 bg-gray-50">
                        <h3 className="font-medium mb-2">মাতা</h3>
                        <p><span className="font-medium">বাংলা নাম:</span> {data.mother.nameBn}</p>
                        <p><span className="font-medium">ইংরেজি নাম:</span> {data.mother.nameEn}</p>
                        <p><span className="font-medium">NID:</span> {data.mother.nid}</p>
                        <p><span className="font-medium">মোবাইল:</span> {data.mother.mobile}</p>
                        <p><span className="font-medium">পেশা:</span> {data.mother.occupation}</p>
                        <p><span className="font-medium">আয় (BDT):</span> {data.mother.income.toLocaleString('bn-BD')}</p>
                    </div>
                </section>

                {/* Guardian */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 border-b pb-1">অভিভাবক তথ্য</h2>
                    <div className="text-sm border rounded-lg p-4 bg-gray-50">
                        <p><span className="font-medium">নাম:</span> {data.guardian.name}</p>
                        <p><span className="font-medium">NID:</span> {data.guardian.nid}</p>
                        <p><span className="font-medium">মোবাইল:</span> {data.guardian.mobile}</p>
                        <p><span className="font-medium">পেশা:</span> {data.guardian.occupation}</p>
                    </div>
                </section>

                {/* Documents */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 border-b pb-1">ডকুমেন্টস</h2>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        {data.documents.map((doc, i) => (
                            <li key={i}>{doc.name}</li>
                        ))}
                    </ul>
                </section>

                <footer className="mt-8 text-xs text-gray-500 text-center">
                    এই ভর্তি ফরমটি প্রিন্ট বা PDF হিসেবে সংরক্ষণ করা যেতে পারে। Tailwind CSS ক্লাস ব্যবহার করা হয়েছে।
                </footer>
            </div>
        </div>
    );
}

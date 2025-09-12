'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { UserContext } from '../Provider';

const SchoolSections = () => {

    const { lang } = useContext(UserContext);

    const messages = [
        {
            title: lang ? "সভাপতির বাণী" : "President's Speech",
            name: lang ? "মোছাঃ রুমানা আফরোজ" : "Miss Rumana Afroz",
            img: "/president.jpg",
            link: `/components/presidents-speech`,
        },
        {
            title: lang ? "প্রধান শিক্ষকের বাণী" : "Head Teacher's message",
            name: lang ? "মোঃ আশরাফুল আলম" : "MD Asraful Alam",
            img: "/headteacher.jpg",
            link: `/components/head-teacher-speech`,
        },
        {
            title: lang ? "সহকারী প্রধান শিক্ষকের বাণী" : "Assistant Head Teacher's",
            name: lang ? "----" : "",
            img: "/assistant.jpg",
            link: `/components/assistant-head-teacher-speech`,
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50">
            {/* বাম পাশে অনুষ্ঠান ছবি */}
            <div className="col-span-2 space-y-4">
                <div className="flex flex-col gap-y-4">
                    <div className="relative w-full h-96 border-t-4 border-green-500 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/event1.jpg"
                            alt="অনুষ্ঠান ছবি"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed">
                        {lang ? " আদর্শীনি আই পি জে পাইওনিয়ার উচ্চ বিদ্যালয়ের শতবর্ষ উৎসব উপলক্ষে গত শুক্রবার অনুষ্টানের দ্বিতীয় দিনে এক বিশাল র‍্যালি বের হয়।" : "A grand rally was held on the second day of the centenary celebrations of Adarshini IPJ Pioneer High School last Friday. "}
                    </p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="relative w-full h-96 border-t-4 border-green-500 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/event1.jpg"
                            alt="অনুষ্ঠান ছবি"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed">
                        {lang ? "আদর্শীনি আই পি জে পাইওনিয়ার উচ্চ বিদ্যালয়ের শতবর্ষ উৎসব উপলক্ষে গত শুক্রবার অনুষ্টানের দ্বিতীয় দিনে এক বিশাল র‍্যালি বের হয়।" : "A grand rally was held on the second day of the centenary celebrations of Adarshini IPJ Pioneer High School last Friday."}
                    </p>
                </div>
            </div>

            {/* ডান পাশে বাণী */}
            <div className="space-y-6">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl border-t-4 border-purple-500 shadow-md hover:shadow-xl transition p-4 text-center"
                    >
                        <h3 className="text-lg font-bold text-purple-600">{m.title}</h3>
                        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden my-3 border-4 border-purple-300 shadow">
                            <Image
                                src={m.img}
                                alt={m.name}
                                width={112}
                                height={112}
                                className="object-cover"
                            />
                        </div>
                        <p className="font-medium text-gray-800">{m.name}</p>
                        <Link
                            href={m.link}
                            className="inline-block mt-3 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
                        >
                            {lang ? "বিস্তারিত" : "Details"}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SchoolSections
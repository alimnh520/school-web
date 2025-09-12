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
            name: lang ? "নিশাত আনজুম অনন্যা" : "Nishat Anjum Anana",
            img: "/gallary/546404152_24531347109814854_5838466105101725304_n.jpg",
            link: `/components/presidents-speech`,
        },
        {
            title: lang ? "প্রধান শিক্ষকের বাণী" : "Head Teacher's message",
            name: lang ? "মোঃ আশরাফুল আলম" : "MD Asraful Alam",
            img: "/gallary/546418052_1271174001450094_7641773692659982191_n.jpg",
            link: `/components/head-teacher-speech`,
        },
        {
            title: lang ? "সহকারী প্রধান শিক্ষকের বাণী" : "Assistant Head Teacher's",
            name: lang ? "----" : "",
            img: "/assistant.jpg",
            link: `/components/assistant-head-teacher-speech`,
        },
    ];

    const photos = [
        {
            title: lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়ের দৈনিক সমাবেশ" : "Bihigram Government Primary School's daily assembly",
            img: "/gallary/543696026_1728128884555647_4348034258953975320_n.jpg",
        },
        {
            title: lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়ের ফুটবল টুর্নামেন্ট" : "Bihigram Government Primary School Football Tournament",
            img: "/gallary/542873456_1449657939657657_1946766527660110407_n.jpg",
        },
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 sm:p-6 bg-gray-50">
            {/* বাম পাশে অনুষ্ঠান ছবি */}
            <div className="lg:col-span-2 space-y-6">
                {photos.map((item, i) => (
                    <div key={i} className="flex flex-col gap-y-3">
                        <div className="relative w-full h-56 sm:h-72 md:h-96 border-t-4 border-green-500 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={item.img}
                                alt="অনুষ্ঠান ছবি"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-gray-700 text-xl font-medium leading-relaxed">
                           {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* ডান পাশে বাণী */}
            <div className="space-y-6">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl border-t-4 border-purple-500 shadow-md hover:shadow-2xl transition p-4 sm:p-6 text-center"
                    >
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-600">{m.title}</h3>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden my-3 border-4 border-purple-300 shadow">
                            <Image
                                src={m.img}
                                alt={m.name}
                                width={112}
                                height={112}
                                className="object-cover"
                            />
                        </div>
                        <p className="font-medium text-gray-800 text-sm sm:text-base">{m.name}</p>
                        <Link
                            href={m.link}
                            className="inline-block mt-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition text-sm sm:text-base"
                        >
                            {lang ? "বিস্তারিত" : "Details"}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SchoolSections;

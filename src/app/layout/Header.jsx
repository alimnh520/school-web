// app/components/Header.tsx
"use client";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { UserContext } from "../Provider";
import Link from "next/link";

export default function Header() {
    const { setLang, lang } = useContext(UserContext);

    return (
        <header className="shadow-md uppercase">
            {/* Top Bar */}
            <div className="bg-gradient-to-r text-sm from-green-600 to-blue-600 text-white py-2 px-4 flex justify-between items-center">
                <div className="font-semibold tracking-wide">
                    {lang ? ' সুর্বর্ণজয়ন্তী ও বঙ্গবন্ধু কর্নার' : 'Bangabandhu Corner'}
                </div>
                <div className="flex space-x-4">
                    <Link href="" className="hover:underline">
                        {lang ? 'ভর্তি ফরম' : 'Admission '}
                    </Link>
                    <Link href="" className="hover:underline">
                        {lang ? ' ফলাফল' : 'Result '}
                    </Link>
                    <Link href="" className="hover:underline">
                        {lang ? 'প্রতিষ্ঠান লগইন' : 'Institution Login'}
                    </Link>
                    <Link href="" className="hover:underline">
                        {lang ? 'ওয়েবসাইট ড্যাশবোর্ড' : 'Dashboard'}
                    </Link>
                    <button className={`hover:underline ${lang && 'underline'}`} onClick={() => setLang(true)}>
                        BAN
                    </button>
                    <button className={`hover:underline ${!lang && 'underline'}`} onClick={() => setLang(false)}>
                        ENG
                    </button>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="bg-white px-6 py-3 flex items-center justify-between">
                {/* Logo & Title */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/logos/logo01.png"
                        alt="School Logo"
                        className="h-12 w-12 rounded-full border border-gray-300 shadow"
                    />
                    {/* <div>
                        <h1 className="text-lg md:text-xl font-bold text-green-700">
                            ADAMDIGHI ISWAR PURNA JOY PILOT SCHOOL
                        </h1>
                        {lang && (
                            <p className="text-gray-600 text-sm">
                                আদমদিঘি ঈশ্বর-পুর্ণ-জয় পাইলোট উচ্চ বিদ্যালয়
                            </p>
                        )}
                    </div> */}
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-sm space-x-6 font-medium text-gray-700">
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? ' আমাদের সম্পর্কে' : 'about us'}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'প্রশাসনিক তথ্য' : 'Administrative'}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'শিক্ষক এবং কর্মচারী' : 'Teachers & Staff'}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'একাডেমিক তথ্য' : 'Academic '}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'সহপাঠ্যক্রম ' : 'Co-curricular'}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'ভর্তি সংক্রান্ত তথ্য ' : 'Admission '}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'ছাত্র/ছাত্রীর তথ্য' : 'Student Info'}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'পরীক্ষা সংক্রান্ত তথ্য' : 'Exam Info'}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'ফলাফল ' : 'Result '}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'গ্যালারী ' : 'Gallery '}
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-green-600 transition">
                            {lang ? 'অভিযোগ বাক্স ' : 'Complaint'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

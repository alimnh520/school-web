// app/components/Header.tsx
"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { UserContext } from "../Provider";
import { usePathname } from "next/navigation";

export default function Header() {
    const [open, setOpen] = useState(false); // mobile nav
    const { setLang, info, lang } = useContext(UserContext);
    const path = usePathname();

    return (
        <header className="shadow-md uppercase">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm py-1 px-4 hidden items-center justify-between sm:flex">
                <div className="font-semibold tracking-wide text-sm">
                    {lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}
                </div>

                {/* top actions - hide some on very small screens */}
                <div className="flex items-center space-x-3 text-sm">
                    <div className="hidden sm:flex items-center space-x-3">
                        <Link href="#" className="hover:underline">
                            {lang ? "ভর্তি ফরম" : "Admission"}
                        </Link>
                        <span className="text-white/60 hidden sm:inline">|</span>
                        <Link href="#" className="hover:underline">
                            {lang ? "ফলাফল" : "Result"}
                        </Link>
                        <span className="text-white/60 hidden sm:inline">|</span>
                        {
                            info ? (
                                <Link href="#" className="hover:underline">
                                    {lang ? "ওয়েবসাইট ড্যাশবোর্ড" : "Dashboard"}
                                </Link>
                            ) : (
                                <Link href="#" className="hover:underline">
                                    {lang ? "প্রতিষ্ঠান লগইন" : "Institution Login"}
                                </Link>
                            )
                        }
                        <span className="text-white/60 hidden sm:inline">|</span>
                    </div>

                    {/* Language toggles */}
                    <div className="flex items-center gap-2">
                        <button
                            aria-pressed={lang}
                            onClick={() => setLang(true)}
                            className={`text-sm hover:underline ${lang ? "underline font-semibold" : ""}`}
                        >
                            BAN
                        </button>
                        <span className="text-white/60 hidden sm:inline">|</span>
                        <button
                            aria-pressed={!lang}
                            onClick={() => setLang(false)}
                            className={`text-sm hover:underline ${!lang ? "underline font-semibold" : ""}`}
                        >
                            ENG
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="bg-white px-4 sm:px-6 py-1 flex items-center justify-between">
                {/* Logo & Title */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logos/logo01.png"
                        alt="School Logo"
                        className="h-12 w-12 rounded-full border border-gray-200 shadow"
                    />

                    <div className="flex sm:hidden flex-col">
                        <p className="text-sm">{lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}</p>
                        <p className="text-[9px]">{lang && "Bihigram Government Primary School"}</p>
                    </div>

                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-sm space-x-6 font-medium text-gray-700">
                    <li><Link href="/category/about" className={`hover:text-green-600 ${path === '/category/about' && 'text-green-600'} transition`}>{lang ? "আমাদের সম্পর্কে" : "about us"}</Link></li>
                    <li><Link href="/category/administrative" className={`hover:text-green-600 ${path === '/category/administrative' && 'text-green-600'} transition`}>{lang ? "প্রশাসনিক তথ্য" : "Administrative"}</Link></li>
                    <li><Link href="/category/teacher-staff" className={`hover:text-green-600 ${path === '/category/teacher-staff' && 'text-green-600'} transition`}>{lang ? "শিক্ষক এবং কর্মচারী" : "Teachers & Staff"}</Link></li>
                    <li><Link href="/category/academic" className={`hover:text-green-600 ${path === '/category/academic' && 'text-green-600'} transition`}>{lang ? "একাডেমিক তথ্য" : "Academic"}</Link></li>
                    <li><Link href="/category/co-curricular" className={`hover:text-green-600 ${path === '/category/co-curricular' && 'text-green-600'} transition`}>{lang ? "সহপাঠ্যক্রম" : "Co-curricular"}</Link></li>
                    <li><Link href="/category/admission" className={`hover:text-green-600 ${path === '/category/admission' && 'text-green-600'} transition`}>{lang ? "ভর্তি সংক্রান্ত তথ্য" : "Admission"}</Link></li>
                    <li><Link href="/category/students-information" className={`hover:text-green-600 ${path === '/category/students-information' && 'text-green-600'} transition`}>{lang ? "ছাত্র/ছাত্রী তথ্য" : "Student Info"}</Link></li>
                    <li><Link href="/category/examination" className={`hover:text-green-600 ${path === '/category/examination' && 'text-green-600'} transition`}>{lang ? "পরীক্ষা সংক্রান্ত তথ্য" : "Exam Info"}</Link></li>
                    <li><Link href="/category/result" className={`hover:text-green-600 ${path === '/category/result' && 'text-green-600'} transition`}>{lang ? "ফলাফল" : "Result"}</Link></li>
                    <li><Link href="/category/gallery" className={`hover:text-green-600 ${path === '/category/gallery' && 'text-green-600'} transition`}>{lang ? "গ্যালারী" : "Gallery"}</Link></li>
                    <li><Link href="/category/complaint" className={`hover:text-green-600 ${path === '/category/complaint' && 'text-green-600'} transition`}>{lang ? "অভিযোগ বাক্স" : "Complaint"}</Link></li>
                </ul>

                {/* Right-side actions for small screens: menu toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    {/* quick top links visible on small screens */}
                    <div className="flex gap-2">
                        <Link href="#" className="text-xs px-2 py-1 border rounded bg-white/60 shadow-sm hidden sm:inline">
                            {lang ? "ভর্তি" : "Admission"}
                        </Link>
                        <Link href="#" className="text-xs px-2 py-1 border rounded bg-white/60 shadow-sm hidden sm:inline">
                            {lang ? "ফলাফল" : "Result"}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                        className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Slide-down Menu */}
            <div
                className={`md:hidden transform transition-all duration-300 origin-top ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    } overflow-hidden bg-white border-t`}
            >
                <div className="px-4 py-4 space-y-3">
                    {/* replicated top quick links for mobile */}
                    <div className="flex flex-wrap gap-2">
                        <Link href="#" className="px-3 py-1 text-sm rounded bg-green-50 hover:bg-green-100">
                            {lang ? "ভর্তি ফরম" : "Admission"}
                        </Link>
                        <Link href="#" className="px-3 py-1 text-sm rounded bg-green-50 hover:bg-green-100">
                            {lang ? "ফলাফল" : "Result"}
                        </Link>
                        {
                            info ? (
                                <Link href="#" className="px-3 py-1 text-sm rounded bg-green-50 hover:bg-green-100">
                                    {lang ? "ওয়েবসাইট ড্যাশবোর্ড" : "website dashboard"}
                                </Link>
                            ) : (
                                <Link href="#" className="px-3 py-1 text-sm rounded bg-green-50 hover:bg-green-100">
                                    {lang ? "প্রতিষ্ঠান লগইন" : "Institution Login"}
                                </Link>
                            )
                        }

                    </div>

                    {/* mobile nav links */}
                    <nav className="grid grid-cols-1 gap-2">
                        <Link href="/category/about" className={`block py-2 px-2 rounded ${path === '/category/about' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "আমাদের সম্পর্কে" : "about us"}</Link>
                        <Link href="/category/administrative" className={`block py-2 px-2 rounded ${path === '/category/administrative' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "প্রশাসনিক তথ্য" : "Administrative"}</Link>
                        <Link href="/category/teacher-staff" className={`block py-2 px-2 rounded ${path === '/category/teacher-staff' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "শিক্ষক এবং কর্মচারী" : "Teachers & Staff"}</Link>
                        <Link href="/category/academic" className={`block py-2 px-2 rounded ${path === '/category/academic' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "একাডেমিক তথ্য" : "Academic"}</Link>
                        <Link href="/category/co-curricular" className={`block py-2 px-2 rounded ${path === '/category/co-curricular' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "সহপাঠ্যক্রম" : "Co-curricular"}</Link>
                        <Link href="/category/admission" className={`block py-2 px-2 rounded ${path === '/category/admission' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "ভর্তি সংক্রান্ত তথ্য" : "Admission"}</Link>
                        <Link href="/category/students-information" className={`block py-2 px-2 rounded ${path === '/category/students-information' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "ছাত্র/ছাত্রী তথ্য" : "Student Info"}</Link>
                        <Link href="/category/examination" className={`block py-2 px-2 rounded ${path === '/category/examination' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "পরীক্ষা সংক্রান্ত তথ্য" : "Exam Info"}</Link>
                        <Link href="/category/result" className={`block py-2 px-2 rounded ${path === '/category/result' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "ফলাফল" : "Result"}</Link>
                        <Link href="/category/gallery" className={`block py-2 px-2 rounded ${path === '/category/gallery' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "গ্যালারী" : "Gallery"}</Link>
                        <Link href="/category/complaint" className={`block py-2 px-2 rounded ${path === '/category/complaint' && 'bg-green-600 text-white'} hover:bg-gray-50`}>{lang ? "অভিযোগ বাক্স" : "Complaint"}</Link>
                    </nav>

                    {/* language toggle - mobile */}
                    <div className="flex items-center gap-3 pt-2 border-t mt-2">
                        <button
                            onClick={() => setLang(true)}
                            className={`flex-1 py-2 rounded ${lang ? "bg-green-600 text-white" : "bg-gray-100"}`}
                        >
                            BAN
                        </button>
                        <button
                            onClick={() => setLang(false)}
                            className={`flex-1 py-2 rounded ${!lang ? "bg-green-600 text-white" : "bg-gray-100"}`}
                        >
                            ENG
                        </button>
                    </div>
                </div>
            </div>
        </header >
    );
}

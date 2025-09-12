import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    Info,
    School,
    Users,
    BookOpen,
    GraduationCap,
    Phone,
    FileText,
    ClipboardList,
    Award,
    Image,
    MoreHorizontal,
} from "lucide-react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { UserContext } from "../Provider";
import { useContext } from "react";

export default function SchoolInfoPage() {
    const { lang } = useContext(UserContext);

    const sections = [
        {
            title: lang ? "আমাদের সম্পর্কে" : "About Us",
            icon: Info,
            image: "/logos/About-Us-PNG-Photos.png",
            items: lang
                ? ["প্রতিষ্ঠান সম্পর্কে", "লক্ষ্য ও উদ্দেশ্য", "ইতিহাস", "যোগাযোগ করুন"]
                : ["About the Institution", "Aims and Objectives", "History", "Contact"],
            link: "",
            color: "bg-blue-500",
        },
        {
            title: lang ? "প্রশাসনিক তথ্য" : "Administrative Information",
            icon: School,
            image: "/logos/database-administrator.png",
            items: lang
                ? [
                    "প্রধান শিক্ষকের বাণী",
                    "সভাপতির বাণী",
                    "পরিচালনা পর্ষদ তথ্য",
                    "দাতা সদস্যদের তালিকা",
                ]
                : [
                    "Message from the Principal",
                    "Message from the President",
                    "Board of Directors Information",
                    "List of Donors",
                ],
            link: "",
            color: "bg-purple-500",
        },
        {
            title: lang ? "স্কুল সংক্রান্ত তথ্য" : "School Information",
            icon: FileText,
            image: "/logos/furniture-class-thumbnail.png",
            items: lang
                ? ["বিদ্যালয়ের স্থাপনকাল", "EIIN নম্বর", "MPO কোড", "বিদ্যালয়ের কোড"]
                : ["Establishment Date", "EIIN Number", "MPO Code", "School Code"],
            link: "",
            color: "bg-pink-500",
        },
        {
            title: lang ? "শিক্ষক ও কর্মচারী" : "Teachers and staff",
            icon: Users,
            image: "/logos/3dlogo.png",
            items: lang
                ? ["শিক্ষকদের তথ্য", "কর্মচারীদের তথ্য", "প্রাক্তন সদস্যদের তথ্য"]
                : ["Teachers' Information", "Employees' Information", "Alumni Information"],
            link: "",
            color: "bg-green-600",
        },
        {
            title: lang ? "ছাত্র/ছাত্রী সংক্রান্ত তথ্য" : "Student information",
            icon: GraduationCap,
            image: "/logos/4779538.webp",
            items: lang
                ? [
                    "ছাত্র/ছাত্রীর সংখ্যা",
                    "ধর্ম ভিত্তিক শিক্ষার্থী",
                    "উপবৃত্তি প্রাপ্ত শিক্ষার্থী",
                    "ছাত্রাবাস তথ্য",
                ]
                : [
                    "Number of Students",
                    "Students by Religion",
                    "Scholarship Students",
                    "Hostel Information",
                ],
            link: "",
            color: "bg-orange-500",
        },
        {
            title: lang ? "গুরুত্বপূর্ণ নাম্বার সমূহ" : "Important numbers",
            icon: Phone,
            image:
                "/logos/pngtree-emergency-call-vector-icon-illustration-rescue-button-sign-vector-png-image_39897142.png",
            items: lang
                ? ["সরকারি তথ্য 333", "জরুরী সেবা 999", "নারী ও শিশু নির্যাতন 109", "দুদক 106"]
                : [
                    "Government Information 333",
                    "Emergency Services 999",
                    "Women and Child Abuse 109",
                    "ACC 106",
                ],
            link: "",
            color: "bg-red-500",
        },
        {
            title: lang ? "একাডেমিক তথ্য" : "Academic information",
            icon: BookOpen,
            image: "/logos/school-3d-icon.png",
            items: lang
                ? ["নোটিশ সমূহ", "ই-লেসন", "পাঠ্যপুস্তক তথ্য", "ছাত্রাবাস তথ্য"]
                : ["Notices", "E-Lessons", "Textbook Information", "Hostel Information"],
            link: "",
            color: "bg-indigo-500",
        },
        {
            title: lang ? "পরীক্ষার তথ্য" : "Test information",
            icon: ClipboardList,
            image: "/logos/5.jpg",
            items: lang
                ? ["পরীক্ষার নিয়মাবলী", "পরীক্ষার সময়সূচী", "সিলেবাস", "পাঠ পরিক্রমা"]
                : ["Exam Rules", "Exam Schedule", "Syllabus", "Lesson Tour"],
            link: "",
            color: "bg-teal-500",
        },
        {
            title: lang ? "ফলাফল" : "result",
            icon: Award,
            image: "/logos/result-sheet-6244387-5117404.webp",
            items: lang
                ? ["অভ্যন্তরীণ ফলাফল", "বার্ষিক পরীক্ষা ফলাফল", "বৃত্তি পরীক্ষা ফলাফল"]
                : ["Internal Results", "Annual Exam Results", "Scholarship Exam Results"],
            link: "",
            color: "bg-cyan-500",
        },
        {
            title: lang ? "গ্যালারি" : "Gallery",
            icon: Image,
            image: "/logos/gallery-6546351-5376614.webp",
            items: lang
                ? ["ফটো গ্যালারি", "ভিডিও গ্যালারি", "ম্যাগাজিন"]
                : ["Photo Gallery", "Video Gallery", "Magazine"],
            link: "",
            color: "bg-yellow-500",
        },
        {
            title: lang ? "অন্যান্য" : "other",
            icon: MoreHorizontal,
            image: "/logos/free_logos_online-05.webp",
            items: lang
                ? ["শিক্ষা সফর", "ক্রীড়া কার্যক্রম", "সাংস্কৃতিক কার্যক্রম", "স্কাউটস"]
                : ["Study Tours", "Sports Activities", "Cultural Activities", "Scouts"],
            link: "",
            color: "bg-gray-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
            {sections.map((section, index) => (
                <Card
                    key={index}
                    className="hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border flex flex-col"
                >
                    <CardHeader
                        className={`${section.color} py-2 px-3 text-white flex flex-row items-center space-x-2`}
                    >
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <CardTitle className="text-sm sm:text-base">{section.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <img
                            src={section.image}
                            alt=""
                            className="w-20 h-20 sm:w-24 sm:h-24 object-contain flex-shrink-0"
                        />
                        <ul className="list-none space-y-1 w-full">
                            {section.items.map((item, i) => (
                                <li key={i} className="cursor-pointer">
                                    <Link
                                        href={section.link}
                                        className="flex items-center gap-x-1 hover:text-blue-600"
                                    >
                                        <span className="text-blue-600">
                                            <IoMdArrowDropright />
                                        </span>
                                        <p className="relative transition-all">{item}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

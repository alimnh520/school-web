"use client";
import { useContext, useState } from "react";
import { UserContext } from "../Provider";

export default function AboutInstitute() {
    const { lang } = useContext(UserContext);
    const [aboutSchool, setAboutSchool] = useState(true);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-t-4 border-blue-600 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

                {/* শিরোনাম */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 text-center relative z-10">
                    {lang ? "প্রতিষ্ঠান সম্পর্কে" : "About the Organization"}
                </h2>

                {/* কনটেন্ট */}
                <div
                    className={`transition-all duration-700 ease-in-out relative z-10 ${aboutSchool ? "h-40" : "h-auto"
                        } overflow-hidden`}
                >
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                        {lang
                            ? `মানুষের জ্ঞানের তৃষ্ণা আছে। তৃষ্ণা মেটানোর জন্য মানুষ শিক্ষা প্রতিষ্ঠান থেকে জ্ঞান অর্জন করে। অন্ধকারের কুহেলিকা দূর করে শিক্ষার আলোয় জগতকে উদ্ভাসিত করার নিমত্তে সর্বোপরি শিক্ষার গুরুত্ব অনুধাবন করে `
                            : `Humans have a thirst for knowledge. To satisfy this thirst, people acquire knowledge from educational institutions. Above all, they realize the importance of education in order to dispel the fog of darkness and illuminate the world with the light of education. `}
                        <span className="font-semibold text-blue-600">
                            {lang
                                ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়"
                                : "Bihigram Government Primary School"}
                        </span>
                        {lang
                            ? ` নামক এই ঐতিহ্যবাহী বিদ্যাপীঠটি প্রতিষ্ঠিত।`
                            : ` — this traditional institution was established.`}
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl mt-4">
                        {lang
                            ? "শহরের প্রাত্যহিক কোলাহল থেকে মুক্ত বর্ধিষ্ণু অঞ্চলে, পল্লী শোভিত সবুজ আবহে বেষ্টিত এই প্রতিষ্ঠানটি অবস্থিত। এটি ছাত্র ও ছাত্রীর সমন্বয়ে একটি সহ শিক্ষার প্রতিষ্ঠান, যেখানে শিক্ষার্থীরা আলোকিত ভবিষ্যতের স্বপ্ন নিয়ে এগিয়ে চলে।"
                            : "Located in a thriving area, free from the daily hustle and bustle of the city, surrounded by lush greenery, this institution is a co-educational center, where students move forward with dreams of a bright future."}
                    </p>
                </div>

                {/* বোতাম */}
                <div className="text-center mt-8 relative z-10">
                    <button
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transform transition"
                        onClick={() => setAboutSchool(!aboutSchool)}
                    >
                        {aboutSchool
                            ? lang
                                ? "আরও পড়ুন..."
                                : "Read more..."
                            : lang
                                ? "বন্ধ করুন..."
                                : "Close..."}
                    </button>
                </div>
            </div>
        </div>
    );
}

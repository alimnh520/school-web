"use client";
import { useContext, useState } from "react";
import { UserContext } from "../Provider";

export default function AboutInstitute() {
    const { lang } = useContext(UserContext);
    const [aboutSchool, setAboutSchool] = useState(true);

    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
                {/* শিরোনাম */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center">
                    {lang ? "প্রতিষ্ঠান সম্পর্কে" : "About the organization"}
                </h2>

                {/* কনটেন্ট */}
                <div className={`${aboutSchool ? 'h-32' : 'h-auto'} overflow-y-hidden`}>
                    <p className="text-gray-700 leading-relaxed text-lg">
                       {lang ? `মানুষের জ্ঞানের তৃষ্ণা আছে। তৃষ্ণা মেটানোর জন্য মানুষ শিক্ষা প্রতিষ্ঠান থেকে
                        জ্ঞান অর্জন করে। অন্ধকারের কুহেলিকা দূর করে শিক্ষার আলোয় জগতকে উদ্ভাসিত
                        করার নিমত্তে সর্বোপরি শিক্ষার গুরুত্ব অনুধাবন করে ${<span className="font-semibold text-blue-600">
                            মা-মনি শিশু-কিশোর একাডেমি</span>} নামক এই ঐতিহ্যবাহী বিদ্যাপীঠটি প্রতিষ্ঠিত। ` : `Humans have a thirst for knowledge. To satisfy this thirst, people acquire knowledge from educational institutions. Above all, they realize the importance of education in order to dispel the fog of darkness and illuminate the world with the light of education. ${<span className="font-semibold text-blue-600">Ma-Moni Children and Adolescents Academy</span>} This traditional school was established.`}
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg mt-4">
                        {lang ? "শহরের প্রাত্যহিক কোলাহল থেকে মুক্ত বর্ধিষ্ণু অঞ্চলে, পল্লী শোভিত সবুজ আবহে বেষ্টিত এই প্রতিষ্ঠানটি অবস্থিত। এটি ছাত্র ও ছাত্রীর সমন্বয়ে একটি সহ শিক্ষার প্রতিষ্ঠান, যেখানে শিক্ষার্থীরা আলোকিত ভবিষ্যতের স্বপ্ন নিয়ে এগিয়ে চলে। " : "Located in a thriving area, free from the daily hustle and bustle of the city, surrounded by lush greenery, this institution is a co-educational institution for both male and female students, where students move forward with dreams of a bright future."}
                    </p>
                </div>

                {/* বোতাম */}
                <div className="text-center mt-6">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition" onClick={() => setAboutSchool(!aboutSchool)}>
                        {aboutSchool ? lang ? 'আরও পড়ুন...' : 'Read more...' : lang ? 'বন্ধ করুন...' : 'Closed...'}
                    </button>
                </div>
            </div>
        </div>
    );
}

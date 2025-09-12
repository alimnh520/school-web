'use client'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { UserContext } from "../Provider";

const Animation = () => {
    const [animKey, setAnimKey] = useState(0);
    const { lang } = useContext(UserContext);

    const handleAnimate = () => {
        setAnimKey((prev) => prev + 1);
    };

    const animateImg = [
        { img: "/bg/543359019_2306187366479674_2760109373113052233_n.jpg", number: "-1" },
        { img: "/gallary/541962282_1880236069552184_3769267227423714204_n.jpg", number: "-2" },
    ];

    return (
        <div className="relative w-full">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => setAnimKey((prev) => prev + 1)}
                mousewheel={true}
                modules={[Pagination, Navigation, Mousewheel, Autoplay]}
                className="mySwiper h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full"
            >
                {animateImg.map((item) => (
                    <SwiperSlide
                        key={animKey + item.number}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <p className="text-white animation text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
                                    {lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation buttons */}
                <div
                    className="button-next absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl sm:text-4xl cursor-pointer z-10 hover:scale-110 transition"
                    onClick={handleAnimate}
                >
                    <CiCircleChevRight />
                </div>
                <div
                    className="button-prev absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl sm:text-4xl cursor-pointer z-10 hover:scale-110 transition"
                    onClick={handleAnimate}
                >
                    <CiCircleChevLeft />
                </div>
            </Swiper>
        </div>
    )
}

export default Animation;

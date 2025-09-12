'use client'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import React, { useContext, useRef, useState } from 'react';
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
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev',
            }}
            autoplay={true}
            onSlideChange={() => setAnimKey((prev) => prev + 1)}
            mousewheel={true}
            modules={[Pagination, Navigation, Mousewheel, Autoplay]}
            className="mySwiper h-96 w-full border"
        >
            <SwiperSlide className="bg-[url('/bg/543359019_2306187366479674_2760109373113052233_n.jpg')] bg-cover bg-center" key={animKey + "-1"}>
                <p className="text-white animation mt-20 ml-10 text-2xl font-semibold">{lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}</p>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/bg/543359019_2306187366479674_2760109373113052233_n.jpg')] bg-cover bg-center" key={animKey + "-2"}>
                <p className="text-white animation mt-20 ml-10 text-2xl font-semibold">{lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}</p>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/bg/543359019_2306187366479674_2760109373113052233_n.jpg')] bg-cover bg-center" key={animKey + "-3"}>
                <p className="text-white animation mt-20 ml-10 text-2xl font-semibold">{lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}</p>
            </SwiperSlide>
            <SwiperSlide className="bg-[url('/bg/543359019_2306187366479674_2760109373113052233_n.jpg')] bg-cover bg-center" key={animKey + "-4"}>
                <p className="text-white animation mt-20 ml-10 text-2xl font-semibold">{lang ? "বিহিগ্রাম সরকারি প্রাথমিক বিদ্যালয়" : "Bihigram Government Primary School"}</p>
            </SwiperSlide>
            <div className="button-next" onClick={handleAnimate} ><CiCircleChevRight /></div>
            <div className="button-prev" onClick={handleAnimate} ><CiCircleChevLeft /></div>
        </Swiper>
    )
}

export default Animation
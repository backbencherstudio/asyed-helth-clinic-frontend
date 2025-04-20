'use client';

import { serviceData } from "@/demoAPI/servicedata";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from "./ServiceCard";

function ServiceSlide() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    return (
        <div>
            <div className="max-w-[77rem] relative mx-auto  ">
                {/* Previous Button */}
                <button className="group absolute z-10 left-2 xl:left-[-35px] top-1/2 -translate-1/2" onClick={goPrev}>

                    <div className="relative flex items-center cursor-pointer bg-[#F5F5F5] group-hover:bg-PrimaryColor text-PrimaryColor group-hover:text-whiteColor justify-center w-10 h-10 rounded-full backdrop-blur-[1px] transition-colors">
                        <FaChevronLeft className="group-hover:text-whiteColor text-PrimaryColor" />
                    </div>
                </button>
                {/* Next Button */}
                <button className="group absolute z-10 right-[-35px] xl:right-[-75px] top-1/2 -translate-1/2" onClick={goNext}>

                    <div className="relative flex items-center cursor-pointer bg-[#F5F5F5] group-hover:bg-PrimaryColor text-PrimaryColor group-hover:text-whiteColor justify-center w-10 h-10 rounded-full backdrop-blur-[1px] transition-colors">
                        <FaChevronRight className="group-hover:text-whiteColor text-PrimaryColor" />
                    </div>
                </button>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation]} // ✅ Ensure the Navigation module is included
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                >
                    {serviceData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ServiceCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ServiceSlide

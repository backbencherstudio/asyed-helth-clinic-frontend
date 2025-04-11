'use client';

import { bannerdata } from '@/demoAPI/banner';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerSlider = () => {
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
        <div className="relative">
            <div className=" absolute top-12 left-0  w-full">
                <div className="  flex justify-between">
                    {/* Line Behind the Buttons */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-primaryColor"></div>

                    {/* Previous Button */}
                    <button className="group relative z-40" onClick={goPrev}>
                        
                        <div className="relative flex items-center bg-[B1B1B1] justify-center w-10 h-10 rounded-full backdrop-blur-[10px] transition-colors">
                            <FaChevronLeft className="text-seconderyColor" />
                        </div>
                    </button>

                    {/* Next Button */}
                    <button className="group relative z-40" onClick={goNext}>
                    
                        <div className="relative flex items-center bg-[B1B1B1] justify-center w-10 h-10 rounded-full backdrop-blur-[5px] transition-colors">
                            <FaChevronRight className="group-hover:text-primaryColor" />
                        </div>
                    </button>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation]} // ✅ Ensure the Navigation module is included
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                className="w-full h-[600px]"
            >
                {bannerdata.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[600px]">
                            {/* Background Image */}
                            <Image
                                src={banner.image}
                                alt={`Banner ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center px-10 lg:px-32 text-white">
                                <div className="max-w-3xl">
                                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                                        {banner.title}
                                    </h1>
                                    <p className="mt-4 text-base lg:text-lg text-gray-100">
                                        {banner.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-gray-100 transition">Check In</button>
                                        <button className="border border-[#8CC640] text-[#8CC640] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#8CC640]/10 transition">Virtual Visit</button>
                                        <button className="border border-[#8CC640] text-[#8CC640] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#8CC640]/10 transition">Call Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;

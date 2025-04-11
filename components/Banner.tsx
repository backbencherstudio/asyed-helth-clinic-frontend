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
        <section className=' '>
            <div className="relative  ">
                <div className=" absolute top-[45%] left-0   w-full">
                    <div className="  max-w-[89.5rem] mx-auto   flex justify-between">
                        {/* Previous Button */}
                        <button className="group relative z-40" onClick={goPrev}>

                            <div className="relative flex items-center bg-[#B1B1B1]/50 justify-center w-10 h-10 rounded-full backdrop-blur-[5px] transition-colors">
                                <FaChevronLeft className="text-seconderyColor" />
                            </div>
                        </button>

                        {/* Next Button */}
                        <button className="group relative z-40" onClick={goNext}>

                            <div className="relative flex items-center bg-[#B1B1B1]/50 justify-center w-10 h-10 rounded-full backdrop-blur-[5px] transition-colors">
                                <FaChevronRight className="text-seconderyColor" />
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
                    className="w-full "
                >
                    {bannerdata.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full ">
                                {/* Background Image */}
                                <Image
                                    src={banner.image}
                                    alt={`Banner ${index + 1}`}
                                   width={1920}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex items-center px-10 lg:px-20 text-white max-w-[82.5rem] mx-auto">
                                    <div className="max-w-2xl">
                                        <h1 className="text-3xl lg:text-[60px] text-whiteColor  font-bold leading-[130%]">
                                            {banner.title}
                                        </h1>
                                        <p className="mt-4 text-base leading-[150%] text-whiteColor pr-20">
                                            {banner.description}
                                        </p>
                                        <div className="mt-10 flex flex-wrap gap-4">
                                            {banner.button.map((button, index) => (
                                                <button key={button.title} className={`${index === 0 ? "bg-white text-PrimaryColor" : "font-semibold shadow border border-seconderyColor text-seconderyColor transition"} flex gap-2 items-center cursor-pointer px-5 py-3 rounded-full text-base font-[metroSB]`}> <Image src={button.icon} alt={button.title} />{button.title}</button>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
};

export default BannerSlider;

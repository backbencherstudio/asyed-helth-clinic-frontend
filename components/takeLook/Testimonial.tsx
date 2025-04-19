"use client"
import { testimonials } from "@/demoAPI/testimonial";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import H2 from '../reusable/H2';

function Testimonial() {
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
    <div className=" py-14 lg:py-24 ">
       <div className="max-w-[77rem] mx-auto px-4  lg:pt-20">
                    <div className="   mb-12">
                        <div className=" text-center">
                            <H2 >What Patients Say</H2>
                            <p className="text-pragraphColor leading-[160%] mt-3 max-w-[500px] mx-auto text-base">
                                Take o tour welcoming spaces and  cutting Edge facilities
                            </p>
                        </div>
                        
                    </div>

                    <div className='pb-4'>
                     <div className="max-w-[77rem] relative mx-auto  ">
                {/* Previous Button */}
                <button className="group absolute z-10  left-3/8 md:left-5 xl:left-[-10px] bottom-[-50px] md:top-1/2 -translate-1/2" onClick={goPrev}>

                    <div className="relative flex items-center cursor-pointer bg-[#F5F5F5] group-hover:bg-PrimaryColor text-PrimaryColor group-hover:text-whiteColor justify-center w-10 h-10 rounded-full backdrop-blur-[1px] transition-colors">
                        <FaChevronLeft className="group-hover:text-whiteColor text-PrimaryColor" />
                    </div>
                </button>
                {/* Next Button */}
                <button className="group absolute z-10 right-3/8 md:right-[-0px] xl:right-[-50px] bottom-[-50px] md:top-1/2 -translate-1/2" onClick={goNext}>
                    <div className="relative flex items-center cursor-pointer bg-[#F5F5F5] group-hover:bg-PrimaryColor text-PrimaryColor group-hover:text-whiteColor justify-center w-10 h-10 rounded-full backdrop-blur-[1px] transition-colors">
                        <FaChevronRight className="group-hover:text-whiteColor text-PrimaryColor" />
                    </div>
                </button>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
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
                        768: { slidesPerView: 1},
                        1024: { slidesPerView: 1},
                    }}
                >
                    {testimonials.map((item:any) => (
                        <SwiperSlide key={item?.id}>
                            <div className=" lg:w-[795px] text-center mx-auto">
                                <p className=" lg:text-[24px] md:text-xl text-lg text-black/90">{item?.quote}</p>
                                <div className=" flex gap-2  items-center justify-center py-4">
                                    <Image src={item?.image} alt={item?.name} width={45} height={45} className="rounded-full overflow-hidden"/>
                                    <h4 className=" text-[28px] font-semibold text-[#1D1F2C]">{item?.author}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
                    </div>
                </div>
    </div>
  )
}

export default Testimonial

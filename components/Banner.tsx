'use client';

import { bannerdata } from '@/demoAPI/banner';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef<any>(null);

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
    <section className=''>
      <div className="relative">
        {/* Desktop Navigation */}
        <div className="absolute top-[45%] left-0 hidden md:block w-full z-10">
          <div className="max-w-[89.5rem] mx-auto flex justify-between">
            <button onClick={goPrev}>
              <div className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-[#B1B1B1]/70 backdrop-blur-[5px]">
                <FaChevronLeft className="text-seconderyColor" />
              </div>
            </button>
            <button onClick={goNext}>
              <div className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full bg-[#B1B1B1]/70 backdrop-blur-[5px]">
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
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          className="w-full"
        >
          {bannerdata.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                <Image
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                  width={1920}
                  height={700}
                  className="w-full h-[700px] md:h-[450px] lg:h-[500px] xl:h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 z-30 flex items-center px-5 md:px-10 lg:px-20 text-white max-w-[77rem] mx-auto">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-[42px]  md:pr-48 lg:pr-0 lg:text-[60px] text-white font-bold leading-[130%] ">
                      {banner.title}
                    </h1>
                    <p className="mt-4 text-base leading-[150%] text-white md:pr-20">
                      {banner.description}
                    </p>
                    <div className="mt-10 flex justify-center lg:justify-start flex-wrap gap-4">
                      {banner.button.map((button, index) => (
                        <button
                          key={button.title}
                          className={`${
                            index === 0
                              ? 'bg-white text-PrimaryColor w-full justify-center md:w-auto'
                              : 'font-semibold shadow border border-seconderyColor text-seconderyColor transition'
                          } flex gap-2 items-center cursor-pointer px-5 py-3 rounded-full text-base font-[metroSB]`}
                        >
                          <Image src={button.icon} alt={button.title} />
                          {button.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Pagination Dots */}
        <div className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 custom-pagination flex justify-center gap-2" />
      </div>

      {/* Swiper bullet styles */}
      <style jsx global>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 9999px;
          opacity: 0.7;
          margin: 0 4px !important;
          transition: all 0.3s ease;
         z-index: 1;
        }

        .custom-bullet-active {
          background:#8CC640 ;
          opacity: 1;
          transform: scale(1.3);
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default BannerSlider;

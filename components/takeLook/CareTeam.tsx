"use client";
import { doctorsData } from "@/demoAPI/doctor";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import H2 from "../reusable/H2";
import TeamCard from "./TeamCard";

import "swiper/css";
import "swiper/css/pagination";

function CareTeam() {
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
    <div className="lg:py-24 py-14 bg-bgthirdColor">
      <div className="max-w-[77rem] mx-auto px-4">
        <div className="mb-12 text-center">
          <H2>Meet Our Caring Team</H2>
          <p className="text-pragraphColor leading-[160%] mt-3 max-w-[500px] mx-auto text-base">
            Take a tour of our welcoming spaces and cutting-edge facilities.
          </p>
        </div>

        <div className="relative pb-14">
          {/* Arrows for desktop only */}
          <button
            className="group hidden md:flex absolute z-10 left-[-7px] xl:left-[-10px] top-1/2 -translate-y-1/2"
            onClick={goPrev}
          >
            <div className="flex items-center cursor-pointer bg-[#F5F5F5] group-hover:bg-PrimaryColor text-PrimaryColor group-hover:text-white justify-center w-10 h-10 rounded-full transition-colors">
              <FaChevronLeft className="group-hover:text-white text-PrimaryColor" />
            </div>
          </button>

          <button
            className="group hidden md:flex absolute z-10 md:right-[-14px] lg:right-[-15px]  top-1/2 -translate-y-1/2"
            onClick={goNext}
          >
            <div className="flex items-center cursor-pointer bg-[#F5F5F5] group-hover:bg-PrimaryColor text-PrimaryColor group-hover:text-white justify-center w-10 h-10 rounded-full transition-colors">
              <FaChevronRight className="group-hover:text-white text-PrimaryColor" />
            </div>
          </button>

          {/* Swiper + pagination in full-width relative container */}
          <div className="relative w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "swiper-pagination-bullet custom-bullet",
                bulletActiveClass:
                  "swiper-pagination-bullet-active custom-bullet-active",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation, Autoplay, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
            >
              {doctorsData.map((item: any) => (
                <SwiperSlide key={item?.id}>
                  <TeamCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination container, perfectly centered */}
            <div className="custom-pagination md:hidden absolute bottom-4 left-0 right-0 z-10 text-center" />
          </div>
        </div>
      </div>

      {/* Global style for Swiper bullets */}
      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: #dfe1e7;
          border-radius: 9999px;
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: #8cc640;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}

export default CareTeam;

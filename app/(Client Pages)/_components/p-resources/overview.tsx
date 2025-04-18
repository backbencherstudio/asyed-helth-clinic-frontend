import React from "react";
import Image from "next/image";
import img5 from "@/public/resources/medicine.svg";
import img6 from "@/public/resources/target.svg";

export default function Overview() {
  return (
    <>
      <div className="content md:grid md:grid-cols-12 md:gap-5 sm:mb-16 mb-8">
        <div className="max-w-[670px] col-span-8 gap-8 mb-8 md:mb-0">
          <div className="  text-[#20254b] text-[40px] font-medium leading-[64px]">
            Patient Resources Overview
          </div>
          <div>
            <span className="text-[#4a4c56] text-base font-normal leading-relaxed">
              At{" "}
            </span>
            <span className="text-[#20254b] text-base font-normal leading-relaxed">
              NORTH AVE Immediate Care
            </span>
            <span className="text-[#4a4c56] text-base font-normal leading-relaxed">
              , we are committed to making your healthcare experience as smooth
              and informed as possible. Our Patient Resources page is designed
              to provide you with all the essential information you need before,
              during, and after your visit. From appointment scheduling to
              insurance details, find everything in one place.
            </span>
          </div>
        </div>

        <div className="col-span-4">
          <div className="w-[418px] px-12 py-8 relative bg-[#f6f8fa] rounded-xl inline-flex flex-col justify-start items-start gap-2.5">
            <div className=" flex flex-col justify-start items-start gap-5">
              <div className=" justify-start text-[#20254b] text-2xl font-semibold  leading-[38.40px]">
                Find Your Nearest <br />
                NORTH AVE Location
              </div>
              <div className=" flex flex-col justify-start items-start gap-6">
                <div className="w-[296px] inline-flex justify-start items-center gap-2">
                  <div className="w-[231px] justify-start text-[#1d1f2c] text-lg font-normal leading-normal">
                    350 W North Ave, Addison, IL 60101, USA
                  </div>
                </div>
                <div className=" h-14 w-full pl-6 pr-4 py-1.5 bg-[#303b8d] rounded-[999px] outline-1 outline-offset-[-1px] outline-[#e9e9ea] flex justify-between items-center">
                  <div className="text-white text-base font-normal leading-tight">
                    Use Current Location
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src={img6} alt="Location Icon" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100px] h-[105px] px-[29px] py-[31px] left-[289px] top-[19px] absolute inline-flex justify-start items-center gap-2.5">
              <Image
                src={img5}
                alt="img1"
                className="w-full h-full scale-200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

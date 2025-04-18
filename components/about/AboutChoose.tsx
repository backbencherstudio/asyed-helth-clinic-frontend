"use client";

import { careFeatures } from "@/demoAPI/careData";
import aboutCareImage from "@/public/about/aboutchooseing.svg";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../reusable/CustomButton";

function AboutChoose() {
  return (
    <section className=" py-14 lg:py-[130px] bg-bgthirdColor">
      <div className="max-w-[1200px] mx-auto px-4 xl:px-0">
        <div className="max-w-2xl mb-[42px]">
          <h2 className=" text-headerColor lg:text-[44px] text-[28px] md:text-4xl  font-semibold">
            Benefits of Choosing{" "}
            <span className=" text-PrimaryColor">NORTH AVE</span> Immediate Care{" "}
          </h2>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className=" flex-col flex justify-between">
            {careFeatures.map((item) => (
              <Link
                key={item.title}
                href="#"
                className="flex items-center py-2 gap-2 mb-4 rounded-[4px] px-3 bg-whiteColor "
              >
                <div className=" p-3 rounded-full bg-seconderyColor ">
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    width={23}
                    height={23}
                    className="  "
                  />
                </div>
                <h4 className="text-xl text-headerColor font-[gellixR]">
                  {item?.title}
                </h4>
              </Link>
            ))}
          </div>
          <div>
            <Image
              src={aboutCareImage}
              alt="choose image"
              width={450}
              height={300}
              className=" w-full"
            />
          </div>
          <div>
            <div>
              <h3 className="text-2xl text-headerColor">
                Exceptional Care From Us
              </h3>
              <p className="text-base text-pragraphColor lg:pr-14 mt-3">
                Through every step of our journey, one thing has remained
                constant—our dedication to your health and well-being. Whether
                it's a routine checkup or advanced treatment, we are here to
                ensure you receive the best possible care.
              </p>
            </div>
            <div className=" mt-8">
              <CustomButton>Contact Us</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutChoose;

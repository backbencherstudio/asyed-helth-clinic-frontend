"use client";

import H2 from "@/components/reusable/H2";
import Contact from "@/public/contact/img/c2.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="content mx-4  mb-24">
          <div className=" py-24 text-center ">
            <H2>Contact Us</H2>
            <p className="mt-4 max-w-xl mx-auto text-pragraphColor text-base">
              We'd love to hear from you. Whether you have a question, feedback, or need assistance—feel free to reach out!
            </p>
          </div>
          <div className="bottom flex flex-col gap-12 lg:flex-row justify-between items-stretch px-4 xl:px-0">
            {/* Contact Form */}
            <div className="third w-full lg:max-w-[525px]">
              <h2 className="text-[28px] md:text-[32px] font-medium text-[#031411] mb-2">
                Let’s people talk to us.
              </h2>
              <p className="text-[#4a4c56] text-base mb-8">
                For immediate assistance, please call our emergency hotline. For
                general inquiries or appointment scheduling, feel free to email
                us or visit our website.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#F6F8FA] rounded-2xl"
              >
                <div className="p-4 md:p-6  space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      {...register("fullName", { required: true })}
                      placeholder="Enter your full name"
                      className="w-full h-[52px] px-4 rounded-xl border border-[#e5e7eb] text-[#777980] bg-white text-base focus:outline-none focus:border-[#8cc640] focus:ring-1 focus:ring-[#8cc640]"
                    />
                    <input
                      {...register("phoneNumber", { required: true })}
                      placeholder="Phone Number"
                      className="w-full h-[52px] px-4 rounded-xl border border-[#e5e7eb] text-[#777980] bg-white text-base focus:outline-none focus:border-[#8cc640] focus:ring-1 focus:ring-[#8cc640]"
                    />
                  </div>

                  <input
                    {...register("email", { required: true })}
                    placeholder="Enter your Email"
                    className="w-full h-[52px] px-4 rounded-xl border border-[#e5e7eb] text-[#777980] bg-white text-base focus:outline-none focus:border-[#8cc640] focus:ring-1 focus:ring-[#8cc640]"
                  />

                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Message"
                    className="w-full h-[154px] px-4 py-4 rounded-xl border border-[#e5e7eb] text-[#777980] bg-white text-base resize-none focus:outline-none focus:border-[#8cc640] focus:ring-1 focus:ring-[#8cc640]"
                  />

                  <button
                    type="submit"
                    className="w-full h-[52px] bg-[#8cc640] text-white rounded-lg font-medium hover:bg-[#7db539] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* Contact Info Section */}
            <div className="fourth">
              <div className=" inline-flex flex-col justify-start items-start gap-6">
                <div className="justify-center text-[#031411] text-[40px] font-medium capitalize leading-[48px]">
                  Contact Details
                </div>
                <Image
                  src={Contact}
                  alt="Contact"
                  className=" h-[197px] rounded-xl object-cover"
                />
                <div className="self-stretch px-4 py-[22px] bg-[#f6f8fa] flex flex-col justify-center items-start gap-3">
                  <div className=" inline-flex justify-start items-center gap-3">
                    <div className="p-2.5 bg-[#20254b] rounded-[50px] flex justify-start items-center gap-2.5">
                      <HiOutlineLocationMarker className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 h-[68px] p-2 inline-flex flex-col justify-start items-start gap-1">
                      <div className=" justify-start text-[#1d1f2c] text-lg font-medium leading-snug">
                        Address:
                      </div>
                      <div className="justify-start text-[#4a4c56] text-base font-normal capitalize leading-relaxed">
                        350 W North Ave, Addison, IL 60101, USA
                      </div>
                    </div>
                  </div>
                  <div className=" inline-flex justify-start items-center gap-3">
                    <div className="p-2.5 bg-[#20254b] rounded-[50px] flex justify-start items-center gap-2.5">
                      <BsTelephone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 h-[68px] p-2 inline-flex flex-col justify-start items-start gap-1">
                      <div className=" justify-start text-[#1d1f2c] text-lg font-medium leading-snug">
                        Phone number:
                      </div>
                      <div className="justify-start text-[#4a4c56] text-base font-normal lowercase leading-relaxed">
                        (001) 0000 0000
                      </div>
                    </div>
                  </div>
                  <div className=" inline-flex justify-start items-center gap-3">
                    <div className="p-2.5 bg-[#20254b] rounded-[50px] flex justify-start items-center gap-2.5">
                      <MdOutlineEmail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 p-2 inline-flex flex-col justify-start items-start gap-1">
                      <div className=" justify-start text-[#1d1f2c] text-lg font-medium leading-snug">
                        Email address:
                      </div>
                      <div className="justify-start text-[#4a4c56] text-base font-normal lowercase leading-7">
                        example@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

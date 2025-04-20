"use client";

import call from "@/public/contact/icon/call.svg";
import img1 from "@/public/contact/img/c1.png";
import Contact from "@/public/contact/img/c2.png";
import ContactBanner from "@/public/contact/img/contact.png";
import img5 from "@/public/resources/medicine.svg";
import img6 from "@/public/resources/target.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import Banner from "../_components/banner";
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
      <Banner
        title="Affordable Healthcare Without Insurance"
        description="We believe quality healthcare should be accessible to everyone. Our transparent self-pay pricing ensures you know the costs upfront, without hidden fees."
        image={ContactBanner}
      />
      <div className="container">
        <div className="content mx-4 mt-32 mb-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px] mb-10 md:mb-32">
            <div className="w-full lg:max-w-[409px]">
              <Image
                src={img1}
                alt="Self-Pay Pricing"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-[#20254b] text-2xl md:text-[40px] font-medium leading-tight">
                What Is Self-Pay Pricing?
              </div>
              <div className="text-[#1d1f2c] text-base leading-relaxed">
                In order to address the needs of our patients without insurance and patients with coverage
                limitations, we offer a discount on our standard fees. This discount reflects the lower cost
                involved in billing and collections when a claim does not need to be submitted to a third-party
                payer. In order to qualify, payment needs to be made in FULL before the visit.
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-[#ea3c4d]/10 p-4 rounded-lg">
                  <div className="text-[#ea3c4d] text-base">
                    10% off for all Self-Pay Patients
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 border border-[#8cc640] rounded-full px-4 py-2 w-fit">
                  <Image
                    src={call}
                    alt="Call icon"
                    className="w-6 h-6"
                  />
                  <span className="text-[#8cc640] font-medium">
                    Call for Pricing
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="second flex flex-col lg:flex-row gap-8 lg:gap-[72px] mb-10 md:mb-32 ">
            {/* left */}
            <div className="max-w-[682px] flex flex-col justify-start items-start gap-4">
              <div className=" justify-start text-[#20254b] text-[40px] font-medium leading-[50.40px]">Self-Pay Pricing — Affordable Care for Uninsured Patients</div>
              <div className=" justify-start text-[#4a4c56] text-base font-normal leading-relaxed">We understand that not everyone has insurance, and healthcare costs can be overwhelming. That's why we offer clear, upfront self-pay pricing, so you know exactly what to expect—no hidden fees, no surprises.</div>
              <div className=" justify-start"><span className="text-[#4a4c56] text-base font-normal leading-relaxed">Make payments with cash, debit, Of Credit cards.
                Additional fees may be applicable for certain medical conditions. Check out our convenient </span><span className="text-[#303b8d] text-base font-normal font-['Inter'] leading-relaxed">online bill pay</span><span className="text-[#4a4c56] text-base font-normal leading-relaxed"> options.</span></div>
              <div className="self-stretch p-1.5 bg-[#ea3c4d]/10 inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 justify-start"><span className="text-[#4a4c56] text-base font-normal leading-relaxed"> </span><span className="text-[#ea3c4d] text-base font-normal leading-relaxed">Online bill pay</span><span className="text-[#4a4c56] text-base font-normal leading-relaxed"> </span></div>
              </div>
            </div>
            {/* right */}
            <div className="max-w-[418px] px-12 py-8 relative bg-[#f6f8fa] rounded-xl inline-flex flex-col justify-start items-start gap-2.5">
              <div className=" flex flex-col justify-start items-start gap-5">
                <div className=" justify-start text-[#20254b] text-2xl font-medium leading-[38.40px]">
                  Find Your Nearest <br />
                  NORTH AVE Location
                </div>
                <div className=" flex flex-col justify-start items-start gap-6">
                  <div className="max-w-[296px] inline-flex justify-start items-center gap-2">
                    <div className="max-w-[231px] justify-start text-[#1d1f2c] text-lg font-normal leading-normal">
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
              <div className="max-w-[100px] h-[105px] px-[29px] py-[31px] left-[289px] top-[19px] absolute inline-flex justify-start items-center gap-2.5">
                <Image
                  src={img5}
                  alt="img1"
                  className="w-full h-full scale-200"
                />
              </div>
            </div>
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

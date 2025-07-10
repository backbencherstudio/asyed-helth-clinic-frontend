"use client";

import ContactPage from "@/components/ContactPage";
import call from "@/public/contact/icon/call.svg";
import img1 from "@/public/contact/img/c1.png";
import ContactBanner from "@/public/contact/img/contact.png";
import img5 from "@/public/resources/medicine.svg";
import img6 from "@/public/resources/target.svg";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
                  <Link href="tel:+16309409573" className="text-[#8cc640] font-medium">
                    Call for Pricing
                  </Link>
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
                    <Link href="https://www.google.com/maps/place/350+W+North+Ave,+Addison,+IL+60101,+USA" className="text-white text-base font-normal leading-tight">
                      Use Current Location
                    </Link>
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

          <ContactPage />
        </div>
      </div>
    </>
  );
}

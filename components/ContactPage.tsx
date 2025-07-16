"use client";

import { schedule } from "@/components/ClinicInfo";
import Contact from "@/public/contact/img/c2.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsTelephone } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';


function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
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

                    <div className="bg-[#F1F5FD]/20 border border-[#E0E8F9] mt-5 rounded-xl shadow overflow-hidden h-auto relative p-6 group md:col-span-2 lg:col-span-3">
                        <iframe
                            className="w-full h-[200px] md:h-[300px] rounded-lg  group-hover:grayscale-0 transition-all"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9653724620194!2d-88.00355262454822!3d41.914582163767735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb91ff7fbb3b1%3A0xb3c6bda68f9b98bb!2s350%20W%20North%20Ave%2C%20Addison%2C%20IL%2060101%2C%20USA!5e0!3m2!1sen!2sbd!4v1680163774211!5m2!1sen!2sbd"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className=" pt-8 flex justify-between items-center">
                            <Link href="https://www.google.com/maps/place/350+W+North+Ave,+Addison,+IL+60101,+USA" className=' flex gap-2 text-base text-PrimaryColor font-[metroSB]'><Image src="/logo/location-03.svg" alt='location' width={24} height={24} /> CLICK MAP TO INTERACT</Link>

                            <Link href="https://www.google.com/maps/place/350+W+North+Ave,+Addison,+IL+60101,+USA" className='bg-[#F1F5FD] p-2 rounded-full'><Image src="/logo/zoom.svg" alt='location' width={24} height={24} /></Link>

                        </div>
                    </div>
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
                                        Phone Number:
                                    </div>
                                    <Link href="tel:+16309409573" className="justify-start text-[#4a4c56] text-base font-normal lowercase leading-relaxed">
                                        +1 (630) 940-9573
                                    </Link>
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
                                        Admin@northaveic.com
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=" flex gap-3 items-center">
                                    <div className="p-2.5 bg-[#20254b] rounded-[50px] flex justify-start items-center gap-2.5">
                                        <FaRegCalendarAlt className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="justify-start p-2 text-[#1d1f2c] text-lg font-medium leading-snug">Clinic Hours:</p>
                                    </div>

                                </div>

                            </div>{
                                schedule.map((item) => (
                                    <div key={item?.day} className='flex text-base items-center py-2 border-b border-borderColor gap-2'>
                                        <p className='text-lg text-PrimaryColor'>{item?.day}: </p>
                                        <p className='text-pragraphColor'>{item?.time}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage

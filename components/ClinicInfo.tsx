'use client';
import Image from 'next/image';
import Link from 'next/link';
import H2 from './reusable/H2';

const ClinicInfo = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-14 lg:py-32">
            <div className="text-center mb-12">
                <H2 >Clinic Information</H2>
                <p className="text-pragraphColor leading-[160%] mt-3 max-w-[620px] mx-auto text-base">
                    Use the interactive map below to find the fastest route to our clinic. Save our location on Google Maps for quick access in case of an emergency.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left Card */}
                <div className='bg-[#F8FAFB]  rounded-xl  p-6 lg:col-span-2'>
                    <div className=" flex flex-col items-center ">
                        <Image
                            src="/image/doctor-location.svg"
                            alt="Doctor Illustration"
                            width={320}
                            height={257}
                            className="mb-6"
                        />

                    </div>
                    <div >
                        <div className=' '>
                            <p className=" font-normal flex gap-3  text-PrimaryColor text-xl leading-[28px] font-[metroR] mb-3 pr-10">
                                <span className=" mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                        <path d="M11.6177 20.367C11.1841 20.773 10.6044 21 10.0011 21C9.39785 21 8.81818 20.773 8.38449 20.367C4.41302 16.626 -0.909237 12.4469 1.68627 6.37966C3.08963 3.09916 6.45834 1 10.0011 1C13.5439 1 16.9126 3.09916 18.316 6.37966C20.9082 12.4393 15.599 16.6389 11.6177 20.367Z" stroke="#303B8D" stroke-width="1.5" />
                                        <path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" stroke="#303B8D" stroke-width="1.5" />
                                    </svg></span> 350 W North Ave, Addison, IL 60101,  USA
                            </p>
                            <p className="font-normal flex gap-3  text-PrimaryColor text-xl leading-[28px] font-[metroR] mb-3 pr-20">
                                <span className=" mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="9.99967" cy="10.0002" r="9.16667" stroke="#303B8D" stroke-width="1.5" />
                                        <path d="M10 6.3335V10.0002L11.8333 11.8335" stroke="#303B8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span> Hours: Monday to Saturday 9:00am to 7:00pm
                            </p>
                        </div>


                        <p className=' text-2xl text-seconderyColor  text-center mt-8'>Sundays are closed</p>
                    </div>
                </div>


                {/* Right Map */}
                <div className="bg-[#F1F5FD]/20 border border-[#E0E8F9] rounded-xl shadow overflow-hidden relative p-6 group lg:col-span-3">
                    <iframe
                        className="w-full h-[400px] rounded-lg  group-hover:grayscale-0 transition-all"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9653724620194!2d-88.00355262454822!3d41.914582163767735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb91ff7fbb3b1%3A0xb3c6bda68f9b98bb!2s350%20W%20North%20Ave%2C%20Addison%2C%20IL%2060101%2C%20USA!5e0!3m2!1sen!2sbd!4v1680163774211!5m2!1sen!2sbd"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className=" pt-8 flex justify-between items-center">
                        <Link href="#" className=' flex gap-2 text-base text-PrimaryColor font-[metroSB]'><Image src="/logo/location-03.svg" alt='location' width={24} height={24} /> CLICK MAP TO INTERACT</Link>

                        <Link href="#" className='bg-[#F1F5FD] p-2 rounded-full'><Image src="/logo/zoom.svg" alt='location' width={24} height={24} /></Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicInfo;

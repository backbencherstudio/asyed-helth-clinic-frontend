'use client';
import Image from 'next/image';
import Link from 'next/link';
import H2 from './reusable/H2';

const ClinicInfo = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-14 lg:py-32">
            <div className="text-center mb-12">
                <H2 >Clinic Information</H2>
                <p className="text-pragraphColor  leading-[160%] mt-3 max-w-[620px] mx-auto text-base">
                    Use the interactive map below to find the fastest route to our clinic. Save our location on Google Maps for quick access in case of an emergency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 xl:gap-12">
                {/* Left Card */}
                <div className='bg-[#F8FAFB]  rounded-xl  p-6 md:col-span-2 lg:col-span-2'>
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
                            <p className=" font-normal flex gap-3  text-PrimaryColor text-xl leading-[28px] font-[metroR] mb-3 lg:pr-10">
                                <span className=" mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M17.6569 17.0485C16.7202 17.9851 14.7616 19.9437 13.4138 21.2915C12.6327 22.0726 11.3677 22.073 10.5866 21.2919C9.26234 19.9677 7.34159 18.0469 6.34315 17.0485C3.21895 13.9243 3.21895 8.85894 6.34315 5.73475C9.46734 2.61055 14.5327 2.61055 17.6569 5.73475C20.781 8.85894 20.781 13.9243 17.6569 17.0485Z" stroke="#8CC640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 11.3916C15 13.0485 13.6569 14.3916 12 14.3916C10.3431 14.3916 9 13.0485 9 11.3916C9 9.73475 10.3431 8.3916 12 8.3916C13.6569 8.3916 15 9.73475 15 11.3916Z" stroke="#8CC640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></span> 350 W North Ave, Addison, IL 60101,  USA
                            </p>
                            <p className="font-normal flex gap-3  text-PrimaryColor text-xl leading-[28px] font-[metroR] mb-3 lg:pr-20">
                                <span className=" mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M14.8681 15.1849L13.7531 16.8499C10.9531 15.6799 8.71314 13.4309 7.54214 10.6239L9.20328 9.51885C10.1113 8.91485 10.3882 7.70586 9.83218 6.76686L8.26919 4.12786C7.94419 3.57886 7.30828 3.29586 6.68228 3.42086L6.66519 3.42385C4.10519 3.93585 2.46709 6.50887 3.15909 9.02587C4.79509 14.9779 9.4342 19.6029 15.3732 21.2329C17.8902 21.9239 20.4591 20.2839 20.9711 17.7249C21.0961 17.1009 20.8142 16.4669 20.2682 16.1409L17.6252 14.5649C16.6862 14.0059 15.4761 14.2779 14.8681 15.1849Z" fill="#8CC640" />
                                    </svg></span> Hours: Monday to Saturday 9:00am to 7:00pm
                            </p>
                        </div>


                        <p className=' text-2xl text-seconderyColor  text-center mt-8'>Sundays are closed</p>
                    </div>
                </div>


                {/* Right Map */}
                <div className="bg-[#F1F5FD]/20 border border-[#E0E8F9] rounded-xl shadow overflow-hidden relative p-6 group md:col-span-2 lg:col-span-3">
                    <iframe
                        className="w-full h-[200px] md:h-[400px] rounded-lg  group-hover:grayscale-0 transition-all"
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

import logo from '@/public/logo/footerlogo.svg';
import Image from 'next/image';
import Link from 'next/link';

import SocialShare from './SocialShare';

export default function Footer() {
    return (
        <footer className="bg-[#0B0F2F] text-white py-5 px-4">
            <div className="max-w-[77rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-14 lg:pt-24 ">
                {/* Logo & Description */}
                <div className=' md:col-span-6 lg:col-span-4'>
                    <Image src={logo} alt="North Ave Clinic" width={93} height={93} className="mb-6" />
                    <p className="text-base leading-[150%] mb-4 text-[#F1F5FD] font-[metroR] pr-10">
                        Sodales, ex sit amet accumsan, sollicitudin metus, lacinia arcu ante. Proin dapibus.
                    </p>
                    <div>
                        <SocialShare />
                    </div>
                </div>

                {/* Quick Links */}
                <div className=' md:col-span-6 lg:col-span-2'>
                    <h4 className="text-xl leading-[130%] mb-5">Quick Link</h4>
                    <ul className="space-y-[10px] font-[gellixSB] text-base text-[#E9E9EA]">
                        <li><Link href="#">Why Choose Us</Link></li>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="#">Patient Resources</Link></li>
                        <li><Link href="#">Health News</Link></li>
                        <li><Link href="#">Appointments</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className=' md:col-span-6 lg:col-span-3'>
                    <h4 className="text-xl leading-[130%] mb-5 ">Contact Info</h4>
                    <ul className="space-y-3 text-base">
                        <li className="flex items-start gap-2 font-[gellixSB] leading-[28px] text-base text-[#E9E9EA] pr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M17.6569 17.0485C16.7202 17.9851 14.7616 19.9437 13.4138 21.2915C12.6327 22.0726 11.3677 22.073 10.5866 21.2919C9.26234 19.9677 7.34159 18.0469 6.34315 17.0485C3.21895 13.9243 3.21895 8.85894 6.34315 5.73475C9.46734 2.61055 14.5327 2.61055 17.6569 5.73475C20.781 8.85894 20.781 13.9243 17.6569 17.0485Z" stroke="#8CC640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 11.3916C15 13.0485 13.6569 14.3916 12 14.3916C10.3431 14.3916 9 13.0485 9 11.3916C9 9.73475 10.3431 8.3916 12 8.3916C13.6569 8.3916 15 9.73475 15 11.3916Z" stroke="#8CC640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            350 W North Ave, Addison, IL 60101, USA
                        </li>
                        <li className="flex items-center gap-2 font-[gellixSB] text-base text-[#E9E9EA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M14.8681 15.1849L13.7531 16.8499C10.9531 15.6799 8.71314 13.4309 7.54214 10.6239L9.20328 9.51885C10.1113 8.91485 10.3882 7.70586 9.83218 6.76686L8.26919 4.12786C7.94419 3.57886 7.30828 3.29586 6.68228 3.42086L6.66519 3.42385C4.10519 3.93585 2.46709 6.50887 3.15909 9.02587C4.79509 14.9779 9.4342 19.6029 15.3732 21.2329C17.8902 21.9239 20.4591 20.2839 20.9711 17.7249C21.0961 17.1009 20.8142 16.4669 20.2682 16.1409L17.6252 14.5649C16.6862 14.0059 15.4761 14.2779 14.8681 15.1849Z" fill="#8CC640" />
                            </svg>
                            (001) 0000 0000
                        </li>
                        <li className="flex items-center gap-2 font-[gellixSB] text-base text-[#E9E9EA]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M3 8.3916L10.8906 13.652C11.5624 14.0999 12.4376 14.0999 13.1094 13.652L21 8.3916M5 19.3916H19C20.1046 19.3916 21 18.4962 21 17.3916V7.3916C21 6.28703 20.1046 5.3916 19 5.3916H5C3.89543 5.3916 3 6.28703 3 7.3916V17.3916C3 18.4962 3.89543 19.3916 5 19.3916Z" stroke="#8CC640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            example@gmail.com
                        </li>
                    </ul>
                </div>

                {/* Clinic Map */}
                <div className=' md:col-span-6 lg:col-span-3'>
                    <h4 className="text-xl leading-[130%] mb-5">Clinic Live Map:</h4>
                    <div className='w-full '>
                        <iframe
                            className="w-full h-[200px] rounded-lg  group-hover:grayscale-0 transition-all"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9653724620194!2d-88.00355262454822!3d41.914582163767735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb91ff7fbb3b1%3A0xb3c6bda68f9b98bb!2s350%20W%20North%20Ave%2C%20Addison%2C%20IL%2060101%2C%20USA!5e0!3m2!1sen!2sbd!4v1680163774211!5m2!1sen!2sbd"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>

            <div className=" mt-10 border-t border-[#779AE3]/20 pt-5 max-w-[77rem] mx-auto">
                <p className='text-center text-base text-[#E9E9EA]'>

                    © Copyright 2025 North ave. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

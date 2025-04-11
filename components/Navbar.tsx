'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { SlGlobe } from "react-icons/sl";
const Navbar = () => {
  const pathname = usePathname()
    const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('ENG');
  const navItem = [
    {path:"/" ,name:"Home"},
    {path:"/choose-us" ,name:"Why Choose Us" , arrow:true},
    {path:"/services" ,name:"Services", arrow:true},
    {path:"/patient-resources" ,name:"Patient Resources", arrow:true},
    {path:"/health-news" ,name:"Health News", },
    {path:"/contact-us" ,name:"Contact Us", },
  ]
    const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
    setLangOpen(false);
    // Add any i18n routing logic here if needed
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[89.5rem] mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ">
          <Link href="/" className='pr-[100px]'>
          <Image src="/logo/logo.svg" alt="Logo" width={70} height={70} />
          </Link>
          <nav className="hidden lg:flex space-x-6 text-base font-[gellixM] font-medium">
           
            {navItem.map(item => (
              <Link href={item?.path} key={item.name} className={`${pathname === item.path && "text-seconderyColor"} text-secondHeaderColor hover:text-seconderyColor font-medium flex items-center space-x-2 cursor-pointer transition-colors` }>
                <span>{item.name}</span>
               { item.arrow &&  <FaChevronDown className="text-[10px]" />} 
              </Link>
            ))}
            
          </nav>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-4">
             <div className="relative">
            <div
              className="text-secondHeaderColor flex gap-3 font-[metroSB] bg-[#F1F5FD] cursor-pointer items-center px-4 py-3 rounded-full text-base font-medium  transition"
              onClick={() => setLangOpen(!langOpen)}
            >
               <SlGlobe className=' text-base'/>
              <span>{selectedLang}</span>
              <FaChevronDown className="text-[10px] text-PrimaryColor" />
            </div>
            {langOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border rounded shadow text-sm">
                <button
                  onClick={() => handleLanguageChange('ENG')}
                  className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                >
                  ENG
                </button>
                <button
                  onClick={() => handleLanguageChange('BN')}
                  className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                >
                  BN
                </button>
              </div>
            )}
          </div>
          <button className="text-seconderyColor flex gap-3 font-[metroSB] cursor-pointer items-center border border-seconderyColor px-4 py-3 rounded-full text-base font-medium  transition"><Image src="/logo/credit-card.svg" alt='credit-card' width={18} height={14}/> Pay My Bill</button>
          <button className="text-whiteColor flex gap-3 font-[metroSB] cursor-pointer items-center bg-PrimaryColor px-4 py-3 rounded-full text-base font-medium  transition"><Image src="/logo/booking.svg" alt='credit-card' width={18} height={14}/>Book Appointments</button>
         
        </div>
      </div>
    </header>
  );
};

export default Navbar;
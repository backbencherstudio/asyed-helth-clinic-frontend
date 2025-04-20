'use client';
import { categoysubItems } from '@/demoAPI/serviceMenu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';
import AboutMenu from './about/AboutMenu';
import PateantMenu from './about/PateantMenu';
import ServiceMenu from './services/ServiceMenu';
const Navbar = () => {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('ENG');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isShow, setIsShow] = useState<boolean>(false);
  const [showA, setShowA] = useState<boolean>(false);
  const [showp, setShowp] = useState<boolean>(false);
  const navItem = [
    { path: '/', name: 'Home' },
    { path: '/about-us', name: 'Why Choose Us', arrow: true },
    { path: '/services', name: 'Services', arrow: true },
    { path: '/resources', name: 'Patient Resources', arrow: true },
    { path: '/healthnews', name: 'Health News' },
    { path: '/contact-us', name: 'Contact Us', },
  ];
  const subItems: any = {
    'Why Choose Us': [{ title: 'About Us', path: "about-us" }, { title: 'Accepted Insurance', path: "accepted-insurance" }, { title: 'Self Pay Pricing', path: "self-pay-pricing" }, { title: 'Urgent Care or ER?', path: "urgent-care" }],
    "Services": categoysubItems,
    'Patient Resources': [
      { title: 'Pay My Bill', path: 'pay-my-bill' },
      { title: 'View Lab Results', path: 'lab-results' },
      { title: 'Take Look', path: 'take-look' },
      { title: 'Self-pay Pricing & Payment', path: 'self-pay-pricing-payment' },
    ],
  };
  const isActiveParent = (parentPath: string) => {
    if (pathname === parentPath) return true;

    const menuName = navItem.find(item => item.path === parentPath)?.name || '';
    const subPaths = subItems[menuName];

    if (!subPaths) return false;

    // If the value is an object (like categoysubItems), flatten all inner arrays
    const flatSubPaths = Array.isArray(subPaths)
      ? subPaths
      : Object.values(subPaths).flat();

    return flatSubPaths.some((sub: any) =>
      pathname.startsWith(`/${sub.path}`) || pathname.includes(sub.path)
    );
  };
  const handleToggle = (name: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
    if (name == "Services") {
      setIsShow(!isShow)
      setShowA(false)
      setShowp(false)
    } else if (name == "Why Choose Us") {
      setShowA(!showA)
      setIsShow(false)
      setShowp(false)
    } else if (name === "Patient Resources") {
      setShowp(!showp)
      setIsShow(false)
      setShowA(false)
    }
  }

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };
  return (
    <header className="bg-white relative shadow-sm ">
      <div className="max-w-[89.5rem] mx-auto py-3 lg:py-5 px-4 flex justify-between items-center">
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="pr-6 lg:pr-[30px] 2xl:pr-[100px]">
            <Image src="/logo/logo.svg" alt="Logo" width={60} height={60} className=' w-[52px] lg:w-[60px]' />
          </Link>
          <div className="xl:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-secondHeaderColor text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M26.0003 3.33317H8.66699C7.93099 3.33317 7.33366 2.73584 7.33366 1.99984C7.33366 1.26384 7.93099 0.666504 8.66699 0.666504H26.0003C26.7363 0.666504 27.3337 1.26384 27.3337 1.99984C27.3337 2.73584 26.7363 3.33317 26.0003 3.33317ZM27.3337 9.99984C27.3337 9.26384 26.7363 8.6665 26.0003 8.6665H2.00033C1.26433 8.6665 0.666992 9.26384 0.666992 9.99984C0.666992 10.7358 1.26433 11.3332 2.00033 11.3332H26.0003C26.7363 11.3332 27.3337 10.7358 27.3337 9.99984ZM27.3337 17.9998C27.3337 17.2638 26.7363 16.6665 26.0003 16.6665H14.0003C13.2643 16.6665 12.667 17.2638 12.667 17.9998C12.667 18.7358 13.2643 19.3332 14.0003 19.3332H26.0003C26.7363 19.3332 27.3337 18.7358 27.3337 17.9998Z" fill="#25314C" />
              </svg>
            </button>
          </div>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-3 relative  text-base font-[gellixM] font-medium">
          {navItem.map((item) => (
            <div className='flex items-center space-x-2' key={item?.path}>
              <Link
                href={item.path}
                key={item.name}
                className={`${isActiveParent(item.path) ? 'text-seconderyColor' : 'text-secondHeaderColor'
                  } hover:text-seconderyColor  transition-colors`}
              >
                <span>{item.name}</span>
              </Link>
              <div className=' relative'>
                {item.arrow && <button onClick={() => item.arrow && handleToggle(item.name)} className={`${isActiveParent(item.path) && "text-seconderyColor"} cursor-pointer`}><FaChevronDown className="text-[12px]" /></button>}
              </div>
            </div>
          ))}
        </nav>
        {isShow &&
          <div className=' hidden xl:block shadow-xl bg-white overflow-hidden absolute top-24 left-0 z-50 w-full ]'>
            <ServiceMenu setIsShow={setIsShow} />
          </div>
        }
        {showA && <div className='hidden xl:block absolute top-11 left-[468px] z-50 '>
          <AboutMenu setShowA={setShowA} />
        </div>}
        {showp && <div className=' hidden xl:block absolute top-24 left-[686px] z-50 '>
          <PateantMenu setShowp={setShowp} />
        </div>}
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-2 2xl:space-x-4">
          <div className="relative">
            <div
              className="text-secondHeaderColor flex gap-3 font-[metroSB] bg-[#F1F5FD] cursor-pointer items-center px-4 py-3 rounded-full text-base"
              onClick={() => setLangOpen(!langOpen)}
            >
              <SlGlobe />
              <span>{selectedLang}</span>
              <FaChevronDown className="text-[10px] text-PrimaryColor" />
            </div>
            {langOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border rounded shadow text-sm z-10">
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
          <button className="text-seconderyColor flex gap-2 2xl:gap-3 font-[metroSB] items-center border border-seconderyColor px-4 py-3 rounded-full text-base">
            <Image src="/logo/credit-card.svg" alt="credit-card" width={18} height={14} />
            Pay My Bill
          </button>
          <button className="text-whiteColor flex gap-2 2xl:gap-3 font-[metroSB] items-center bg-PrimaryColor px-4 py-3 rounded-full text-base">
            <Image src="/logo/booking.svg" alt="booking" width={18} height={14} />
            Book Appointments
          </button>
          <div className="xl:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-secondHeaderColor text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M26.0003 3.33317H8.66699C7.93099 3.33317 7.33366 2.73584 7.33366 1.99984C7.33366 1.26384 7.93099 0.666504 8.66699 0.666504H26.0003C26.7363 0.666504 27.3337 1.26384 27.3337 1.99984C27.3337 2.73584 26.7363 3.33317 26.0003 3.33317ZM27.3337 9.99984C27.3337 9.26384 26.7363 8.6665 26.0003 8.6665H2.00033C1.26433 8.6665 0.666992 9.26384 0.666992 9.99984C0.666992 10.7358 1.26433 11.3332 2.00033 11.3332H26.0003C26.7363 11.3332 27.3337 10.7358 27.3337 9.99984ZM27.3337 17.9998C27.3337 17.2638 26.7363 16.6665 26.0003 16.6665H14.0003C13.2643 16.6665 12.667 17.2638 12.667 17.9998C12.667 18.7358 13.2643 19.3332 14.0003 19.3332H26.0003C26.7363 19.3332 27.3337 18.7358 27.3337 17.9998Z" fill="#25314C" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav - Slide from Right */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <div className="bg-white w-[85%] md:w-[50%] lg:w-[40%] h-full p-6 overflow-y-auto transform transition-transform duration-300 translate-x-0">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-600 text-2xl">
                <FaTimes />
              </button>
            </div>
            {/* Nav Items */}
            <div className="space-y-4">
              {navItem.map((item) => (
                <div key={item.name} className="border-b pb-2">
                  <Link href={item.path}
                    className={`w-full text-left text-base font-[gellixM] flex justify-between items-center ${pathname === item.path ? 'text-seconderyColor' : 'text-secondHeaderColor'}`}>
                    <span onClick={() => setMobileMenuOpen(false)}>{item.name}</span>
                    {item.arrow && (
                      <FaChevronDown onClick={() => item.arrow && handleToggle(item.name)} className={`text-xs transition-transform ${openDropdowns[item.name] ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  {openDropdowns[item.name] && (
                    <div className="mt-2 pl-4 space-y-3">
                      {item.name === 'Services' ? (
                        Object.entries(categoysubItems).map(([category, links]) => (
                          <div key={category}>
                            <h3 className="font-semibold text-lg text-[#1D1F2C] mb-2">{category}</h3>
                            <ul className="space-y-2">
                              {links.map((link) => (
                                <li key={link.path}>
                                  <Link href={`/services/${link.path}`} onClick={() => setMobileMenuOpen(false)}>
                                    <span className="text-base text-[#1D1F2C] hover:text-seconderyColor transition">
                                      {link.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <ul>
                          {
                            subItems[item.name]?.map((sub, i) => (
                              <li key={i}>
                                <Link href={`/${sub.path}`} onClick={() => setMobileMenuOpen(false)}>
                                  <span className="block text-base text-[#1D1F2C] hover:text-seconderyColor transition">
                                    {sub.title}
                                  </span>
                                </Link>
                              </li>
                            ))
                          }
                        </ul>

                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="mt-6 space-y-3 lg:hidden">
              <button className="w-full flex justify-center items-center gap-2 border border-seconderyColor text-seconderyColor px-4 py-3 rounded-full text-base font-[metroSB]">
                <Image src="/logo/credit-card.svg" alt="credit-card" width={18} height={14} />
                Pay My Bill
              </button>
              <button className="w-full flex justify-center items-center gap-2 bg-PrimaryColor text-white px-4 py-3 rounded-full text-base font-[metroSB]">
                <Image src="/logo/booking.svg" alt="booking" width={18} height={14} />
                Book Appointments
              </button>
            </div>
            {/* Language */}
            <div className="mt-6 relative lg:hidden">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-full bg-[#F1F5FD] text-secondHeaderColor"
              >
                <div className="flex gap-2 items-center">
                  <SlGlobe />
                  <span>{selectedLang}</span>
                </div>
                <FaChevronDown className="text-xs text-PrimaryColor" />
              </button>
              {langOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded shadow text-sm z-20">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

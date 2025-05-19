"use client";
import { categoysubItems } from "@/demoAPI/serviceMenu";
import gsap from "gsap";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import AboutMenu from "./about/AboutMenu";
import PateantMenu from "./about/PateantMenu";
import MobileServiceAccordion from "./services/MobileServiceAccordion ";
import ServiceMenu from "./services/ServiceMenu";
const Navbar = () => {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [isShow, setIsShow] = useState<boolean>(false);
  const [showA, setShowA] = useState<boolean>(false);
  const [showp, setShowp] = useState<boolean>(false);
  
  const serviceMenuRef = useRef(null);
const aboutMenuRef = useRef(null);
const patientMenuRef = useRef(null);
  const navItem = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "Why Choose Us", arrow: true },
    { path: "/services", name: "Services", arrow: true },
    { path: "/resources", name: "Patient Resources", arrow: true },
    { path: "/healthnews", name: "Health News" },
    { path: "/contact-us", name: "Contact Us" },
  ];
  const subItems: any = {
    "Why Choose Us": [
      { title: "About Us", path: "about-us" },
      { title: "Accepted Insurance", path: "accepted-insurance" },
      { title: "Self Pay Pricing", path: "self-pay-pricing" },
      { title: "Urgent Care or ER?", path: "urgent-care" },
    ],
    Services: categoysubItems,
    "Patient Resources": [
      { title: "Pay My Bill", path: "pay-my-bill" },
      { title: "View Lab Results", path: "lab-results" },
      { title: "Take Look", path: "take-look" },
      { title: "Self-pay Pricing & Payment", path: "self-pay-pricing-payment" },
    ],
  };
  const isActiveParent = (parentPath: string) => {
    if (pathname === parentPath) return true;

    const menuName =
      navItem.find((item) => item.path === parentPath)?.name || "";
    const subPaths = subItems[menuName];

    if (!subPaths) return false;

    // If the value is an object (like categoysubItems), flatten all inner arrays
    const flatSubPaths = Array.isArray(subPaths)
      ? subPaths
      : Object.values(subPaths).flat();

    return flatSubPaths.some(
      (sub: any) =>
        pathname.startsWith(`/${sub.path}`) || pathname.includes(sub.path)
    );
  };
  const handleToggle = (name: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
    if (name == "Services") {
      setIsShow(!isShow);
      setShowA(false);
      setShowp(false);
    } else if (name == "Why Choose Us") {
      setShowA(!showA);
      setIsShow(false);
      setShowp(false);
    } else if (name === "Patient Resources") {
      setShowp(!showp);
      setIsShow(false);
      setShowA(false);
    }
  };
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  useEffect(() => {
    if (isShow && serviceMenuRef.current) {
      gsap.fromTo(
        serviceMenuRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [isShow]);
  
  useEffect(() => {
    if (showA && aboutMenuRef.current) {
      gsap.fromTo(
        aboutMenuRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [showA]);
  
  useEffect(() => {
    if (showp && patientMenuRef.current) {
      gsap.fromTo(
        patientMenuRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [showp]);
  return (
    <header className="bg-white relative shadow-sm ">
      <div className="max-w-[89.5rem] mx-auto py-3 lg:py-5 px-4 flex justify-between items-center">
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="pr-6 lg:pr-[30px] 2xl:pr-[100px]">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className=" w-[52px] lg:w-[60px]"
            />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-secondHeaderColor text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
              >
                <path
                  d="M26.0003 3.33317H8.66699C7.93099 3.33317 7.33366 2.73584 7.33366 1.99984C7.33366 1.26384 7.93099 0.666504 8.66699 0.666504H26.0003C26.7363 0.666504 27.3337 1.26384 27.3337 1.99984C27.3337 2.73584 26.7363 3.33317 26.0003 3.33317ZM27.3337 9.99984C27.3337 9.26384 26.7363 8.6665 26.0003 8.6665H2.00033C1.26433 8.6665 0.666992 9.26384 0.666992 9.99984C0.666992 10.7358 1.26433 11.3332 2.00033 11.3332H26.0003C26.7363 11.3332 27.3337 10.7358 27.3337 9.99984ZM27.3337 17.9998C27.3337 17.2638 26.7363 16.6665 26.0003 16.6665H14.0003C13.2643 16.6665 12.667 17.2638 12.667 17.9998C12.667 18.7358 13.2643 19.3332 14.0003 19.3332H26.0003C26.7363 19.3332 27.3337 18.7358 27.3337 17.9998Z"
                  fill="#25314C"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-3 2xl:space-x-5 relative  text-base font-[gellixM] font-medium">
          {/* Home */}
          <div
            className="flex items-center space-x-2"
            onMouseEnter={() => {
              setShowA(false);
              setIsShow(false);
              setShowp(false);
            }}
          >
            <Link
              href="/"
              className={`${
                isActiveParent("/")
                  ? "text-seconderyColor"
                  : "text-secondHeaderColor"
              } hover:text-seconderyColor transition-colors`}
            >
              <span>Home</span>
            </Link>
          </div>

          {/* Why Choose Us */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              setShowA(true);
              setIsShow(false);
              setShowp(false);
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => {
                setShowA(false);
              }, 200);
            }}
          >
            <div className="flex items-center group space-x-2">
              <Link
                href="/about-us"
                className={`${
                  isActiveParent("/about-us")
                    ? "text-seconderyColor"
                    : "text-secondHeaderColor"
                } hover:text-seconderyColor transition-colors`}
              >
                <span>Why Choose Us</span>
              </Link>
              <button className="cursor-pointer">
                <FaChevronDown className={`${
                  isActiveParent("/about-us") ? "text-seconderyColor": "text-secondHeaderColor" } group-hover:text-seconderyColor text-[12px]`}/>
              </button>
            </div>
            {showA && (
              <div  ref={aboutMenuRef} className="hidden xl:block absolute top-15 -left-10 z-50">
                <AboutMenu setShowA={setShowA} />
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              setIsShow(true);
              setShowA(false);
              setShowp(false);
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => {
                setIsShow(false);
              }, 200);
            }}
          >
            <div className="flex items-center group space-x-2">
              <Link
                href="/services"
                className={`${
                  isActiveParent("/services")
                    ? "text-seconderyColor"
                    : "text-secondHeaderColor"
                } hover:text-seconderyColor transition-colors`}
              >
                <span>Services</span>
              </Link>
              <button className="cursor-pointer">
                <FaChevronDown className={`${
                  isActiveParent("/services") ? "text-seconderyColor": "text-secondHeaderColor" } group-hover:text-seconderyColor text-[12px]`} />
              </button>
            </div>
          </div>

          {/* Patient Resources */}
          {/* Patient Resources */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current); // stop any existing timeout
              setShowp(true);
              setShowA(false);
              setIsShow(false);
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => {
                setShowp(false);
              }, 200); // delay 200ms
            }}
          >
            {/* Menu trigger */}
            <div className="flex group items-center space-x-2">
              <Link
                href="/resources"
                className={`${
                  isActiveParent("/resources")
                    ? "text-seconderyColor"
                    : "text-secondHeaderColor"
                } hover:text-seconderyColor transition-colors`}
              >
                <span>Patient Resources</span>
              </Link>
              <button className="cursor-pointer">
                <FaChevronDown className={`${
                  isActiveParent("/resources") ? "text-seconderyColor": "text-secondHeaderColor" } group-hover:text-seconderyColor text-[12px]`} />
              </button>
            </div>

            {/* Dropdown */}
            {showp && (
              <div
              ref={patientMenuRef}
                className="absolute top-15 -left-14 z-50"
                onMouseEnter={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current); // user hovered in dropdown
                }}
                onMouseLeave={() => {
                  setShowp(false); // user left dropdown
                }}
              >
                <PateantMenu setShowp={setShowp} />
              </div>
            )}
          </div>

          {/* Health News */}
          <div
            className="flex items-center space-x-2"
            onMouseEnter={() => {
              setShowA(false);
              setIsShow(false);
              setShowp(false);
            }}
          >
            <Link
              href="/healthnews"
              className={`${
                isActiveParent("/healthnews")
                  ? "text-seconderyColor"
                  : "text-secondHeaderColor"
              } hover:text-seconderyColor transition-colors`}
            >
              <span>Health News</span>
            </Link>
          </div>

          {/* Contact Us */}
          <div
            className="flex items-center space-x-2"
            onMouseEnter={() => {
              setShowA(false);
              setIsShow(false);
              setShowp(false);
            }}
          >
            <Link
              href="/contact-us"
              className={`${
                isActiveParent("/contact-us")
                  ? "text-seconderyColor"
                  : "text-secondHeaderColor"
              } hover:text-seconderyColor transition-colors`}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </nav>

        {isShow && (
          <div
          ref={serviceMenuRef}
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
              setIsShow(true);
              setShowA(false);
              setShowp(false);
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => {
                setIsShow(false);
              }, 200);
            }}
            className=" hidden xl:block overflow-hidden absolute top-24 left-0 z-50 w-full "
          >
            <ServiceMenu setIsShow={setIsShow} />
          </div>
        )}

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
                  onClick={() => handleLanguageChange("ENG")}
                  className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                >
                  ENG
                </button>
                <button
                  onClick={() => handleLanguageChange("BN")}
                  className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                >
                  BN
                </button>
              </div>
            )}
          </div>
          <button className="text-seconderyColor flex gap-2 2xl:gap-3 font-[metroSB] items-center border border-seconderyColor px-4 py-3 rounded-full text-base">
            <Image
              src="/logo/credit-card.svg"
              alt="credit-card"
              width={18}
              height={14}
            />
            Pay My Bill
          </button>
          <button className="text-whiteColor flex gap-2 2xl:gap-3 font-[metroSB] items-center bg-PrimaryColor px-4 py-3 rounded-full text-base">
            <Image
              src="/logo/booking.svg"
              alt="booking"
              width={18}
              height={14}
            />
            Book Appointments
          </button>
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-secondHeaderColor text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
              >
                <path
                  d="M26.0003 3.33317H8.66699C7.93099 3.33317 7.33366 2.73584 7.33366 1.99984C7.33366 1.26384 7.93099 0.666504 8.66699 0.666504H26.0003C26.7363 0.666504 27.3337 1.26384 27.3337 1.99984C27.3337 2.73584 26.7363 3.33317 26.0003 3.33317ZM27.3337 9.99984C27.3337 9.26384 26.7363 8.6665 26.0003 8.6665H2.00033C1.26433 8.6665 0.666992 9.26384 0.666992 9.99984C0.666992 10.7358 1.26433 11.3332 2.00033 11.3332H26.0003C26.7363 11.3332 27.3337 10.7358 27.3337 9.99984ZM27.3337 17.9998C27.3337 17.2638 26.7363 16.6665 26.0003 16.6665H14.0003C13.2643 16.6665 12.667 17.2638 12.667 17.9998C12.667 18.7358 13.2643 19.3332 14.0003 19.3332H26.0003C26.7363 19.3332 27.3337 18.7358 27.3337 17.9998Z"
                  fill="#25314C"
                />
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
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            {/* Nav Items */}
            <div className="space-y-4">
              {navItem.map((item) => (
                <div key={item.name} className="border-b pb-2">
                  <Link
                    href={item.path}
                    className={`w-full text-left text-base font-[gellixM] flex justify-between items-center ${
                      pathname === item.path
                        ? "text-seconderyColor"
                        : "text-secondHeaderColor"
                    }`}
                  >
                    <span onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </span>
                    {item.arrow && (
                      <FaChevronDown
                        onClick={() => item.arrow && handleToggle(item.name)}
                        className={`text-xs transition-transform ${
                          openDropdowns[item.name] ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                  {openDropdowns[item.name] && (
                    <div className="mt-2 pl-4 space-y-3">
                      {item.name === "Services" ? (
  <MobileServiceAccordion setMobileMenuOpen={setMobileMenuOpen} />
) : (
                        <ul>
                          {subItems[item.name]?.map((sub, i) => (
                            <li key={i}>
                              <Link
                                href={`/${sub.path}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="block text-base text-[#1D1F2C] hover:text-seconderyColor transition">
                                  {sub.title}
                                </span>
                              </Link>
                            </li>
                          ))}
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
                <Image
                  src="/logo/credit-card.svg"
                  alt="credit-card"
                  width={18}
                  height={14}
                />
                Pay My Bill
              </button>
              <button className="w-full flex justify-center items-center gap-2 bg-PrimaryColor text-white px-4 py-3 rounded-full text-base font-[metroSB]">
                <Image
                  src="/logo/booking.svg"
                  alt="booking"
                  width={18}
                  height={14}
                />
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
                    onClick={() => handleLanguageChange("ENG")}
                    className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                  >
                    ENG
                  </button>
                  <button
                    onClick={() => handleLanguageChange("BN")}
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

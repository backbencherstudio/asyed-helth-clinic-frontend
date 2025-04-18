'use client'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import icon1 from '../../../public/services/icon/10.svg'
import icon2 from '../../../public/services/icon/9.svg'
import icon3 from '../../../public/services/icon/8.svg'        
import icon4 from '../../../public/services/icon/7.svg'
import icon5 from '../../../public/services/icon/6.svg'
import icon6 from '../../../public/services/icon/5.svg'
import icon7 from '../../../public/services/icon/4.svg'
import icon8 from '../../../public/services/icon/3.svg'
import icon9 from '../../../public/services/icon/2.svg'
import icon10 from '../../../public/services/icon/1.svg'
import { FaArrowUp } from "react-icons/fa";
import img1 from "../../../public/services/image/1.png";
import img2 from "../../../public/services/image/2.png";
import img3 from "../../../public/services/image/3.png";
import img4 from "../../../public/services/image/4.png";
import img5 from "../../../public/services/image/5.png";
import img6 from "../../../public/services/image/6.png";
import img7 from "../../../public/services/image/7.png";
import img8 from "../../../public/services/image/8.png";
import img9 from "../../../public/services/image/9.png";
import img10 from "../../../public/services/image/10.png";  
import img11 from "../../../public/services/image/11.png";
import img12 from "../../../public/services/image/12.png";
import img13 from "../../../public/services/image/13.png";
import img14 from "../../../public/services/image/14.png";
import img15 from "../../../public/services/image/15.png";    
import img16 from "../../../public/services/image/16.png";
import img17 from "../../../public/services/image/17.png";
import img18 from "../../../public/services/image/18.png";
import img19 from "../../../public/services/image/19.png";
import img20 from "../../../public/services/image/20.png";  
import img21 from "../../../public/services/image/21.png";
import img22 from "../../../public/services/image/22.png";
import img23 from "../../../public/services/image/23.png";
import img24 from "../../../public/services/image/24.png";
import img25 from "../../../public/services/image/25.png";
import img26 from "../../../public/services/image/26.png"; 
import img28 from "../../../public/services/image/28.png";       
import img29 from "../../../public/services/image/29.png";
import img30 from "../../../public/services/image/30.png";
import img31 from "../../../public/services/image/31.png";
import img32 from "../../../public/services/image/32.png";
import img33 from "../../../public/services/image/33.png";
import img34 from "../../../public/services/image/34.png";
import img35 from "../../../public/services/image/35.png";
import img36 from "../../../public/services/image/36.png";
import img37 from "../../../public/services/image/37.png";
import img38 from "../../../public/services/image/38.png";
import img39 from "../../../public/services/image/39.png";
import img40 from "../../../public/services/image/40.png";
import img41 from "../../../public/services/image/41.png";
import img42 from "../../../public/services/image/42.png";
import DiabetesWellnessCheck from '@/app/(Client Pages)/_components/care-services/DiabetesWellnessCheck';
import ServiceBanner from '@/app/(Client Pages)/_components/care-services/ServiceBanner';
import serviceBanner from "@/public/banner/serviceBanner.png";

const services = [
  { name: 'Common Illnesses', icon: icon1 },
  { name: 'Injury Care', icon: icon2 },
  { name: 'Medical Procedures', icon: icon3 },
  { name: 'Kids\' Health', icon: icon4 },
  { name: 'Physical Exams', icon: icon5 },
  { name: 'Vaccines & Shots', icon: icon6 },
  { name: 'Diabetes Wellness Check', icon: icon8 },
  { name: 'Skin & Rashes', icon: icon7 },
  { name: 'Sexual Health', icon: icon9 },
  { name: 'IV Therapy', icon: icon10 }
];

const cardData = [
  {
    image: img1,
    title: "Cold & Cough",
    description: "Relief starts with expert care for seasonal colds and coughs.",
    category: "Common Illnesses"
  },
  {
    image: img2,
    title: "Fracture Care",
    description: "Expert treatment for bone fractures and injuries.",
    category: "Injury Care"
  },
  {
    image: img3,
    title: "Minor Surgery",
    description: "Professional care for minor surgical procedures.",
    category: "Medical Procedures"
  },
  {
    image: img4,
    title: "Pediatric Care",
    description: "Specialized healthcare for children of all ages.",
    category: "Kids' Health"
  },
  {
    image: img5,
    title: "Women's Wellness",
    description: "Comprehensive healthcare services for women.",
    category: "Women's Health"
  },
  {
    image: img6,
    title: "Men's Health Check",
    description: "Complete health screening and care for men.",
    category: "Men's Health"
  },
  {
    image: img7,
    title: "Elderly Care",
    description: "Dedicated healthcare services for seniors.",
    category: "Senior Care"
  },
  {
    image: img8,
    title: "Health Screening",
    description: "Comprehensive preventive health check-ups.",
    category: "Preventive Care"
  },
  {
    image: img9,
    title: "Workplace Health",
    description: "Occupational health services and assessments.",
    category: "Occupational Health"
  },
  {
    image: img10,
    title: "Travel Health",
    description: "Medical services for international travelers.",
    category: "Travel Medicine"
  },
  {
    image: img11,
    title: "Flu Treatment",
    description: "Expert care for influenza and related symptoms.",
    category: "Common Illnesses"
  },
  {
    image: img12,
    title: "Wound Care",
    description: "Professional treatment for wounds and injuries.",
    category: "Injury Care"
  },
  {
    image: img13,
    title: "Blood Tests",
    description: "Comprehensive blood testing and analysis.",
    category: "Medical Procedures"
  },
  {
    image: img14,
    title: "Pediatric Vaccines",
    description: "Complete vaccination programs for children.",
    category: "Kids' Health"
  },
  {
    image: img15,
    title: "Prenatal Care",
    description: "Comprehensive care for expecting mothers.",
    category: "Women's Health"
  },
  {
    image: img16,
    title: "Prostate Health",
    description: "Specialized care for men's prostate health.",
    category: "Men's Health"
  },
  {
    image: img17,
    title: "Arthritis Care",
    description: "Specialized treatment for senior joint health.",
    category: "Senior Care"
  },
  {
    image: img18,
    title: "Annual Check-up",
    description: "Thorough annual health examinations.",
    category: "Preventive Care"
  },
  {
    image: img19,
    title: "Work Injuries",
    description: "Treatment for workplace-related injuries.",
    category: "Occupational Health"
  },
  {
    image: img20,
    title: "Travel Vaccines",
    description: "Pre-travel vaccination services.",
    category: "Travel Medicine"
  },
  {
    image: img21,
    title: "Sinus Infections",
    description: "Treatment for acute and chronic sinusitis.",
    category: "Common Illnesses"
  },
  {
    image: img22,
    title: "Sports Injuries",
    description: "Specialized care for athletic injuries.",
    category: "Injury Care"
  },
  {
    image: img23,
    title: "X-Ray Services",
    description: "Advanced diagnostic imaging services.",
    category: "Medical Procedures"
  },
  {
    image: img24,
    title: "Child Psychology",
    description: "Mental health support for children.",
    category: "Kids' Health"
  },
  {
    image: img25,
    title: "Gynecology",
    description: "Comprehensive women's health services.",
    category: "Women's Health"
  },
  {
    image: img26,
    title: "Men's Nutrition",
    description: "Specialized nutritional guidance for men.",
    category: "Men's Health"
  },
  {
    image: img28,
    title: "Cancer Screening",
    description: "Early detection and prevention services.",
    category: "Preventive Care"
  },
  {
    image: img29,
    title: "Ergonomic Assessment",
    description: "Workplace ergonomic evaluations.",
    category: "Occupational Health"
  },
  {
    image: img30,
    title: "Travel Consultation",
    description: "Pre-travel health advisory services.",
    category: "Travel Medicine"
  },
  {
    image: img31,
    title: "Allergies",
    description: "Treatment for seasonal and chronic allergies.",
    category: "Common Illnesses"
  },
  {
    image: img32,
    title: "Physical Therapy",
    description: "Rehabilitation services for injuries.",
    category: "Injury Care"
  },
  {
    image: img33,
    title: "EKG Testing",
    description: "Heart health monitoring and testing.",
    category: "Medical Procedures"
  },
  {
    image: img34,
    title: "Child Nutrition",
    description: "Dietary guidance for growing children.",
    category: "Kids' Health"
  },
  {
    image: img35,
    title: "Mammography",
    description: "Breast cancer screening services.",
    category: "Women's Health"
  },
  {
    image: img36,
    title: "Testosterone Health",
    description: "Hormone health services for men.",
    category: "Men's Health"
  },
  {
    image: img37,
    title: "Fall Prevention",
    description: "Safety assessments for seniors.",
    category: "Senior Care"
  },
  {
    image: img38,
    title: "Immunizations",
    description: "Complete vaccination services.",
    category: "Preventive Care"
  },
  {
    image: img39,
    title: "Safety Training",
    description: "Workplace safety education.",
    category: "Occupational Health"
  },
  {
    image: img40,
    title: "Travel Insurance",
    description: "Medical coverage for travelers.",
    category: "Travel Medicine"
  },
  {
    image: img41,
    title: "Respiratory Care",
    description: "Treatment for breathing difficulties.",
    category: "Common Illnesses"
  },
  {
    image: img42,
    title: "Emergency Care",
    description: "Immediate care for urgent injuries.",
    category: "Injury Care"
  }
];

export default function Services() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [filteredCards, setFilteredCards] = React.useState(cardData);
  const [showDiabetesWellness, setShowDiabetesWellness] = React.useState(false);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredCards(cardData);
      setShowDiabetesWellness(false);
    } else if (category === 'Diabetes Wellness Check') {
      router.push('/services/diabetes-wellness-check');
    } else {
      setFilteredCards(cardData.filter(card => card.category === category));
      setShowDiabetesWellness(false);
    }
  };

  return (
    <main>
      <ServiceBanner 
        image={serviceBanner}
        title="Comprehensive Healthcare Services"
        description="Expert medical care for all your health needs, available when you need it most."
      />

      <div className="max-w-[907px] flex flex-col justify-center items-center gap-4 mx-auto mt-10 md:mt-20 mb-4 md:mb-6 px-4 md:px-0 lg:mt-20 lg:mb-[74px] overscroll-none">
        <div className="text-center text-[#20254b] text-2xl md:text-3xl lg:text-[40px] font-semibold">Your health is our commitment</div>
        <div className="text-center w-full">
          <span className="text-[#4a4c56] text-sm md:text-base font-normal leading-relaxed">At </span>
          <span className="text-[#20254b] text-sm md:text-base font-normal leading-relaxed">North Ave Immediate Care,</span>
          <span className="text-[#4a4c56] text-sm md:text-base font-normal leading-relaxed"> we believe that quality healthcare should be accessible, personalized, and compassionate. Our wide range of services ensures that every patient receives the right care at the right time. Whether you need a routine checkup, urgent treatment, or specialized care, we're here for you.</span>
        </div>
      </div>

      <div className="container">
        <div className="card-section mx-2">
          <div className="content grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="category px-3 sm:px-0 mx-auto col-span-1 w-full">
              <div className="topbar">
                <div className=" text-[#20254b] text-2xl font-medium pb-3">Our Care Services</div>
                <div className="flex items-center gap-2 relative">
                  <IoSearchOutline className="text-gray-500 w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" name="" id="" placeholder='Search for a service' className='border border-[#E9E9EA] rounded-md py-4 w-full px-3 pl-10 text-base mb-1.5' />
                </div>
                <div className="justify-start text-[#777980] text-base font-normal leading-tight pb-5 border-b border-[#ECEFF3]">Choose one option below:</div>
              </div>
              <div className="options">
                <div className="category2">
                  <div className="All-list my-7">
                    <div className="justify-start text-[#20254b] text-xl font-normal pb-4">View All Services</div>
                    <button 
                      key="all"
                      onClick={() => handleCategoryClick('All')}
                      className={`justify-start text-[#1d1f2c] hover:text-[#77B032] my-0.5 text-lg font-normal gap-2 flex items-center py-3 border-b border-[#ECEFF3] w-full group transition-all duration-200 hover:pl-3
                        ${activeCategory === 'All' ? 'bg-[#77B032]/10 pl-3 text-[#77B032] rounded-2xl' : ''}`}
                    >
                      All Services
                    </button>
                    {services.map((service, index) => (
                      <button 
                        key={index}
                        onClick={() => handleCategoryClick(service.name)}
                        className={`justify-start my-0.5 text-lg font-normal gap-2 flex items-center py-3 border-b border-[#ECEFF3] w-full group transition-all duration-200 hover:pl-3
                          ${activeCategory === service.name 
                            ? 'bg-[#77B032]/10 pl-3 text-[#77B032] rounded-2xl' 
                            : 'text-[#1d1f2c] hover:text-[#77B032]'
                          }`}
                      >
                        <Image 
                          src={service.icon} 
                          alt={service.name}
                          className={`transition-all duration-200 ${
                            activeCategory === service.name
                              ? '[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(95%)_saturate(401%)_hue-rotate(50deg)_brightness(93%)_contrast(87%)]'
                              : 'group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(95%)_saturate(401%)_hue-rotate(50deg)_brightness(93%)_contrast(87%)]'
                          }`}
                        />
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="all-cards col-span-1 sm:col-span-2 md:col-span-3 gap-4 auto-rows-[320px] w-full ">
              {showDiabetesWellness ? (
                <DiabetesWellnessCheck />
              ) : (
                <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCards.map((card, index) => (
                    <div 
                      key={index} 
                      data-category={card.category} 
                      className="card bg-[#F7F9FD] rounded-2xl group h-[343px] sm:h-80 w-[340px] sm:w-72 cursor-pointer transition-all duration-300 hover:shadow-lg mx-auto"
                      onClick={() => {
                        router.push(`/services/${card.title.toLowerCase().replace(/[&\s]+/g, '-')}?title=${encodeURIComponent(card.title)}&image=${encodeURIComponent(card.image.src)}&description=${encodeURIComponent(card.description)}`);
                      }}
                    >
                      <div className="p-4 w-full h-full flex flex-col">
                        <div className="card-image h-[152px] w-auto rounded-[12px] bg-[#3d3d3d] mb-3">
                          <Image src={card.image} alt={card.title} className='w-full h-full object-cover bg-cover rounded-[12px]'/>
                        </div>
                        <div className="card-content flex-grow">
                          <div className="text-[#20254b] text-xl font-semibold leading-loose mb-1.5">{card.title}</div>
                          <div className="text-[#4a4c56] text-base font-normal leading-tight mb-3">{card.description}</div>
                        </div>
                        <div className="h-8 inline-flex justify-start items-center">
                          <div className="group-hover:text-[#303b8d] group-hover:underline text-[#777980] text-base font-semibold pr-1">Learn More</div>
                          <FaArrowUp className='group-hover:text-[#303b8d] text-[#777980] rotate-45' />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="grid-cols-0"></div>
            <div className="grid-cols-0"></div>

            <div className="items"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

'use client'
import Banner from '@/app/(Client Pages)/_components/banner';
import { categoysubItems } from '@/demoAPI/serviceMenu';
import Bannerimg from "@/public/banner/serviceBanner.png";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { cardData, services } from './serviceData';

export default function Services() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

 

  const filteredCards = cardData.filter(card => {
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' ||
      (card.category && card.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Banner 
        image={Bannerimg}
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
                  <input type="text" name="" id="" placeholder='Search for a service' className='border border-[#E9E9EA] rounded-md py-4 w-full px-3 pl-10 text-base mb-1.5' 
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
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
                        ${selectedCategory === 'All' ? 'bg-[#77B032]/10 pl-3 text-[#77B032] rounded-2xl' : ''}`}
                    >
                      All Services
                    </button>
                    {services.map((service, index) => (
                      <div key={index}>
                        <button 
                          onClick={() => handleCategoryClick(service.name)}
                          className={`justify-start my-0.5 text-lg font-normal gap-2 flex items-center py-3 border-b border-[#ECEFF3] w-full group transition-all duration-200 hover:pl-3
                            ${selectedCategory === service.name 
                              ? 'bg-[#77B032]/10 pl-3 text-[#77B032] rounded-2xl' 
                              : 'text-[#1d1f2c] hover:text-[#77B032]'
                            }`}
                        >
                          <Image 
                            src={service.icon} 
                            alt={service.name}
                            className={`transition-all duration-200 ${
                              selectedCategory === service.name
                                ? '[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(95%)_saturate(401%)_hue-rotate(50deg)_brightness(93%)_contrast(87%)]'
                                : 'group-hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(95%)_saturate(401%)_hue-rotate(50deg)_brightness(93%)_contrast(87%)]'
                            }`}
                          />
                          {service.name}
                        </button>
                        {selectedCategory === service.name && categoysubItems[service.name] && (
                          <div className="pl-8">
                            {categoysubItems[service.name].map((item, subIndex) => (
                              <Link href={`/services/${item?.path}`}
                                key={subIndex}
                                className="text-[#4a4c56] hover:text-[#77B032] text-base font-normal w-full text-left py-2 block transition-all duration-200 hover:pl-3"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="all-cards col-span-1 sm:col-span-2 md:col-span-3 gap-4 auto-rows-[320px] w-full ">
              <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCards.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 text-lg py-10">No services found</div>
                ) : (
                  filteredCards?.map((card, index) => (
                    <Link 
                      key={index} 
                      href={`/services/${card.slug}`}
                      data-category={card.category} 
                      className="card bg-[#F7F9FD] rounded-2xl group h-[343px] sm:h-80 w-[340px] sm:w-72 transition-all duration-300 hover:shadow-lg mx-auto"
                    >
                      <div className="p-4 w-full h-full flex flex-col">
                        <div className="card-image h-[152px] w-auto rounded-[12px] bg-[#3d3d3d] mb-3">
                         {card.image   && <Image src={card.image} alt={card.title}  width={400} height={400} className='w-full h-full object-cover bg-cover rounded-[12px]'/>}
                        </div>
                        <div className="card-content flex-grow">
                          <div className="text-[#20254b] text-xl font-semibold  mb-1.5">{card.title}</div>
                          <div className="text-[#4a4c56] text-base font-normal leading-tight mb-3">
                            {card.description.split(' ').slice(0, 7).join(' ')}{card.description.split(' ').length > 7 ? '...' : ''}
                          </div>
                        </div>
                        <div className="h-8 inline-flex justify-start items-center">
                          <div className="group-hover:text-[#303b8d] group-hover:underline text-[#777980] text-base font-semibold pr-1">Learn More</div>
                          <FaArrowUp className='group-hover:text-[#303b8d] text-[#777980] rotate-45' />
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
            <div className="grid-cols-0"></div>
            <div className="grid-cols-0"></div>

            <div className="items"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

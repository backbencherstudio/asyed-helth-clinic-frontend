'use client';


import { lookData } from '@/demoAPI/look';
import Image from 'next/image';
import { useState } from 'react';
import H2 from '../reusable/H2';

const TABS = ['All', 'Reception', 'Treatment Room', 'Waiting Area', 'Modern Equipment', 'Friendly Staff'] as const;
type TabType = typeof TABS[number];

const TakeLookTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All');

  // Filter logic
  const filteredData = activeTab === 'All'
    ? lookData
    :     lookData.filter(item => item.name === activeTab);

  return (
    <section className="max-w-[77rem] mx-auto px-4 py-12 lg:py-24">
      {/* Tabs */}
      <div className=' text-center pb-9' > 
        <H2>Explore Our Clinic</H2>
        <p className="text-pragraphColor  leading-[160%] mt-3 max-w-[620px] mx-auto text-base lg:max-w-xl lg:px-12">Take o tour welcoming spaces and  cutting Edge facilities</p>
      </div>

      <div className=" pb-12">
        <div className="lg:flex justify-between bg-[#F6F8FA] lg:p-1 p-4 lg:rounded-full  ">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`xl:px-10 px-8 w-full lg:py-3 py-3 block cursor-pointer rounded-full font-medium text-sm md:text-base whitespace-nowrap transition ${
                activeTab === tab ? 'bg-[#88C240] text-white' : 'text-secondHeaderColor'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Insurance Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              
              key={item.id}
              className="  w-[100%] flex flex-col items-center text-center tabas "
            >
              <Image src={item.logo} alt={item.name} width={350} height={260} className="w-full h-full object-cover " />
             
            </div>
          ))
        ) : (
          <p className="text-center text-pragraphColor col-span-4 mt-10 text-2xl">
            No Take Look Found...
          </p>
        )}
      </div>
    </section>
  );
};

export default TakeLookTabs;

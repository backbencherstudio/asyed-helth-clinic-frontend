'use client';
import { useState } from 'react';

import { insuranceData } from '@/demoAPI/isuranceplan';
import Image from 'next/image';
import Link from 'next/link';

const InsuranceTabs = () => {
  const [activeTab, setActiveTab] = useState<'Illinois' | 'Indiana'>('Illinois');
  const [search, setSearch] = useState('');

  const filteredData = insuranceData[activeTab].filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-[77rem] mx-auto px-4 py-12">
      {/* Tabs */}
      <div>
        <h4 className='text-xl lg:text-2xl text-headerColor pb-6'>Select Your State</h4>
      </div>
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
       
        <div className="flex bg-[#F6F8FA] p-1 rounded-full shadow-sm">
          {(['Illinois', 'Indiana'] as const).map((state) => (
            <button
              key={state}
              onClick={() => setActiveTab(state)}
              className={`lg:px-28 px-11 lg:py-3 py-2 rounded-full font-medium text-xl cursor-pointer transition ${
                activeTab === state ? 'bg-[#88C240] text-white' : 'text-gray-500'
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md md:w-[350px]">
          <input
            type="text"
            placeholder="Insurance name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10  pr-4 lg:py-4 py-2 md:py-3 rounded-full tex-base border border-[#E9E9EA] focus:outline-none focus:ring-0 focus:ring-[#88C240]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.53 20.47L17.689 16.629C18.973 15.106 19.75 13.143 19.75 11C19.75 6.175 15.825 2.25 11 2.25C6.175 2.25 2.25 6.175 2.25 11C2.25 15.825 6.175 19.75 11 19.75C13.143 19.75 15.106 18.973 16.629 17.689L20.47 21.53C20.616 21.676 20.808 21.75 21 21.75C21.192 21.75 21.384 21.677 21.53 21.53C21.823 21.238 21.823 20.763 21.53 20.47ZM3.75 11C3.75 7.002 7.002 3.75 11 3.75C14.998 3.75 18.25 7.002 18.25 11C18.25 14.998 14.998 18.25 11 18.25C7.002 18.25 3.75 14.998 3.75 11Z" fill="#303B8D"/>
</svg></span>
<span className=' absolute right-1 lg:right-[6px] top-1/2 -translate-y-1/2'><button className=' text-sm md:text-base py-2 lg:py-3 lg:px-4 px-3 bg-PrimaryColor rounded-full text-whiteColor'>Search Now</button></span>
        </div>
      </div>

      {/* Insurance Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.length > 0 ?filteredData.map((item) => (
          <Link href="#"
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 p-2 md:p-4 flex flex-col items-center text-center shadow-sm"
          >
            <Image src={item.logo} alt={item.name} width={350} height={260} className="mb-4 w-full" />
            <p className="font-semibold text-sm md:text-base text-headerColor">{item.name}</p>
            <p className="text-sm md:text-base text-PrimaryColor mt-1">{item.plan}</p>
          </Link>
        )) : <p className=' text-center text-pragraphColor col-span-4 mt-10 text-2xl'> No found Insurance.........!</p>}
      </div>
    </section>
  );
};

export default InsuranceTabs;

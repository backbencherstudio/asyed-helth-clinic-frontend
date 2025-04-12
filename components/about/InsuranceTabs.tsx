'use client';
import { useState } from 'react';

import { insuranceData } from '@/demoAPI/isuranceplan';
import Image from 'next/image';

const InsuranceTabs = () => {
  const [activeTab, setActiveTab] = useState<'Illinois' | 'Indiana'>('Illinois');
  const [search, setSearch] = useState('');

  const filteredData = insuranceData[activeTab].filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex bg-gray-100 p-1 rounded-full shadow-sm">
          {(['Illinois', 'Indiana'] as const).map((state) => (
            <button
              key={state}
              onClick={() => setActiveTab(state)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === state ? 'bg-[#88C240] text-white' : 'text-gray-500'
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Insurance name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#88C240]"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
        </div>
      </div>

      {/* Insurance Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center shadow-sm"
          >
            <Image src={item.logo} alt={item.name} width={60} height={60} className="mb-4" />
            <p className="font-semibold text-sm text-[#0B0F2F]">{item.name}</p>
            <p className="text-[12px] text-[#88C240] mt-1">{item.plan}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceTabs;

"use client"

import React from 'react';
import { FaCheck } from 'react-icons/fa';

// Array of diabetes care items
const careItems = [
  {
    id: 1,
    text: "Screening, diagnosis and management with your physician"
  },
  {
    id: 2,
    text: "Complimentary first consultation with a dietician"
  },
  {
    id: 3,
    text: "Complimentary first consultation with a diabetes educator to educate on diabetes management and how to use diabetes devices and monitor their medication"
  },
  {
    id: 4,
    text: "Customized diabetes diet plan"
  },
  {
    id: 5,
    text: "Personalized journal along with educational material"
  },
  {
    id: 6,
    text: "Regular follow-ups with your primary physician"
  },
  {
    id: 7,
    text: "Access to diabetes innovations and new technologies"
  },
  {
    id: 8,
    text: "Referral team available in-house"
  }
];

const DiabetesCareInfo = () => {
  return (
    <div className="w-full inline-flex flex-col justify-start items-center gap-4 mt-20">
      <div className="self-stretch flex flex-col justify-start items-start gap-[11px]">
        <div className="self-stretch justify-start text-[#20254b] text-[32px] font-semibold leading-[51.20px]">
          Diabetes care is not confined to prescribing anti-diabetics and tracking blood sugar, it takes a well rounded multidisciplinary team approach to ensure care:
        </div>
        <div className="self-stretch px-4 flex flex-col justify-start items-start gap-2">
          {careItems.map((item) => (
            <div 
              key={item.id} 
              className={`self-stretch py-2 ${
                item.id !== 3 ? "border-b border-[#f1f5fd]" : ""
              } inline-flex justify-start items-${item.id === 3 ? "start" : "center"} gap-3`}
            >
              <div className="w-6 h-6 relative flex-shrink-0">
                <div className="w-5 h-5 absolute left-[2px] top-[2px] bg-[#77b032] rounded-sm"></div>
                <FaCheck className="absolute left-[7.75px] top-[8.92px] text-white text-[8.5px]" />
              </div>
              {item.id === 3 ? (
                <div className="justify-start text-[#1d1f2c] text-base font-medium leading-tight">
                  {item.text.split("to educate on diabetes")[0]}to educate on diabetes<br/>
                  management and how to use diabetes devices and monitor their medication
                </div>
              ) : (
                <div className="text-center justify-start text-[#1d1f2c] text-base font-medium leading-tight">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiabetesCareInfo; 
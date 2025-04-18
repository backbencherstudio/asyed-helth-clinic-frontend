"use client"

import React from 'react';
import Image from 'next/image';
import diabetes from "@/public/services/image/bloodtest.png";

const DiabetesWellnessApproach = () => {
  return (
    <div className=" container inline-flex flex-col justify-start items-start gap-8">
      <div className="self-stretch justify-start text-[#20254b] text-[32px] font-semibold leading-[51.20px]">
        Diabetic Wellness Centre approach:
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-[#20254b] text-base font-medium leading-relaxed">
            PRE-DIABETIC PATIENTS
          </div>
          <div className="self-stretch justify-start text-[#4a4c56] text-base font-normal leading-relaxed">
            need a diabetes prevention program that includes healthy dietary changes ana an exercise program as well as close monitoring to prevent disease progression
          </div>
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-[#20254b] text-base font-medium leading-relaxed">
            DIABETIC PATIENTS
          </div>
          <div className="self-stretch justify-start text-[#4a4c56] text-base font-normal leading-relaxed">
            need comprehensive care to understand and manage their dis-ease properly. They need information about day-to-day processes (how to check the sugar, what ingredients to choose, what plate to order, when to take the medicine etc.) They will therefore be followed by a "primary team" of a diabetes educator, di-etician, primary physicians and podiatrist.
          </div>
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-[#20254b] text-base font-medium leading-relaxed">
              GESTATIONAL DIABETIC PATIENTS (Diabetes in pregnancy)
            </div>
            <div className="self-stretch justify-start text-[#4a4c56] text-base font-normal leading-relaxed">
              GESTATIONAL DIABETIC PATIENTS (Diabetes in pregnancy) need close monitoring of glycemia during pregnancy and education on a low-carbohydrate nutritious diet to achieve good pregnancy outcomes. More so, they need f0110W-up post-delivery to ensure resolution ot diabetes and prevention ot recurrence in tne coming years.
            </div>
          </div>
          <div className="self-stretch h-[467.37px] rounded-2xl overflow-hidden relative">
            <Image 
              src={diabetes}
              alt="Diabetes care illustration" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-[#20254b] text-base font-medium leading-relaxed">
            The aim of the programme is to try to decrease the burden ot a chronic disease and pro-vide patients with a team that can listen to them, educate them, support them, control their sugar and most importantly ensure that they are "well" and "healthy".
          </div>
          <div className="self-stretch justify-start text-[#4a4c56] text-base font-normal leading-relaxed">
            Enjoy same day appointments with your doctor, dietician and diabetes educator upon availability.
          </div>
          <div className="self-stretch justify-start text-[#4a4c56] text-base font-normal leading-relaxed">
            To book an appointment with a family physician, internal medicine specialist or an endocrinologist call 00000000 or email example@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabetesWellnessApproach; 
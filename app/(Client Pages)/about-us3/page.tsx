"use client";

import Image from "next/image";
import aboutbanner from "@/public/about/about3.png";
import aboutimg from "@/public/about/about3img.png";
import tick from "@/public/about/bluetick.svg";
import Banner from "@/app/(Client Pages)/_components/banner";

const careData = {
  intro: {
    title: "Emergency Room or Urgent Care",
    subtitle: "Emergency Room or Urgent Care",
    description: "When a medical issue arises, deciding whether to go to an Emergency Room (ER) or an Urgent Care Center can be confusing. While both facilities offer treatment, they serve different purposes based on the severity of the condition.",
    types: [
      {
        title: "Emergency Rooms (ERs) handle life-threatening conditions",
        description: "Critical conditions requiring immediate intervention. They are open 24/7 and are equipped with advanced technology, specialists, and surgical teams."
      },
      {
        title: "Urgent Care Centers treat non-life-threatening conditions",
        description: "Medical needs that require attention outside of normal doctor's office hours. They typically have shorter wait times and lower costs than an ER. Understanding where to go can help you get timely and appropriate care while avoiding unnecessary medical bills"
      }
    ]
  },
  emergency: {
    title: "When to Go to the Emergency Room (ER)",
    subtitle: "The ER is designed for life-threatening or severe conditions that require immediate medical attention. If you experience, call 911 or go to the nearest emergency room.",
    description: "The decision to go to the Emergency Room (ER) can be a difficult one, especially when you're unsure if your symptoms or injuries are severe enough to require urgent medical attention. The ER is equipped to handle life-threatening and critical conditions, so understanding when you should go to the ER is crucial to ensure you get the right level of care.",
    image: aboutimg,
    symptoms: [
      "Stroke Symptoms",
      "Poisoning or Overdose",
      "Severe Burns or Deep Cuts",
      "Chest Pain or Heart Attack Symptoms",
      "Severe Head Injury or Unconsciousness",
      "Difficulty Breathing or Choking",
      "Difficulty Breathing or Shortness of Breath",
      "Severe Allergic Reactions"
    ]
  },
  urgent: {
    title: "When to Visit Urgent Care",
    subtitle: "Urgent care centers handle non-life-threatening conditions that still require prompt medical attention but don't warrant a trip to the ER.",
    description: "Urgent Care centers are healthcare facilities that treat medical conditions and injuries that require immediate attention but are not considered life-threatening. They are open outside of typical office hours, including evenings, weekends, and even holidays, making them an accessible option for those who need care but cannot wait for a scheduled appointment with their primary care physician.",
    image: aboutimg,
    symptoms: [
      "Minor Cuts and Burns",
      "Sprains and Strains",
      "Fever and Flu Symptoms",
      "Ear Infections",
      "Sore Throat",
      "Minor Allergic Reactions",
      "Urinary Tract Infections",
      "Minor Eye Injuries"
    ]
  }
};

function IntroSection({ data }) {
  return (
    <div className="container flex flex-col justify-center md:items-start items-center gap-4 mx-auto pb-14">
      <div className="text-center text-[#20254b] text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.3]">
        {data.subtitle}
      </div>
      <div className="text-center md:text-left text-pragraphColor text-sm md:text-base">
        {data.description}
      </div>
      <div className="w-full mt-8 space-y-6">
        {data.types.map((type, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-semibold text-headerColor">{type.title}</h2>
            <p className="text-pragraphColor text-sm md:text-base">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CareSection({ data, reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start`}>
      <div className="w-full lg:w-1/2">
        <Image 
          src={data.image} 
          alt={data.title} 
          width={514} 
          height={275} 
          className="rounded-xl w-full h-auto" 
        />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-semibold text-headerColor">{data.title}</h2>
        <p className="font-semibold text-darkColor text-sm md:text-base">{data.subtitle}</p>
        <p className="text-pragraphColor text-sm md:text-base">{data.description}</p>
      </div>
    </div>
  );
}

function SymptomsList({ title, symptoms }) {
  return (
    <div className="p-4 md:p-8 bg-bgSecondColor rounded-2xl">
      <h3 className="text-xl md:text-2xl font-semibold text-headerColor mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {symptoms.map((symptom, index) => (
          <div key={index} className="flex items-center gap-3 border-b border-white py-2">
            <Image src={tick} alt="tick" width={24} height={24} />
            <span className="font-medium text-darkColor text-sm md:text-base">{symptom}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutUs3() {
  return (
    <>
      <Banner 
        title="Emergency Room or Urgent Care"
        description="How to Decide if You Need the Emergency Room or Urgent Care"
        image={aboutbanner}
      />

      <div className="container mx-auto md:mx-0 px-4 py-8 md:py-16 ">
        <IntroSection data={careData.intro} />

        <div className="space-y-8 md:space-y-16">
          <div className="space-y-6 md:space-y-8">
            <CareSection data={careData.emergency} />
            <SymptomsList title="Critical Emergency Symptoms:" symptoms={careData.emergency.symptoms} />
          </div>

          <div className="space-y-6 md:space-y-8">
            <CareSection data={careData.urgent} reverse />
            <SymptomsList title="Common Urgent Care Conditions:" symptoms={careData.urgent.symptoms} />
          </div>
        </div>
      </div>
    </>
  );
}

'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import tik from '../../../../public/services/icon/doubletik.svg'
import Question from '@/components/about/Question'

export default function ServiceDetails() {
  const searchParams = useSearchParams()
  
  const title = searchParams.get('title')
  const imageUrl = searchParams.get('image')
  const description = searchParams.get('description')

  const defaultDescription = "We know how annoying and uncomfortable colds and coughs can be. That's why our committed healthcare team is ready to offer you outstanding care and support. We're here to help you bounce back swiftly and effectively. Trust us to assist you throughout your recovery journey, making sure you feel better and return to your everyday activities as soon as possible. Your health is our priority, and we're dedicated to getting you back on your feet in no time. We know how annoying and uncomfortable colds and coughs can be. That's why our committed healthcare team is ready to offer you outstanding care and support. We're here to help you bounce back swiftly and effectively."

  const getDisplayDescription = () => {
    if (!description) return defaultDescription
    const wordCount = description.trim().split(/\s+/).length
    return wordCount < 25 ? defaultDescription : description
  }

  return (
    <>
      <div className="container py-16">
        <div className="content">
          <div className="grid grid-cols-12 gap-5 mb-16">
            <div className="col-span-6 flex flex-col gap-4">
              <div className="justify-start text-[#20254b] text-[40px] font-semibold">
                {title} Service
              </div>
              <div className="justify-start text-[#1d1f2c] text-base font-normal leading-relaxed">
                {getDisplayDescription()}
              </div>
            </div>
            {imageUrl && (
              <div className="col-span-6 h-full">
                <Image 
                  className="rounded-xl object-cover w-full h-[313px]" 
                  src={imageUrl}
                  alt={title || 'Service Image'}
                  width={503}
                  height={313}
                  priority
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-11">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#20254b] text-[26px] font-semibold">Understanding Coughs</h2>
                <p className="text-[#1d1f2c] text-base leading-relaxed">
                  A cough is your body's natural way of clearing your throat and airways, serving as a protective mechanism to aid in healing. The cause of a cough can vary, and identifying the source of a problematic or persistent cough is crucial for effective treatment.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[#20254b] text-[26px] font-semibold">Types of Coughs</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <Image src={tik} alt="check" className="w-6 h-6" />
                      <span className="text-[#303b8d] text-lg font-semibold">Acute Coughs:</span>
                    </div>
                    <p className="text-[#1d1f2c] text-base leading-relaxed">
                      A cough is your body's natural way of clearing your throat and airways, serving as a protective mechanism to aid in healing. The cause of a cough can vary, and identifying the source of a problematic or persistent cough is crucial for effective treatment.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <Image src={tik} alt="check" className="w-6 h-6" />
                      <span className="text-[#303b8d] text-lg font-semibold">Chronic Coughs:</span>
                    </div>
                    <p className="text-[#1d1f2c] text-base leading-relaxed">
                      Chronic coughs are often associated with conditions like allergies, asthma, smoking, croup, chronic bronchitis, GERD, or COPD and can persist for eight weeks or longer. A chronic cough can disrupt your sleep, lead to vomiting, or cause lightheadedness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#20254b] text-[26px] font-semibold">When to Seek Treatment for Your Cough</h2>
                <p className="text-[#1d1f2c] text-base leading-relaxed">
                  Knowing when to seek medical attention for your cough is crucial. You should consider seeking treatment if:
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Your cough persists for more than one week.",
                  "You are coughing up yellow or green mucus.",
                  "You experience wheezing or shortness of breath.",
                  "You have a fever."
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <Image src={tik} alt="check" className="w-6 h-6" />
                    <span className="text-[#20254b] text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#1d1f2c] text-base leading-relaxed">
                While these symptoms usually do not require an emergency room visit, if your cough disrupts your daily activities, Midwest Express Clinic is the ideal solution for fast and effective care for non-life-threatening illnesses or injuries.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#20254b] text-[26px] font-semibold">At-Home Remedies</h2>
                <p className="text-[#1d1f2c] text-base leading-relaxed">
                  Sometimes, adults can manage their chronic cough in the comfort of their homes with DIY remedies. However, it's advisable to consult your primary care physician or our medical staff before attempting self-treatment, especially if you're taking other medications, as there may be interactions.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[#20254b] text-lg font-semibold">Here are some at-home remedies you can consider:</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Hydration:", desc: "Drink plenty of fluids; water is the best choice, as it helps to thin mucus." },
                    { title: "Gargle:", desc: "Use warm saltwater to clean your throat and loosen any mucus." },
                    { title: "Cough drops:", desc: "These can soothe your throat." },
                    { title: "Avoid tobacco products:", desc: "Smoking can exacerbate coughing." }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-1.5">
                      <Image src={tik} alt="check" className="w-6 h-6 mt-1" />
                      <div className="flex gap-1">
                        <span className="text-[#303b8d] text-lg font-semibold">{item.title}</span>
                        <span className="text-[#1d1f2c] text-base leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[#1d1f2c] text-base leading-relaxed">
                  We're here to support you in your journey to better health, and our medical team is ready to provide personalized care and advice for your cold and cough symptoms. Don't hesitate to visit us for fast and friendly service when you need it most.
                </p>
              </div>
            </div>
          </div>
          <Question />
        </div>
      </div>
    </>
  )
} 
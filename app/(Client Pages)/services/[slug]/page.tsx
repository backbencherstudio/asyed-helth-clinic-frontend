'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import tik from '../../../../public/services/icon/doubletik.svg'
import Question from '@/components/about/Question'
import Bannerimg from "@/public/banner/serviceBanner.png";
import Banner from '@/app/(Client Pages)/_components/banner'
import { cardData } from '../page'

export default function ServiceDetails() {
  const searchParams = useSearchParams()
  
  const title = searchParams.get('title')
  const imageUrl = searchParams.get('image')
  const description = searchParams.get('description')

  // Find the matching service data
  const serviceData = cardData.find(service => service.title === title)

  return (
    <>
      <Banner 
        image={Bannerimg}
        title={title}
        description={serviceData?.longDescription || description || ''}
      />

      <div className="container py-16">
        <div className="content mx-4 xl:mx-0">
          <div className="md:grid md:grid-cols-12 gap-5 mb-16">
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="justify-start text-[#20254b] text-[40px] font-semibold">
                {title} Service
              </div>
              <div className="justify-start text-[#1d1f2c] text-base font-normal leading-relaxed">
                {serviceData?.longDescription || description}
              </div>
            </div>
            {imageUrl && (
              <div className="md:col-span-6 h-full">
                <Image 
                  className="rounded-xl object-cover w-full h-[313px] md:h-full mt-5 md:mt-0" 
                  src={imageUrl}
                  alt={title || 'Service Image'}
                  width={503}
                  height={313}
                  priority
                />
              </div>
            )}
          </div>

          {serviceData && (
            <div className="flex flex-col gap-16">
              {serviceData.burnTypes && (
                <div className="flex flex-col gap-11">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#20254b] text-[26px] font-semibold">Understanding {title}</h2>
                    <p className="text-[#1d1f2c] text-base leading-relaxed">
                      {serviceData.longDescription}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#20254b] text-[26px] font-semibold">Types of Burns</h2>
                    <div className="flex flex-col gap-4">
                      {serviceData.burnTypes.map((type, index) => (
                        <div key={index} className="flex flex-col gap-2">
                          <div className="flex items-center gap-1.5">
                            <Image src={tik} alt="check" className="w-6 h-6" />
                            <span className="text-[#303b8d] text-lg font-semibold">{type.title}:</span>
                          </div>
                          <p className="text-[#1d1f2c] text-base leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {serviceData.causes && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#20254b] text-[26px] font-semibold">Common Causes of {title}</h2>
                    <div className="flex flex-col gap-3">
                      {serviceData.causes.map((cause, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                          <Image src={tik} alt="check" className="w-6 h-6" />
                          <span className="text-[#20254b] text-lg font-semibold">{cause}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {serviceData.whenToSeek && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#20254b] text-[26px] font-semibold">When to Seek Treatment</h2>
                    <p className="text-[#1d1f2c] text-base leading-relaxed">
                      Not all conditions require emergency care, but prompt treatment can help. Visit North Ave Immediate Care if:
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {serviceData.whenToSeek.map((item, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <Image src={tik} alt="check" className="w-6 h-6" />
                        <span className="text-[#20254b] text-lg font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {serviceData.homeRemedies && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[#20254b] text-[26px] font-semibold">At-Home Remedies</h2>
                    <p className="text-[#1d1f2c] text-base leading-relaxed">
                      For minor conditions, at-home care may be effective. Be cautious, and seek medical advice if you're unsure about the severity.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {serviceData.homeRemedies.map((remedy, index) => (
                      <div key={index} className="flex items-start gap-1.5">
                        <Image src={tik} alt="check" className="w-6 h-6 mt-1" />
                        <div className="flex gap-1">
                          <span className="text-[#303b8d] text-lg font-semibold">{remedy.title}:</span>
                          <span className="text-[#1d1f2c] text-base leading-relaxed">{remedy.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          <Question />
        </div>
      </div>
    </>
  )
} 
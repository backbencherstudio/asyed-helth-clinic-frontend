import React from 'react'
import Image from 'next/image'
import check from '@/public/resources/checkcircle.svg'
import Question from '@/components/about/Question'
import Banner from '../_components/banner'
import Bannerimg from '@/public/resources/img/banner5.png'

const features = [
  "Get easy-to-understand lab results delivered directly to you",
  "Manage test results for your family or those in your care",
  "Share your health information with your healthcare providers",
  "Organize your health information in one convenient place",
  "Schedule and receive medication reminders"
]

export default function Resources() {
  return (


<>

    <Banner 
    image={Bannerimg}
    title='Review your test results securely and easily.'
    description='Get quick and secure access to your latest test results.'
    />

    <div className="container">
      <div className="content mx-4 mt-32 mb-24">


        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 mb-14">
          {/* Left content */}
          <div className="gap-4 max-w-[820px]">
            <div className="text-[#20254b] text-[32px] font-medium mb-4">
              NORTH AVE Immediate Care patient portal allows you to view, download and print
              your lab test results.
            </div>
            <p className="text-[#4a4c56] text-base font-medium">
              You can also pay your bill online and schedule appointments within the portal
            </p>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-3 w-[268px]">
            <p className="text-[#4a4c56] text-base font-normal font-['Inter']">
              It you already nave an account, login to see your test results,
            </p>
            <p>
              <span className="text-[#4a4c56] text-lg font-medium">Or </span>
              <span className="text-[#20254b] text-xl font-medium">register for an account</span>
            </p>
            <button className="w-[180px] p-4 bg-[#303b8d] rounded-[40px] text-white text-lg font-normal">
              Portal login
            </button>
          </div>
        </div>

        <div className=" p-4 rounded-2xl flex flex-col justify-start items-start gap-2.5">
          <div className="w-full lg:w-[758px] flex flex-col justify-start items-center gap-4">
            <div className=" flex flex-col justify-start items-start gap-[11px]">
              <div className="text-[#20254b] text-[32px] font-semibold leading-[51.20px]">
                On your computer, tablet, or smartphone, you can:
              </div>
              <div className=" px-4 flex flex-col justify-start items-start gap-2">
                {features.map((feature, index) => (
                  <div key={index} className=" py-2 rounded-lg border-b border-[#f1f5fd] last:border-b-0 flex items-center gap-3">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="text-[#77b032]"
                    />
                    <div className="text-[#1d1f2c] text-base font-medium leading-tight">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>




        <Question />




      </div>
    </div>

</>


  )
}

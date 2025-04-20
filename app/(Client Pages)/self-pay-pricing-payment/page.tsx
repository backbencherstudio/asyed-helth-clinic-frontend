'use client';

import Question from '@/components/about/Question';
import blue1 from '@/public/resources/bl1.svg';
import blue2 from '@/public/resources/bl2.svg';
import blue3 from '@/public/resources/bl3.svg';
import Bannerimg from '@/public/resources/img/banner6.png';
import img1 from '@/public/resources/img/image1.png';
import img2 from '@/public/resources/img/image2.png';
import img3 from '@/public/resources/img/image3.png';
import img4 from '@/public/resources/img/image4.png';
import img5 from '@/public/resources/img/image5.png';
import img6 from '@/public/resources/img/image6.png';
import Image from 'next/image';
import Banner from '../_components/banner';
const paymentOptions = [
  { id: 'credit-card', title: 'Credit Card', image: img1 },
  { id: 'cash', title: 'Cash', image: img2 },
  { id: 'payment-plan', title: 'Payment Plan', image: img3 },
  { id: 'online-payment', title: 'Online Payment', image: img4 },
  { id: 'direct-debit', title: 'Direct Debit', image: img5 },
  { id: 'hsa-fsa', title: 'HSA/ FSA', image: img6 },
]
const discountOptions = [
  {
    id: 'senior',
    title: 'Senior Discount',
    description: '10% off for patients 65+',
    icon: blue1
  },
  {
    id: 'student',
    title: 'Student Discount',
    description: '5% off With valid ID',
    icon: blue2
  },
  {
    id: 'military',
    title: 'Military discount',
    description: '15% Off for active-duty personnel',
    icon: blue3
  }
]

const serviceRows = [
  {
    id: 'routine',
    service: 'Routine Checkup',
    description: 'Includes basic consultation and vitals check'
  },
  {
    id: 'dental',
    service: 'Dental Cleaning',
    description: 'Professional cleaning and oral exam'
  },
  {
    id: 'xray',
    service: 'X-Ray',
    description: 'Single area imaging'
  }
];

export default function Resources() {
  return (

    <>


      <Banner
        image={Bannerimg}
        title='Transparent Self-Pay Pricing & Flexible Payment Options'
        description='We believe in clear, upfront pricing so you can focus on your care without surprises.'
      />
      <div className="container">
        <div className="content mx-4 mt-32 mb-24">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 mb-16 md:mb-36">
            <div className="text-center space-y-4">
              <div className="text-4xl font-semibold text-[#20254b]">Call for Pricing</div>
              <p className="text-[#4a4c56] max-w-[821px] text-base leading-relaxed">
                Below is a list of our most common services and their self-pay prices. Please note that prices may vary
                based on individual needs or additional services required.
              </p>
            </div>
            <div className="w-full border-2 border-[#e0e8f9] rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 bg-[#f1f5fd] divide-x-2 divide-[#e0e8f9]">
                <div className="p-4 text-xl font-medium text-[#20254b]">Service</div>
                <div className="p-4 text-xl font-medium text-[#20254b]">Description</div>
              </div>
              <div className="divide-y-2 divide-[#e0e8f9]">
                {serviceRows.map((row) => (
                  <div key={row.id} className="grid grid-cols-2 bg-white divide-x-2 divide-[#e0e8f9]">
                    <div className="p-4 text-xl text-[#20254b]">{row.service}</div>
                    <div className="p-4 text-xl text-[#20254b]">{row.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="second md:mb-20 mb-10">
            <div className="max-w-[821px] flex flex-col justify-start items-center gap-4 mx-auto mb-16">
              <div className="text-center text-[#20254b] text-[40px] font-semibold">Flexible Payment Options</div>
              <div className="text-center text-[#4a4c56] text-base font-normal leading-relaxed">
                We offer multiple payment options to make your experience as convenient as possible.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
              {paymentOptions.map((option) => (
                <div key={option.id} className="w-full px-3 pt-3 pb-4 bg-[#f6f8fa] rounded-xl flex flex-col items-center gap-4">
                  <div className="relative w-full aspect-[360/233] rounded-xl overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="text-center text-[#303b8d] text-[28px] font-medium leading-9">
                    {option.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="third md:mb-20 mb-10">
            <div className="max-w-[821px] flex flex-col justify-start items-center gap-4 mx-auto mb-16">
              <div className="text-center text-[#20254b] text-[40px] font-medium">Discounts & Special Offers</div>
              <div className="text-center text-[#4a4c56] text-base font-normal leading-relaxed">
                We offer discounts for seniors, students, and military personnel. Ask us about our seasonal promotions.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
              {discountOptions.map((discount) => (
                <div key={discount.id} className="w-full p-4 bg-[#f1f5fd] rounded-xl flex flex-col items-center gap-4">
                  <div className="w-16 h-16 p-2.5 bg-[#253082] rounded-xl flex justify-center items-center">
                    <Image src={discount.icon} alt={discount.title} className="w-10 h-10" />
                  </div>
                  <div className="text-center text-[#20254b] text-2xl font-medium leading-[33.60px]">
                    {discount.title} ({discount.description})
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Question />
        </div>
      </div>

    </>



  )
}

import InsuranceBanner from '@/components/about/InsuranceBanner'
import InsurancePlan from '@/components/about/InsurancePlan'
import Question from '@/components/about/Question'
import Subscribe from '@/components/Subscribe'
import insuranceImage from "@/public/about/aboutsecondsvg.svg"
import Banner from '../(Client Pages)/_components/banner'
import Image from 'next/image'


function InsurancePage() {
  return (


    <>
    
    <div className="relative w-full h-[530] md:h-[450px] lg:h-[482px] ">
    <Image src={insuranceImage} alt="insuranceImage" width={700} height={500} className=" w-full h-full" />
  
        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(1, 19, 8, 0.84) 100%)",
          }}
        >
          <div className="flex items-center px-5 md:px-5 h-full  lg:px-0 text-white max-w-[1200px] mx-auto pb-[74px]">
            <div className="max-w-4xl flex items-end h-full">
              <div>
              <div className="max-w-[602px] justify-start text-white text-[40px] font-medium leading-[64px] mb-6" style={{lineHeight: '50px'}}>
                Accepted Insurance
                </div>
                <div className="max-w-[608px] justify-start text-white text-base font-normal leading-relaxed">
                Using our services? Remember, there may be a copay. Standard doctor visits and emergency room visits may have different copays based on your insurance. If uninsured, explore our Self-Pay Pricing!
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

        <div>
          <InsurancePlan/>
          <Question/>
          <Subscribe/>
        </div>
    
    </>



  )
}

export default InsurancePage

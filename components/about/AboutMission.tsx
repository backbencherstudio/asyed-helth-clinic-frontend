import aboutImage from "@/public/about/aboutcare.jpg"
import Image from "next/image"
import H2 from "../reusable/H2"
function AboutMission() {
  return (
    <section className=' max-w-[77rem] mx-auto lg:pb-32 pb-14 px-4 xl:px-0'>
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-7">
        <div className=" lg:col-span-5 rounded-[12px] overflow-hidden">
           <Image src={aboutImage} alt="mission about "  width={600} height={400} className=" w-full h-full object-cover "/>
        </div>
        <div className="lg:col-span-7 max-w-2xl space-y-8 lg:flex lg:flex-col justify-between">
            <div>

            <H2>A Journey of Care & Commitment</H2>
            <p className=" text-base font-[gellixR] text-pragraphColor leading-[160%] mt-1">Our dedication to your health and well-being.</p>
            </div>
           <div>
              <h3 className="text-2xl text-headerColor">What's Our Mission</h3>
              <p className="text-base text-pragraphColor lg:pr-14 mt-3">Our mission is to provide compassionate, high-quality, and accessible healthcare to every patient. We are committed to enhancing lives through personalized treatment plans, advanced medical technology, and a patient-first approach. Our team strives to build a healthier community by promoting wellness, prevention, and comprehensive medical care.</p>
           </div>
           <div>
              <h3 className="text-2xl text-headerColor">What's Our Vision</h3>
              <p className="text-base text-pragraphColor lg:pr-14 mt-3">We envision a world where everyone has access to high-quality healthcare without barriers. Our goal is to set new standards in medical excellence through innovation, patient-centered care, and a commitment to continuous improvement. By fostering a culture of trust, integrity, and medical advancement, we aim to be the preferred healthcare.</p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission

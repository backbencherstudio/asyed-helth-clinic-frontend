import aboutImage from "@/public/about/aboutcare.jpg"
import Image from "next/image"
import H2 from "../reusable/H2"
function AboutMission() {
   return (
      <section className=' max-w-[77rem] mx-auto lg:pb-32 pb-14 px-4 xl:px-0'>
         <div className=" grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div className=" lg:col-span-5 rounded-[12px] overflow-hidden">
               <Image src={aboutImage} alt="mission about " width={600} height={400} className=" w-full h-full object-cover " />
            </div>
            <div className="lg:col-span-7 max-w-2xl space-y-8 lg:flex lg:flex-col justify-between">
               <div>

                  <H2>A Journey of Care & Commitment</H2>
                  <p className=" text-base font-[gellixR] text-pragraphColor leading-[160%] italic mt-1">Our promise to your health and well-being.            </p>
               </div>
               <div>
                  <h3 className="text-2xl text-headerColor">Our Mission</h3>
                  <p className="text-base text-pragraphColor lg:pr-14 mt-3">We are dedicated to delivering compassionate, high-quality, and accessible healthcare for every patient. Through personalized treatment plans, advanced medical technology, and a patient-centered approach, our mission is to improve lives and build a healthier, stronger community—one visit at a time.
                  </p>
               </div>
               <div>
                  <h3 className="text-2xl text-headerColor"> Our Vision</h3>
                  <p className="text-base text-pragraphColor lg:pr-14 mt-3">We envision a future where high-quality healthcare is within reach for everyone—without barriers. Our goal is to set the standard for clinical excellence through innovation, continuous improvement, and patient-first care. By fostering a culture rooted in trust, integrity, and compassion, we aim to be your preferred choice in healthcare.
                     healthcare.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutMission

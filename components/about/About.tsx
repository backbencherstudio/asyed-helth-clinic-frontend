import aboutimag from "@/public/image/about.jpg"
import bgimage from "@/public/image/aboutbg.svg"
import Image from 'next/image'
import Link from 'next/link'
import H2 from '../reusable/H2'
function About() {
  return (
    <section className=' max-w-[77rem] mx-auto pt-14  lg:pt-32 px-4'>
       <div className=' grid grid-cols-1 md:grid-cols-2 gap-7'>
         <div className=' relative '>
            <div className=' absolute right-0 bottom-5'>
                <Image src={bgimage} alt='about-background'  className=""/>
            </div>
           <H2>A Trusted Name in Healthcare</H2>
           <p className=' text-base text-pragraphColor  leading-[160%] mt-4 lg:mt-6 lg:pr-15'>At <span className=" text-PrimaryColor">North Ave Immediate Care Clinic</span>, we work to challenge the status quo of the healthcare industry through innovation. We are a chain of independent, non-hospital
affiliated clinics focused on patient care, satisfaction, and affordability. We don't push expensive diagnostic testing or unnecessary specialty referrals. Our priority is to provide quality care that only serves your best interest.</p>
           <Link href="/about-us" className=' flex justify-center lg:inline-block mt-8 text-lg cursor-pointer text-whiteColor px-7 py-3 bg-PrimaryColor rounded-full'>
             About Us
           </Link>
         </div>
         <div className=' '>
          <Image src={aboutimag} alt="about-us" width={650} height={400} className=" w-full h-full -z-20 "/>
         </div>
       </div>
    </section>
  )
}

export default About

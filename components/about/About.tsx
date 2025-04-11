import aboutimag from "@/public/image/about.jpg"
import bgimage from "@/public/image/aboutbg.svg"
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../reusable/CustomButton'
import H2 from '../reusable/H2'
function About() {
  return (
    <section className=' max-w-[82.5rem] mx-auto pt-14  lg:pt-32 px-4'>
       <div className=' grid grid-cols-1 lg:grid-cols-2 gap-7'>
         <div className=' relative '>
            <div className=' absolute right-0 bottom-5'>
                <Image src={bgimage} alt='about-background'  className=""/>
            </div>
           <H2>A Trusted Name in Healthcare</H2>
           <p className=' text-base text-pragraphColor leading-[160%] mt-6 lg:pr-15'>At <span>North Ave Immediate Care</span>, we deliver fast, high-quality healthcare with no long wait times. As a locally owned clinic, we focus on compassionate, affordable care tailored to your needs. Get treated quickly and confidently—without compromising on excellence.</p>
           <Link href="/about-us" className=' block mt-8'>
             <CustomButton>About Us</CustomButton>
           </Link>
         </div>
         <div className=' '>
          <Image src={aboutimag} alt="about-us" width={650} height={400} className=" w-full h-full"/>
         </div>
       </div>
    </section>
  )
}

export default About

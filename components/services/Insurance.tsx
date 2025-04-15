"use client"
import bgImage from "@/public/image/aboutbg.svg";
import "@splidejs/react-splide/css";
import Image from "next/image";
import H2 from "../reusable/H2";
import InsuranceSlide from "./InsuranceSlide";
function Insurance() {


  return (
    <section className=' max-w-[77rem] mx-auto mt-14'>
      <div className=' bg-[#F6F8FA] rounded-2xl py-12 relative '>

        <Image src={bgImage} alt="bg-image-insurance" className=" absolute top-1/2 left-1/2 -translate-1/2 z-[-10px] "/>
        <div className="relative top-0 left-0  z-30">
 <div className=" max-w-xl mx-auto text-center space-y-4 lg:px-4">
            <H2>Accepted Insurance</H2>
            <p className=" text-pragraphColor ">At North ave Clinic, We accept a wide range of insurance plans to make quality healthcare accessible and affordable for you.</p>
         </div>
         <div className=" w-[80%] mx-auto">
            <InsuranceSlide/>
         </div>
         <div className=" text-center cursor-pointer " onClick={()=>console.log("hi")}>
            <button className=" text-lg cursor-pointer text-whiteColor px-7 py-3 bg-PrimaryColor rounded-full" >View All</button>
         </div>
        </div>
        
      </div>
    </section>
  )
}

export default Insurance

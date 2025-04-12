

import bgservice from "@/public/image/servicebg.svg";
import Image from 'next/image';
import CustomButtonTwo from "../reusable/CustomButtonTwo";
import H2 from '../reusable/H2';
import ServiceSlide from "./ServiceSlide";
function Service() {
   
    return (

        <section className='relative' >
            <Image src={bgservice} width={1920} height={1200} alt='service-bg' className=" w-full " />

            <div className=" absolute top-1/2 left-0 w-full -translate-y-1/2 ">
                <div className="max-w-[82.5rem] mx-auto px-4 ">
                    <div className=" flex justify-between items-end mb-12">
                        <div className=" ">
                            <H2 >Our services</H2>
                            <p className="text-pragraphColor leading-[160%] mt-3 max-w-[500px]  text-base">
                                Embrace personalized, state-of-the-art care that sets the bar high in both professional and academic standards.
                            </p>
                        </div>
                        <div>
                            <CustomButtonTwo>View All Services </CustomButtonTwo>
                        </div>
                    </div>

                    <div>
                      <ServiceSlide/> 
                    </div>
                </div>

            </div>

        </section>

    )
}

export default Service

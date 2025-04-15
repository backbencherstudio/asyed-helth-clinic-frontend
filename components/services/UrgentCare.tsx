import urgentImage from "@/public/image/urgentcareimage.jpg"
import Image from "next/image"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import H2 from "../reusable/H2"

function UrgentCare() {
    return (
        <section className=' max-w-[77rem] mx-auto px-4 xl:px-0 pt-14 lg:pt-32'>
            <div className=" grid grid-cols-1 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-6 gap-7">
                <div className=" md:col-span-3 lg:col-span-4 xl:col-span-2 bg-[#E7F4D3] p-8 rounded-2xl flex flex-col justify-around lg:pr-10 space-y-5 lg:space-y-0">
                    <div className=" xl:pr-20 ">

                    <H2>Urgent Care or ER</H2>
                    </div>
                    <p className=" text-base text-pragraphColor ">Learn how to know the difference between ailments that can be treated at NAC and what requires emergency attention.</p>
                    <Link href="#" className=" text-lg text-[#20254B] flex gap-1 items-center underline font-[metroM] ">Learn More <FiArrowUpRight size={18} /></Link>
                </div>
                <div className=" md:col-span-4  lg:col-span-6 xl:col-span-4">
                    <div className=" w-full h-full overflow-hidden rounded-2xl relative">
                        <Image src={urgentImage} alt="urgentiamge" width={1200} height={400} className=" md:h-full h-[435px] object-cover " />
                        <div className=" w-full h-full absolute left-0 top-0 bg-black/40">
                            <div className=" absolute bottom-12 md:bottom-5 lg:bottom-12 left-5 lg:left-15 space-y-4 lg:space-y-7">
                                <h2 className=" text-3xl md:text-4xl lg:text-[42px] text-whiteColor lg:pr-36">Self-Pay Pricing — Affordable Care for Uninsured Patients</h2>
                                <button className=" text-base text-whiteColor cursor-pointer py-4 px-8 bg-seconderyColor rounded-full">Call for Pricing</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default UrgentCare

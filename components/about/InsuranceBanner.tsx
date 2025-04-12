import insuranceImage from "@/public/about/aboutsecondsvg.svg"
import Image from "next/image"
import H2 from "../reusable/H2"

function InsuranceBanner() {
    return (
        <section className='py-12 bg-bgthirdColor'>
            <div className=" max-w-[89.5rem] mx-auto px-4">
                <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 lg:gap-8 xl:gap-28 ">
                    <div className=" flex items-end">
                        <div className=' '>
                            <H2 >
                                Accepted Insurance
                            </H2>
                            <p className="mt-4 text-pragraphColor text-base leading-[160%] xl:pr-10">
                                Using our services? Remember, there may be a copay. Standard doctor visits and emergency room visits may have different copays based on your insurance. If uninsured, explore our Self-Pay Pricing!
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 lg:mb-0">
                        <Image src={insuranceImage} alt="insuranceImage" width={700} height={500} className=" w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InsuranceBanner

import Image from 'next/image'
import Link from 'next/link'
import H2 from '../reusable/H2'
function TakeLookBanner() {
    return (
        <div className=' bg-bgthirdColor '>
            <div className=" flex flex-col-reverse lg:grid grid-cols-12 py-14 container items-center gap-8   px-4  ">
                <div className="flex col-span-7  items-center px-5 md:px-5 h-full  lg:px-0 text-headerColor max-w-[1200px] mx-auto lg:pb-[74px]">
                    <div className=" flex items-center h-full">
                        <div className=''>
                            <div className='max-w-sm'>
                                <H2 >
                                    Take a Look Inside
                                    Our Clinic
                                </H2>
                            </div>
                            <div className="xl:max-w-[608px] justify-start text-headerColor text-base font-normal leading-relaxed mt-4">
                                Experience our welcoming environment, meet our friendly staff, and see how we care for our patients.
                            </div>
                            <div className='flex items-center gap-4 mt-6 flex-wrap'>
                                <Link href={"https://www.patientfusion.com/external/appointment/79d7ffab-1679-40d1-bd30-a7ee286ebc5e?origin=doctor"} target="_blank" rel="noopener noreferrer" className="text-whiteColor flex gap-2 2xl:gap-3 font-[metroSB] items-center bg-PrimaryColor px-4 py-3 rounded-full text-base">
                                    <Image
                                        src="/logo/booking.svg"
                                        alt="booking"
                                        width={18}
                                        height={14}
                                    />
                                    Book Appointments
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' col-span-5'>


                </div>

            </div>
        </div>
    )
}

export default TakeLookBanner

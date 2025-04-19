import H2 from '../reusable/H2'
import TakeBannerVideoPlayer from './TakeBannerVideo'
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
                            <div className="xl:max-w-[608px] justify-start text-headerColor text-base font-normal leading-relaxed">
                                Experience our welcoming environment, meet our friendly staff, and see how we care for our patients.
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-5'>

                    <TakeBannerVideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="/takelook.jpg"
                        title="Pediatric Consultation Session"
                    />
                </div>

            </div>
        </div>
    )
}

export default TakeLookBanner

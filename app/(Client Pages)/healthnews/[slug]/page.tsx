import { healthNewsData } from '@/demoAPI/healthData'
import calender from '@/public/healthnews/icon/calendar.svg'
import Bannerimg from '@/public/healthnews/image/banner2.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa"
import Banner from '../../_components/banner'
import NewsLeft from '../../_components/p-resources/newstop'




export default function Healthnews2() {
  return (
    
<>
        <Banner
        image={Bannerimg}
        title='The Importance of Regular Checkups'
        description='Routine health checkups are essential for early detection and prevention of diseases.'
        />
<div className="container">
    <div className="content mx-4 mt-32 mb-24">
      <NewsLeft />
<div className="max-w-[750px] mx-auto gap-[9px] mt-9 mb-12">
  <div className=" text-center justify-start text-[#20254b] text-[40px] font-medium leading-[64px]">Related Health & Wellness Articles</div>
  <div className=" text-center justify-start text-[#4a4c56] text-base font-normal leading-relaxed">Here are some related resources you may find helpful.</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {healthNewsData.slice(0,3).map((news) => (
        <Link href={`/healthnews/${news.slug}`} key={news.id} className="col-span-1">
          <div className="bg-white rounded-2xl border border-[#EAECF0] transition-all duration-300 hover:shadow-md h-full">
            <div className="relative w-full aspect-[3/2] rounded-t-2xl overflow-hidden">
              <Image 
                src={news.image} 
                alt={news.title} 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Image 
                  src={calender} 
                  alt="calendar" 
                  width={20} 
                  height={20}
                  className="text-[#4A4C56]"
                />
                <span className="text-[#4A4C56] text-sm">{news.date}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-[#1D1F2C] text-xl font-semibold line-clamp-2">{news.title}</h3>
                <p className="text-[#4A4C56] text-base">{news.description}</p>
              </div>
              <div className="flex items-center gap-2 text-[#777980] group">
                <span className="font-medium underline">Learn More</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>


    </div>
</div>
</>
    
  )
}

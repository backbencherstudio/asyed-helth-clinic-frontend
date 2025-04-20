import { healthNewsData } from '@/demoAPI/healthData'
import calender from '@/public/healthnews/icon/calendar.svg'

import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa"



export default function HealthNewsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {healthNewsData.map((news) => (
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
              <button  className="flex cursor-pointer items-center gap-2 text-[#777980] group">
                <span className="font-medium underline">Learn More</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

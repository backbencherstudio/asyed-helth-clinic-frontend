import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineCalendarMonth } from "react-icons/md";

function BlogCard({item}:any) {
  return (
    <div className=' p-[10px] border border-bgcolorColor flex flex-col h-[462px] justify-between rounded-2xl'>
       <div className=' rounded-t-2xl overflow-hidden '>
        <Image src={item.image} alt={item.title} width={450} height={250}  className='w-full h-auto hover:scale-110 transition-all'/>
       </div>
       <div className=' pr-10 p-6'>
        
            <p className=' text-pragraphColor flex gap-2 items-center  text-base leading-[130%]'><MdOutlineCalendarMonth/> {item.date}</p>
             <h3 className='text-xl text-secondHeaderColor leading-[130%] pt-3 pb-2  '>{item.title}</h3>
             <p className=' text-pragraphColor font-[metroR] text-base leading-[130%]'>{item.description}</p>
              <Link href="#" className=" text-lg text-[#20254B] flex gap-1 items-center underline font-[metroM] mt-6">Learn More <FiArrowUpRight size={18} /></Link>
       </div>
    </div>
  )
}

export default BlogCard

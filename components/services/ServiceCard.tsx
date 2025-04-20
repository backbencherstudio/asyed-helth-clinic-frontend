"use client"
import Image from "next/image"
import { useState } from "react"
import { FiArrowUpRight } from "react-icons/fi"
function ServiceCard({ item }: any) {
  const [ismove, setIsmove] = useState<boolean>(false)
  return (
    <div>
      <div
        onMouseEnter={() => setIsmove(true)}
        onMouseLeave={() => setIsmove(false)}
        className={`px-6 py-8 rounded-xl border group bg-whiteColor flex flex-col justify-between h-[352px]  duration-300 group
hover:bg-PrimaryColor transition-colors text-secondHeaderColor border-[#EAECF0]
            }`}
      >
        <div className="flex justify-between items-start ">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="relative">
              <Image src={item.hoverImage} alt={item.title} width={46} height={46} className={`w-full ${!ismove ? "opacity-0" : "opacity-100"}`} />
              <Image src={item.icon} alt={item.title} width={46} height={46} className={`w-full absolute top-0 left-0 ${!ismove ? "opacity-100" : "opacity-0"}`} />
            </div>
          </div>
        </div>
        <div>
 <h3
          className={`lg:text-xl text-lg font-semibold mb-4 group-hover:text-whiteColor transition-colors text-secondHeaderColor
              }`}
        >
          {item.title}
        </h3>
        <p className={`text-base text-pragraphColor transition-colors group-hover:text-whiteColor leading-[160%] }`}>
          {item.description}
        </p>
        
        </div>
       
        <button
          className={`w-10 h-10 cursor-pointer group-hover:text-whiteColor group-hover:border-0 group-hover:bg-seconderyColor rounded-full flex items-center justify-center  
                    text-PrimaryColor border border-[#EAECF0] transition-colors
                }`}
        >
          <FiArrowUpRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default ServiceCard

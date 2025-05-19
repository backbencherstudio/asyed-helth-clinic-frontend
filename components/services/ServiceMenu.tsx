"use client";
import { categoysubItems } from "@/demoAPI/serviceMenu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ServiceMenu = ({ setIsShow }: any) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="flex max-w-7xl mx-auto mb-10  bg-whiteColor rounded-md overflow-hidden shadow-xl z-50">
      {/* Left Side: Categories */}
      <div className="w-1/3 bg-gray-50 border-r">
        <ul className="">
          {Object.keys(categoysubItems).map((category:any) => (
            <li
              key={category}
              className={`p-4  flex items-center gap-2 text-lg text-black font-medium   duration-300 ease-in-out transition-all  cursor-pointer hover:bg-white ${
                activeCategory === category ? "bg-white text-seconderyColor pl-6" : " text-black"
              }`}
              onMouseEnter={() => setActiveCategory(category)}
            >
             {activeCategory === category ? <Image src="/logo/medicale.svg" alt=" item " width={20} height={20} /> :<Image src="/logo/22Icon.svg" alt=" item " width={21} height={21} /> }{category}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 p-6">
        {activeCategory && (
          <>
            <h3 className="text-3xl  font-semibold text-PrimaryColor mb-4">{activeCategory}</h3>
            <ul className="space-y-3">
              {categoysubItems[activeCategory]?.map((item) => (
                <li key={item.path}>
                  <Link
                    href={`/services/${item.path}`}
                    onClick={() => setIsShow(false)}
                    className="text-black text-lg  hover:text-seconderyColor transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceMenu;

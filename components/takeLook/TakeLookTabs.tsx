'use client';

import { lookData } from '@/demoAPI/look';
import Image from 'next/image';
import H2 from '../reusable/H2';



const TakeLookTabs = () => {



  return (
    <section className="max-w-[77rem] mx-auto px-4 py-12 lg:py-24">
      {/* Tabs */}
      <div className=' text-center pb-9' >
        <H2>Explore Our Clinic</H2>
        <p className="text-pragraphColor  leading-[160%] mt-3 max-w-[620px] mx-auto text-base lg:max-w-xl lg:px-12">Take o tour welcoming spaces and  cutting Edge facilities</p>
      </div>

      {/* <div className=" pb-12">
        <div className="lg:flex justify-start bg-[#F6F8FA] lg:p-1 p-4 lg:rounded-full  ">

          <button
            className={`xl:px-10  px-8  lg:py-3 py-3  cursor-pointer rounded-full font-medium text-sm md:text-base whitespace-nowrap transition  bg-[#88C240] text-white
              `}
          >
            All
          </button>

        </div>
      </div> */}
      <div className="mt-4 columns-2 sm:columns-3 lg:columns-4" style={{ columnGap: "1rem" }}>
        {lookData.length > 0 ? (
          lookData.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-4 w-full flex flex-col items-center text-center"
            >
              {/* using native img keeps natural image height so masonry works */}
              <Image
                src={item.logo || item.logo}
                alt={item.name}
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-pragraphColor col-span-4 mt-10 text-2xl">
            No Take Look Found...
          </p>
        )}
      </div>
    </section>
  );
};

export default TakeLookTabs;

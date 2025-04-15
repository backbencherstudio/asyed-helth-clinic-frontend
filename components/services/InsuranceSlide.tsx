"use client";
// components/LogoCarousel.tsx
import ins1 from "@/public/logo/insurance1.svg";
import ins2 from "@/public/logo/insurance2.svg";
import ins3 from "@/public/logo/insurance3.svg";
import ins4 from "@/public/logo/insurance4.svg";
import ins5 from "@/public/logo/insurance5.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

function InsuranceSlide() {
        const logos = [
  { src: ins1,  },
  { src: ins2, },
  { src: ins3,  },
  { src: ins4,  },
  { src: ins5,  },
  { src: ins2, },
];
  return (
    <div className=" py-6">
      <Splide
                 options={{
                   type: "loop",
                   perPage: 5,
                   autoplay: true,
                   interval: 0, // Continuous scroll effect
                   speed: 20500, // Smooth transition
                   easing: "linear",
                   arrows: false,
                   pagination: false,
                   pauseOnHover: false,
                   drag: false,
                   breakpoints: {
                     1280: { perPage: 5 }, // md: 4 per page
                     1024: { perPage: 4 }, // md: 4 per page
                     640: { perPage: 3 }, // sm: 3 per page
                     // 420: { perPage: 2 }, // xs: 2 per page
                   },
                 }}
                 className="flex justify-center items-center"
               >
                 {logos.map((logo, index) => (
                   <SplideSlide key={index} className="flex gap-5 justify-center">
                     <Image
                       src={logo.src}
                       alt="insurance-image"
                       className="w-20 md:w-24 lg:w-40 h-auto "
                     />
                   </SplideSlide>
                 ))}
               </Splide>
    </div>
  )
}

export default InsuranceSlide

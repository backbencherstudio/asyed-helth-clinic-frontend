import { StaticImageData } from "next/image";
import Image from "next/image";

interface ServiceBannerProps {
  image: StaticImageData | string;
  title: string;
  description: string;
}

function ServiceBanner({ image, title, description }: ServiceBannerProps) {
  return (
    <div className="relative w-full h-[530] md:h-[450px] lg:h-[482px] ">
      <Image
        src={image}
        alt={title}
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
        className="w-full h-[530px] md:h-[450px] lg:h-[482px] object-cover lg:object-none"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(1, 19, 8, 0.84) 100%)",
        }}
      >
        <div className="flex items-center px-5 md:px-5 h-full  lg:px-0 text-white max-w-[1200px] mx-auto pb-[74px]">
          <div className="max-w-4xl flex items-end h-full">
            <div>
            <div className="max-w-[602px] justify-start text-white text-[40px] font-medium leading-[64px]">
                {title}
              </div>
              <div className="max-w-[608px] justify-start text-white text-base font-normal leading-relaxed">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner; 
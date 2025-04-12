import aboutBanner from "@/public/about/aboutbanner.jpg";
import Image from "next/image";

function AboutBanner() {
  return (
    <div className="relative w-full">
      <Image
        src={aboutBanner}
        alt="Banner about"
        width={1920}
        height={700}
        className="w-full h-[630px] md:h-[450px] lg:h-[500px] xl:h-auto object-cover lg:object-none"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(1, 19, 8, 0.84) 100%)",
        }}
      >
        <div className="flex items-center px-5 h-full md:px-10 lg:px-20 text-white max-w-[82.5rem] mx-auto pb-[74px]">
          <div className="max-w-4xl flex items-end h-full">
            <div>
              <h2 className="text-4xl md:text-[42px] md:pr-48 lg:pr-0 lg:text-[60px] font-bold leading-[130%]">
                Compassionate Care, Trusted Expertise
              </h2>
              <p className="mt-4 text-base leading-[150%] md:pr-20">
                Committed to compassionate care, innovative treatments, and your well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;

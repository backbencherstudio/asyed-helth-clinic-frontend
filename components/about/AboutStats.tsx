'use client';

import CountUp from 'react-countup';

const AboutStats = () => {
  return (
    <section className="lg:py-32 py-14">
      <div className="max-w-[77rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 xl:gap-[112px] items-center">
        {/* Left Side Text */}
        <div className=' lg:col-span-3'>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-headerColor leading-tight">
            Your Reliable Partner in Health and Wellness
          </h2>
          <p className="mt-5 text-pragraphColor text-base leading-[160%]">
            At <span className="text-PrimaryColor font-semibold leading-[160%]">North Ave Immediate Care</span>, our story began with a shared belief: everyone deserves high-quality healthcare, delivered with compassion and excellence.
          </p>
          <p className="mt-4 text-pragraphColor text-base leading-[160%]">
            Founded in [Year], our journey started as a small clinic with a simple mission—to provide affordable, patient-centered care to our community. Over the years, we have grown into a trusted healthcare provider, expanding our services while staying true to our core values of integrity, innovation, and compassion.
          </p>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 lg:col-span-2 mt-8 lg:mt-0   relative bo">
          <div className='my-8 mx-4 lg:mx-9 '>
            <h3 className="lg:text-4xl text-3xl  !font-[gellixM] text-seconderyColor">
              <CountUp end={20} duration={2} />+
            </h3>
            <p className="text-base text-pragraphColor mt-2">Years Of Expertise</p>
          </div>

          <div className='my-8 mx-4 lg:mx-9 '>
            <h3 className="lg:text-4xl text-3xl  !font-[gellixM] text-seconderyColor">
              <CountUp end={500} duration={2.5} suffix="K" />+
            </h3>
            <p className="text-base text-pragraphColor mt-2">Hi-Tech Medical Tools</p>
          </div>

          <div className='my-8 mx-4 lg:mx-9 '>
            <h3 className="lg:text-4xl text-3xl  !font-[gellixM] text-seconderyColor">
              <CountUp end={300} duration={2} suffix="K" />+
            </h3>
            <p className="text-base text-pragraphColor mt-2">Patients Served Every Day</p>
          </div>

          <div className=' my-8 mx-4 lg:mx-9  '>
            <h3 className="lg:text-4xl text-3xl  !font-[gellixM] text-seconderyColor">
              <CountUp end={90} duration={2} suffix="K" />+
            </h3>
            <p className="text-base text-pragraphColor mt-2">Professional Medical Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

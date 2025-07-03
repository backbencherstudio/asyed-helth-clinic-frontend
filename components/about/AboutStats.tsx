'use client';

import CountUp from 'react-countup';

const AboutStats = () => {
  return (
    <section className="lg:py-32 py-14">
      <div className="max-w-[77rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 xl:gap-[32px] items-center">
        {/* Left Side Text */}
        <div className=' lg:col-span-3'>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-headerColor leading-tight">
            Your Reliable Partner in Health and Wellness
          </h2>
          <p className="mt-5 text-pragraphColor text-base leading-[160%]">
            At <span className="text-PrimaryColor font-semibold leading-[160%]">North Ave Immediate Care</span>,  we believe quality healthcare should be accessible, efficient, and compassionate. Our mission is to provide walk-in medical care that meets the needs of individuals and families with professionalism and heart.
          </p>
          <p className="mt-4 text-pragraphColor text-base leading-[160%]">
            What started as a single location focused on urgent care has expanded into a trusted neighborhood provider known for delivering <span className="text-PrimaryColor font-semibold leading-[160%]"> timely care, personalized service, and clinical excellence</span>. Whether you're managing a chronic condition, treating an unexpected illness, or simply staying ahead on wellness, we’re here to support you—every step of the way.”

          </p>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 lg:col-span-2 mt-8 lg:mt-0   relative bo">
          <div className='my-8 mx-4 lg:mx-5 '>
            <h3 className="text-xl  !font-[gellixM] text-seconderyColor">
              <CountUp end={10} duration={2} />+ Years of Experience

            </h3>
            <p className="text-base text-pragraphColor mt-2">A decade of delivering dependable care you can trust</p>
          </div>

          <div className='my-8 mx-4 lg:mx-5 '>
            <h3 className="text-xl  !font-[gellixM] text-seconderyColor">
              State-of-the-Art Facilities
            </h3>
            <p className="text-base text-pragraphColor mt-2"> Equipped with modern technology for fast and accurate care.</p>
          </div>

          <div className='my-8 mx-4 lg:mx-5 '>
            <h3 className="text-xl  !font-[gellixM] text-seconderyColor">
              Seamless Walk-In & Virtual Options
            </h3>
            <p className="text-base text-pragraphColor mt-2">Access care your way—with no appointments needed.
            </p>
          </div>

          <div className=' my-8 mx-4 lg:mx-5  '>
            <h3 className="text-xl  !font-[gellixM] text-seconderyColor">
              Compassionate, Patient-Centered Care
            </h3>
            <p className="text-base text-pragraphColor mt-2"> Every visit is guided by empathy, respect, and clinical excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

import phone from "@/public/resources/call.svg";
import Bannerimg from '@/public/resources/img/banner4.png';
import img1 from "@/public/resources/img/img1.png";
import img2 from "@/public/resources/img/img2.png";
import img3 from "@/public/resources/img/img3.png";
import Image from "next/image";
import Banner from '../_components/banner';

const paymentCards = [
  {
    image: img1,
    title: "Sign In & Pay Online",
    description: "Schedule an online payment from a bank account or credit card. Fees may apply."
  },
  {
    image: img2,
    title: "Pay as a Guest Online",
    description: "Make a one-time expedited payment by e check, credit or debit card."
  },
  {
    image: img3,
    title: "Payment Arrangements",
    description: "If you are having difficulty paying your bill, we may be able to help."
  }
];

export default function Resources() {
  return (
    <>
      <div className="start">

        <Banner
          image={Bannerimg}
          title='Secure & Convenient Payment Options'
          description='Pay My Bill – Fast, Secure & Convenient Payment Options'
        />

        <div className="container">
          <div className="content mx-4 mt-32 mb-24">
            <div className="first mb-10 flex lg:flex-row flex-col items-center justify-between">
              <div className="max-w-[746px] gap-4">
                <div className="justify-start text-[#20254b] text-[40px] font-semibold leading-[52px] mb-4">
                  Easily Manage Your Medical Bills Online
                </div>
                <div className="justify-start">
                  <span className="text-[#4a4c56] text-base font-normal leading-relaxed">
                    At{" "}
                  </span>
                  <span className="text-[#20254b] text-base font-normal leading-relaxed">
                    NORTH AVE Immediate Care
                  </span>
                  <span className="text-[#4a4c56] text-base font-normal leading-relaxed">
                    , we make it easy for you to pay your medical bills quickly
                    and securely. Whether you prefer online payments, phone
                    payments, or in-person transactions, we offer multiple
                    convenient options to fit your needs.
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#f6f8fa] rounded-xl max-w-fit mt-10 lg:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={phone} alt="Phone icon" width={32} height={32} />
                  <h2 className="text-[#20254b] text-2xl font-semibold">
                    REACH US BY PHONE
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[#777980] text-center">
                    350 W North Ave, <br /> Addison, IL 60101, USA
                  </p>
                  <p className="text-[#303b8d] text-center">
                    000 000 0000
                  </p>
                </div>
              </div>
            </div>

            <div className="second mb-11 flex lg:flex-row items-center justify-between">
              <div className="max-w-[531px]">
                <div className="text-black text-[40px] font-semibold leading-[52px]">How to Pay Your Bill</div>
                <div className="text-[#4a4c56] text-base font-normal mt-4 leading-relaxed">We offer multiple ways to pay your bill to ensure convenience and flexibility:</div>
              </div>
              <div className="w-[196px] p-4 bg-[#303b8d] rounded-[40px] justify-center items-center gap-3 hidden lg:flex">
                <div className="text-white text-lg text-center font-medium leading-normal">Make Payment</div>
              </div>
            </div>

            <div className="third grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentCards.map((card, index) => (
                <div key={index} className="w-full px-3 pt-3 pb-4 bg-[#f6f8fa] rounded-xl flex flex-col justify-start items-center gap-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[233px] rounded-xl object-cover"
                  />
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="text-center text-[#20254b] text-2xl font-medium leading-[31.20px]">
                      {card.title}
                    </div>
                    <div className="text-center text-[#4a4c56] text-lg font-normal leading-[28.80px]">
                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

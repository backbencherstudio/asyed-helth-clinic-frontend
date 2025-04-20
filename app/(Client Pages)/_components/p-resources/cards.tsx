import img2 from '@/public/resources/creditcard.svg'
import img3 from '@/public/resources/list.svg'
import img4 from '@/public/resources/thumb.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUp } from "react-icons/fa"

const resourceCards = [
  {
    id: 1,
    title: "Pay My Bill",
    description: "We make it easy for you to pay your medical bills quickly and securely.",
    image: img2,
    link: "Pay Bill",
    path:"pay-my-bill"
  },
  {
    id: 2,
    title: "View Lab Results",
    description: "We make it easy for you to pay your medical bills quickly and securely.",
    image: img3,
    link: "Lab Results",
      path:"lab-results"
  },
  {
    id: 3,
    title: "Self P-ay Pricing & Payment",
    description: "We make it easy for you to pay your medical bills quickly and securely.",
    image: img4,
    link: "Call for Pricing",
      path:"self-pay-pricing-payment"
  }
];

const Cards = () => {
  return (
    <div className="cards grid grid-cols-3 gap-10 sm:mb-32 mb-10">
      {resourceCards.map((card) => (
        <div key={card.id} className="card col-span-3 md:col-span-1">
          <div className="px-6 py-5 bg-white rounded-xl outline-1 outline-offset-[-1px] outline-[#eaecf0] inline-flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="w-12 h-12 relative bg-[#f5faeb] rounded-lg overflow-hidden flex justify-center items-center">
                <Image src={card.image} alt={card.title} className='w-6 h-6 object-cover' />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-[#20254b] text-2xl font-medium leading-[38.40px]">{card.title}</div>
                <div className="justify-start text-[#4a4c56] text-base font-medium leading-relaxed">{card.description}</div>
              </div>
            </div>
            <div className="h-8 inline-flex justify-start items-center">
              <Link href={`/${card.path}`} className="flex items-center gap-2 text-[#303b8d] text-base font-semibold underline leading-none">
                {card.link} <FaArrowUp className='group-hover:text-[#303b8d] text-[#303b8d] rotate-45' />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards

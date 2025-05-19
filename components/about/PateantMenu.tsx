"use client"
import Link from "next/link";

function PateantMenu({ setShowp }: any) {
  const subItems = [
    { title: 'Pay My Bill', path: 'pay-my-bill' },
    { title: 'View Lab Results', path: 'lab-results' },
    { title: 'Take Look', path: 'take-look' },
    { title: 'Self-pay Pricing & Payment', path: 'self-pay-pricing-payment' },
  ];
  return (
    <div>
      <ul className="w-[250px] bg-white shadow-xl rounded-md text-[15px]">
        {subItems.map((item, index) => (
          <li key={index} className="px-4 py-[10px] text-black hover:pl-6 rounded-md hover:bg-gray-100 duration-400 transition-all">
            <Link href={`/${item.path}`} className="block text-base  hover:text-seconderyColor" onClick={() => setShowp(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PateantMenu




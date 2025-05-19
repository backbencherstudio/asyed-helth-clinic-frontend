"use client"
import Link from 'next/link';

function AboutMenu({ setShowA }: any) {
  const subItems: any = [{ title: 'About Us', path: "about-us" }, { title: 'Accepted Insurance', path: "accepted-insurance" }, { title: 'Self Pay Pricing', path: "self-pay-pricing" }, { title: 'Urgent Care or ER?', path: "urgent-care" }]
  return (
    <div>
      <ul className=" w-[200px] bg-white shadow-xl rounded-md text-[15px] z-50">
        {subItems.map((sub: any, i) => (
          <li key={i}  className="px-4 py-[10px] text-black hover:pl-6 rounded-md hover:bg-gray-100 duration-400 transition-all">
            <Link href={`/${sub?.path}`} onClick={() => setShowA(false)} className=''>
              <span className="block text-base  hover:text-seconderyColor">{sub.title}</span>
            </Link>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default AboutMenu

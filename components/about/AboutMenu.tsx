import Link from 'next/link';

function AboutMenu() {
    const subItems:any =[{title:'About Us',path:"about-us"}, {title: 'Accepted Insurance',path:"accepted-insurance"},{title:'Self-Pay ,Pricing', path:"self-pay"} ,{title:'Urgent Care or ER?', path:"urgent-care"} ]
    
    

  return (
    <div>
       <ul className="mt-2 pl-4 w-[200px] text-sm space-y-4 text-[#333] absolute top-12 left-[0px] shadow-2xl p-6 bg-white z-50">
                      {subItems.map((sub:any, i) => (
                        <li key={i}>
                          <Link href={`/${sub?.path}`}>
                            <span className="block text-base  hover:text-seconderyColor">{sub.title}</span>
                          </Link>
                        </li>
                      ))}
                     
                    </ul>
    </div>
  )
}

export default AboutMenu

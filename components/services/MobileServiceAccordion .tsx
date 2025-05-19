import { categoysubItems } from "@/demoAPI/serviceMenu";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const MobileServiceAccordion = ({ setMobileMenuOpen }: { setMobileMenuOpen: (value: boolean) => void }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleAccordion = (category: string) => {
    const el = refs.current[category];
    if (!el) return;

    const isOpen = activeCategory === category;

    if (isOpen) {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => setActiveCategory(null),
      });
    } else {
      if (activeCategory && refs.current[activeCategory]) {
        gsap.to(refs.current[activeCategory]!, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      gsap.set(el, { height: "auto", opacity: 1 });
      const height = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height,
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        }
      );

      setActiveCategory(category);
    }
  };

  return (
    <div className="mt-4">
      {Object.entries(categoysubItems).map(([category, data]) => (
        <div key={category} className="border-b mb-3">
          {/* Header */}
          <button
            onClick={() => toggleAccordion(category)}
            className="w-full flex justify-between items-center text-left text-base font-[gellixM] font-medium text-[#1D1F2C] py-2"
          >
            {category}
            <FaChevronDown
              className={`text-xs transition-transform duration-300 ${
                activeCategory === category ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Sub-items - Animate this container */}
          <div
            ref={(ref:any) => (refs.current[category] = ref)}
            className="overflow-hidden opacity-0 h-0"
          >
            <ul className="pl-4 mt-2 space-y-2">
              {data.map((link) => (
                <li key={link.path}>
                  <Link
                    href={`/services/${link.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base  font-[gellixM]  text-black transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileServiceAccordion;

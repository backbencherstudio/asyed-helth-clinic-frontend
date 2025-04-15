"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { GoStarFill } from "react-icons/go"
import doc1 from "@/public/services/image/doc1.png"
import doc2 from "@/public/services/image/doc2.png"
import doc3 from "@/public/services/image/doc3.png"
import doc4 from "@/public/services/image/doc4.png"

type Specialist = {
  id: number
  name: string
  specialty: string
  rating: number
  totalRatings: number
  image: any
}

export default function SpecialistsSlider() {
  const specialists: Specialist[] = [
    {
      id: 1,
      name: "Dr. Amer Helbaoui",
      specialty: "Internal Medicine",
      rating: 4.5,
      totalRatings: 48,
      image: doc1
    },
    {
      id: 2,
      name: "Dr. Rajeev Bhandula",
      specialty: "Endocrinology",
      rating: 4.6,
      totalRatings: 48,
      image: doc2
    },
    {
      id: 3,
      name: "Dr. Nisrine Al Ghazal",
      specialty: "Internal Medicine",
      rating: 4.5,
      totalRatings: 48,
      image: doc3
    },
    {
      id: 4,
      name: "Dr. Pavan Kumar",
      specialty: "Endocrinology",
      rating: 4.3,
      totalRatings: 48,
      image: doc4
    },
    {
      id: 5,
      name: "Dr. Pavan Kumar",
      specialty: "Endocrinology",
      rating: 4.3,
      totalRatings: 48,
      image: doc2
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardWidth = 282 // Width of each card
  const cardGap = 24 // Gap between cards
  const visibleCards = 4 // Number of visible cards

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? specialists.length - visibleCards : prev - 1
      return newIndex
    })
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => {
      const newIndex = prev === specialists.length - visibleCards ? 0 : prev + 1
      return newIndex
    })
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="w-[1200px] inline-flex flex-col justify-start items-start gap-12">
      {/* Title and View All Button */}
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="w-[650px] justify-start text-[#20254b] text-[40px] font-semibold leading-[52px]">
          Our Specialists
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-[542px] justify-start text-[#4a4c56] text-base font-medium capitalize leading-relaxed">
            Embrace personalized, state-of-the-art care that sets the bar high in both professional and academic standards.
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="px-6 py-[13px] bg-[#303b8d] rounded-[40px] flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-lg font-medium">View All</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialists Cards */}
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-[-55px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 text-[#303b8d]" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
            }}
          >
            {specialists.map((specialist) => (
              <div 
                key={specialist.id} 
                className="w-[282px] p-4 bg-[#f7f9fd] rounded-2xl inline-flex flex-col justify-start items-start gap-3 flex-shrink-0"
              >
                <div className="self-stretch h-[250px] relative rounded-[999px] overflow-hidden">
                  <Image 
                    src={specialist.image} 
                    alt={specialist.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                  <div className="self-stretch justify-start text-[#20254b] text-xl font-semibold leading-normal">
                    {specialist.name}
                  </div>
                  <div className="self-stretch justify-start">
                    <span className="text-[#1d1f2c] text-base font-medium leading-tight">Specialties:</span>
                    <span className="text-[#4a4c56] text-base font-normal leading-tight"> {specialist.specialty}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="w-[222px] inline-flex justify-start items-center gap-2">
                    <GoStarFill className="w-5 h-5 text-[#faad14]" />
                    <div className="justify-start text-[#4a4c56] text-base font-medium leading-7">
                      {specialist.rating.toFixed(1)}/5.0 ({specialist.totalRatings} Ratings)
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-55px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#303b8d] rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-[#253075] transition-colors"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}
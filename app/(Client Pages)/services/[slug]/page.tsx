'use client'
import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowBack } from "react-icons/io5";
import Bannerimg from "@/public/banner/serviceBanner.png";
import Banner from '@/app/(Client Pages)/_components/banner'
import { cardData } from '../serviceData'

export default function ServiceDetails() {
  const searchParams = useSearchParams()
  const params = useParams()
  const slug = params.slug as string;

  const service = cardData.find(card => 
    card.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Banner 
        image={Bannerimg}
        title="Service Details"
        description="Learn more about our comprehensive healthcare services"
      />
      <div className="container mx-auto px-4 py-8">
        <Link href="/services" className="inline-flex items-center text-[#77B032] hover:text-[#5c8627] mb-6">
          <IoArrowBack className="mr-2" />
          Back to Services
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-gray-600 mb-6">{service.longDescription}</p>
            
            {service.understanding && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{service.understanding.title}</h2>
                <p className="text-gray-600">{service.understanding.description}</p>
              </div>
            )}

            {service.symptoms && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Symptoms</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {service.symptoms.map((symptom, index) => (
                    <li key={index} className="mb-2">{symptom}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.whenToSeek && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Seek Care</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {service.whenToSeek.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.homeRemedies && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Home Care Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.homeRemedies.map((remedy, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{remedy.title}</h3>
                      <p className="text-gray-600">{remedy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 
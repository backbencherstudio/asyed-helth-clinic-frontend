import React from 'react'
import Image from 'next/image'
import image1 from '@/public/healthnews/image/newsleft.png'
import HealthNewsCards from '../health-news/card'
import HealthNewsCards2 from '../health-news/card2'
import cardlogo from '@/public/healthnews/image/healthlogo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import Link from 'next/link'

export default function NewsLeft() {
  const socialLinks = [
    { icon: <FaFacebookF size={18} />, href: "#" },
    { icon: <FaTwitter size={18} />, href: "#" },
    { icon: <FaLinkedinIn size={18} />, href: "#" },
    { icon: <FaInstagram size={18} />, href: "#" },
  ]

  return (
    <div className="max-w-[77rem] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <div className="space-y-8">
            {/* Introduction Text */}
            <p className="text-pragraphColor text-base leading-relaxed">
              Routine health checkups are essential for early detection and prevention of diseases. Many health conditions, such as high blood pressure, diabetes, and heart disease, develop silently without noticeable symptoms. Regular visits to your doctor can help identify these issues early, ensuring timely treatment and better health outcomes.
              <br/><br/>
              Many diseases develop silently, showing no symptoms until they become severe. Regular checkups help detect potential health issues early, allowing for timely intervention and better outcomes. Preventive care is the key to a longer, healthier life and reduces the risk of chronic conditions such as heart disease, diabetes, cancer, and hypertension.
            </p>

            {/* Key Benefits Section */}
            <div className="space-y-6">
              <h2 className="text-secondHeaderColor text-[28px] font-semibold">Key Benefits of Regular Checkups</h2>
              
              {/* Benefits List */}
              <div className="space-y-6">
                {/* Early Detection */}
                <div className="space-y-4">
                  <h3 className="text-secondHeaderColor text-base font-medium">Early Detection & Prevention of Diseases</h3>
                  <p className="text-pragraphColor text-base leading-relaxed">
                    Many serious illnesses develop silently, showing no symptoms in their early stages. Conditions like high blood pressure, diabetes, heart disease, and cancer can progress unnoticed until they cause significant health issues. Regular checkups and screenings help detect these conditions early, allowing for timely treatment and better health outcomes.
                  </p>
                </div>

                {/* Preventive Care */}
                <div className="space-y-4">
                  <h3 className="text-secondHeaderColor text-base font-medium">Personalized Preventive Care</h3>
                  <p className="text-pragraphColor text-base leading-relaxed">
                    Preventive care is not one-size-fits-all—it should be customized based on your age, lifestyle, medical history, and risk factors. Personalized preventive care focuses on early detection, disease prevention, and proactive health management, ensuring you receive the most relevant screenings, lifestyle advice, and interventions tailored to your unique health needs.
                  </p>
                </div>

                {/* Image Section */}
                <div className="space-y-4">
                  <Image 
                    src={image1} 
                    alt="Health Checkup" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="space-y-4">
                    <h3 className="text-secondHeaderColor text-base font-medium">Mental Health & Emotional Well-Being</h3>
                    <p className="text-pragraphColor text-base leading-relaxed">
                      Mental health and emotional well-being are fundamental aspects of overall health, influencing how we think, feel, and act in our daily lives. They also affect how we handle stress, relate to others, and make decisions. Maintaining good mental health is as important as physical health.
                    </p>
                  </div>
                </div>

                {/* Lifestyle */}
                <div className="space-y-4">
                  <h3 className="text-secondHeaderColor text-base font-medium">Improved Lifestyle & Longevity</h3>
                  <p className="text-pragraphColor text-base leading-relaxed">
                    Living an improved lifestyle is a key factor in boosting longevity and quality of life. By making mindful choices about diet, physical activity, emotional health, and overall well-being, you can significantly increase your chances of living a longer, healthier life.
                  </p>
                </div>

                {/* Cost Savings */}
                <div className="space-y-4">
                  <h3 className="text-secondHeaderColor text-base font-medium">Cost Savings on Healthcare Expenses</h3>
                  <p className="text-pragraphColor text-base leading-relaxed">
                    Adopting a healthy lifestyle not only benefits your physical and mental well-being but can also lead to significant cost savings on healthcare expenses. By preventing chronic conditions, avoiding hospital visits, and reducing the need for medical treatments, you can lower both immediate and long-term healthcare costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Health News */}
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <h2 className="text-secondHeaderColor text-2xl font-semibold mb-6">Latest Articles</h2>
            <HealthNewsCards2 />

            {/* Social Media Card */}
            <div className="mt-6 px-4 py-6 bg-[#f1f6ff] rounded-lg">
              <div className="space-y-4">
                <Image 
                  src={cardlogo} 
                  alt="Health Logo" 
                  className="w-[155px] h-auto"
                />
                <p className="text-[#1d2939] text-base leading-relaxed">
                  Healthcare and medical insights involve understanding the latest trends, innovations, and practices that shape the way we manage our health and access medical care. This includes advancements in treatments, technologies, approaches to disease prevention, and personalized medicine.
                </p>
                <div className="flex gap-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <Link 
                      key={index} 
                      href={social.href}
                      className="w-9 h-9 rounded-full border border-[#1d2939] flex items-center justify-center text-[#1d2939] hover:bg-[#303b8d] hover:border-[#303b8d] hover:text-white transition-all duration-300"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

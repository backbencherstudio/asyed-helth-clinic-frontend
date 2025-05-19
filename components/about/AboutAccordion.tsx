'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    id: 'faq-110',
    question: 'Do you accept insurance?',
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  {
    id: 'faq-1',
    question: 'What insurance plans do you accept?',
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  {
    id: 'faq-2',
    question: 'Is my specific procedure covered by insurance?',
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  {
    id: 'faq-3',
    question: 'How can I verify my insurance coverage before my appointment?',
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  {
    id: 'faq-4',
    question: "What if I don't have insurance?",
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  {
    id: 'faq-5',
    question: 'Can I get an estimate of the cost for my procedure before scheduling it?',
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  {
    id: 'faq-6',
    question: 'Are there any additional should be aware Of?',
    answer: 'We provide a wide range of healthcare services, including primary care, specialist consultations, urgent care, diagnostic testing, vaccinations, mental health support, and minor procedures.',
  },
  
];

const AboutAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('faq-0');
console.log(openItem);

  return (
    <div className=" mx-auto px-4 py-12 space-y-6">
      {/* Accordion List */}
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={(val) => setOpenItem(val)}
        className=""
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={`border-b-0 pl-6  py-2 ${
    openItem === item.id ? 'bg-bgSecondColor rounded-2xl ' : ''}`}
          >
            <AccordionTrigger className={` cursor-pointer text-left text-base text-[#0B0F2F] font-medium hover:no-underline after:hidden !pr-0`}>
              <h4 className=' text-xl !font-[gellixM] text-headerColor'>{item.question}</h4>
              <span className="ml-auto">
                {openItem === item.id ? (
                  <Minus className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Plus className="w-4 h-4 text-muted-foreground" />
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-base text-pragraphColor !font-[metroM] mr-10 ">
              {item.answer || 'Answer coming soon...'}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AboutAccordion;

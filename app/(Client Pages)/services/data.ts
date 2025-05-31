import { StaticImageData } from 'next/image';
import img1 from "../../../public/services/image/1.png";
import img2 from "../../../public/services/image/2.png";
import img3 from "../../../public/services/image/3.png";
import img4 from "../../../public/services/image/4.png";
import img5 from "../../../public/services/image/5.png";
import img6 from "../../../public/services/image/6.png";
import img15 from "../../../public/services/image/15.png";

interface BurnType {
  title: string;
  description: string;
}

interface HomeRemedy {
  title: string;
  description: string;
}

export interface CardData {
  image: StaticImageData;
  title: string;
  description: string;
  category: string;
  longDescription: string;
  burnTypes?: BurnType[];
  causes?: string[];
  whenToSeek?: string[];
  homeRemedies?: HomeRemedy[];
  symptoms?: string[];
  commonLocations?: string[];
  commonInjuries?: string[];
  signs?: string[];
  understanding?: {
    title: string;
    description: string;
  };
}

const cardData: CardData[] = [
  {
    image: img1,
    title: "Burn Treatment",
    description: "Expert care for minor to moderate burns with focus on pain relief and infection prevention.",
    category: "Injury Care",
    longDescription: `Burns can happen unexpectedly—whether from a hot surface, scalding liquid, open flame, or chemical exposure. At North Ave Immediate Care in Addison, IL, we provide fast, expert care for minor to moderate burns. Our goal is to relieve your pain, prevent infection, and promote proper healing while minimizing the risk of scarring.`,
    burnTypes: [
      {
        title: "First-degree burns",
        description: "Affect only the outer layer of skin and usually cause redness and pain."
      },
      {
        title: "Second-degree burns",
        description: "Reach deeper layers and may cause blistering, swelling, and more intense pain."
      },
      {
        title: "Third-degree burns",
        description: "Serious injuries that require emergency care and often affect nerves, muscles, and deeper tissues."
      }
    ],
    causes: [
      "Contact with hot surfaces or steam",
      "Scalds from boiling liquids",
      "Sunburns",
      "Electrical injuries (minor)",
      "Exposure to chemicals",
      "Fire or open flames"
    ],
    whenToSeek: [
      "The burn is larger than 3 inches in diameter",
      "It affects the face, hands, feet, or groin",
      "Blistering or skin discoloration appears",
      "The burn is caused by chemicals or electricity",
      "You notice signs of infection like redness, warmth, or pus",
      "Pain continues or worsens over time"
    ],
    homeRemedies: [
      {
        title: "Cool the burn immediately",
        description: "Run cool (not cold) water over the area for 10–15 minutes."
      },
      {
        title: "Apply a soothing ointment",
        description: "Aloe vera or antibiotic cream can ease pain and prevent infection."
      },
      {
        title: "Cover with a sterile bandage",
        description: "Keep the area clean and protected."
      },
      {
        title: "Avoid popping blisters",
        description: "This increases the risk of infection."
      },
      {
        title: "Take pain relievers if needed",
        description: "Over-the-counter medications like ibuprofen can help."
      }
    ]
  },
  // Add other card data here...
];

export default cardData; 
import { StaticImageData } from "next/image";

// Import icons
import icon10 from "../../../public/services/icon/1.svg";
import icon1 from "../../../public/services/icon/10.svg";
import icon9 from "../../../public/services/icon/2.svg";
import icon8 from "../../../public/services/icon/3.svg";
import icon7 from "../../../public/services/icon/4.svg";
import icon6 from "../../../public/services/icon/5.svg";
import icon5 from "../../../public/services/icon/6.svg";
import icon4 from "../../../public/services/icon/7.svg";
import icon3 from "../../../public/services/icon/8.svg";
import icon2 from "../../../public/services/icon/9.svg";

// Import images
import img1 from "../../../public/services/image/1.png";
import img11 from "../../../public/services/image/11.png";
import img13 from "../../../public/services/image/13.png";
import img14 from "../../../public/services/image/14.png";
import img15 from "../../../public/services/image/15.png";
import img2 from "../../../public/services/image/2.png";
import img22 from "../../../public/services/image/22.png";
import img23 from "../../../public/services/image/23.png";
import img24 from "../../../public/services/image/24.png";
import img26 from "../../../public/services/image/26.png";
import img28 from "../../../public/services/image/28.png";
import img3 from "../../../public/services/image/3.png";
import img30 from "../../../public/services/image/30.png";
import img31 from "../../../public/services/image/31.png";
import img33 from "../../../public/services/image/33.png";
import img37 from "../../../public/services/image/37.png";
import img39 from "../../../public/services/image/39.png";
import img4 from "../../../public/services/image/4.png";
import img40 from "../../../public/services/image/40.png";
import img41 from "../../../public/services/image/41.png";
import img42 from "../../../public/services/image/42.png";
import img43 from "../../../public/services/image/43.jpg";
import img5 from "../../../public/services/image/5.png";
import img6 from "../../../public/services/image/6.png";
import img10 from "../../../public/services/image/9.png";
import img7 from "../../../public/services/image/immu.jpg";
import img9 from "../../../public/services/image/lab.jpg";

// Interfaces
export interface BurnType {
  title: string;
  description: string;
}

export interface HomeRemedy {
  title: string;
  description: string;
}

export interface Understanding {
  title: string;
  description: string;
}

export interface ServiceCard {
  hangovers: string;
  slug: string;
  image: StaticImageData;
  title: string;
  description: string;
  category: string;
  longDescription: string;
  burnTypes?: BurnType[];
  causes?: string[];
  whenToSeek?: string[];
  homeRemedies?: HomeRemedy[];
  understanding?: Understanding;
  symptoms?: string[];
  commonInjuries?: string[];
  signs?: string[];
  commonLocations?: string[];
  prevention?: string[];
  treatments?: string[];
  riskFactors?: string[];
  complications?: string[];
  diagnosis?: string[];
  testTypes?: { title: string; description: string }[];
  conditions?: string[];
  procedures?: { title: string; description: string }[];
  benefits?: string[];
  preparation?: string[];
  afterCare?: string[];
  vaccineTypes?: { title: string; description: string }[];
  recommendations?: string[];
}

export interface Service {
  name: string;
  icon: StaticImageData;
}

export const services: Service[] = [
  { name: "Common Illnesses", icon: icon1 },
  { name: "Injury Care", icon: icon2 },
  { name: "Medical Procedures", icon: icon3 },
  { name: "Kids' Health", icon: icon4 },
  { name: "Physical Exams", icon: icon5 },
  { name: "Vaccines & Shots", icon: icon6 },
  { name: "Diabetes Wellness Check", icon: icon8 },
  { name: "Skin & Rashes", icon: icon7 },
  { name: "Sexual Health", icon: icon9 },
  { name: "IV Therapy", icon: icon10 },
];

export const cardData: any[] = [
  {
    image: img9,
    slug: "tick-foreign-object-removal",
    title: "Tick & Foreign Object Removal",
    description:
      "If you or your child has a splinter, piece of glass, or a tick that won't come out, North Ave Immediate Care in Addison, IL, provides safe and sterile removal. Don't risk infection—let our team take care of it quickly and properly.",
    category: "Medical Procedures",
    longDescription: `If you or your child has a splinter, piece of glass, or a tick that won't come out, North Ave Immediate Care in Addison, IL, provides safe and sterile removal. Don't risk infection—let our team take care of it quickly and properly.`,
    understanding: {
      title: "Understanding Foreign Object Injuries",
      description:
        "Objects like wood, metal, or ticks can become embedded in the skin. Attempting removal at home can worsen the injury or lead to infection. A trained provider ensures the area is fully cleaned and safely treated.",
    },
    symptoms: [
      "Visible object under the skin",
      "Redness or swelling around the site",
      "Pain or tenderness",
      "Bleeding or drainage",
      "Incomplete removal at home",
    ],
    whenToSeek: [
      "The object is deep or not fully visible",
      "You can't remove it safely at home",
      "There's bleeding or signs of infection",
      "It's in a sensitive area (eye, nose, genitals)",
      "A tick has been attached for more than 24 hours",
    ],
    homeRemedies: [
      {
        title: "Don't dig with tools",
        description: "Improper removal can cause tissue damage.",
      },
      {
        title: "Use clean tweezers if trying at home",
        description: "But seek care if it doesn't come out easily.",
      },
      {
        title: "Watch for infection",
        description: " Redness or pus may indicate a problem.",
      },
      {
        title: "Avoid squeezing ticks",
        description: "This can push harmful bacteria into the skin.",
      },
      {
        title: "Return for follow-up if symptoms worsen",
        description: "New redness or fever may require treatment.",
      },
    ],
  },
  {
    image: img9,
    slug: "skin-tag-wart-removal",
    title: "Skin Tag & Wart Removal",
    description:
      "Treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Medical Procedures",
    longDescription: `If you're bothered by a skin tag or wart, North Ave Immediate Care in Addison, IL, offers quick, non-invasive removal options. We treat cosmetic and irritation-related growths in-office with minimal discomfort and no downtime.`,
    understanding: {
      title: "Understanding Skin Tags & Warts",
      description:
        "Skin tags are small, soft growths of skin, while warts are caused by the HPV virus. Though typically harmless, they can become irritated, bleed, or affect your confidence—especially when located in visible or high-friction areas.",
    },
    symptoms: [
      "Raised or rough skin growths",
      "Irritation from rubbing or shaving",
      "Discoloration or bleeding",
      "Itching or tenderness",
      "Rapid growth or spreading (warts)",
    ],
    whenToSeek: [
      "The growth is painful or bleeding",
      "You want cosmetic removal",
      "Your child seems very uncomfortable",
      "Over-the-counter treatments didn't work",
      "It's changing in size or color",
      "There's concern about infection",
    ],
    aftercare: [
      {
        title: "Avoid scratching",
        description: " Let the area heal without irritation.",
      },
      {
        title: " Keep the site clean and dry",
        description: "Use gentle soap and water.",
      },
      {
        title: "Watch for scabbing or redness",
        description: "Some inflammation is normal—call if it worsens.",
      },
      {
        title: "Avoid direct sun exposure",
        description: "Protect healing skin from UV damage.",
      },
      {
        title: "Follow up if regrowth occurs",
        description: " Some warts or tags may require retreatment.",
      },
    ],
  },
  {
    image: img24,
    slug: "preoperative-exams",
    title: "Preoperative Exams",
    description:
      "Treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Medical Procedures",
    longDescription: `North Ave Immediate Care in Addison, IL, offers thorough preoperative exams to ensure you're medically cleared and ready for your upcoming procedure. Our team provides same-day appointments and fast turnaround on results.`,
    understanding: {
      title: "Understanding Preoperative Exams",
      description:
        "A preoperative (pre-op) exam checks your health before surgery, identifying any risks and ensuring your body is prepared. Exams often include a physical, lab tests, EKG, and review of your medical history.",
    },
    Included: [
      "Physical exam and vital signs",
      "Bloodwork or urinalysis (as requested)",
      "EKG (if required by surgeon)",
      "Review of medications and allergies",
      "Surgical clearance forms",
    ],
    whenToSeek: [
      "Your surgeon or specialist requests it",
      "You have an upcoming outpatient or hospital procedure",
      "You need clearance for anesthesia",
      "Your surgery is within 2–4 weeks",
      "You want fast, local evaluation",
    ],
    homeRemedies: [
      {
        title: "Bring documentation",
        description: "Include your surgeon's orders and medical history.",
      },
      {
        title: "List your medications",
        description: " Include all current prescriptions and supplements.",
      },
      {
        title: "Ask questions",
        description: "We're happy to explain any part of the process.",
      },
      {
        title: "Arrive early",
        description: " This helps us stay on schedule and avoid delays.",
      },
      {
        title: "Follow-up if needed",
        description: "We'll coordinate directly with your surgical team.",
      },
    ],
  },
  {
    image: img9,
    slug: "minor-surgical-procedures",
    title: "Minor Surgical Procedures",
    description:
      "Treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Medical Procedures",
    longDescription: `North Ave Immediate Care in Addison, IL, offers same-day minor surgical procedures in a clean, sterile environment. Whether you need a biopsy, drainage, or lesion removal, our team provides expert care with minimal downtime.`,
    understanding: {
      title: "Understanding Minor Procedures",
      description:
        "Minor procedures refer to low-risk, outpatient treatments performed under local anesthesia. These are ideal for issues that don't require hospital surgery but still need medical precision and sterile technique.",
    },
    symptoms: [
      "Skin tag, cyst, or wart removal",
      "Abscess drainage",
      "Foreign body removal",
      "Simple wound repair",
      "Biopsies of skin lesions",
    ],
    whenToSeek: [
      "You need a procedure that can't be done at home",
      "There's pain, swelling, or risk of infection",
      "You want a quick, same-day treatment option",
      "You were referred by your primary care provider",
      "You prefer an urgent care setting over a hospital",
    ],
    Tips: [
      {
        title: "Keep the site clean",
        description: " Follow wound care instructions closely.",
      },
      {
        title: "Watch for signs of infection",
        description: "Redness, swelling, or pus should be evaluated.",
      },
      {
        title: "Avoid heavy activity",
        description: "Give your body time to heal properly.",
      },
      {
        title: "Use bandages as directed",
        description: "Keep the area covered until told otherwise.",
      },
      {
        title: "Return for suture removal if needed",
        description: " We'll let you know when to follow up.",
      },
    ],
  },
  {
    image: img9,
    slug: "earwax-removal",
    title: "Earwax Removal",
    description:
      "Treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Medical Procedures",
    longDescription: `Blocked ears can affect your hearing and balance. At North Ave Immediate Care in Addison, IL, we provide gentle and professional earwax removal to relieve discomfort and improve ear health. Our providers offer quick, in-office treatments to safely remove buildup.`,
    understanding: {
      title: "Understanding Earwax Buildup",
      description:
        "Earwax helps protect the ears, but too much can block the ear canal, causing symptoms like hearing loss, pain, or pressure. Removal at home can sometimes push the wax deeper—professional care ensures it's done safely.",
    },
    symptoms: [
      "Ear fullness or pressure",
      "Partial hearing loss",
      "Earache or discomfort",
      "Ringing in the ears (tinnitus)",
      "Itching or irritation",
    ],
    whenToSeek: [
      "Symptoms last more than a few days",
      "Hearing is significantly reduced",
      "Over-the-counter drops don't help",
      "There is pain or drainage",
      "You've had prior wax impaction",
    ],
    homeRemedies: [
      {
        title: "Avoid cotton swabs",
        description: "They often push wax deeper into the canal.",
      },
      {
        title: "Use approved ear drops",
        description: "Softening agents can help break down excess wax.",
      },
      {
        title: "Keep ears dry ",
        description: " Moisture can worsen blockage or lead to infection.",
      },
      {
        title: "Tilt your head after showers",
        description: " Letting water drain helps prevent buildup.",
      },
      {
        title: "Return if symptoms persist",
        description: "Professional care may be needed for full relief.",
      },
    ],
  },
  {
    image: img9,
    slug: "abscess-cyst-drainage",
    title: "Abscess & Cyst Drainage",
    description:
      "Treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Medical Procedures",
    longDescription: `If you're experiencing pain, swelling, or a visible lump under the skin, you may have an abscess or cyst. At North Ave Immediate Care in Addison, IL, we offer safe and effective drainage procedures to relieve discomfort, prevent infection, and promote proper healing. Our team provides fast, same-day treatment in a clean, supportive environment.`,
    understanding: {
      title: "Understanding Abscesses and Cysts",
      description:
        "Abscesses are pus-filled infections beneath the skin, while cysts are closed sacs that may contain fluid or other material. Though often small, they can become painful, swollen, or infected if not properly treated. Medical drainage is often necessary when home care isn't enough.",
    },
    symptoms: [
      "Red, swollen, or tender lump",
      "Warmth around the area",
      "Pain that worsens over time",
      "Pus or fluid drainage",
      "Fever (in severe cases)",
    ],
    whenToSeek: [
      "You notice signs of infection",
      "The lump is painful, growing, or not improving",
      "Pus is present or draining",
      "Home treatments aren't helping",
      "You have a fever or feel unwell",
    ],
    homeRemedies: [
      {
        title: "Keep the area clean",
        description: "Wash gently with mild soap and water.",
      },
      {
        title: "Avoid squeezing or popping",
        description: "Doing so may spread infection or worsen inflammation.",
      },
      {
        title: "Apply warm compresses",
        description: "This may help reduce swelling and promote drainage.",
      },
      {
        title: "Use over-the-counter pain relief",
        description: " Ibuprofen or acetaminophen can help manage pain.",
      },
      {
        title: "Monitor for worsening symptoms",
        description: "Seek care if redness, pain, or drainage increases.",
      },
    ],
  },
  {
    image: img10,
    slug: "rashes-skin-reactions",
    title: "Rashes & Skin Reactions",
    description:
      "Treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Kids' Health",
    longDescription: `Skin rashes are common in children and can result from allergies, infections, or irritants. At North Ave Immediate Care in Addison, IL, we diagnose and treat pediatric skin conditions with gentle care and fast relief.`,
    understanding: {
      title: "Understanding Rashes",
      description:
        "Children's skin is sensitive and can react to new foods, soaps, weather, or illness. Some rashes go away on their own, while others need medical evaluation to prevent spreading or complications.",
    },
    symptoms: [
      "Red or raised bumps",
      "Itching or irritation",
      "Peeling or blistering",
      "Fever alongside rash",
      "Swelling or spreading of the rash",
    ],
    whenToSeek: [
      "The rash is painful or spreading",
      "There's a fever or swelling",
      "Your child seems very uncomfortable",
      "The rash isn't improving after a few days",
      "You suspect an allergic reaction or infection",
    ],
    homeRemedies: [
      {
        title: "Avoid scratching",
        description: "Keep nails trimmed to prevent skin damage.",
      },
      {
        title: "Apply moisturizer",
        description: "Use gentle, fragrance-free lotions.",
      },
      {
        title: "Use cool compresses",
        description: "Helps reduce itching and inflammation.",
      },
      {
        title: "Switch to mild soaps",
        description: "Avoid irritating ingredients in skincare products.",
      },
      {
        title: "Watch for worsening",
        description: " Come in if the rash spreads or gets worse.",
      },
    ],
  },
  {
    image: img14,
    slug: "nausea-vomiting-diarrhea",
    title: "Nausea, Vomiting, & Diarrhea",
    description:
      "Fast treatment for nausea, vomiting, and diarrhea in children.",
    category: "Kids' Health",
    longDescription: `When your child is dealing with stomach issues, fast relief is key. North Ave Immediate Care in Addison, IL, offers same-day evaluation and treatment for nausea, vomiting, and diarrhea in children.`,
    understanding: {
      title: "Understanding Stomach Symptoms",
      description:
        "Digestive issues in kids are often caused by viruses, food, or dehydration. While many cases are mild, persistent symptoms can lead to fluid loss or signal a more serious condition.",
    },
    symptoms: [
      "Stomach pain or cramping",
      "Frequent vomiting",
      "Loose or watery stools",
      "Fatigue or fussiness",
      "Signs of dehydration (dry mouth, low energy)",
    ],
    whenToSeek: [
      "Vomiting or diarrhea lasts more than 24 hours",
      "Your child shows signs of dehydration",
      "They are unable to keep down fluids",
      "There's blood in vomit or stool",
      "A high fever is present",
    ],
    homeRemedies: [
      {
        title: "Offer small sips of fluids",
        description: "Water or oral rehydration drinks work best.",
      },
      {
        title: "Avoid sugary drinks",
        description: "Juice or soda can worsen diarrhea.",
      },
      {
        title: "Stick to bland foods",
        description: "If eating, choose toast, rice, or bananas.",
      },
      {
        title: "Let them rest",
        description: "Give the body time to recover.",
      },
      {
        title: "Watch for worsening symptoms",
        description: " Seek care if your child isn't improving.",
      },
    ],
  },
  {
    image: img23,
    slug: "pediatric-cold-flu-care",
    title: "Pediatric Cold & Flu Care",
    description:
      "Follow-up treatment and advice for managing nausea, vomiting, and diarrhea.",
    category: "Kids' Health",
    longDescription: `When your child has a cold or flu, quick and gentle care makes all the difference. At North Ave Immediate Care in Addison, IL, we treat common respiratory illnesses in children with compassion and expertise.`,
    understanding: {
      title: "Understanding Colds & Flu in Kids",
      description:
        "Colds and flu can lead to congestion, coughing, and fever. Children often experience stronger symptoms than adults, and it's important to monitor for worsening conditions like ear infections or pneumonia.",
    },
    symptoms: [
      "Runny nose or congestion",
      "Cough or sore throat",
      "Fever or chills",
      "Fatigue or fussiness",
      "Headache or body aches",
      "Poor appetite or trouble sleeping",
    ],
    whenToSeek: [
      "Fever lasts more than 3 days",
      "Symptoms worsen instead of improve",
      "Breathing becomes difficult",
      "Your child seems unusually drowsy",
      "There are signs of ear pain or infection",
    ],
    homeRemedies: [
      {
        title: "Use a humidifier",
        description: "Moist air helps ease breathing.",
      },
      {
        title: "Keep them hydrated",
        description: " Fluids help break up mucus and prevent dehydration.",
      },
      {
        title: "Encourage rest",
        description: "Sleep is essential for recovery.",
      },
      {
        title: "Monitor symptoms",
        description: " Bring them in if things don't improve.",
      },
    ],
  },
  {
    image: img13,
    slug: "school-sports-camp-physicals",
    title: "School, Sports, & Camp Physicals",
    description:
      "Quick treatment for rashes and skin reactions caused by allergies or infections.",
    category: "Kids' Health",
    longDescription: `Need a physical for school, sports, or camp? North Ave Immediate Care in Addison, IL, provides quick, convenient pediatric physicals to meet your child's health requirements—all in one visit.`,
    understanding: {
      title: "Understanding Pediatric Physicals",
      description:
        "These exams ensure your child is healthy and safe for participation in school or recreational activities. We check vitals, medical history, and address any health concerns.",
    },
    Included: [
      "Height, weight, and vision screening",
      "Heart and lung exam",
      "Joint and mobility check",
      "Review of vaccinations",
      "Completion of required forms",
    ],
    Schedule: [
      "Before a sports season or camp session",
      "Ahead of the school year",
      "When forms are due for school or activity enrollment",
      "If your child needs updated immunization records",
      "When there are concerns about fitness or safety",
    ],
    Preparation: [
      {
        title: "Bring the required forms",
        description: " We'll complete and sign them during your visit.",
      },
      {
        title: "Know your child's health history",
        description: "This helps us provide the best care.",
      },
      {
        title: "Wear comfortable clothes",
        description: " Easy for movement during the exam.",
      },
      {
        title: "Arrive early",
        description: "This keeps your visit efficient and smooth.",
      },
      {
        title: "Ask questions",
        description: "We're happy to explain anything during the exam.",
      },
    ],
  },
  {
    image: img28,
    slug: "minor-fractures-dislocations",
    title: "Minor Fractures & Dislocations",
    description:
      "Quick evaluation and treatment for non-life-threatening bone and joint injuries.",
    category: "Injury Care",
    sextext:
      "If you've suffered a minor fracture or dislocation, North Ave Immediate Care in Addison is here to provide fast, expert care without the long wait. Walk in today and let our team help you heal safely and confidently.",
    longDescription: `Injuries like a swollen wrist, a jammed finger, or a painful joint after a fall can be signs of a minor fracture or dislocation. At North Ave Immediate Care in Addison, IL, we offer fast, walk-in evaluation and treatment for non-life-threatening bone and joint injuries—so you don't have to wait in the ER.
    
    Our skilled medical team will assess your injury, provide stabilization, and refer you to a specialist if needed for follow-up care.

    `,
    understanding: {
      title: "Understanding Fractures and Dislocations",
      description: `Fractures are breaks or cracks in the bone that can range from minor hairline fractures to more noticeable breaks
        
        Dislocations occur when a bone slips out of its normal position in a joint.
        
        These injuries often result from falls, sports accidents, or sudden impacts and require medical attention to ensure proper healing.

        `,
    },
    fracture: [
      "Intense pain at the injury site",
      "Swelling or bruising",
      "Deformity or abnormal positioning",
      "Inability to move or bear weight on the affected limb",
      "Tenderness and stiffness",
      "Numbness or tingling near the joint (in dislocations)",
    ],
    whenToSeek: [
      "You suspect a broken bone or joint dislocation",
      "There is visible swelling, bruising, or deformity",
      "You are unable to move the joint or put weight on it",
      "The pain is severe or getting worse",
      "You heard a snap or pop at the time of injury",
    ],
    htoptext:
      "Following your visit, proper at-home care is important for healing. Be sure to follow your provider's instructions and use the R.I.C.E. method when appropriate:",
    hbtext:
      "Avoid strenuous activity and monitor for signs of increased pain or swelling. Return for follow-up as recommended.",
    homeRemedies: [
      {
        title: "Rest",
        description: "Avoid putting pressure on the affected area.",
      },
      {
        title: "Ice",
        description: "Apply ice packs to reduce swelling and pain.",
      },
      {
        title: "Compression",
        description: "Use an elastic wrap if advised to control swelling.",
      },
      {
        title: "Elevation",
        description: "Keep the injured area raised above heart level.",
      },
    ],
  },
  {
    image: img11,
    slug: "sprains-strains",
    title: "Sprains and Strains",
    description:
      "Fast evaluation and treatment for sprains and muscle strains.",
    category: "Injury Care",
    longDescription: `Whether it's a twisted ankle from a fall or muscle pain after lifting something heavy, sprains and strains can interfere with your daily routine and cause lingering discomfort if not treated properly. At North Ave Immediate Care in Addison, IL, we provide prompt evaluation and treatment to help you heal quickly and prevent long-term issues.`,
    htoptext:
      "Mild cases often improve with proper home care using the R.I.C.E. method:",
    hbtext:
      "Over-the-counter pain relievers like ibuprofen or acetaminophen may also help manage discomfort and inflammation.",
    sextext:
      "If you've experienced a sprain or strain and need expert care, visit North Ave Immediate Care in Addison for fast, effective treatment. Walk-ins are welcome, and our providers will help you recover with confidence.",
    understanding: {
      title: "Understanding Sprains and Strains",
      description: `Sprains and strains are common soft tissue injuries that affect the muscles, ligaments, and tendons: 
        Sprains occur when ligaments (the tissues connecting bones at a joint) are stretched or torn.
        Strains involve overstretching or tearing of muscles or tendons.
These injuries often result from sudden movements, falls, or overuse—particularly during sports, exercise, or daily physical activities.

        `,
    },
    symptoms: [
      "Sudden pain at the site of injury",
      "Swelling or bruising",
      "Difficulty moving the joint or muscle",
      "Tenderness to the touch",
      "Muscle spasms (strains)",
      "Joint instability or weakness (sprains)",
    ],
    whenToSeek: [
      "You heard a 'pop' at the time of injury",
      "There is significant swelling or bruising",
      "You cannot bear weight or move the affected area",
      "Pain persists beyond a few days",
      "You suspect a more serious injury, such as a fracture",
    ],

    homeRemedies: [
      {
        title: "Rest",
        description: "Avoid using the injured area to prevent further damage.",
      },
      {
        title: "Ice",
        description:
          "Apply ice packs for 15–20 minutes several times a day to reduce swelling.",
      },
      {
        title: "Compression",
        description:
          "Use a bandage or wrap to limit swelling and support the injury.",
      },
      {
        title: "Elevation",
        description:
          "Keep the injured area raised above heart level when possible.",
      },
    ],
  },
  {
    image: img1,
    title: "Burn Treatment",
    slug: "burn-treatment",
    description:
      "Expert care for minor to moderate burns with focus on pain relief and infection prevention.",
    category: "Injury Care",
    longDescription: `Burns can happen unexpectedly—whether from a hot surface, scalding liquid, open flame, or chemical exposure. At North Ave Immediate Care in Addison, IL, we provide fast, expert care for minor to moderate burns. Our goal is to relieve your pain, prevent infection, and promote proper healing while minimizing the risk of scarring.`,
    burnTypes: [
      {
        title: "First-degree burns",
        description:
          "Affect only the outer layer of skin and usually cause redness and pain.",
      },
      {
        title: "Second-degree burns",
        description:
          "Reach deeper layers and may cause blistering, swelling, and more intense pain.",
      },
      {
        title: "Third-degree burns",
        description:
          "Serious injuries that require emergency care and often affect nerves, muscles, and deeper tissues.",
      },
    ],
    causes: [
      "Contact with hot surfaces or steam",
      "Scalds from boiling liquids",
      "Sunburns",
      "Electrical injuries (minor)",
      "Exposure to chemicals",
      "Fire or open flames",
    ],
    whenToSeek: [
      "The burn is larger than 3 inches in diameter",
      "It affects the face, hands, feet, or groin",
      "Blistering or skin discoloration appears",
      "The burn is caused by chemicals or electricity",
      "You notice signs of infection like redness, warmth, or pus",
      "Pain continues or worsens over time",
    ],
    homeRemedies: [
      {
        title: "Cool the burn immediately",
        description:
          "Run cool (not cold) water over the area for 10–15 minutes.",
      },
      {
        title: "Apply a soothing ointment",
        description:
          "Aloe vera or antibiotic cream can ease pain and prevent infection.",
      },
      {
        title: "Cover with a sterile bandage",
        description: "Keep the area clean and protected.",
      },
      {
        title: "Avoid popping blisters",
        description: "This increases the risk of infection.",
      },
      {
        title: "Take pain relievers if needed",
        description: "Over-the-counter medications like ibuprofen can help.",
      },
    ],
  },
  {
    image: img2,
    title: "COVID-19 Testing and Treatment",
    slug: "covid-19-testing-and-treatment",
    description:
      "Fast, accurate testing and reliable treatment options for COVID-19.",
    category: "Common Illnesses",
    longDescription: `If you're experiencing symptoms of COVID-19 or have been exposed to someone who tested positive, North Ave Immediate Care in Addison, IL, is here to provide fast, accurate testing and reliable treatment options. We offer same-day testing with quick results to help you take action and protect those around you.
Whether you're seeking peace of mind, a travel clearance, or medical care for symptoms, our team is ready to guide you every step of the way.`,
    understanding: {
      title: "Understanding COVID-19",
      description:
        "COVID-19 is a contagious respiratory illness caused by the SARS-CoV-2 virus. It can range from mild cold-like symptoms to more severe complications, especially for those with underlying health conditions. Early testing and isolation are essential in reducing the spread and receiving timely care.\nAt North Ave Immediate Care, we stay up to date with CDC guidelines to ensure the highest quality testing and treatment protocols.",
    },
    symptoms: [
      "Fever or chills",
      "Cough or sore throat",
      "Shortness of breath or difficulty breathing",
      "Fatigue or body aches",
      "Loss of taste or smell",
      "Headache",
      "Congestion or runny nose",
      "Nausea, vomiting, or diarrhea",
    ],
    whenToSeek: [
      "You have been exposed and need testing",
      "You are showing symptoms of COVID-19",
      "You need testing for work, travel, or school",
      "You test positive and need follow-up care",
      "Your symptoms worsen or linger beyond a few days",
    ],
    homeRemedies: [
      {
        title: "Isolate as recommended",
        description: "Stay away from others to prevent transmission.",
      },
      {
        title: "Stay hydrated",
        description: "Drink fluids regularly to support recovery.",
      },
      {
        title: "Get plenty of rest",
        description: "Sleep is essential to strengthen your immune system.",
      },
      {
        title: "Take over-the-counter medications",
        description:
          "Fever reducers or cough medications may help ease symptoms.",
      },
      {
        title: "Monitor your symptoms",
        description:
          "Watch for worsening signs like difficulty breathing or chest pain.",
      },
    ],
  },
  {
    image: img3,
    title: "Cuts, Scrapes, and Stitches",
    slug: "cuts-scrapes-stitches",
    description:
      "Expert care for wounds, from minor scrapes to injuries requiring stitches.",
    category: "Injury Care",
    longDescription: `Accidents happen—and when they do, North Ave Immediate Care in Addison, IL, is here to help. Whether it's a minor scrape, a deep cut, or a wound that may require stitches, our experienced medical team provides prompt, compassionate care to help you heal safely and minimize scarring or infection.
From playground falls to kitchen mishaps, we treat non-life-threatening injuries quickly, so you can get back to your day with peace of mind.`,
    understanding: {
      title: "Understanding Wound Care",
      description:
        "Cuts and scrapes are common injuries that break the skin and may lead to bleeding, swelling, or infection if not treated properly. While minor wounds often heal with basic care, deeper lacerations or wounds with significant bleeding may require medical attention—including stitches, glue, or wound closures.\nSeeking care early ensures proper cleaning, closure, and protection against infection.",
    },
    signs: [
      "Bleeding that doesn't stop after 10 minutes",
      "Deep or wide cuts where edges won't close",
      "Dirt, debris, or glass stuck in the wound",
      "Cuts caused by dirty or rusty objects",
      "Swelling, redness, or pus—signs of infection",
      "Wounds on the face, hands, or joints",
    ],
    whenToSeek: [
      "The cut is deep, long, or gaping",
      "You suspect it may need stitches or glue",
      "You haven't had a tetanus shot in the last 5 years",
      "The wound was caused by a bite or dirty object",
      "Redness, warmth, or discharge is developing",
    ],
    homeRemedies: [
      {
        title: "Clean the wound",
        description: "Rinse gently with water and mild soap to remove dirt.",
      },
      {
        title: "Apply an antibiotic ointment",
        description: "This helps prevent infection.",
      },
      {
        title: "Cover with a clean bandage",
        description: "Keep the wound protected from dirt and bacteria.",
      },
      {
        title: "Change bandages daily",
        description: "Replace with a clean one until fully healed.",
      },
      {
        title: "Watch for signs of infection",
        description: "Redness, swelling, or pus may require medical care.",
      },
    ],
  },
  {
    image: img4,
    title: "Ear Infections",
    slug: "ear-infections",
    description:
      "Expert treatment for ear infections in both children and adults.",
    category: "Kids' Health",
    longDescription: `Ear pain can be frustrating, especially when it affects your ability to hear clearly, sleep comfortably, or go about your day without discomfort. At North Ave Immediate Care in Addison, IL, our experienced medical team is here to provide fast, effective treatment for ear infections in both children and adults.
Whether you're dealing with a sharp earache, muffled hearing, or fluid drainage, we're committed to helping you feel better quickly. Let us help you get back to your routine with expert care and a treatment plan tailored to your symptoms.`,
    understanding: {
      title: "Understanding Ear Infections",
      description:
        "An ear infection occurs when bacteria or viruses infect the middle ear, usually after a cold, sinus infection, or respiratory illness. The inflammation and fluid buildup behind the eardrum can lead to pain, pressure, and hearing issues.\nWhile ear infections are more common in children, adults can also be affected—especially during allergy season or after illness.",
    },
    symptoms: [
      "Sharp or throbbing ear pain",
      "Fullness or pressure in the ear",
      "Temporary hearing loss or muffled hearing",
      "Fluid drainage from the ear",
      "Fever or irritability (especially in children)",
      "Trouble sleeping or balancing",
    ],
    whenToSeek: [
      "Your ear pain lasts more than 1–2 days",
      "You experience fluid or pus draining from the ear",
      "Hearing becomes significantly reduced",
      "You have a fever over 101°F",
      "A child shows signs of pain, irritability, or trouble sleeping",
    ],
    homeRemedies: [
      {
        title: "Apply a warm compress",
        description:
          "Hold a warm washcloth against the affected ear to relieve pain.",
      },
      {
        title: "Use over-the-counter pain relievers",
        description:
          "Medications like acetaminophen or ibuprofen can reduce pain and fever.",
      },
      {
        title: "Keep the ear dry",
        description:
          "Avoid swimming or getting water in the affected ear during healing.",
      },
      {
        title: "Avoid inserting objects",
        description:
          "Do not place cotton swabs or other items in the ear canal, as this can worsen the infection.",
      },
    ],
  },
  {
    image: img5,
    title: "Flu & Fever",
    slug: "flu-fever",
    description:
      "Fast, reliable treatment for flu symptoms and fever management.",
    category: "Common Illnesses",
    longDescription: `We understand how draining and uncomfortable it can be to experience flu symptoms or a persistent fever. At North Ave Immediate Care, our compassionate medical team is here to provide fast, reliable treatment so you can feel better quickly. Whether you're dealing with chills, body aches, fatigue, or a high temperature, our priority is getting you the care you need to recover and return to your daily routine.
Your health matters — and we're here to support you every step of the way with expert care and guidance. Trust North Ave Immediate Care in Addison, IL, to help you bounce back quickly and safely.`,
    understanding: {
      title: "Understanding the Flu",
      description:
        "The flu (influenza) is a contagious respiratory illness caused by viruses that infect the nose, throat, and sometimes the lungs. Symptoms often come on suddenly and can range from mild to severe. Unlike the common cold, the flu can cause intense fatigue, body aches, and fever, and in some cases, lead to complications like pneumonia.\nIdentifying flu symptoms early can help prevent the spread and allow for more effective treatment.",
    },
    symptoms: [
      "Sudden onset of fever",
      "Chills and body aches",
      "Sore throat and cough",
      "Fatigue and weakness",
      "Nasal congestion or runny nose",
      "Headache",
      "Vomiting or diarrhea (more common in children)",
    ],
    whenToSeek: [
      "A fever over 102°F that lasts more than 3 days",
      "Difficulty breathing or shortness of breath",
      "Severe sore throat or persistent cough",
      "Dehydration or inability to keep fluids down",
      "Flu symptoms in children, elderly individuals, or those with chronic health conditions",
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description:
          "Drink plenty of water, electrolyte drinks, and clear broths.",
      },
      {
        title: "Get plenty of rest",
        description:
          "Allow your body time to heal by getting adequate sleep and rest.",
      },
      {
        title: "Use fever reducers",
        description:
          "Medications like acetaminophen or ibuprofen can help manage fever and body aches.",
      },
      {
        title: "Warm saltwater gargle",
        description: "Helps soothe a sore throat.",
      },
      {
        title: "Avoid smoking and alcohol",
        description: "These can worsen symptoms and delay healing.",
      },
    ],
  },
  {
    image: img6,
    title: "Food Poisoning",
    slug: "food-poisoning",
    description:
      "Prompt medical attention for foodborne illnesses and related symptoms.",
    category: "Common Illnesses",
    longDescription: `Food poisoning can come on quickly and leave you feeling miserable. At North Ave Immediate Care in Addison, IL, we offer prompt medical attention for foodborne illnesses to help you recover safely and comfortably. Whether you're dealing with nausea, vomiting, diarrhea, or abdominal cramps, our experienced providers are here to support your recovery.
If your symptoms are severe or not improving, don't wait it out—walk into our urgent care clinic for fast, reliable care.`,
    understanding: {
      title: "Understanding Food Poisoning",
      description:
        "Food poisoning occurs when you consume contaminated food or drinks. Bacteria, viruses, and parasites are the most common culprits, and symptoms can begin within hours of eating tainted food. While most cases resolve on their own, some may lead to dehydration or require medical intervention.\nKnowing the source and severity of your symptoms is key to determining the right treatment approach.",
    },
    symptoms: [
      "Nausea and vomiting",
      "Diarrhea (sometimes with blood)",
      "Stomach cramps and pain",
      "Fever and chills",
      "Headache or muscle aches",
      "Dehydration (dry mouth, low urine output, dizziness)",
    ],
    whenToSeek: [
      "Symptoms persist longer than 2–3 days",
      "You have a high fever over 101°F",
      "There is blood in your stool or vomit",
      "You experience signs of dehydration",
      "You are pregnant, elderly, immunocompromised, or caring for a young child with symptoms",
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description:
          "Drink water, electrolyte drinks, or clear broths to replace lost fluids.",
      },
      {
        title: "Eat bland foods",
        description:
          "Stick to easy-to-digest foods like bananas, rice, toast, and applesauce.",
      },
      {
        title: "Avoid dairy, caffeine, and alcohol",
        description: "These can worsen symptoms or irritate your stomach.",
      },
      {
        title: "Rest",
        description: "Give your body the time it needs to recover fully.",
      },
      {
        title: "Wash hands frequently",
        description: "Prevent spreading the illness to others.",
      },
    ],
  },
  {
    image: img15,
    title: "Foreign Object Removal",
    slug: "foreign-object-removal",
    description:
      "Safe, professional removal of foreign objects from skin, eyes, ears, and more.",
    category: "Injury Care",
    longDescription: `Whether it's a splinter, a piece of glass, or something accidentally lodged in the ear, nose, or skin, foreign objects can be painful and potentially dangerous if not removed properly. At North Ave Immediate Care in Addison, IL, we offer safe, professional removal of foreign objects to prevent infection and relieve discomfort.
Don't try to remove it yourself—our trained medical team is here to help you get relief quickly and safely.`,
    understanding: {
      title: "Understanding Foreign Object Injuries",
      description:
        "Foreign objects can become embedded in the body through accidents, injuries, or inhalation. Common examples include splinters, glass, metal, food, insects, or small items in the ear or nose. Depending on the location and depth, improper removal can lead to bleeding, infection, or further injury.\nTimely removal by a healthcare professional is the safest way to protect your health and prevent complications.",
    },
    commonLocations: [
      "Skin (splinters, glass, or metal)",
      "Eyes (dust, debris, or small particles)",
      "Ears (insects, beads, or food)",
      "Nose (toys, tissue, or food—especially in children)",
      "Throat (fish bones, pills, or food)",
    ],
    whenToSeek: [
      "The object is deeply embedded or not easily visible",
      "There is pain, swelling, or bleeding at the site",
      "The area shows signs of infection (redness, warmth, pus)",
      "The object is in a sensitive location (eye, ear, nose, throat)",
      "You or your child inhaled or swallowed a foreign object",
    ],
    homeRemedies: [
      {
        title: "Clean the area gently",
        description: "Use mild soap and water to rinse the wound.",
      },
      {
        title: "Apply an antibiotic ointment",
        description: "Helps reduce the risk of infection.",
      },
      {
        title: "Keep it covered",
        description: "Use a sterile bandage until the skin heals.",
      },
      {
        title: "Monitor for signs of infection",
        description:
          "Increased redness, pain, or drainage may require medical follow-up.",
      },
      {
        title: "Avoid digging or probing",
        description:
          "Never use tweezers or sharp objects unless advised by a medical professional.",
      },
    ],
  },
  {
    image: img15,
    title: "Laceration Repair",
    slug: "laceration-repair",
    description: "Expert care for cuts and wounds requiring medical attention.",
    category: "Injury Care",
    longDescription: `Whether it's from a kitchen accident, a fall, or a sharp object, a deep cut can be alarming and painful. At North Ave Immediate Care in Addison, IL, we provide prompt laceration repair to stop bleeding, prevent infection, and support proper healing. From minor cuts to deeper wounds that need stitches or skin glue, our skilled providers are here to help—no ER visit required.
Walk in today for fast, compassionate wound care in a clean and professional setting.`,
    understanding: {
      title: "Understanding Lacerations",
      description:
        "A laceration is a deep cut or tear in the skin caused by trauma. Unlike minor scrapes or surface wounds, lacerations may involve damage to the underlying tissue, muscles, or nerves. Depending on the depth and location, the wound may require stitches, staples, or adhesive closures to heal properly.\nPrompt medical care ensures that the wound is cleaned, closed, and dressed correctly to reduce the risk of infection and scarring.",
    },
    signs: [
      "Bleeding that doesn't stop after 10 minutes of pressure",
      "Wound edges that are gaping or won't stay closed",
      "Cuts deeper than 1/4 inch",
      "Injury caused by a dirty or rusty object",
      "Cuts on the face, hands, or joints",
      "Signs of infection (redness, warmth, swelling, or pus)",
    ],
    whenToSeek: [
      "You think the wound may need stitches or medical closure",
      "There's heavy bleeding or exposed tissue",
      "You haven't had a tetanus shot in the last 5 years",
      "The cut was caused by metal, glass, or a bite",
      "Signs of infection start to develop",
    ],
    homeRemedies: [
      {
        title: "Keep the area clean and dry",
        description:
          "Change bandages as advised and avoid getting the wound wet.",
      },
      {
        title: "Watch for infection",
        description: "Monitor for redness, warmth, or drainage.",
      },
      {
        title: "Limit movement if needed",
        description: "Reduce stress on the area to avoid reopening the wound.",
      },
      {
        title: "Avoid touching or picking",
        description: "Let the body heal naturally.",
      },
      {
        title: "Follow up as instructed",
        description: "Return for suture removal or follow-up if instructed.",
      },
    ],
  },
  //   {
  //     image: img15,
  //     slug: "minor-surgical-procedures",
  //     title: "Minor Fractures & Dislocations",
  //     description: "Fast evaluation and treatment for bone and joint injuries.",
  //     category: "Injury Care",
  //     longDescription: `Injuries like a swollen wrist, a jammed finger, or a painful joint after a fall can be signs of a minor fracture or dislocation. At North Ave Immediate Care in Addison, IL, we offer fast, walk-in evaluation and treatment for non-life-threatening bone and joint injuries—so you don't have to wait in the ER.
  // Our skilled medical team will assess your injury, provide stabilization, and refer you to a specialist if needed for follow-up care.`,
  //     understanding: {
  //       title: "Understanding Fractures and Dislocations",
  //       description:
  //         "Fractures are breaks or cracks in the bone that can range from minor hairline fractures to more noticeable breaks. Dislocations occur when a bone slips out of its normal position in a joint. These injuries often result from falls, sports accidents, or sudden impacts and require medical attention to ensure proper healing.",
  //     },
  //     signs: [
  //       "Intense pain at the injury site",
  //       "Swelling or bruising",
  //       "Deformity or abnormal positioning",
  //       "Inability to move or bear weight on the affected limb",
  //       "Tenderness and stiffness",
  //       "Numbness or tingling near the joint (in dislocations)",
  //     ],
  //     whenToSeek: [
  //       "You suspect a broken bone or joint dislocation",
  //       "There is visible swelling, bruising, or deformity",
  //       "You are unable to move the joint or put weight on it",
  //       "The pain is severe or getting worse",
  //       "You heard a snap or pop at the time of injury",
  //     ],
  //     homeRemedies: [
  //       {
  //         title: "Rest",
  //         description: "Avoid putting pressure on the affected area.",
  //       },
  //       {
  //         title: "Ice",
  //         description: "Apply ice packs to reduce swelling and pain.",
  //       },
  //       {
  //         title: "Compression",
  //         description: "Use an elastic wrap if advised to control swelling.",
  //       },
  //       {
  //         title: "Elevation",
  //         description: "Keep the injured area raised above heart level.",
  //       },
  //     ],
  //   },
  {
    image: img42,
    slug: "sore-throat-treatment",
    title: "Sore Throat Treatment",
    description: "Expert diagnosis and relief for throat pain and discomfort.",
    category: "Common Illnesses",
    longDescription: `A sore throat can be more than just a minor inconvenience—it can make eating, drinking, and even speaking difficult. At North Ave Immediate Care in Addison, IL, we provide comprehensive evaluation and treatment for sore throats, whether they're caused by infections, allergies, or other factors.`,
    understanding: {
      title: "Understanding Sore Throats",
      description:
        "A sore throat is often a symptom of an underlying condition, such as a viral infection (like the common cold or flu), a bacterial infection (such as strep throat), or exposure to allergens or irritants. Identifying the cause is key to choosing the right treatment.\nOur providers use rapid testing and physical evaluation to determine if your sore throat is due to a viral or bacterial source.",
    },
    causes: [
      "Viral infections (cold, flu, COVID-19)",
      "Bacterial infections (strep throat, tonsillitis)",
      "Seasonal allergies or postnasal drip",
      "Dry air or environmental irritants",
      "Overuse of the voice",
      "Acid reflux (GERD)",
    ],
    whenToSeek: [
      "Your sore throat lasts longer than 3 days",
      "You have difficulty swallowing or breathing",
      "You develop a high fever",
      "White patches are visible on the tonsils",
      "Swollen lymph nodes or rash appear",
      "You suspect strep throat or were exposed to someone who has it",
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description: "Warm teas, broths, and water can soothe the throat.",
      },
      {
        title: "Use throat lozenges or sprays",
        description: "These can provide temporary relief from pain.",
      },
      {
        title: "Gargle with saltwater",
        description: "A simple saltwater rinse helps reduce inflammation.",
      },
      {
        title: "Rest your voice",
        description: "Limit talking to avoid further irritation.",
      },
      {
        title: "Use a humidifier",
        description: "Moist air can ease dryness and throat irritation.",
      },
    ],
  },
  {
    image: img43,
    slug: "sports-work-injuries",
    title: "Sports & Work Injuries",
    description: "Expert treatment for sports and workplace-related injuries.",
    category: "Injury Care",
    longDescription: `Injuries can happen anytime—on the field, in the gym, or on the job. At North Ave Immediate Care in Addison, IL, we provide fast, expert treatment for a wide range of non-life-threatening sports and work-related injuries. Whether you're dealing with a sprain, strain, cut, or impact injury, our team is here to help you heal safely and return to your routine as quickly as possible.
Walk in today for same-day care with no appointment needed.`,
    understanding: {
      title: "Understanding Sports & Work Injuries",
      description:
        "Sports and workplace injuries are common and often caused by repetitive motion, overexertion, slips and falls, or collisions. Prompt evaluation is key to managing pain, preventing further damage, and supporting long-term recovery.\nOur clinic treats both acute and overuse injuries and can help with documentation if your injury is job-related.",
    },
    commonInjuries: [
      "Sprains and strains",
      "Fractures and dislocations",
      "Back, shoulder, and joint pain",
      "Cuts, scrapes, and lacerations",
      "Minor head injuries or concussions (evaluation only)",
      "Muscle overuse or repetitive stress injuries",
      "Tendonitis and bursitis",
      "Bruises or contusions",
    ],
    whenToSeek: [
      "You're experiencing severe pain or swelling",
      "You can't move or bear weight on a joint",
      "A cut or wound occurred during work or play",
      "You need an injury evaluation for a work or school report",
      "Symptoms are interfering with your ability to perform daily tasks",
    ],
    homeRemedies: [
      {
        title: "Rest and protect the area",
        description: "Avoid re-injury by modifying your activity.",
      },
      {
        title: "Use ice and elevation",
        description: "Reduce swelling in the first 48 hours.",
      },
      {
        title: "Take prescribed or OTC pain relievers",
        description: "Help manage inflammation and discomfort.",
      },
      {
        title: "Use compression wraps or braces as advised",
        description: "Support healing and prevent strain.",
      },
      {
        title: "Follow up if symptoms worsen",
        description: "Don't ignore lingering pain or limited mobility.",
      },
    ],
  },
  {
    image: img15,
    title: "Upper Respiratory Infections",
    slug: "upper-respiratory-infections",
    description:
      "Treatment for colds, sinus infections, and respiratory symptoms.",
    category: "Common Illnesses",
    longDescription: `Upper respiratory infections (URIs) are among the most common reasons for seeking urgent care—especially during cold and flu season. At North Ave Immediate Care in Addison, IL, we provide fast, accurate evaluation and treatment to help relieve your symptoms and prevent further complications.
If you're dealing with congestion, cough, sore throat, or sinus pressure, our team is here to provide the care and support you need to feel better quickly.`,
    understanding: {
      title: "Understanding Upper Respiratory Infections",
      description:
        "A URI is an infection that affects the nose, throat, sinuses, or larynx. These infections are typically caused by viruses but can sometimes develop into secondary bacterial infections. The common cold, sinusitis, pharyngitis, and laryngitis all fall under the umbrella of upper respiratory infections.\nWhile many URIs resolve on their own, proper care can speed up recovery and reduce the risk of complications.",
    },
    symptoms: [
      "Nasal congestion or runny nose",
      "Cough (dry or productive)",
      "Sore throat or hoarseness",
      "Sneezing or postnasal drip",
      "Mild fever or chills",
      "Sinus pressure or facial pain",
      "Headache or fatigue",
    ],
    whenToSeek: [
      "Your symptoms last more than 10 days",
      "You experience a high fever (over 101°F)",
      "You have shortness of breath or wheezing",
      "Sinus pain or pressure worsens",
      "Your cough produces yellow or green mucus",
      "Symptoms improve then suddenly worsen again",
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description: "Drink plenty of fluids to thin mucus and stay energized.",
      },
      {
        title: "Use a humidifier",
        description:
          "Moist air can relieve congestion and soothe irritated airways.",
      },
      {
        title: "Try saline nasal spray",
        description: "Helps flush out sinuses and ease breathing.",
      },
      {
        title: "Rest",
        description:
          "Your body needs extra energy to recover—prioritize sleep and downtime.",
      },
      {
        title: "Use OTC medications",
        description:
          "Pain relievers, decongestants, or throat lozenges may reduce symptoms.",
      },
    ],
  },
  {
    image: img1,
    slug: "myers-cocktail-vitamin-infusion",
    title: "Myer's Cocktail & Vitamin Infusions",
    description:
      "Recharges energy, fights fatigue, and supports overall wellness.",
    category: "IV Therapy",
    longDescription: `Looking to recharge your energy, fight fatigue, or support overall wellness? North Ave Immediate Care in Addison, IL, offers the Myer's Cocktail and other customizable vitamin infusions designed to help your body function at its best.`,
    understanding: {
      title: "Understanding Myer's Cocktail & IV Nutrient Therapy",
      description: `The Myer's Cocktail is a popular IV infusion containing a powerful blend of B-vitamins, Vitamin C, magnesium, and calcium. This nutrient-packed formula is used to treat fatigue, stress, low immunity, and even symptoms related to migraines or seasonal allergies. Vitamin infusions bypass the digestive system for immediate, full absorption, making them ideal for anyone with nutritional deficiencies or chronic conditions.
        
     These infusions can be tailored based on your wellness goals—whether you're boosting energy, recovering from illness, or simply investing in your overall health`,
    },
    benefits: [
      "Increased energy and focus",
      "Improved immune system function",
      "Reduced inflammation and headaches",
      "Faster recovery from illness or travel",
      "Support for stress, anxiety, or chronic fatigue",
    ],
    whenToSeek: [
      "You feel burned out or low on energy",
      "You want to support immunity or recovery",
      "You have frequent headaches or muscle cramps",
      "You need fast replenishment after travel or illness",
      "You've tried oral supplements without success",
    ],
    support: [
      {
        title: "Eat a balanced diet",
        description: "Vitamins work best alongside nutrient-dense meals.",
      },
      {
        title: "Hydrate consistently",
        description: "Proper hydration enhances vitamin absorption.",
      },
      {
        title: "Prioritize sleep",
        description: "Recovery and repair happen while you rest.",
      },
      {
        title: "Manage stress levels",
        description: "Stress can quickly deplete essential nutrients.",
      },
      {
        title: "Follow a wellness routine",
        description: " Pair IV therapy with other healthy lifestyle habits.",
      },
    ],
  },
  {
    image: img4,
    slug: "migraine-fatigue-relief",
    title: "Migraine & Fatigue Relief",
    description: "Ease headache pain and combat low energy levels.",
    category: "IV Therapy",
    longDescription: `Persistent migraines or chronic fatigue can disrupt your day. North Ave Immediate Care in Addison, IL, offers IV therapy specifically formulated to ease headache pain, support brain health, and combat low energy levels.`,
    understanding: {
      title: "Understanding Migraine & Fatigue Relief IVs",
      description:
        "Migraine and fatigue IV therapy delivers hydration, magnesium, B-vitamins, and anti-inflammatory support directly into your bloodstream. This combination targets common causes of migraines, such as dehydration and nutrient deficiencies, while also helping with mental clarity and overall energy. It can be effective for those with frequent migraines, exhaustion, or recovery from travel or illness.",
    },
    hangovers: [
      "Throbbing or pulsing headache",
      "Nausea or light sensitivity",
      "Brain fog or low concentration",
      "Chronic fatigue or burnout",
      "Dehydration-related dizziness",
    ],
    whenToSeek: [
      "Your migraine isn't improving with rest or medication",
      "You're dealing with ongoing exhaustion or low energy",
      "You need fast, non-invasive relief",
      "You can't stay hydrated or eat due to nausea",
      "You have important work or travel and need recovery support",
    ],
    homeRemedies: [
      {
        title: "Rest in a quiet, dark room",
        description: "Avoid screens or bright light during migraines.",
      },
      {
        title: "Stay hydrated throughout the day",
        description: "Chronic dehydration is a common fatigue trigger.",
      },
      {
        title: "Stretch and move gently",
        description: "Light activity may reduce tension-related pain.",
      },
      {
        title: "Avoid trigger foods",
        description: "Caffeine, alcohol, or MSG can worsen symptoms.",
      },
      {
        title: "Track your symptoms",
        description:
          " Keeping a migraine or fatigue journal can help prevent future episodes.",
      },
    ],
  },
  {
    image: img39,
    slug: "hangover-dehydration-treatment",
    title: "Hangover & Dehydration Treatment",
    description: "Recover fast from dehydration or a hangover with IV therapy.",
    category: "IV Therapy",
    longDescription: `Recover fast from dehydration or a hangover with IV therapy at North Ave Immediate Care in Addison, IL. Our hangover and rehydration drips restore fluids, electrolytes, and vitamins to help you feel better quickly—without the wait or downtime.`,
    understanding: {
      title: "Understanding Hangover & Rehydration IVs",
      description:
        "Hangovers and dehydration often result from fluid and electrolyte loss, which can leave you with nausea, headaches, fatigue, and brain fog. IV rehydration therapy delivers fluids and nutrients directly into your bloodstream, bypassing the digestive system for immediate results. It's ideal for post-event recovery, long travel, food poisoning, heat exhaustion, or illness.",
    },
    hangovers: [
      "Nausea or vomiting",
      "Headache or light sensitivity",
      "Dry mouth or extreme thirst",
      "Muscle aches or fatigue",
      "Dizziness or low energy",
    ],
    whenToSeek: [
      "You're too nauseous to keep fluids down",
      "You need to recover quickly after a night out or event",
      "You feel extremely fatigued or weak",
      "You're dehydrated from heat, illness, or travel",
      "Oral hydration isn't working",
    ],
    homeRemedies: [
      {
        title: "Drink electrolyte-rich fluids",
        description:
          "Water with electrolytes or coconut water helps replenish faster.",
      },
      {
        title: "Avoid caffeine or alcohol",
        description: "These worsen dehydration.",
      },
      {
        title: "Rest your body",
        description: "Let your system recover with sleep.",
      },
      {
        title: "Eat bland, hydrating foods",
        description: "Cucumbers, watermelon, and broths help rehydrate.",
      },
      {
        title: "Plan ahead next time",
        description: " Hydrate before and during travel or social events.",
      },
    ],
  },
  {
    image: img7,
    slug: "immune-boost-iv-therapy",
    title: "Immune Boost IV Therapy",
    description: "Support your immune system with nutrient-rich IV therapy.",
    category: "IV Therapy",
    longDescription: `When your immune system needs extra support, North Ave Immediate Care in Addison, IL, offers fast, revitalizing immune-boost IV therapy to help you feel your best. Whether you're recovering from illness, feeling run down, or preparing for travel, our IV therapy delivers nutrients directly into your bloodstream for faster absorption and results.
`,
    understanding: {
      title: "Understanding Immune Boost IV Therapy",
      description:
        "Immune boost IV therapy is designed to strengthen your body's natural defenses by delivering essential fluids, vitamins, and antioxidants through a simple in-office IV drip. Unlike oral supplements, IV therapy allows for immediate absorption, helping replenish nutrient levels more effectively. It's a great option for those feeling fatigued, stressed, or exposed to illness, and it may reduce the severity or duration of colds, flus, or infections.",
    },
    signs: [
      "You've recently been sick or exposed to illness",
      "You feel run down, fatigued, or constantly tired",
      "You're preparing for or returning from travel",
      "You need fast hydration and nutrient support",
      "You want to recover faster from a cold or flu",
    ],
    whenToSeek: [
      "You're frequently getting sick",
      "You want to boost recovery from an illness",
      "You're looking to prevent illness before travel or events",
      "You feel too fatigued to keep up with daily tasks",
      "Oral supplements haven't helped your symptoms",
    ],
    homeRemedies: [
      {
        title: "Stay hydrated daily",
        description: "Water supports immune and metabolic function.",
      },
      {
        title: "Eat nutrient-rich foods",
        description: "Focus on fruits, vegetables, and lean proteins.",
      },
      {
        title: "Get plenty of sleep",
        description: "Lack of rest weakens immune defenses.",
      },
      {
        title: "Manage stress levels",
        description: "Chronic stress can suppress your immune system.",
      },
      {
        title: "Avoid smoking and excess alcohol",
        description: "These can lower your body's resistance to illness.",
      },
    ],
  },
  {
    image: img1,
    slug: "flu-shots",
    title: "Flu Shots",
    description: "Protect yourself and your loved ones with a flu shot.",
    category: "Vaccines & Shots",
    longDescription: `Protect yourself and your loved ones this flu season with a fast and convenient flu shot at North Ave Immediate Care in Addison, IL. Our clinic offers same-day vaccination with minimal wait time for both adults and children.`,
    understanding: {
      title: "Understanding Flu Shots",
      description:
        "The flu shot helps your immune system recognize and fight the influenza virus. It's updated annually to target the most common strains and is especially important for children, seniors, pregnant individuals, and anyone with chronic conditions. Receiving your flu shot early in the season can reduce the risk of serious illness, missed work or school, and hospital visits.",
    },
    flu: [
      "Adults and children over 6 months old",
      "Seniors aged 65 and older",
      "Pregnant individuals",
      "People with asthma, diabetes, or heart conditions",
      "Healthcare and frontline workers",
    ],
    whenToSeek: [
      "It's flu season (typically October through March)",
      "You've missed your annual flu vaccine",
      "You're in close contact with high-risk individuals",
      "You need a shot for work, school, or travel",
      "You want to reduce the risk of flu-related complications",
    ],
    aftercare: [
      {
        title: "Mild arm soreness is normal",
        description: "Apply cool compresses if needed.",
      },
      {
        title: "Stay hydrated",
        description: "Fluids help your body adjust post-vaccination.",
      },
      {
        title: "Avoid strenuous exercises",
        description: "Give your arm and body a chance to recover.",
      },
      {
        title: "Monitor for rare side effects",
        description: "Fever or fatigue may occur but should resolve quickly.",
      },
      {
        title: "Get your shot annually",
        description: " Protection fades over time—yearly shots are best.",
      },
    ],
  },
  {
    image: img41,
    slug: "tetanus-booster-vaccines",
    title: "Tetanus & Booster Vaccines",
    description:
      "Stay protected against serious infections with up-to-date vaccines.",
    category: "Vaccines & Shots",
    longDescription: `Stay protected against serious infections with up-to-date tetanus and booster vaccines from North Ave Immediate Care in Addison, IL. Whether you're due for a routine update or had a recent injury, we offer same-day vaccination with no appointment required.`,
    understanding: {
      title: "Understanding Tetanus & Boosters",
      description:
        "Tetanus is a potentially life-threatening bacterial infection caused by wounds exposed to contaminated surfaces. It's part of the Tdap (tetanus, diphtheria, pertussis) vaccine series, which most people receive during childhood and then as a booster every 10 years. Boosters ensure your immune system stays ready to fight off these preventable diseases.",
    },
    tetanus: [
      "Anyone who hasn't had a booster in the last 10 years",
      "People with recent cuts, wounds, or punctures",
      "Adults without clear vaccine history",
      "Travelers to areas with limited medical access",
      "Individuals exposed to rust or animal bites",
    ],
    whenToSeek: [
      "You haven't had a tetanus shot in 10+ years",
      "You sustained a wound or puncture from metal, wood, or soil",
      "You need a booster for school, employment, or travel",
      "Your primary care provider recommended one",
      "You're unsure of your vaccine history",
    ],
    homeRemedies: [
      {
        title: "Expect mild arm soreness",
        description: "Use a cool compress if needed.",
      },
      {
        title: "Avoid heavy lifting that day",
        description: "Let your arm rest after the shot.",
      },
      {
        title: "Watch for fatigue",
        description: " Temporary tiredness is common.",
      },
      {
        title: "Update your records",
        description: "Keep a note of your next booster due date.",
      },
      {
        title: "Ask about Tdap combo shots",
        description:
          " You may be due for pertussis or diphtheria protection too.",
      },
    ],
  },
  {
    image: img7,
    slug: "vitamin-b-12-injections",
    title: "Vitamin B-12 Injections",
    description:
      "Boost your energy and mental sharpness with Vitamin B-12 shots.",
    category: "Vaccines & Shots",
    longDescription: `If you're feeling constantly tired or foggy, a Vitamin B-12 injection at North Ave Immediate Care in Addison, IL, can help restore energy and improve mental clarity. We offer quick, walk-in B-12 shots for both deficiency and wellness support.
`,
    understanding: {
      title: "Understanding B-12 Injections",
      description:
        "Vitamin B-12 is essential for nerve function, red blood cell production, and mental sharpness. Deficiency can lead to fatigue, weakness, memory issues, or even numbness. B-12 injections deliver the vitamin directly into the bloodstream for quick and effective absorption—ideal for people with absorption issues or low dietary intake.",
    },
    deficiency: [
      "Fatigue or low energy",
      "Brain fog or poor concentration",
      "Pale skin or lightheadedness",
      "Tingling in hands or feet",
      "Mood changes or irritability",
    ],
    whenToSeek: [
      "You've been diagnosed with B-12 deficiency",
      "You follow a vegetarian or vegan diet",
      "You have absorption issues (e.g., after GI surgery)",
      "You're feeling low energy despite good sleep",
      "Oral supplements haven't worked",
    ],
    wellness: [
      {
        title: "Eat B-12-rich foods",
        description: "Include eggs, fish, meat, and fortified cereals.",
      },
      {
        title: "Stick to a schedule",
        description: "Consistent injections help maintain levels.",
      },
      {
        title: "Track your symptoms",
        description: "Nothing changes in energy or focus can guide care.",
      },
      {
        title: "Stay hydrated",
        description: "Helps with circulation and absorption.",
      },
      {
        title: "Ask about blood work",
        description: "Testing can confirm deficiency or guide dosage.",
      },
    ],
  },
  {
    image: img9,
    slug: "std-testing-treatment",
    title: "STD Testing & Treatment",
    description: "Confidential and fast STD testing and treatment.",
    category: "Sexual Health",
    sextext:
      "At North Ave Immediate Care in Addison, we prioritize your privacy, comfort, and well-being. With discreet STD testing, fast turnaround times, and same-day treatment options, we make it easy to stay in control of your sexual health. No appointment is needed—walk in anytime.",
    longDescription: `Sexual health is an essential part of your overall well-being. At North Ave Immediate Care in Addison, IL, we offer confidential, judgment-free STD testing and treatment with same-day service and quick results. Whether you have symptoms or just want peace of mind, our experienced providers are here to help you take control of your health with compassionate, discreet care.`,
    understanding: {
      title: "Understanding STD Testing & Treatment",
      description: `Sexually transmitted diseases (STDs)—also referred to as sexually transmitted infections (STIs)—are common and often silent. Many STDs, including chlamydia, gonorrhea, syphilis, HIV, herpes, and trichomoniasis, may not show symptoms at first, which is why regular testing is key to protecting your health and your partner's.
        
        At North Ave Immediate Care, we provide comprehensive STD screening, fast lab results, and on-site treatment when needed. Whether you're starting a new relationship, experiencing symptoms, or just staying proactive, our clinic offers convenient, walk-in testing with privacy and professionalism.

        Early detection and timely treatment can prevent serious health complications, such as infertility, pelvic inflammatory disease (PID), or transmission to others. We follow CDC-recommended testing protocols and offer both urine tests, blood work, and swab-based diagnostics, depending on your symptoms and risk factors.

        `,
    },
    STDs: [
      "Pain during urination",
      "Genital itching or irritation",
      "Unusual discharge from the penis or vagina",
      "Pain during sex",
      "Genital sores, blisters, or warts",
      "Lower abdominal or pelvic pain",
      "Swollen lymph nodes or flu-like symptoms",
      "Rash or unexplained bumps",
    ],
    whenToSeek: [
      "You've had unprotected sex or a new sexual partner",
      "You or your partner tested positive for an STD",
      "You've experienced symptoms of a possible infection",
      "You're planning to become sexually active",
      "You're due for routine testing based on age and risk",
      "You're starting a new relationship and want to get tested together",
      "You're pregnant or planning pregnancy",
    ],
    homeRemedies: [
      {
        title: "Practice safe sex",
        description:
          " Use condoms or dental dams to reduce risk of transmission.",
      },
      {
        title: "Communicate with partners",
        description:
          " Open conversations lead to better protection and shared responsibility.",
      },
      {
        title: "Get tested regularly",
        description:
          "Especially if you're sexually active with multiple partners or under 25.",
      },
      {
        title: "Complete your treatment",
        description:
          " Finish all prescribed medication, even if symptoms go away.",
      },
      {
        title: "Avoid sex until cleared",
        description:
          " Prevent passing the infection to others or getting reinfected.",
      },
    ],
  },
  {
    image: img37,
    slug: "bug-bites-rashes",
    title: "Bug Bites & Rashes",
    description:
      "Treatment for bug bites and skin rashes caused by bites, allergens, or environmental triggers.",
    category: "Skin & Rashes",
    longDescription: `Bug bites and skin rashes can cause discomfort, irritation, and concern—especially if symptoms worsen over time. At North Ave Immediate Care in Addison, IL, we offer same-day evaluation and treatment for common skin reactions caused by bites, allergens, or environmental triggers.`,
    understanding: {
      title: "Understanding Bug Bites & Rashes",
      description:
        "Bug bites may result from mosquitoes, spiders, ticks, or other insects. Rashes can also develop due to allergies, heat, plants (like poison ivy), or infections. While most skin reactions are mild, some may lead to swelling, pain, or signs of infection. Prompt care can relieve symptoms and prevent complications.",
    },
    symptoms: [
      "Red, itchy bumps or patches",
      "Swelling or warmth around the area",
      "Blistering or skin peeling",
      "Hives or welts",
      "Pain, burning, or tenderness",
    ],
    whenToSeek: [
      "Rash or bite worsens over time",
      "Pain, swelling, or warmth increases",
      "You have a fever or signs of infection",
      "The rash covers a large area",
      "Itching is severe or keeps your child up at night",
    ],
    homeRemedies: [
      {
        title: "Apply a cold compress",
        description: "Helps relieve itching and reduce inflammation.",
      },
      {
        title: "Use over-the-counter creams",
        description: "Anti-itch creams or antihistamines can ease discomfort.",
      },
      {
        title: "Keep nails trimmed",
        description: "Prevents skin damage from scratching.",
      },
      {
        title: "Avoid irritants",
        description: "Stay away from suspected plants or allergens.",
      },
      {
        title: "Watch for spreading or infection",
        description: " Seek care if the area gets worse or becomes painful.",
      },
    ],
  },
  {
    image: img33,
    slug: "hemorrhoid-treatment",
    title: "Hemorrhoid Treatment",
    description:
      "Effective treatment for hemorrhoids to reduce pain and swelling.",
    category: "Skin & Rashes",
    longDescription: `Hemorrhoids can cause itching, burning, and pain—especially during bowel movements. At North Ave Immediate Care in Addison, IL, we provide discreet, same-day care for internal and external hemorrhoids to help you find relief quickly.`,
    understanding: {
      title: "Understanding Hemorrhoids",
      description:
        "Hemorrhoids are swollen veins in the lower rectum or anus. They may result from straining, prolonged sitting, pregnancy, or constipation. Symptoms can range from mild irritation to bleeding and significant pain. Medical treatment helps reduce inflammation and prevent complications like thrombosis.",
    },
    symptoms: [
      "Itching or discomfort in the anal area",
      "Bright red blood during bowel movements",
      "Painful lumps near the anus",
      "Swelling or burning sensation",
      "Difficulty sitting comfortably",
    ],
    whenToSeek: [
      "Bleeding lasts more than a few days",
      "Over-the-counter creams don't relieve symptoms",
      "Pain is interfering with daily life",
      "You feel a hard lump or persistent swelling",
      "Bowel movements are consistently painful",
    ],
    homeRemedies: [
      {
        title: "Soak in warm water",
        description: " Sitz baths can relieve irritation and promote healing.",
      },
      {
        title: "Use topical treatments",
        description: "Creams and wipes reduce itching and swelling.",
      },
      {
        title: "Increase fiber intake",
        description: "Prevents straining during bowel movements.",
      },
      {
        title: "Avoid sitting for long periods",
        description: "Take breaks to relieve pressure on the rectal area.",
      },
      {
        title: "Stay hydrated",
        description: " Water helps soften stools and ease discomfort",
      },
    ],
  },
  {
    image: img31,
    slug: "wart-skin-tag-removal",
    title: "Wart & Skin Tag Removal",
    description: "Quick and effective wart and skin tag removal treatments.",
    category: "Skin & Rashes",
    longDescription: `If you're bothered by a wart or skin tag, North Ave Immediate Care in Addison, IL, offers quick, in-office removal with minimal discomfort. Whether it's cosmetic or irritation-related, our providers ensure safe and effective treatment.`,
    understanding: {
      title: "Understanding Warts & Skin Tags",
      description:
        "Warts are caused by the human papillomavirus (HPV) and may appear on the hands, feet, or face. Skin tags are benign growths that often occur on the neck, armpits, or eyelids. While usually harmless, both can become irritated, grow larger, or cause embarrassment—making professional removal a simple solution.",
    },
    symptoms: [
      "Small, raised growths or bumps",
      "Flesh-colored or darkened skin",
      "Irritation from rubbing or shaving",
      "Bleeding or scabbing",
      "Rapid growth or spreading (warts)",
    ],
    whenToSeek: [
      "Growths are painful or bleeding",
      "You've tried home treatments with no results",
      "They're located on the face, hands, or feet",
      "You want cosmetic removal",
      "The lesion changes in color, size, or texture",
    ],
    homeRemedies: [
      {
        title: "Keep the area clean and dry",
        description: "Follow cleaning instructions carefully.",
      },
      {
        title: "Avoid picking at the area",
        description: "Allow the skin to heal naturally.",
      },
      {
        title: "Apply a bandage if advised",
        description: "Protects against bacteria and irritation.",
      },
      {
        title: "Avoid shaving near the site",
        description: "Prevents further damage during healing.",
      },
      {
        title: "Return if regrowth occurs",
        description: " Follow-up may be needed for recurring warts.",
      },
    ],
  },
  {
    image: img22,
    slug: "athletes-foot-fungal-infections",
    title: "Athlete's Foot & Fungal Infections",
    description:
      "Diagnosis and treatment for athlete's foot and other fungal infections.",
    category: "Skin & Rashes",
    longDescription: `Fungal infections like athlete's foot and ringworm can cause itchy, irritated skin and are highly contagious. At North Ave Immediate Care in Addison, IL, we provide fast diagnosis and effective antifungal treatment for children and adults.`,
    understanding: {
      title: "Understanding Fungal Infections",
      description:
        "Fungal skin infections thrive in warm, most environments—like locker rooms, gym shoes, and shared showers. Athlete's foot typically affects the toes and soles, while other fungal infections can appear anywhere on the skin or nails. Without treatment, symptoms may spread or worsen.",
    },
    symptoms: [
      "Itchy, red, or cracked skin",
      "Peeling or scaling between toes",
      "Rash with ring-like appearance (ringworm)",
      "Thickened, discolored toenails",
      "Burning or stinging sensations",
    ],
    whenToSeek: [
      "Over-the-counter creams aren't helping",
      "The rash spreads or returns frequently",
      "You have diabetes or a weakened immune system",
      "There's pain, swelling, or drainage",
      "The infection affects nails, scalp, or groin",
    ],
    homeRemedies: [
      {
        title: "Keep the area dry",
        description: "Moisture promotes fungal growth.",
      },
      {
        title: "Use antifungal creams as directed",
        description: "Complete the full course, even if symptoms improve.",
      },
      {
        title: "Change socks daily",
        description: "Wear moisture-wicking, breathable footwear.",
      },
      {
        title: "Avoid walking barefoot in public spaces",
        description: "Protect your feet at pools and gyms.",
      },
      {
        title: "Disinfect shared surfaces",
        description: " Prevent spreading infection at home.",
      },
    ],
  },
  {
    image: img13, // School & Camp Physicals
    slug: "school-camp-physicals",
    title: "School & Camp Physicals",
    description:
      "Convenient and affordable physicals for school, sports, or camp enrollment.",
    category: "Physical Exams",
    longDescription: `Whether it's for school enrollment, sports participation, or summer camp, North Ave Immediate Care in Addison, IL, offers convenient and affordable physicals for kids and teens—no appointment needed.`,
    understanding: {
      title: "Understanding School & Camp Physicals",
      description: `These physicals help confirm that your child is healthy and ready for academic and recreational activities. The exam checks for growth milestones, chronic conditions, and overall physical readiness. Most schools, sports teams, and camps require annual forms to ensure the safety and well-being of all participants.`,
    },
    Included: [
      "Height, weight, and vital signs",
      "Vision screening",
      "Heart, lung, and joint exam",
      "Review of immunizations",
      "Completion of school or camp forms",
    ],
    whenToSeek: [
      "Before the school year starts",
      "Ahead of a new sports season or tryout",
      "Prior to summer camp registration",
      "If your child needs updated vaccine records",
      "When switching schools or pediatricians",
    ],
    Preparation: [
      {
        title: "Bring all required forms",
        description: "We'll fill them out during your visit.",
      },
      {
        title: "Know your child's medical history",
        description: "Include allergies, medications, and past conditions.",
      },
      {
        title: "Make a list of questions",
        description: "We're happy to discuss any health concerns.",
      },
      {
        title: "Have immunization records ready",
        description: "This helps us confirm your child is up to date.",
      },
      {
        title: "Dress comfortably",
        description: "Helps with easy movement during the exam.",
      },
    ],
  },
  {
    image: img40,
    slug: "employment-pre-op-physicals",
    title: "Employment & Pre-Op Physicals",
    description:
      "Same-day physicals for employment, surgical clearance, and health screening.",
    category: "Physical Exams",
    longDescription: `North Ave Immediate Care in Addison, IL, offers same-day physicals for employment, surgical clearance, and general health screening—helping you stay ready for work or upcoming procedures without the long wait.`,
    understanding: {
      title: "Understanding Employment & Pre-Op Physicals",
      description: `Employment physicals assess your ability to safely perform job-related duties, while preoperative exams evaluate your overall health before surgery. Both exams vary depending on requirements but typically involve a basic physical, review of medical history, and lab work or EKG if needed. We provide clear, fast documentation for employers, surgeons, or HR departments.`,
    },
    Included: [
      "Physical exam and vitals",
      "Review of current medications and conditions",
      "Lab tests or EKG (if required)",
      "Vaccination review or updates",
      "Clearance paperwork and documentation",
    ],
    whenToSeek: [
      "You've accepted a new job that requires a physical",
      "Your employer or HR department needs clearance",
      "You're scheduled for surgery in the next 1–4 weeks",
      "You were referred for a pre-op evaluation",
      "You're returning to work after medical leave",
    ],
    Preparation: [
      {
        title: "Bring instructions or forms",
        description: "Include details from your employer or surgeon.",
      },
      {
        title: "List current medications",
        description: "Including dosage and frequency.",
      },
      {
        title: "Arrive early and fast if required",
        description: "Some labs may need fasting beforehand.",
      },
      {
        title: "Bring past records if helpful",
        description: "Especially for chronic conditions or prior surgeries.",
      },
      {
        title: "Wear comfortable clothing",
        description: "Allows for easy movement and physical checks.",
      },
    ],
  },
  {
    image: img30, // DOT & CDL Physicals
    slug: "dot-cdl-physicals",
    title: "DOT & CDL Physicals",
    description:
      "Certified DOT and CDL physicals for commercial drivers—fast and convenient.",
    category: "Physical Exams",
    longDescription: `Commercial drivers are required to stay in top health for safety on the road. At North Ave Immediate Care in Addison, IL, we offer fast, certified DOT and CDL physicals with minimal wait times—perfect for new certifications or renewals.`,
    understanding: {
      title: "Understanding DOT & CDL Physicals",
      description: `A DOT (Department of Transportation) physical is a federally required medical exam for commercial drivers to ensure they are fit to operate a vehicle safely. These exams follow FMCSA guidelines and include checks on blood pressure, vision, hearing, and overall health. A valid DOT medical certificate is required to maintain your commercial driving privileges.`,
    },
    Included: [
      "Vision and hearing test",
      "Blood pressure and pulse check",
      "Urinalysis (not drug screening)",
      "Physical exam (heart, lungs, spine, etc.)",
      "Review of medical history and medications",
    ],
    whenToSeek: [
      "You're applying for or renewing a CDL license",
      "Your current DOT card is about to expire",
      "Your employer requires a current medical certificate",
      "You've had a change in your medical condition",
      "You're returning to work after a medical leave",
    ],
    Preparation: [
      {
        title: "Bring a valid ID",
        description: "A driver's license or state ID is required.",
      },
      {
        title: "Know your medical history",
        description: "List all medications and health conditions.",
      },
      {
        title: "Bring eyewear or hearing aids",
        description: "You'll be tested with any required devices.",
      },
      {
        title: "Arrive early",
        description: "We'll get your paperwork processed smoothly.",
      },
      {
        title: "Fast if required by your doctor",
        description: "Some medical conditions may require additional labs.",
      },
    ],
  },
  {
    image: img26,
    slug: "stomach-viruses",
    title: "Stomach Viruses",
    description:
      "Evaluation and relief for nausea, vomiting, diarrhea, and stomach virus symptoms.",
    category: "Common Illnesses",
    longDescription: `Stomach viruses can come on suddenly and leave you feeling weak, dehydrated, and miserable. North Ave Immediate Care in Addison, IL, provides fast, expert care for stomach virus symptoms in all ages—no appointment needed. Whether you're suffering from nausea, vomiting, diarrhea, or abdominal pain, our experienced team is here to help you recover quickly and comfortably.`,
    understanding: {
      title: "Understanding Stomach Viruses",
      description: `Stomach viruses are highly contagious infections that affect the digestive tract. They are most commonly caused by norovirus or rotavirus. Symptoms are often linked to close contact with an infected individual, contaminated food, or surfaces. Stomach virus symptoms can appear within 12-48 hours after exposure and typically last 1 to 3 days. Most cases are mild, but severe dehydration can occur, especially in young children and older adults.`,
    },
    symptoms: [
      "Nausea and vomiting",
      "Watery diarrhea",
      "Abdominal cramps and pain",
      "Mild fever or chills",
      "Headache and muscle aches",
      "Fatigue or weakness",
      "Signs of dehydration (dry mouth, dizziness, low urine output)",
    ],
    whenToSeek: [
      "Symptoms last more than 2-3 days",
      "You're unable to keep fluids down",
      "There's blood in your stool or vomit",
      "High fever or severe abdominal pain",
      "Signs of severe dehydration",
      "A young child, elderly, or immunocompromised person is affected",
    ],
    sextext:
      "If you're experiencing stomach virus symptoms and need medical care, visit North Ave Immediate Care in Addison. We're here to help you feel better, faster—no appointment needed.",
    htoptext:
      "If your symptoms are mild, you may be able to manage them at home while your body fights off the virus. Monitor your symptoms closely and don't hesitate to seek medical help if they worsen. Here are some at-home tips for recovery:",

    homeRemedies: [
      {
        title: "Drink fluids frequently",
        description:
          "Water, electrolyte drinks, or clear broths help prevent dehydration.",
      },
      {
        title: "Eat bland foods",
        description:
          "Once you can eat, stick to toast, rice, bananas, or applesauce.",
      },
      {
        title: "Rest as much as possible",
        description: "Give your body time to recover.",
      },
      {
        title: "Avoid dairy, caffeine, and alcohol",
        description: "These can worsen symptoms.",
      },
      {
        title: "Wash hands often",
        description: "Prevent spreading the virus to others in your household.",
      },
    ],
  },
  {
    image: img24,
    slug: "wellness-check",
    title: "Wellness Check",
    description:
      "Comprehensive wellness checks to help you stay healthy and catch issues early.",
    category: "Diabetes Wellness Check",
    longDescription: `A wellness check is a routine exam designed to assess your overall health, screen for potential issues, and support your long-term well-being. At North Ave Immediate Care in Addison, IL, our providers offer thorough wellness checks for adults and children—no appointment needed. Whether you want to monitor chronic conditions, update your health records, or simply stay on top of your health, we're here to help you feel your best year-round.`,
    understanding: {
      title: "Understanding Wellness Checks",
      description: `Wellness checks are preventive visits that focus on your current health status, risk factors, and lifestyle. These exams help catch problems early, update vaccinations, and provide guidance on nutrition, exercise, and mental health. Regular wellness checks are key to maintaining good health and preventing chronic disease.`,
    },
    Included: [
      "Height, weight, and vital signs",
      "Blood pressure and heart rate check",
      "Review of medical history and medications",
      "Screening for chronic conditions (diabetes, cholesterol, etc.)",
      "Immunization review and updates",
      "Lifestyle and nutrition counseling",
      "Referrals for additional tests if needed",
    ],
    whenToSeek: [
      "It's time for your annual physical",
      "You want to monitor a chronic condition",
      "You need school, work, or camp forms completed",
      "You have new symptoms or health concerns",
      "You want to update your vaccinations",
      "You're starting a new exercise or diet plan",
    ],
    preparation: [
      {
        title: "Bring a list of medications",
        description: "Include all prescriptions, supplements, and dosages.",
      },
      {
        title: "Know your family medical history",
        description: "This helps us assess your risk for certain conditions.",
      },
      {
        title: "Prepare questions or concerns",
        description: "We're here to discuss any aspect of your health.",
      },
      {
        title: "Bring any required forms",
        description: "We'll complete school, work, or camp forms as needed.",
      },
      {
        title: "Wear comfortable clothing",
        description: "Makes it easier for exams and measurements.",
      },
    ],
  },
];

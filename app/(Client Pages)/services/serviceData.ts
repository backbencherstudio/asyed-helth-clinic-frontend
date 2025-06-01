import { StaticImageData } from 'next/image';

// Import icons
import icon1 from '../../../public/services/icon/10.svg'
import icon2 from '../../../public/services/icon/9.svg'
import icon3 from '../../../public/services/icon/8.svg'        
import icon4 from '../../../public/services/icon/7.svg'
import icon5 from '../../../public/services/icon/6.svg'
import icon6 from '../../../public/services/icon/5.svg'
import icon7 from '../../../public/services/icon/4.svg'
import icon8 from '../../../public/services/icon/3.svg'
import icon9 from '../../../public/services/icon/2.svg'
import icon10 from '../../../public/services/icon/1.svg'

// Import images
import img1 from "../../../public/services/image/1.png";
import img2 from "../../../public/services/image/2.png";
import img3 from "../../../public/services/image/3.png";
import img4 from "../../../public/services/image/4.png";
import img5 from "../../../public/services/image/5.png";
import img6 from "../../../public/services/image/6.png";
import img7 from "../../../public/services/image/7.png";
import img8 from "../../../public/services/image/8.png";
import img9 from "../../../public/services/image/9.png";
import img10 from "../../../public/services/image/10.png";
import img11 from "../../../public/services/image/11.png";
import img12 from "../../../public/services/image/12.png";
import img13 from "../../../public/services/image/13.png";
import img14 from "../../../public/services/image/14.png";
import img15 from "../../../public/services/image/15.png";

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
  testTypes?: { title: string; description: string; }[];
  conditions?: string[];
  procedures?: { title: string; description: string; }[];
  benefits?: string[];
  preparation?: string[];
  afterCare?: string[];
  vaccineTypes?: { title: string; description: string; }[];
  recommendations?: string[];
}

export interface Service {
  name: string;
  icon: StaticImageData;
}

export const services: Service[] = [
  { name: 'Common Illnesses', icon: icon1 },
  { name: 'Injury Care', icon: icon2 },
  { name: 'Medical Procedures', icon: icon3 },
  { name: 'Kids\' Health', icon: icon4 },
  { name: 'Physical Exams', icon: icon5 },
  { name: 'Vaccines & Shots', icon: icon6 },
  { name: 'Diabetes Wellness Check', icon: icon8 },
  { name: 'Skin & Rashes', icon: icon7 },
  { name: 'Sexual Health', icon: icon9 },
  { name: 'IV Therapy', icon: icon10 }
];

export const cardData: ServiceCard[] = [
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
  {
    image: img2,
    title: "COVID-19 Testing and Treatment",
    description: "Fast, accurate testing and reliable treatment options for COVID-19.",
    category: "Common Illnesses",
    longDescription: `If you're experiencing symptoms of COVID-19 or have been exposed to someone who tested positive, North Ave Immediate Care in Addison, IL, is here to provide fast, accurate testing and reliable treatment options. We offer same-day testing with quick results to help you take action and protect those around you.
Whether you're seeking peace of mind, a travel clearance, or medical care for symptoms, our team is ready to guide you every step of the way.`,
    understanding: {
      title: "Understanding COVID-19",
      description: "COVID-19 is a contagious respiratory illness caused by the SARS-CoV-2 virus. It can range from mild cold-like symptoms to more severe complications, especially for those with underlying health conditions. Early testing and isolation are essential in reducing the spread and receiving timely care.\nAt North Ave Immediate Care, we stay up to date with CDC guidelines to ensure the highest quality testing and treatment protocols."
    },
    symptoms: [
      "Fever or chills",
      "Cough or sore throat",
      "Shortness of breath or difficulty breathing",
      "Fatigue or body aches",
      "Loss of taste or smell",
      "Headache",
      "Congestion or runny nose",
      "Nausea, vomiting, or diarrhea"
    ],
    whenToSeek: [
      "You have been exposed and need testing",
      "You are showing symptoms of COVID-19",
      "You need testing for work, travel, or school",
      "You test positive and need follow-up care",
      "Your symptoms worsen or linger beyond a few days"
    ],
    homeRemedies: [
      {
        title: "Isolate as recommended",
        description: "Stay away from others to prevent transmission."
      },
      {
        title: "Stay hydrated",
        description: "Drink fluids regularly to support recovery."
      },
      {
        title: "Get plenty of rest",
        description: "Sleep is essential to strengthen your immune system."
      },
      {
        title: "Take over-the-counter medications",
        description: "Fever reducers or cough medications may help ease symptoms."
      },
      {
        title: "Monitor your symptoms",
        description: "Watch for worsening signs like difficulty breathing or chest pain."
      }
    ]
  },
  {
    image: img3,
    title: "Cuts, Scrapes, and Stitches",
    description: "Expert care for wounds, from minor scrapes to injuries requiring stitches.",
    category: "Injury Care",
    longDescription: `Accidents happen—and when they do, North Ave Immediate Care in Addison, IL, is here to help. Whether it's a minor scrape, a deep cut, or a wound that may require stitches, our experienced medical team provides prompt, compassionate care to help you heal safely and minimize scarring or infection.
From playground falls to kitchen mishaps, we treat non-life-threatening injuries quickly, so you can get back to your day with peace of mind.`,
    understanding: {
      title: "Understanding Wound Care",
      description: "Cuts and scrapes are common injuries that break the skin and may lead to bleeding, swelling, or infection if not treated properly. While minor wounds often heal with basic care, deeper lacerations or wounds with significant bleeding may require medical attention—including stitches, glue, or wound closures.\nSeeking care early ensures proper cleaning, closure, and protection against infection."
    },
    signs: [
      "Bleeding that doesn't stop after 10 minutes",
      "Deep or wide cuts where edges won't close",
      "Dirt, debris, or glass stuck in the wound",
      "Cuts caused by dirty or rusty objects",
      "Swelling, redness, or pus—signs of infection",
      "Wounds on the face, hands, or joints"
    ],
    whenToSeek: [
      "The cut is deep, long, or gaping",
      "You suspect it may need stitches or glue",
      "You haven't had a tetanus shot in the last 5 years",
      "The wound was caused by a bite or dirty object",
      "Redness, warmth, or discharge is developing"
    ],
    homeRemedies: [
      {
        title: "Clean the wound",
        description: "Rinse gently with water and mild soap to remove dirt."
      },
      {
        title: "Apply an antibiotic ointment",
        description: "This helps prevent infection."
      },
      {
        title: "Cover with a clean bandage",
        description: "Keep the wound protected from dirt and bacteria."
      },
      {
        title: "Change bandages daily",
        description: "Replace with a clean one until fully healed."
      },
      {
        title: "Watch for signs of infection",
        description: "Redness, swelling, or pus may require medical care."
      }
    ]
  },
  {
    image: img4,
    title: "Ear Infections",
    description: "Expert treatment for ear infections in both children and adults.",
    category: "Common Illnesses",
    longDescription: `Ear pain can be frustrating, especially when it affects your ability to hear clearly, sleep comfortably, or go about your day without discomfort. At North Ave Immediate Care in Addison, IL, our experienced medical team is here to provide fast, effective treatment for ear infections in both children and adults.
Whether you're dealing with a sharp earache, muffled hearing, or fluid drainage, we're committed to helping you feel better quickly. Let us help you get back to your routine with expert care and a treatment plan tailored to your symptoms.`,
    understanding: {
      title: "Understanding Ear Infections",
      description: "An ear infection occurs when bacteria or viruses infect the middle ear, usually after a cold, sinus infection, or respiratory illness. The inflammation and fluid buildup behind the eardrum can lead to pain, pressure, and hearing issues.\nWhile ear infections are more common in children, adults can also be affected—especially during allergy season or after illness."
    },
    symptoms: [
      "Sharp or throbbing ear pain",
      "Fullness or pressure in the ear",
      "Temporary hearing loss or muffled hearing",
      "Fluid drainage from the ear",
      "Fever or irritability (especially in children)",
      "Trouble sleeping or balancing"
    ],
    whenToSeek: [
      "Your ear pain lasts more than 1–2 days",
      "You experience fluid or pus draining from the ear",
      "Hearing becomes significantly reduced",
      "You have a fever over 101°F",
      "A child shows signs of pain, irritability, or trouble sleeping"
    ],
    homeRemedies: [
      {
        title: "Apply a warm compress",
        description: "Hold a warm washcloth against the affected ear to relieve pain."
      },
      {
        title: "Use over-the-counter pain relievers",
        description: "Medications like acetaminophen or ibuprofen can reduce pain and fever."
      },
      {
        title: "Keep the ear dry",
        description: "Avoid swimming or getting water in the affected ear during healing."
      },
      {
        title: "Avoid inserting objects",
        description: "Do not place cotton swabs or other items in the ear canal, as this can worsen the infection."
      }
    ]
  },
  {
    image: img5,
    title: "Flu & Fever",
    description: "Fast, reliable treatment for flu symptoms and fever management.",
    category: "Common Illnesses",
    longDescription: `We understand how draining and uncomfortable it can be to experience flu symptoms or a persistent fever. At North Ave Immediate Care, our compassionate medical team is here to provide fast, reliable treatment so you can feel better quickly. Whether you're dealing with chills, body aches, fatigue, or a high temperature, our priority is getting you the care you need to recover and return to your daily routine.
Your health matters — and we're here to support you every step of the way with expert care and guidance. Trust North Ave Immediate Care in Addison, IL, to help you bounce back quickly and safely.`,
    understanding: {
      title: "Understanding the Flu",
      description: "The flu (influenza) is a contagious respiratory illness caused by viruses that infect the nose, throat, and sometimes the lungs. Symptoms often come on suddenly and can range from mild to severe. Unlike the common cold, the flu can cause intense fatigue, body aches, and fever, and in some cases, lead to complications like pneumonia.\nIdentifying flu symptoms early can help prevent the spread and allow for more effective treatment."
    },
    symptoms: [
      "Sudden onset of fever",
      "Chills and body aches",
      "Sore throat and cough",
      "Fatigue and weakness",
      "Nasal congestion or runny nose",
      "Headache",
      "Vomiting or diarrhea (more common in children)"
    ],
    whenToSeek: [
      "A fever over 102°F that lasts more than 3 days",
      "Difficulty breathing or shortness of breath",
      "Severe sore throat or persistent cough",
      "Dehydration or inability to keep fluids down",
      "Flu symptoms in children, elderly individuals, or those with chronic health conditions"
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description: "Drink plenty of water, electrolyte drinks, and clear broths."
      },
      {
        title: "Get plenty of rest",
        description: "Allow your body time to heal by getting adequate sleep and rest."
      },
      {
        title: "Use fever reducers",
        description: "Medications like acetaminophen or ibuprofen can help manage fever and body aches."
      },
      {
        title: "Warm saltwater gargle",
        description: "Helps soothe a sore throat."
      },
      {
        title: "Avoid smoking and alcohol",
        description: "These can worsen symptoms and delay healing."
      }
    ]
  },
  {
    image: img6,
    title: "Food Poisoning",
    description: "Prompt medical attention for foodborne illnesses and related symptoms.",
    category: "Common Illnesses",
    longDescription: `Food poisoning can come on quickly and leave you feeling miserable. At North Ave Immediate Care in Addison, IL, we offer prompt medical attention for foodborne illnesses to help you recover safely and comfortably. Whether you're dealing with nausea, vomiting, diarrhea, or abdominal cramps, our experienced providers are here to support your recovery.
If your symptoms are severe or not improving, don't wait it out—walk into our urgent care clinic for fast, reliable care.`,
    understanding: {
      title: "Understanding Food Poisoning",
      description: "Food poisoning occurs when you consume contaminated food or drinks. Bacteria, viruses, and parasites are the most common culprits, and symptoms can begin within hours of eating tainted food. While most cases resolve on their own, some may lead to dehydration or require medical intervention.\nKnowing the source and severity of your symptoms is key to determining the right treatment approach."
    },
    symptoms: [
      "Nausea and vomiting",
      "Diarrhea (sometimes with blood)",
      "Stomach cramps and pain",
      "Fever and chills",
      "Headache or muscle aches",
      "Dehydration (dry mouth, low urine output, dizziness)"
    ],
    whenToSeek: [
      "Symptoms persist longer than 2–3 days",
      "You have a high fever over 101°F",
      "There is blood in your stool or vomit",
      "You experience signs of dehydration",
      "You are pregnant, elderly, immunocompromised, or caring for a young child with symptoms"
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description: "Drink water, electrolyte drinks, or clear broths to replace lost fluids."
      },
      {
        title: "Eat bland foods",
        description: "Stick to easy-to-digest foods like bananas, rice, toast, and applesauce."
      },
      {
        title: "Avoid dairy, caffeine, and alcohol",
        description: "These can worsen symptoms or irritate your stomach."
      },
      {
        title: "Rest",
        description: "Give your body the time it needs to recover fully."
      },
      {
        title: "Wash hands frequently",
        description: "Prevent spreading the illness to others."
      }
    ]
  },
  {
    image: img15,
    title: "Foreign Object Removal",
    description: "Safe, professional removal of foreign objects from skin, eyes, ears, and more.",
    category: "Medical Procedures",
    longDescription: `Whether it's a splinter, a piece of glass, or something accidentally lodged in the ear, nose, or skin, foreign objects can be painful and potentially dangerous if not removed properly. At North Ave Immediate Care in Addison, IL, we offer safe, professional removal of foreign objects to prevent infection and relieve discomfort.
Don't try to remove it yourself—our trained medical team is here to help you get relief quickly and safely.`,
    understanding: {
      title: "Understanding Foreign Object Injuries",
      description: "Foreign objects can become embedded in the body through accidents, injuries, or inhalation. Common examples include splinters, glass, metal, food, insects, or small items in the ear or nose. Depending on the location and depth, improper removal can lead to bleeding, infection, or further injury.\nTimely removal by a healthcare professional is the safest way to protect your health and prevent complications."
    },
    commonLocations: [
      "Skin (splinters, glass, or metal)",
      "Eyes (dust, debris, or small particles)",
      "Ears (insects, beads, or food)",
      "Nose (toys, tissue, or food—especially in children)",
      "Throat (fish bones, pills, or food)"
    ],
    whenToSeek: [
      "The object is deeply embedded or not easily visible",
      "There is pain, swelling, or bleeding at the site",
      "The area shows signs of infection (redness, warmth, pus)",
      "The object is in a sensitive location (eye, ear, nose, throat)",
      "You or your child inhaled or swallowed a foreign object"
    ],
    homeRemedies: [
      {
        title: "Clean the area gently",
        description: "Use mild soap and water to rinse the wound."
      },
      {
        title: "Apply an antibiotic ointment",
        description: "Helps reduce the risk of infection."
      },
      {
        title: "Keep it covered",
        description: "Use a sterile bandage until the skin heals."
      },
      {
        title: "Monitor for signs of infection",
        description: "Increased redness, pain, or drainage may require medical follow-up."
      },
      {
        title: "Avoid digging or probing",
        description: "Never use tweezers or sharp objects unless advised by a medical professional."
      }
    ]
  },
  {
    image: img15,
    title: "Laceration Repair",
    description: "Expert care for cuts and wounds requiring medical attention.",
    category: "Injury Care",
    longDescription: `Whether it's from a kitchen accident, a fall, or a sharp object, a deep cut can be alarming and painful. At North Ave Immediate Care in Addison, IL, we provide prompt laceration repair to stop bleeding, prevent infection, and support proper healing. From minor cuts to deeper wounds that need stitches or skin glue, our skilled providers are here to help—no ER visit required.
Walk in today for fast, compassionate wound care in a clean and professional setting.`,
    understanding: {
      title: "Understanding Lacerations",
      description: "A laceration is a deep cut or tear in the skin caused by trauma. Unlike minor scrapes or surface wounds, lacerations may involve damage to the underlying tissue, muscles, or nerves. Depending on the depth and location, the wound may require stitches, staples, or adhesive closures to heal properly.\nPrompt medical care ensures that the wound is cleaned, closed, and dressed correctly to reduce the risk of infection and scarring."
    },
    signs: [
      "Bleeding that doesn't stop after 10 minutes of pressure",
      "Wound edges that are gaping or won't stay closed",
      "Cuts deeper than 1/4 inch",
      "Injury caused by a dirty or rusty object",
      "Cuts on the face, hands, or joints",
      "Signs of infection (redness, warmth, swelling, or pus)"
    ],
    whenToSeek: [
      "You think the wound may need stitches or medical closure",
      "There's heavy bleeding or exposed tissue",
      "You haven't had a tetanus shot in the last 5 years",
      "The cut was caused by metal, glass, or a bite",
      "Signs of infection start to develop"
    ],
    homeRemedies: [
      {
        title: "Keep the area clean and dry",
        description: "Change bandages as advised and avoid getting the wound wet."
      },
      {
        title: "Watch for infection",
        description: "Monitor for redness, warmth, or drainage."
      },
      {
        title: "Limit movement if needed",
        description: "Reduce stress on the area to avoid reopening the wound."
      },
      {
        title: "Avoid touching or picking",
        description: "Let the body heal naturally."
      },
      {
        title: "Follow up as instructed",
        description: "Return for suture removal or follow-up if instructed."
      }
    ]
  },
  {
    image: img15,
    title: "Minor Fractures & Dislocations",
    description: "Fast evaluation and treatment for bone and joint injuries.",
    category: "Injury Care",
    longDescription: `Injuries like a swollen wrist, a jammed finger, or a painful joint after a fall can be signs of a minor fracture or dislocation. At North Ave Immediate Care in Addison, IL, we offer fast, walk-in evaluation and treatment for non-life-threatening bone and joint injuries—so you don't have to wait in the ER.
Our skilled medical team will assess your injury, provide stabilization, and refer you to a specialist if needed for follow-up care.`,
    understanding: {
      title: "Understanding Fractures and Dislocations",
      description: "Fractures are breaks or cracks in the bone that can range from minor hairline fractures to more noticeable breaks. Dislocations occur when a bone slips out of its normal position in a joint. These injuries often result from falls, sports accidents, or sudden impacts and require medical attention to ensure proper healing."
    },
    signs: [
      "Intense pain at the injury site",
      "Swelling or bruising",
      "Deformity or abnormal positioning",
      "Inability to move or bear weight on the affected limb",
      "Tenderness and stiffness",
      "Numbness or tingling near the joint (in dislocations)"
    ],
    whenToSeek: [
      "You suspect a broken bone or joint dislocation",
      "There is visible swelling, bruising, or deformity",
      "You are unable to move the joint or put weight on it",
      "The pain is severe or getting worse",
      "You heard a snap or pop at the time of injury"
    ],
    homeRemedies: [
      {
        title: "Rest",
        description: "Avoid putting pressure on the affected area."
      },
      {
        title: "Ice",
        description: "Apply ice packs to reduce swelling and pain."
      },
      {
        title: "Compression",
        description: "Use an elastic wrap if advised to control swelling."
      },
      {
        title: "Elevation",
        description: "Keep the injured area raised above heart level."
      }
    ]
  },
  {
    image: img15,
    title: "Sore Throat Treatment",
    description: "Expert diagnosis and relief for throat pain and discomfort.",
    category: "Common Illnesses",
    longDescription: `A sore throat can be more than just a minor inconvenience—it can make eating, drinking, and even speaking difficult. At North Ave Immediate Care in Addison, IL, we provide comprehensive evaluation and treatment for sore throats, whether they're caused by infections, allergies, or other factors.`,
    understanding: {
      title: "Understanding Sore Throats",
      description: "A sore throat is often a symptom of an underlying condition, such as a viral infection (like the common cold or flu), a bacterial infection (such as strep throat), or exposure to allergens or irritants. Identifying the cause is key to choosing the right treatment.\nOur providers use rapid testing and physical evaluation to determine if your sore throat is due to a viral or bacterial source."
    },
    causes: [
      "Viral infections (cold, flu, COVID-19)",
      "Bacterial infections (strep throat, tonsillitis)",
      "Seasonal allergies or postnasal drip",
      "Dry air or environmental irritants",
      "Overuse of the voice",
      "Acid reflux (GERD)"
    ],
    whenToSeek: [
      "Your sore throat lasts longer than 3 days",
      "You have difficulty swallowing or breathing",
      "You develop a high fever",
      "White patches are visible on the tonsils",
      "Swollen lymph nodes or rash appear",
      "You suspect strep throat or were exposed to someone who has it"
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description: "Warm teas, broths, and water can soothe the throat."
      },
      {
        title: "Use throat lozenges or sprays",
        description: "These can provide temporary relief from pain."
      },
      {
        title: "Gargle with saltwater",
        description: "A simple saltwater rinse helps reduce inflammation."
      },
      {
        title: "Rest your voice",
        description: "Limit talking to avoid further irritation."
      },
      {
        title: "Use a humidifier",
        description: "Moist air can ease dryness and throat irritation."
      }
    ]
  },
  {
    image: img15,
    title: "Sports & Work Injuries",
    description: "Expert treatment for sports and workplace-related injuries.",
    category: "Injury Care",
    longDescription: `Injuries can happen anytime—on the field, in the gym, or on the job. At North Ave Immediate Care in Addison, IL, we provide fast, expert treatment for a wide range of non-life-threatening sports and work-related injuries. Whether you're dealing with a sprain, strain, cut, or impact injury, our team is here to help you heal safely and return to your routine as quickly as possible.
Walk in today for same-day care with no appointment needed.`,
    understanding: {
      title: "Understanding Sports & Work Injuries",
      description: "Sports and workplace injuries are common and often caused by repetitive motion, overexertion, slips and falls, or collisions. Prompt evaluation is key to managing pain, preventing further damage, and supporting long-term recovery.\nOur clinic treats both acute and overuse injuries and can help with documentation if your injury is job-related."
    },
    commonInjuries: [
      "Sprains and strains",
      "Fractures and dislocations",
      "Back, shoulder, and joint pain",
      "Cuts, scrapes, and lacerations",
      "Minor head injuries or concussions (evaluation only)",
      "Muscle overuse or repetitive stress injuries",
      "Tendonitis and bursitis",
      "Bruises or contusions"
    ],
    whenToSeek: [
      "You're experiencing severe pain or swelling",
      "You can't move or bear weight on a joint",
      "A cut or wound occurred during work or play",
      "You need an injury evaluation for a work or school report",
      "Symptoms are interfering with your ability to perform daily tasks"
    ],
    homeRemedies: [
      {
        title: "Rest and protect the area",
        description: "Avoid re-injury by modifying your activity."
      },
      {
        title: "Use ice and elevation",
        description: "Reduce swelling in the first 48 hours."
      },
      {
        title: "Take prescribed or OTC pain relievers",
        description: "Help manage inflammation and discomfort."
      },
      {
        title: "Use compression wraps or braces as advised",
        description: "Support healing and prevent strain."
      },
      {
        title: "Follow up if symptoms worsen",
        description: "Don't ignore lingering pain or limited mobility."
      }
    ]
  },
  {
    image: img15,
    title: "Upper Respiratory Infections",
    description: "Treatment for colds, sinus infections, and respiratory symptoms.",
    category: "Common Illnesses",
    longDescription: `Upper respiratory infections (URIs) are among the most common reasons for seeking urgent care—especially during cold and flu season. At North Ave Immediate Care in Addison, IL, we provide fast, accurate evaluation and treatment to help relieve your symptoms and prevent further complications.
If you're dealing with congestion, cough, sore throat, or sinus pressure, our team is here to provide the care and support you need to feel better quickly.`,
    understanding: {
      title: "Understanding Upper Respiratory Infections",
      description: "A URI is an infection that affects the nose, throat, sinuses, or larynx. These infections are typically caused by viruses but can sometimes develop into secondary bacterial infections. The common cold, sinusitis, pharyngitis, and laryngitis all fall under the umbrella of upper respiratory infections.\nWhile many URIs resolve on their own, proper care can speed up recovery and reduce the risk of complications."
    },
    symptoms: [
      "Nasal congestion or runny nose",
      "Cough (dry or productive)",
      "Sore throat or hoarseness",
      "Sneezing or postnasal drip",
      "Mild fever or chills",
      "Sinus pressure or facial pain",
      "Headache or fatigue"
    ],
    whenToSeek: [
      "Your symptoms last more than 10 days",
      "You experience a high fever (over 101°F)",
      "You have shortness of breath or wheezing",
      "Sinus pain or pressure worsens",
      "Your cough produces yellow or green mucus",
      "Symptoms improve then suddenly worsen again"
    ],
    homeRemedies: [
      {
        title: "Stay hydrated",
        description: "Drink plenty of fluids to thin mucus and stay energized."
      },
      {
        title: "Use a humidifier",
        description: "Moist air can relieve congestion and soothe irritated airways."
      },
      {
        title: "Try saline nasal spray",
        description: "Helps flush out sinuses and ease breathing."
      },
      {
        title: "Rest",
        description: "Your body needs extra energy to recover—prioritize sleep and downtime."
      },
      {
        title: "Use OTC medications",
        description: "Pain relievers, decongestants, or throat lozenges may reduce symptoms."
      }
    ]
  }
];

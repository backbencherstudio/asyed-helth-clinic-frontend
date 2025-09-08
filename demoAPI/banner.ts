import ban1 from "@/public/banner/asian-female-physician-consulting-woman-office 1.jpg";
import ban2 from "@/public/banner/banner2.png";
import call from "@/public/logo/call.svg";
import checkin from "@/public/logo/checkin.svg";
import visited from "@/public/logo/visited.svg";
export const bannerdata = [
  {
    image: ban1,
    title: "North Ave Immediate Care, Expert Care Without the Wait!",
    description:
      "Experience unparalleled convenience and quality care at your fingertips. Our services are designed for easy access, ensuring you receive the best support when you need it.",
    button: [
      {
        icon: checkin,
        title: "Check In",
        link:"https://www.patientfusion.com/external/appointment/79d7ffab-1679-40d1-bd30-a7ee286ebc5e?origin=doctor"
      },
      {
        icon: visited,
        title: "Virtual Visit",
        link:"/contact-us"
      },
      {
        icon: call,
        title: "Call Now",
        link:"tel:+16309409573"
      },
    ],
  },
  {
    image: ban2,
    title: "Free Diabetes Wellness Check",
    description:
      "Take control of your health with a free diabetes wellness check. Get quick, accurate blood sugar testing and expert guidance to help you monitor your levels, understand risk factors, and stay on top of your long-term wellness.",
    button: [
      {
        icon: checkin,
        title: "Check In",
        link:"https://www.patientfusion.com/external/appointment/79d7ffab-1679-40d1-bd30-a7ee286ebc5e?origin=doctor"
      },
      {
        icon: visited,
        title: "Virtual Visit",
        link:"/contact-us"
      },
      {
        icon: call,
        title: "Call Now",
        link: "tel:+16309409573"
      },
    ],
  },
];

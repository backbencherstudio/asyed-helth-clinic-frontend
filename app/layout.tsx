import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppConfig } from "@/config/app.config";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import 'swiper/css';
import 'swiper/css/navigation';
import "./globals.css";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
  metadataBase: new URL('https://northaveimmediatecare.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'North Ave Immediate Care - Expert Care Without the Wait',
    description: 'Experience unparalleled convenience and quality care at North Ave Immediate Care in Addison, IL. Walk-in urgent care, same-day appointments, and virtual visits available.',
    url: 'https://northaveimmediatecare.com',
    siteName: 'North Ave Immediate Care',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Ave Immediate Care - Expert Care Without the Wait',
    description: 'Experience unparalleled convenience and quality care at North Ave Immediate Care in Addison, IL.',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
const gellixSB = localFont({
  src: "../font/gellix/Gellix-SemiBold.ttf"
})
const metroM = localFont({
  src: "../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-medium.otf"
})
const metroSB = localFont({
  src: "../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-semi-bold.otf"
})
const metroN = localFont({
  src: "../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-regular.otf"
})
const metroR = localFont({
  src: "../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-semi-bold.otf"
})
const gellixB = localFont({
  src: "../font/gellix/Gellix-Bold.ttf"
})
const gellixM = localFont({
  src: "../font/gellix/Gellix-Medium.ttf"
})
const gellixN = localFont({
  src: "../font/gellix/Gellix-Regular.ttf"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/logo/logo.svg" />
      <body className={`${gellixSB.className} ${poppins.className} ${gellixN.className} ${gellixB.className} ${metroM.className} ${metroN.className} ${metroSB.className} ${metroR.className} ${gellixM.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

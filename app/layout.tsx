import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppConfig } from "@/config/app.config";
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'swiper/css';
import 'swiper/css/navigation';
import "./globals.css";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

const gellixSB=localFont({
  src:"../font/gellix/Gellix-SemiBold.ttf"
})
const metroM=localFont({
  src:"../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-medium.otf"
})
const metroSB=localFont({
  src:"../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-semi-bold.otf"
})
const metroN=localFont({
  src:"../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-regular.otf"
})
const metroR=localFont({
  src:"../font/metro-sans-font-1740435803-0/fontspring-demo-metrosans-semi-bold.otf"
})
const gellixB=localFont({
  src:"../font/gellix/Gellix-Bold.ttf"
})
const gellixM=localFont({
  src:"../font/gellix/Gellix-Medium.ttf"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gellixSB.className} ${gellixB.className} ${metroM.className} ${metroN.className} ${metroSB.className} ${metroR.className} ${gellixM.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

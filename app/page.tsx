import About from "@/components/about/About";
import Mission from "@/components/about/Mission";
import BannerSlider from "@/components/Banner";
import Blog from "@/components/blog/Blog";
import ClinicInfo from "@/components/ClinicInfo";
import Insurance from "@/components/services/Insurance";
import Service from "@/components/services/Service";
import UrgentCare from "@/components/services/UrgentCare";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div >
      <BannerSlider/>
      <ClinicInfo/>
      <About/>
      <Mission/>
      <Service/>
      <UrgentCare/>
      <Insurance/>
      <Blog/>
      <Subscribe/>
    </div>
  );
}

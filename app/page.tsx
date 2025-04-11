import About from "@/components/about/About";
import Mission from "@/components/about/Mission";
import BannerSlider from "@/components/Banner";
import ClinicInfo from "@/components/ClinicInfo";

export default function Home() {
  return (
    <div >
      <BannerSlider/>
      <ClinicInfo/>
      <About/>
      <Mission/>
    </div>
  );
}

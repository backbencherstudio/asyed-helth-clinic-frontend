
import AboutChoose from "@/components/about/AboutChoose";
import AboutMission from "@/components/about/AboutMission";
import AboutStats from "@/components/about/AboutStats";
import Question from "@/components/about/Question";
import Subscribe from "@/components/Subscribe";
import Banner from "../(Client Pages)/_components/banner";
import aboutBanner from "@/public/about/aboutbanner.jpg";

function AboutPage() {
  return (
    <>

        <Banner 
        title="Compassionate Care, Trusted Expertise"
        description="Committed to compassionate care, innovative treatments, and your well-being."
        image={aboutBanner}
        />


      <div className="container">
        <div className="content">
          <div>
            <AboutStats />
            <AboutMission />
          </div>
        </div>
      </div>
      <AboutChoose />
      <div className="container">
        <Question />
      </div>
      <Subscribe />
    </>
  );
}

export default AboutPage;

import AboutBanner from "@/components/about/AboutBanner"
import AboutChoose from "@/components/about/AboutChoose"
import AboutMission from "@/components/about/AboutMission"
import AboutStats from "@/components/about/AboutStats"
import Question from "@/components/about/Question"
import Subscribe from "@/components/Subscribe"

function AboutPage() {
    return (
        <div>
           <AboutBanner/>
           <AboutStats/> 
           <AboutMission/>
           <AboutChoose/>
            <Question/>
           <Subscribe/>
        </div>
    )
}

export default AboutPage

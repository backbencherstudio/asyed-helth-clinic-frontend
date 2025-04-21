import Subscribe from '@/components/Subscribe'
import CareTeam from '@/components/takeLook/CareTeam'
import TakeLookBanner from '@/components/takeLook/TakeLookBanner'
import TakeLookTabs from '@/components/takeLook/TakeLookTabs'
import Testimonial from '@/components/takeLook/Testimonial'
import WatchClinicVideo from '@/components/takeLook/WatchClinicVideo'

function TakeLookPage() {
  return (
    <div>
      <TakeLookBanner/>
      <TakeLookTabs/>
      <WatchClinicVideo   
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"        
      poster="/takeLook/watch.svg"
      title="Pediatric Consultation Session"
      
      />
      <CareTeam/>
      <Testimonial/>
      <Subscribe/>
    </div>
  )
}

export default TakeLookPage

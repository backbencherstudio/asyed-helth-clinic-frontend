import { missionData } from '@/demoAPI/missiondata'
import MissionCard from './MissionCard'

function Mission() {
  return (
   
       <section className="max-w-[77rem] mx-auto px-4 pt-11 pb-14 lg:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missionData.map((item) => (
         <MissionCard key={item.title} item={item}/>
        ))}
      </div>
    </section>
    
  )
}

export default Mission

import H2 from '../reusable/H2'
import InsuranceTabs from './InsuranceTabs'

function InsurancePlan() {
  return (
     <section className="max-w-7xl mx-auto px-4 py-14 lg:py-32">
            <div className="text-center lg:mb-12 ">
              <div className='px-10 lg:px-0'>

                <H2 >We accept most insurance plans</H2>
              </div>
                <p className="text-pragraphColor  leading-[160%] mt-3 max-w-[620px] mx-auto text-base lg:max-w-xl lg:px-12">
                    Insurance plans vary by state. Select your state to view accepted insurances. Can't find yours? Use our search tool.
                </p>
            </div>
             <div>
                <InsuranceTabs/>
             </div>
          
        </section>
  )
}

export default InsurancePlan

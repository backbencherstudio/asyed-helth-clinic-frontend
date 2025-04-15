import H2 from '../reusable/H2'
import AboutAccordion from './AboutAccordion'

function Question() {
  return (
    <section className=' lg:my-32 my-14 max-w-[77rem] mx-auto'>
       <div>
        <div className=' max-w-3xl mx-auto text-center'>
          <H2 >
            Frequently Asked Questions
          </H2>
          <p className="mt-4 text-pragraphColor text-base leading-[160%]">
            Got questions? We’ve got answers! Explore our frequently asked questions to learn more about Retailbridge’s solutions and how they can benefit your business.
          </p>
        </div>
        <div>
            <AboutAccordion/>
        </div>
       </div>
    </section>
  )
}

export default Question

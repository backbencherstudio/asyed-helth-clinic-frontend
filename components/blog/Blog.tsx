import CustomButtonTwo from '../reusable/CustomButtonTwo'
import H2 from '../reusable/H2'
import BlogSlide from './BlogSlide'

function Blog() {
  return (
    <section >
       <div className="max-w-[82.5rem] mx-auto px-4 py-14 lg:py-32 ">
                    <div className=" flex justify-between items-end mb-12">
                        <div className=" ">
                            <H2 >Your Health, Our Insights</H2>
                            <p className="text-pragraphColor leading-[160%] mt-3 max-w-[500px]  text-base">
                                Embrace personalized, state-of-the-art care that sets the bar high in both professional and academic standards. 
                            </p>
                        </div>
                        <div>
                            <CustomButtonTwo>View All Blogs </CustomButtonTwo>
                        </div>
                    </div>

                    <div>
                      <BlogSlide/> 
                    </div>
                </div>
    </section>
  )
}

export default Blog

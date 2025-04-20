import Banner from '@/app/(Client Pages)/_components/banner'
import Question from '@/components/about/Question'
import Bannerimg from '@/public/healthnews/image/banner1.png'
import Card from '../_components/health-news/card'



export default function Healthnews() {
  return (
    <>
      <Banner
        image={Bannerimg}
        title='Your Health, Our Insights'
        description='Stay informed with expert health tips, wellness advice, and the latest medical updates.'
      />
      <div className="container">
        <div className="content mx-4 mt-32 mb-24">
          <div className="max-w-[750px] gap-[9px] mx-auto mb-8">
            <div className=" text-center text-[#20254b] text-[40px] font-medium leading-[64px]">Latest Health & Wellness Articles</div>
            <div className=" text-center text-[#4a4c56] text-base font-normal leading-relaxed">Explore our expert-written blogs covering a variety of healthcare topics, from preventive care to in-depth medical insights. Whether you're looking for seasonal health tips, disease prevention strategies, or lifestyle advice, we've got you covered.</div>
          </div>
          <Card />
          <Question />
        </div>
      </div>

    </>
  )
}

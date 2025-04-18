import React from 'react'
import Cards from '../_components/p-resources/cards'
import Overview from '../_components/p-resources/overview'
import Banner from '../_components/banner'
import Bannerimg from '@/public/resources/img/banner3.png'




export default function Resources() {
  return (
    <>
        <div className="start">

        <Banner 
        image={Bannerimg}
        title='Patient Resources: Your Guide to Better Health'
        description='Supporting Your Health Journey with Helpful Information and Services'
        />

            <div className="container">
              <div className="content mx-4">
                <div className="text-center mt-[107px] mb-10 text-[#20254b] text-[44px] font-semibold leading-[57.20px]">Express Links</div>
                <Cards />
                <Overview />
              </div>
            </div>
        </div>
    </>
  )
}

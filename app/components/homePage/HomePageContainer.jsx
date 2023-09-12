import React from 'react'
import HeroSection from './homeSections/heroSecton/HeroSection'
import OurSessions from './ourSessions/OurSessions'
import AboutUs from './homeSections/aboutUs/AboutUs'
import AboutArtist from './aboutArtist/AboutArtist'
import ContactUs from './contactUs/ContactUs'
import Engage from './exploreHatirpool/Engage'

import ContactUsSecond from './contactUs2/ContactUsSecond'



const HomePageContainer = () => {
  return (
    <div className='bg-black px-4 lg:px-2 '>
        <HeroSection/>
        <OurSessions/>
         <AboutUs/>
         <AboutArtist/>
         <ContactUs/>
         <Engage/>
         <ContactUsSecond/>
    </div>
  )
}

export default HomePageContainer
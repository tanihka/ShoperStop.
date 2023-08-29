import React from 'react'
// import WhyUs from '../Components/WhyUs'
import Hero from '../Components/Hero'
import TopProducts from '../Components/TopProducts'
import Footer from '../Components/Footer'
// import Offer from '../Components/Offer'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Hero/>
      <TopProducts/>
      {/* <Offer/> */}
      {/* <WhyUs/> */}
      <Footer/>
    </div>
  )
}

export default HomePage
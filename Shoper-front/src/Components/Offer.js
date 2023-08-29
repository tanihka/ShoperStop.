import React from 'react'
import offer from '../images/offer.jpg'
const Offer = () => {
  return (
    <div className='Offer'>
        <div className='offerImage'>
            <img src={offer} alt=''/>
        </div>
        <div className='offerText'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic ad iure qui illum distinctio quibusdam, voluptate quod vero aliquid.
            </p>
        </div>
    </div>
  )
}

export default Offer
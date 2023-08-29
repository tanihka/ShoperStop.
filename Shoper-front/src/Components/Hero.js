import React from 'react'
import HeroImg from "../images/hero.png"
import { Link } from 'react-router-dom'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className="HeroText">
            <span>Absolutely hot collections ️‍🔥</span>
            <h2>The best place to find and buy amazing products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum ut hic vero maxime distinctio inventore unde explicabo eaque sit!</p>
            <Link to="/products">
              <button>
              <span>Explore Now</span>
              <HiArrowNarrowRight className='exploreArrow'/>
              </button>
            </Link>
        </div>
        <div className="HeroImage">
            <img src={HeroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero
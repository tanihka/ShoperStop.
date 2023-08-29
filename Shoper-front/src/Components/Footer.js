import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='FooterWrap'>
            <div className='Footer'>
                <div className="logo">
                    <Link to='/'><h3 className=''>Shoper<span style={{ color: '#FF3F6C' }}>Stop</span></h3></Link>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates.</p>
                </div>
                <div >
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div >
                    <h3>Follow Us</h3>
                </div>
                <div >
                    <h3>Subscribe Us</h3>
                </div>
            </div>
            <div className="bottomFooter">
                <hr />
                <p>made with ❤️</p>
            </div>
        </div>
    )
}

export default Footer
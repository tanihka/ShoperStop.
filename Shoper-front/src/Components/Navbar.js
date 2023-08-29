import React, { useContext, useState, useEffect } from 'react'
import { BsEmojiSunglasses } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx';
import { UserContext } from '../Context/UserContext';


const Navbar = () => {
    const { getTotalTimesAdded } = useContext(CartContext);
    // adding the states 
    const [isActive, setIsActive] = useState(false);


    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };



    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }

    const toggleScrollLock = () => {
        document.body.classList.toggle('scroll-lock', isActive);
      };
    
      useEffect(() => {
        toggleScrollLock();
      }, [isActive]);
      const { user, logout } = useContext(UserContext);

    return (
        <>
            <div className="navContainer">
                <div className='navbar '>
                    <div className="logo">
                        <Link to='/'><h1 className=''>Shoper<span style={{ color: '#634ACD' }}>Stop</span></h1></Link>
                    </div>
                    <div className='navMenuWrap'>
                        <ul className='navMenu'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/products'>Products</NavLink></li>
                            {user.isLoggedIn ? (
                <li  onClick={logout}>Logout</li>
              ) : (
                <li><NavLink to='/login'><BsEmojiSunglasses className='login-icon' /></NavLink></li>
              )}
                        </ul>
                        <button className='HammBurger' onClick={toggleActiveClass}><HiMenu /></button>
                        <NavLink className='cart' to='/cart' >
                            <AiOutlineShoppingCart className='cart-icon' />
                            <span className='cartNum'>{getTotalTimesAdded()}</span>
                        </NavLink>
                    </div>
                    <div className={`mobileNavWrapper ${isActive ? 'active' : ''}`}>
                        <button className='close HammBurger' onClick={removeActive}><RxCross2 /></button>
                        <ul className={`MobileNavMenu  ${isActive ? 'active' : ''}`}>
                            <li onClick={removeActive}><NavLink to='/'>Home</NavLink></li>
                            <li onClick={removeActive}><NavLink to='/products'>Products</NavLink></li>
                            {user.isLoggedIn ? (
                <li onClick={logout}>Logout</li>
              ) : (
                <li onClick={removeActive}><NavLink to='/login'>Login/Signup</NavLink></li>
              )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
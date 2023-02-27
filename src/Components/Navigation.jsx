import React, { useEffect, useState } from 'react';
import './Navbar.css';

import Cart from './Cart';
import { motion } from 'framer-motion';

import logo from '../images/logo.svg';
import logo1 from '../images/logo 1.svg'
import menuIcon from '../images/icon-menu.svg';
import avatar from '../images/image-avatar.png';
import closeIcon from '../images/icon-close.svg'

import { BsCart3 } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';

import { selectCount } from '../features/counterSlice';
import { itemAdded } from '../features/addSlice';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, click } from '../features/darkModeSlice';


const NavMenu = ({ setActiveMenu }) => {
  return (
    <div className=' bg-black75 ml-0 right-0 lg:hidden left-0 top-0 h-screen fixed z-50'>
      <motion.div className='flex flex-col p-6 gap-12 w-2/3 bg-white dark:bg-[#212832] h-full lg:hidden animate-slideleft'
        // initial={{opacity: 0}}
        // whileInView={{ x: [-300, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <img src={closeIcon} alt="" className='w-[14px] h-[14px] md:w-7 md:h-7'
          onClick={() => { setActiveMenu(false) }}
        />
        <div>
          <ul className='flex flex-col gap-8 text-black dark:text-white text-base md:text-xl leading-5 tracking-tight font-medium'>
            <li className='transition-all ease-in-out duration-500 hover:text-grayishBlue'><a href="#Collections">Collections</a></li>
            <li className='transition-all ease-in-out duration-500 hover:text-grayishBlue'><a href="#Men">Men</a></li>
            <li className='transition-all ease-in-out duration-500 hover:text-grayishBlue'><a href="#Women">Women</a></li>
            <li className='transition-all ease-in-out duration-500 hover:text-grayishBlue'><a href="#About">About</a></li>
            <li className='transition-all ease-in-out duration-500 hover:text-grayishBlue'><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}


const Navigation = () => {
  const [showCart, setShowCart] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false);
  const dispatch = useDispatch();

  const count = useSelector(selectCount);
  const addItem = useSelector(itemAdded);
  const dark = useSelector(darkMode)

  useEffect(() => {
    if (!dark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [dark])
  return (
    <div className='lg:mx-40 md:mx-16 md:mt-11 pb-9 border-b-2 dark:bg-[#141519] border-b-grayishBlue dark:border-b-[#212832] px-6 md:px-0 pt-6 lg:pt-0'>
      <motion.nav className='flex items-center gap-14 justify-between'
        initial={{opacity: 0}}
        whileInView={{y: [-40, 0], opacity: [0, 1]}}
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <div className='flex space-x-0 gap-4 lg:space-x-0 items-center'>
          <img src={menuIcon} alt="Menu Icon" className='lg:hidden' onClick={() => {
            setActiveMenu(true);
          }} />
          {activeMenu && <NavMenu setActiveMenu={setActiveMenu} />}
          <img src={dark ? logo1 : logo} alt="logo" />
        </div>

        <div className='flex flex-1 md:justify-end lg:justify-between justify-between'>
          <ul className='lg:flex hidden space-x-8 items-center text-base leading-5 tracking-tight text-grayishBlue font-medium lineHover'>
            <li className='hover:text-veryDarkBlue transition-all ease-in-out duration-500 relative dark:hover:text-white'>
              <a href="#Collections">Collections</a>
            </li>
            <li className='hover:text-veryDarkBlue transition-all ease-in-out duration-500 relative cursor-pointer dark:hover:text-white'>
              <a href="#Men">Men</a>
            </li>
            <li className='hover:text-veryDarkBlue transition-all ease-in-out duration-500 relative cursor-pointer dark:hover:text-white'>
              <a href="#Women">Women</a>
            </li>
            <li className='hover:text-veryDarkBlue transition-all ease-in-out duration-500 relative cursor-pointer dark:hover:text-white'>
              <a href="#About">About</a>
            </li>
            <li className='hover:text-veryDarkBlue transition-all ease-in-out duration-500 relative cursor-pointer dark:hover:text-white'>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className='flex items-center gap-3 md:gap-11 '>
            <div className='relative'>
              <BsCart3 className=' text-2xl text-darkGrayishBlue cursor-pointer hover:text-veryDarkBlue transition-all ease-in-out duration-300 dark:hover:text-white' onClick={() => setShowCart(!showCart)} />
              {addItem && count ?
                <span className='absolute bg-orange text-white font-bold text-[10px] inline-block px-2 py-[1px] rounded-md -top-[6px] -right-[6px] notification-shadow cursor-pointer' onClick={() => setShowCart(!showCart)}>{count}</span> : ''
              }
              {showCart && <Cart />}

            </div>
            <div className='relative'>
              <img src={avatar} alt="avatar" className={`md:w-[50px] md:h-[50px] w-[26px] h-[26px] hover:border-orange hover:border-[3px] rounded-full transition-all ease-in-out duration-200 cursor-pointer`} />
            </div>
            <div className='p-[5px] rounded-full border-black dark:border-white border-2 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white transition-all ease-in-out duration-300' onClick={() => {
              dispatch(click())

              if (dark) {
                localStorage.setItem("theme", "dark")
              } else {
                localStorage.setItem("theme", 'light')
              }
            }}>
              {dark ? <BsSun className='text-sm dark:text-white dark:hover:text-black' /> : <BsFillMoonStarsFill className='text-sm ' />}
            </div>
          </div>
        </div>
      </motion.nav>

    </div>
  )
}

export default Navigation

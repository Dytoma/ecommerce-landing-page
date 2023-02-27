import React from 'react'
import { motion } from 'framer-motion';

import { BsCart3 } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import { add } from '../features/addSlice';
import { increment, decrement, selectCount } from '../features/counterSlice';

import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';


const Details = () => {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);
  return (
    <div className='p-6 md:p-0 pb-24 md:pb-0'>
      <motion.h2 className='text-orange text-sm font-semibold uppercase tracking-[0.085em] mb-5 mt-6 lg:mt-0'
        initial={{ opacity: 0 }}
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        Sneaker company
      </motion.h2>
      <motion.h1 className='md:text-[2.625rem] md:leading-[2.9375rem] md:tracking-[0.03em] text-black font-semibold mb-9 dark:text-white'
        initial={{ opacity: 0 }}
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
      >
        Fall Limited Edition Sneakers
      </motion.h1>
      <p className='text-base leading-[1.625rem] font-medium tracking-[0.002em] text-grayishBlue lg:pr-7 md:mb-[1.125rem]'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className='flex items-center justify-between md:items-start md:flex-col mb-5 mt-5 md:mt-0 md:mb-9'>
        <motion.div className='flex gap-4 items-center'
          initial={{ opacity: 0 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
        >
          <h3 className='text-[1.75rem] leading-[2.75rem] tracking-[0.052em] font-semibold text-black dark:text-white'>$125.00</h3>
          <span className='px-2 py-1 text-orange bg-paleOrange font-bold text-base tracking-[0.017em] rounded-lg cursor-pointer'>50%</span>
        </motion.div>
        <motion.h3 className='text-grayishBlue font-semibold text-sm md:text-base leading-[1.625rem] tracking-[0.052em] line-through'
          initial={{ opacity: 0 }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}
        >
          $250.00
        </motion.h3>
      </div>

      <div className='flex gap-4 md:gap-8 lg:gap-4 lg:flex-row flex-col items-center w-auto md:w-1/2 lg:w-auto m-auto'>

        <motion.div className='w-full lg:w-auto'
          initial={{ opacity: 0 }}
          whileInView={{ x: [-40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
        >
          <div className='flex items-center w-full lg:w-auto lg:gap-11 justify-between lg:justify-center px-4 py-[0.875rem] bg-lightGrayishBlue rounded-lg'>
            <button aria-label='minus' onClick={() => dispatch(decrement())}>
              <img src={minus} alt="minus" aria-hidden='true' className='hover:scale-125 transition-all duration-300 ease-in-out' />
            </button>
            <p className='font-semibold text-base tracking-[0.002em] text-black'>{count}</p>
            <button aria-label='plus' onClick={() => dispatch(increment())}>
              <img src={plus} alt="plus" aria-hidden='true' className='hover:scale-125 transition-all duration-300 ease-in-out'/>
            </button>
          </div>
        </motion.div>

        <motion.div className='w-full lg:w-auto'
          initial={{ opacity: 0 }}
          whileInView={{ x: [40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
        >
          <button className='flex justify-center w-full lg:w-auto text-white font-semibold bg-orange rounded-lg py-4 px-[4.75rem] items-center gap-4 hover:opacity-60 transition-all duration-300 ease-out btn' onClick={() => dispatch(add())}>
            <BsCart3 className='text-[19px]' />
            <p className='text-base tracking-[0.002em] leading-[1.625rem]'>Add to cart</p>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Details
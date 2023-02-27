import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from '../features/counterSlice';
import { motion } from 'framer-motion';

import { FaCheck } from 'react-icons/fa'

import product1 from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';

import { reset } from '../features/counterSlice';

import { remove, itemAdded } from '../features/addSlice';

const Item = () => {
  const [checkout, setCheckout] = useState(false)
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col w-full'>
      <div className='flex items-center justify-between flex-1 mb-6 w-full'>

        <div className='w-[50px] h-[50px]'>
          <img src={product1} alt="Product 1" width={50} height={50} className='object-cover rounded' />
        </div>

        <div>
          <h3 className='text-base font-semibold tracking-[0.002em] leading-[1.625rem] text-grayishBlue'>Fall Limited Edition Sneakers</h3>
          <p className='text-base font-semibold tracking-[0.002em] leading-[1.625rem] text-grayishBlue'>$125.00 x {count}<span className='text-base font-bold tracking-[0.042em] leading-[1.625rem] text-black ml-1 dark:text-white'>${125.00 * count}</span></p>
        </div>

        <div onClick={() => {
          dispatch(remove());
          dispatch(reset())
        }}>
          <img src={deleteIcon} alt="Delete" className="cursor-pointer hover:scale-90 hover:opacity-70 transition-all duration-300 ease-in-out" />
        </div>

      </div>

      <div>
        <button className={`text-base font-bold hover:opacity-70 transition-all duration-300 ease-in-out ${checkout ? 'bg-green-500' : 'bg-orange'} -tracking-[0.003em] leading-[1.625rem] text-white py-4 flex items-center justify-center w-full rounded-xl`} onClick={() => {setCheckout(true)}}>
        {checkout ? 'Thank you' : 'Checkout'}
        {checkout && <FaCheck className='ml-1'/>}
        </button>
      </div>
    </div>
  )
}

const Cart = () => {
  const addItem = useSelector(itemAdded);
  const count = useSelector(selectCount);
  return (
    <motion.div className='absolute w-[360px] h-[257px] p-6 top-20 md:top-16 -right-[92px] md:-right-[10.75rem] bg-white dark:bg-[#212832] shadow-lg flex flex-col rounded-xl dark:shadow-xl z-20'
      initial={{ opacity: 0 }}
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h3 className='text-base font-semibold tracking-[0.002em] leading-[1.625rem] pb-5 border-b-2 border-b-lightGrayishBlue dark:border-b-[#828894] dark:text-white'>Cart</h3>
      <div className={`flex w-full flex-1 items-center justify-center`}>
        {addItem && count ?
          <Item /> :
          <h2 className='text-base font-semibold tracking-[0.002em] leading-[1.625rem] text-grayishBlue'>
            Your cart is empty
          </h2>
        }

      </div>
    </motion.div>
  )
}

export default Cart
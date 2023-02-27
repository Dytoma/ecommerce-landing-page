import React, { useState } from 'react'
import { motion } from 'framer-motion';

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import { IoCloseSharp } from 'react-icons/io5'

import product1 from '../images/image-product-1.jpg';
import product1Thumbnail from '../images/image-product-1-thumbnail.jpg';
import product2 from '../images/image-product-2.jpg';
import product2Thumbnail from '../images/image-product-2-thumbnail.jpg';
import product3 from '../images/image-product-3.jpg';
import product3Thumbnail from '../images/image-product-3-thumbnail.jpg';
import product4 from '../images/image-product-4.jpg';
import product4Thumbnail from '../images/image-product-4-thumbnail.jpg';

const images = [product1, product2, product3, product4];

const ImageDetails = ({ setLightBox }) => {

  const [productImage, setProductImage] = useState(product1);
  const [idImage, setIdImage] = useState(0)



  return (
    <div className='fixed z-10 inset-0 hidden md:flex items-center justify-center bg-black75'>
      <div className='flex flex-col items-center'>
        <div className='flex justify-end items-end mb-5 w-full'>
          <IoCloseSharp className='text-2xl text-white hover:text-orange transition-all duration-300 ease-in-out' onClick={() => { setLightBox(false) }} />
        </div>
        <div className='w-[550px] h-[550px] relative'>

          <button className='bg-white p-5 rounded-full absolute top-1/2 -left-8 hover:text-orange transition-all duration-300 ease-in-out hover:scale-90' aria-label='previous' onClick={() => {
            if (idImage === 0) {
              setIdImage(idImage - 0)
            } else {
              setIdImage(idImage - 1)
            }
            setProductImage(images[idImage]);
            console.log(idImage);
          }}>
            <GrFormPrevious className='text-[24px] transition-all duration-300 ease-in-out' />
          </button>

          <motion.img src={images[idImage]} alt={productImage === product1 ? 'Product 1' : productImage === product2 ? 'Product 2' : productImage === product3 ? 'Product 3' : 'Product 4'} className='object-cover rounded-xl' aria-live='polite'
            initial={{ opacity: 0 }}
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />

          <button className='bg-white hover:text-orange transition-all duration-300 ease-in-out hover:scale-90 p-5 rounded-full absolute top-1/2 -right-8' aria-label='next' onClick={() => {
            if (idImage === 3) {
              setIdImage(idImage + 0)
            } else {
              setIdImage(idImage + 1)
            }

            setProductImage(images[idImage]);
          }}>
            <GrFormNext className='text-[24px] transition-all duration-300 ease-in-out' />
          </button>
        </div>

        <div className='md:flex gap-7 mt-10'>

          <div className='w-[5.5rem] h-[5.5rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
            <img src={product1Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product1 && 'border-orange border-2 opacity-30'}`} onClick={() => {
              setProductImage(product1);
              setIdImage(0)
            }} />
          </div>
          <div className='w-[5.5rem] h-[5.5rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
            <img src={product2Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product2 && 'border-orange border-2 opacity-30'}`} onClick={() => {
              setProductImage(product2);
              setIdImage(1)
            }} />
          </div>
          <div className='w-[5.5rem] h-[5.5rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
            <img src={product3Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product3 && 'border-orange border-2 opacity-30'}`} onClick={() => {
              setProductImage(product3);
              setIdImage(2)
            }} />
          </div>
          <div className='w-[5.5rem] h-[5.5rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
            <img src={product4Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product4 && 'border-orange border-2 opacity-30'}`} onClick={() => {
              setProductImage(product4);
              setIdImage(3)
            }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ImageDetails
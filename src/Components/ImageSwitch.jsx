import React, { useState } from 'react'

import ImageDetails from './ImageDetails';
import { motion } from 'framer-motion';

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

import product1 from '../images/image-product-1.jpg';
import product1Thumbnail from '../images/image-product-1-thumbnail.jpg';
import product2 from '../images/image-product-2.jpg';
import product2Thumbnail from '../images/image-product-2-thumbnail.jpg';
import product3 from '../images/image-product-3.jpg';
import product3Thumbnail from '../images/image-product-3-thumbnail.jpg';
import product4 from '../images/image-product-4.jpg';
import product4Thumbnail from '../images/image-product-4-thumbnail.jpg';

const images = [product1, product2, product3, product4];

const ImageSwitch = () => {
  const [lightBox, setLightBox] = useState(false)
  const [productImage, setProductImage] = useState(product1)
  const [idImage, setIdImage] = useState(0)
  return (
    <div className='mb-0 md:mb-10 lg:mb-0'>
      <motion.div className='md:w-[27.8125rem] md:h-[27.8125rem] w-full relative'
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
      >
        <img src={images[idImage]} alt={productImage === product1 ? 'Product 1' : productImage === product2 ? 'Product 2' : productImage === product3 ? 'Product 3' : 'Product 4'} className=' object-cover rounded-none md:rounded-xl hover:scale-95 cursor-pointer transition-all ease-in-out duration-300' aria-live='polite' onClick={() => {
          setLightBox(true);
        }}/>
        <button className='bg-white p-4 rounded-full md:hidden absolute top-1/2 left-4 hover:text-orange transition-all duration-300 ease-in-out hover:scale-90' aria-label='previous' onClick={() => {
          if (idImage === 0) {
            setIdImage(idImage - 0)
          } else {
            setIdImage(idImage - 1)
          }
          setProductImage(images[idImage]);
        }}>
          <GrFormPrevious className='text-[13px] transition-all duration-300 ease-in-out' />
        </button>
        <button className='bg-white hover:text-orange md:hidden transition-all duration-300 ease-in-out hover:scale-90 p-4 rounded-full absolute top-1/2 right-4' aria-label='next' onClick={() => {
          if (idImage === 3) {
            setIdImage(idImage + 0)
          } else {
            setIdImage(idImage + 1)
          }

          setProductImage(images[idImage]);
        }}>
          <GrFormNext className='text-[13px] transition-all duration-300 ease-in-out' />
        </button>
      </motion.div>

      <motion.div className='md:flex justify-between mt-8 hidden'
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
      >

        <div className='w-[5.75rem] h-[5.75rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
          <img src={product1Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product1 && 'border-orange opacity-50 border-2'}`} onClick={() => {
            setIdImage(0)
          }} />
        </div>
        <div className='w-[5.75rem] h-[5.75rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
          <img src={product2Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product2 && 'border-orange opacity-50 border-2'}`} onClick={() => {
            setIdImage(1)
          }} />
        </div>
        <div className='w-[5.75rem] h-[5.75rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
          <img src={product3Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product3 && 'border-orange opacity-50 border-2'}`} onClick={() => {
            setIdImage(2)
          }} />
        </div>
        <div className='w-[5.75rem] h-[5.75rem] cursor-pointer hover:opacity-60 transition-all ease-in-out duration-500'>
          <img src={product4Thumbnail} alt='' className={`object-cover rounded-lg ${images[idImage] === product4 && 'border-orange opacity-50 border-2'}`} onClick={() => {
            setIdImage(3)
          }} />
        </div>
      </motion.div>

      {lightBox && <ImageDetails setLightBox={setLightBox}/>}
    </div>
  )
}

export default ImageSwitch
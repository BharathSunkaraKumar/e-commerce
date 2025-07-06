import React, { useEffect, useState } from 'react'
import { useGetAllProductsQuery } from '../services/productsApi'

export default function Carousel() {
    const {data: products=[], isLoading} = useGetAllProductsQuery();
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrent((prev) => (prev+1) % products.length)
        }, 3000);
        return () => clearInterval(intervel);
    },[products.length])
    const currentProduct = products[current];
  return (
    <div className=' px-2 py-2 mt-5 bg-neutral-100 rounded-xl'>
        <div className='relative h-80 w-full flex justify-center items-center'>
                {products.length > 0 && <img className='h-full object-cover w-fit relative ' src={currentProduct.image} alt={currentProduct.title} />}
            
            <div className='px-6 absolute inset-0 flex flex-col items-center justify-center bg-opacity-50'>
                {products.length > 0 &&<div className='text-3xl font-bold text-black mb-2'>
                     {currentProduct.title}
            </div>}      
            </div>
        </div>
    </div>
  )
}

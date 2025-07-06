import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsByIdQuery } from '../services/productsApi'

export default function ProductDetails() {
    const {id} = useParams()
    console.log(id)
    const {data: productdetails=[], isLoading} = useGetProductDetailsByIdQuery(id);

  return (
    <div className='flex justify-center w-full items-center'>
        {/* <h1>ProductDetails</h1> */}
        {!isLoading && console.log(productdetails)}
        <div className='contaienr mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center justify-center'>
            <div className='relative h-96 w-[300px] md:w1/2 rounded-lg overflow-hidden'>
                <img className='w-full h-full hover:opacity-90' src={productdetails.image} alt={productdetails.title} />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>{productdetails.title}</h1>
                <p className='text-gray-700 mb-4'>{productdetails.description}</p>
                <p className='text-lg font-semibold text-gray-900 mb-4'>$ {productdetails.price}</p>
            <div className='flex items-center space-x-4'>
                <button className='bg-black text-white px-3 pb-1 rounded-sm'>-</button>
                <span className='text-lg font-semibold'>1</span>
                <button className='bg-black text-white px-3 pb-1 rounded-sm'>+</button>
            </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { useGetAllProductsQuery } from '../services/productsApi'
import { Link } from 'react-router-dom'

export default function Products() {
    const {data: products=[], isLoading} = useGetAllProductsQuery()
  return (
    <div className='mb-6 flex justify-center'>
        {
            isLoading ? <h3>Loading...</h3> : (
            <ul className='mt-6 grid grid-cols-1 gap-4 sm:grid-col-2 lg:grid-cols-3'>
            {
                products && products.map((each) => {
                    console.log(each)
                    return (
                        <li key={each.id} 
                        className='border border-gray-300 rounded-xl group hover:shadow-2xl transition duration-300 py-10 p-10 h-80 overflow-hidden flex flex-col'
                        >
                           {each.title}
                        </li>
                    )
                })
            }
            </ul>
            )
        }
    </div>
  )
}

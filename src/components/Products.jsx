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
                    // console.log(each)
                    return (
                        <li key={each.id} 
                        className='border border-gray-300 rounded-xl group hover:shadow-2xl transition duration-300 py-10 p-10 h-80 overflow-hidden flex flex-col'
                        >
                           <div className='h-1/2 flex justify-center'>
                            <img className='w-full object-contain object-top h-full' src={each.image} alt={each.title}/>
                           </div>
                           <div>
                            <h1 className='text-xl font-bold truncate w-64'>{each.title}</h1>
                           </div>
                           <div className=' flex flex-col gap-3'>
                            <p className='truncate w-64 '>{each.description}</p>
                            <p className='font-bold text-xl'>$ {each.price}</p>
                            <div>
                                <Link to={`/productdetails/${each.id}`}>
                                    <button className='bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-900'>View Details</button>
                                </Link>
                            </div>
                           </div>
                           
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

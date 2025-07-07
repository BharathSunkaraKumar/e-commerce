import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Checkout() {
  const cartItems = useSelector(state => state.cart.items)
  // console.log(cartItems)
  const totalOfItems = cartItems.reduce((prev, current) => {
    return current.price*current.quantity + prev 
  }, 0)
  console.log(totalOfItems)
  return (
    <div className='w-full'>
      {
          cartItems.length === 0 ? <h3 className='text-center text-3xl font-bold'>Your Cart Is Empty</h3> : (
            <div className='flex flex-col items-center gap-3 justify-center mt-10'>
        <div>
        <h1 className='font-bold text-2xl'>Checkout</h1>
      </div>
      <div className='border-2 border-gray-200 rounded-2xl px-10 py-5'>
        <h3 className='font-bold text-xl'>Order Summary</h3>
        <ul
        className='flex flex-col gap-3 mt-3 mb-3'
        >
          {
            cartItems.map((each) => {
              return(
                <li key={each.id}
                className='flex gap-3 items-center'
                >
                  <p className='font-bold text-xs truncate w-64'>{each.title}</p>
                  <span className='font-semibold'>Q:{each.quantity}</span>
                  <p>$ {each.price * each.quantity}</p>
                </li>
              )
            })
          }
        </ul>
          <hr/>
          <p className='mt-3 font-bold'>Total: {totalOfItems}</p>
      </div>
      <div className='max-w-md mx-auto w-full mt-5'>
        <Link to='/cart'>
        <button className='bg-black text-white w-full px-5 pb-2 rounded-lg py-2 hover:bg-gray-900'>Procced To Payment</button>
          
        </Link>
      </div>
      </div>
      
          )
      }
      
      
      
    </div>
  )
}

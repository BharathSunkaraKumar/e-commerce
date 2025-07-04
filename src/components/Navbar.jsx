import React from 'react'

export default function Navbar() {
  return (
    <nav className='sticky top-0 bg-white z-50 shadow'>
        <div class="container mx-auto flex items-center justify-between px-4 py-4">
            <div>
            logo
        </div>
        <div className='flex space-x-2'>
            <p>Home</p>
            <p>Product</p>
            <p>Checkout</p>
        </div>
        <div>
            cart
        </div>
        </div>
        
    </nav>
  )
}

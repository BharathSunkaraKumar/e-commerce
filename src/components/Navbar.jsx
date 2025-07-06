import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  
  return (
    <>
    <nav className='sticky top-0 bg-white z-50 shadow'>
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4">
          <div>
            <Link to='/' className='font-semibold text-xl'><i>E</i></Link>
          </div>
          <div className='flex space-x-3'>
              <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'} >Home</NavLink>
              <NavLink to='/products' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Products</NavLink>
              <NavLink to='/checkout' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Checkout</NavLink>
          </div>
            <div>
              <Link to='/checkout' className='hover:text-blue-500'>Cart</Link>
            </div>
          </div>
    </nav>
        <main className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-5'>
          <Outlet/>
        </main>
    </>
  )
}

import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const cartItems = useSelector(state => state.cart.items)
  const totalOfItems = cartItems.reduce((prev, current) => {
    return current.quantity + prev
  }, 0)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  
  return (
    <>
    <nav className='sticky top-0 bg-white z-50 shadow mb-10'>
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4">
          <div>
             <Link to='/' className='font-semibold text-xl flex gap-1'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <div>
                <i>TrendHut</i>
              </div>
            </Link>
          </div>
          <div className=' hidden md:flex md:space-x-3 '>
              <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'} >Home</NavLink>
              <NavLink to='/products' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Products</NavLink>
              <NavLink to='/checkout' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Checkout</NavLink>
          </div>
            <div className='flex gap-5'>
              <Link to='/checkout' className='hover:text-blue-500 relative'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              {totalOfItems > 0 && 
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">{totalOfItems}</span>
              }
              </Link>
            <div>
              <div onClick={handleMenu} className='md:hidden'>
                {
                  showMenu ? (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    
                    </div>
                    ) : (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </div>
                  )
                }
              </div>
            </div>
            </div>
          </div>
          <div className='transition duration-300 ease-in-out'>
            {
              showMenu && (
                <div className='flex flex-col items-center gap-2 mb-3'  onClick={handleMenu} >
                      <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Home</NavLink>
                    <NavLink to='/products' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Products</NavLink>
                    <NavLink to='/checkout' className={({isActive}) => isActive ? 'text-blue-500' : 'text-gray-600'}>Checkout</NavLink>
                    </div>
              )
            }
          </div>
    </nav>
        <main className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-5'>
          <Outlet/>
        </main>
    </>
  )
}

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// In CheckoutPage.jsx

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const [success, setSuccess] = useState(false)
  const Navigate = useNavigate()
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleSuccess = () => {
    setSuccess(!success)
    setTimeout(() => {
      Navigate('/')
      setSuccess(false)
    }, 2000);
  }
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {
        success && (
          <div className='bg-green-500 font-bold text-2xl text-white px-5 text-center py-5 rounded-lg transition duration-300'>
            Order Placed!
          </div>
        )
      }
      <h1 className="text-2xl font-bold">Checkout</h1>
      {/* User info */}
      <div className="space-y-2">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Shipping Address" className="w-full border p-2 rounded" />
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Order Summary:</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-1">
            <span>{item.title.slice(0, 20)} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between mt-2 font-bold border-t pt-2">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Select Payment:</h2>
        <label className="block">
          <input type="radio" name="payment" defaultChecked /> UPI
        </label>
        <label className="block">
          <input type="radio" name="payment" /> Cash on Delivery
        </label>
      </div>

      <button onClick={handleSuccess} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Place Order
      </button>
    </div>
  );
}

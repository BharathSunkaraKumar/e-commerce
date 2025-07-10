import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const initialValues = {
    name: '',
    email: '',
    address: ''
  }
  const cartItems = useSelector((state) => state.cart.items);
  const [success, setSuccess] = useState(false)
  const Navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErros] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }
  const handleSuccess = () => {
    setFormErros(validatons(formValues))
    setIsSubmit(true)
  }
  const validatons = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name) {
      errors.name = 'your name is required!'
    }
    if(!values.email) {
      errors.email = 'email is required!'
    }else if(!regex.test(values.email)) {
      errors.email = 'This is not a vaild email fomat'
    }
    if(!values.address) {
      errors.address = 'address is required!'
    }
    return errors
  }
  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length ===0 && isSubmit) {
      setSuccess(!success)
      console.log(formValues)
      setTimeout(() => {
      Navigate('/')
      setSuccess(false)
    }, 2000);
    }
  }, [formErrors])
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
      <div className="space-y-2">
        <input type="text" name='name' value={formValues.name} onChange={handleChange} placeholder="Your Name" className="w-full border p-2 rounded" />
        <p className='text-red-500 font-semibold'>{formErrors.name}</p>
        <input type="email" name='email' value={formValues.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
        <p className='text-red-500 font-semibold'>{formErrors.email}</p>
        <input type="text" name='address' value={formValues.address} onChange={handleChange} placeholder="Shipping Address" className="w-full border p-2 rounded" />
        <p className='text-red-500 font-semibold'>{formErrors.address}</p>
      </div>
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

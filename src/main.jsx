import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './app/store.js'
import './index.css'
import App from './App.jsx'
import Products from './components/Products.jsx'
import Checkout from './components/Checkout.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },

    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)



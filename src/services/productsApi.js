import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts } from '@/interfaces/interfaces'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
  }),
})

export const { useGetAllProductsQuery }: any = productsApi
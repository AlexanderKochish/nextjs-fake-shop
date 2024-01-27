import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct, IProducts } from '@/interfaces/interfaces'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (text) => text? `products/search?q=${text}` : `products`
    }),
    getOneProduct: builder.query<IProduct, number>({
      query: (id) => `product/${id}`
    }),
    getAllCategories: builder.query({
      query: () => `products/categories`
    }),
    getCategory: builder.query({
      query: (category) => category? `products/category/${category}`: `products`
    }),
  }),
})

export const { 
  useGetAllProductsQuery, 
  useGetOneProductQuery, 
  useGetAllCategoriesQuery,
  useGetCategoryQuery
}: any = productsApi
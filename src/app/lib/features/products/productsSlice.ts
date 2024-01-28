import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '@/interfaces/interfaces'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query({
      query: (name) => name && `products/search?q=${name}`
    }),
    getAllProducts: builder.query({
      query: (skip) => skip? `products?skip=${skip == 1? 1 : skip * 30}`:`product`
    }),
    getOneProduct: builder.query<IProduct, number>({
      query: (id) => `product/${id}`
    }),
    getAllCategories: builder.query({
      query: () => `products/categories`
    }),
    getCategory: builder.query({
      query: (category) => category && `products/category/${category}`
    }),
  }),
})

export const { 
  useGetAllProductsQuery,
  useGetSearchProductsQuery, 
  useGetOneProductQuery, 
  useGetAllCategoriesQuery,
  useGetCategoryQuery
}: any = productsApi
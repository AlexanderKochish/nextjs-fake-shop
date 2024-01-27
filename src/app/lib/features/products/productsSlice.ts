import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct, IProducts } from '@/interfaces/interfaces'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` }),
  endpoints: (builder) => ({
    getSearchProducts: builder.query({
      query: (text) =>`products/search?q=${text}`
    }),
    getAllProducts: builder.query({
      query: (skip) =>`products?skip=${skip == 1? '1' : skip * 30}`
    }),
    getOneProduct: builder.query<IProduct, number>({
      query: (id) => `product/${id}`
    }),
    getAllCategories: builder.query({
      query: () => `products/categories`
    }),
    getCategory: builder.query({
      query: (category) => `products/category/${category}`
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
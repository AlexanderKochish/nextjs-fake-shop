'use client'
import Title from "@/components/Title/Title";
import { useGetSearchProductsQuery, useGetCategoryQuery, useGetAllProductsQuery } from "./lib/features/products/productsSlice";
import { IProduct } from "@/interfaces/interfaces";
import { useAppSelector } from "./lib/hooks";
import Preloader from "@/components/UI/Preloader";
import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

export default function Home({searchParams}: any) {
  const { search, categoryString } = useAppSelector((state) => state.search) 
  let page = searchParams.page
  const { data, isLoading } = useGetSearchProductsQuery(search)
  const prod = useGetAllProductsQuery(page)
  const products =  useGetCategoryQuery(categoryString)

  let pages = []
    for (let i = 1; i < Math.ceil(prod?.data?.total / 30); i++) {
      pages.push(i)
    }
  
  return (
    <div>
      <Title/>
      {isLoading? <Preloader/> : null}
      <ul className="grid grid-cols-5 gap-5 place-items-center my-10">
        
         { categoryString && products?.data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)} 
          
        { search && data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)} 

        { (!categoryString && !search) && prod?.data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)}
        
        
      </ul>
        {(!categoryString && !search) && (<ul className="w-full h-20 flex space-x-5 items-center justify-center">
          {pages?.map( p => <li key={p} className="text-white text-2xl"><Link href={`/?page=${p}`}>{p}</Link></li>)}
        </ul>)}
    </div>
  )
}
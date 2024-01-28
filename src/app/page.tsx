'use client'
import Title from "@/components/Title/Title";
import { useGetSearchProductsQuery, useGetCategoryQuery, useGetAllProductsQuery } from "./lib/features/products/productsSlice";
import { IProduct, IProducts } from "@/interfaces/interfaces";
import { useAppSelector } from "./lib/hooks";
import Preloader from "@/components/UI/Preloader";
import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

export default function Home({searchParams}: any) {
  const { search, categoryString } = useAppSelector((state) => state.search) 
  let page = searchParams.page
  const searchProduct = search? useGetSearchProductsQuery(search) : null;
  const categoryProducts = categoryString? useGetCategoryQuery(categoryString) : null
  const products = (!search && !categoryProducts)? useGetAllProductsQuery(page): null

  let pages = []
    for (let i = 1; i < Math.ceil(products?.data?.total / 30); i++) {
      pages.push(i)
    }
    
  return (
    <div>
      <Title/>
      {products?.isLoading? <Preloader/> : null}
      <ul className="grid grid-cols-5 gap-5 place-items-center my-10">
        
        { categoryProducts && categoryProducts?.data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)} 
          
        { searchProduct && searchProduct?.data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)} 

        { (!categoryProducts && !searchProduct) && products?.data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)}
        
      </ul>
        {(!categoryString && !search) && (<ul className="w-full h-20 flex space-x-5 items-center justify-center">
          {pages?.map( p => <li key={p} className="text-white text-2xl"><Link href={`/?page=${p}`}>{p}</Link></li>)}
        </ul>)}
    </div>
  )
}
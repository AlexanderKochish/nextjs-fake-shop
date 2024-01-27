'use client'
import Title from "@/components/Title/Title";
import { useGetAllProductsQuery, useGetCategoryQuery } from "./lib/features/products/productsSlice";
import { IProduct } from "@/interfaces/interfaces";
import { useAppSelector } from "./lib/hooks";
import Preloader from "@/components/UI/Preloader";
import ProductCard from "@/components/Products/ProductCard";

export default function Home() {
  const { search, categoryString } = useAppSelector((state) => state.search) 
  const { data, isLoading } = useGetAllProductsQuery(search)
  const products =  useGetCategoryQuery(categoryString)
  
  return (
    <div>
      <Title/>
      {isLoading? <Preloader/> : null}
      <ul className="grid grid-cols-5 gap-5 place-items-center my-10">
        {
        !search? products.data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)
          :
          data?.products.map((product: IProduct) => 
          <ProductCard key={product.id} product={product}/>)
        }
      </ul>
    </div>
  )
}
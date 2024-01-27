'use client'
import Title from "@/components/Title/Title";
import Image from "next/image";
import { useGetAllProductsQuery, useGetCategoryQuery } from "./lib/features/products/productsSlice";
import { IProduct } from "@/interfaces/interfaces";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import Preloader from "@/components/UI/Preloader";
import { FaCartArrowDown } from "react-icons/fa6";
import { addToCart } from "./lib/features/cart/cartSlice";

export default function Home() {
  const { search, categoryString } = useAppSelector((state) => state.search) 
  const { data, isLoading } = useGetAllProductsQuery(search)
  const products =  useGetCategoryQuery(categoryString)
  const dispatch = useAppDispatch()

  console.log(products.data);
  
  return (
    <div>
      <Title/>
      {isLoading? <Preloader/> : null}
      <ul className="grid grid-cols-5 gap-5 place-items-center my-10">
        {!search? products.data?.products.map((product: IProduct) => (
          
          <li key={product.id} className="bg-white rounded-md w-[250px] overflow-hidden">
            <button className="bg-blue-600 px-2" onClick={() => dispatch(addToCart(product))}>
              <FaCartArrowDown />
            </button>
            <Link href={`/${product.id}`}>
            <figure>
            <div className="w-[250] h-[250px]">
              <Image src={product?.thumbnail} width={250} height={250} alt="product image"/>
            </div>
            <figcaption>
              <span>{product?.title}</span>
            </figcaption>
            </figure>
            </Link>
          </li>
         
        )):
        data?.products.map((product: IProduct) => (
          
          <li key={product.id} className="bg-white rounded-md w-[250px] overflow-hidden">
            <button className="bg-blue-600 px-2" onClick={() => dispatch(addToCart(product))}>
              <FaCartArrowDown />
            </button>
            <Link href={`/${product.id}`}>
            <figure>
            <div className="w-[250] h-[250px]">
              <Image src={product?.thumbnail} width={250} height={250} alt="product image"/>
            </div>
            <figcaption>
              <span>{product?.title}</span>
            </figcaption>
            </figure>
            </Link>
          </li>
         
        ))
        }
      </ul>
    </div>
  )
}

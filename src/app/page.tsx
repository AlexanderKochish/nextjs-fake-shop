'use client'
import Title from "@/components/Title/Title";
import Image from "next/image";
import { useGetAllProductsQuery } from "./lib/features/products/productsSlice";
import { IProduct } from "@/interfaces/interfaces";

export default function Home() {

  const { data } = useGetAllProductsQuery()
  console.log(data)
  return (
    <div>
      <Title/>
      <ul>
        {data.products.map((product: IProduct) => (
          <li>
            <div>
              <Image src={product.thumbnail} width={100} height={150} alt="product image"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

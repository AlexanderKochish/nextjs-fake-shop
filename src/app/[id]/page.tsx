"use client"
import React from 'react'
import { useGetOneProductQuery } from '../lib/features/products/productsSlice'
import Image from 'next/image'
import Preloader from '@/components/UI/Preloader'

const Product = ({ params }: any) => {
    const id = params.id

    const { data, isLoading } = useGetOneProductQuery(id)

  return (
    <>
     {isLoading? <Preloader/> : null}
    
    <div className='w-[1200px] h-screen flex justify-around'>
     
      <div className='w-[50%]'>
        <div>
            <Image src={data?.images[0]} width={300} height={450} alt="product image"/>
        </div>
      </div>
      <div className='w-[50%]'>
            <ul>
                <li>name: {data?.title}</li>
                <li>description: <br/> {data?.description}</li>
                <li>category: {data?.category}</li>
                <li>price: {data?.price}$</li>
                <li>brand: {data?.brand}</li>
                <li>rating: {data?.rating}</li>
            </ul>
      </div>
    </div>
    </>
  )
}

export default Product

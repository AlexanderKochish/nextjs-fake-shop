"use client"
import { addToCart } from '@/app/lib/features/cart/cartSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import { IProductCardPropsType } from '@/interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";

const ProductCard: React.FC<IProductCardPropsType> = ({ product }) => {
    const dispatch = useAppDispatch()
  return (
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
  )
}

export default ProductCard

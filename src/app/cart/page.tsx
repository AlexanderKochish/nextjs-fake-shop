"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { IProduct } from '@/interfaces/interfaces'
import Image from 'next/image'
import { removeCartProduct } from '../lib/features/cart/cartSlice'

const Cart = () => {
    const products = useAppSelector((state) => state.cart.products)
    const dispatch = useAppDispatch()
    const cartEmpty = !products.length? <p>Cart is empty!</p> : null;

    const removeHandler = (id: number) => {
        dispatch(removeCartProduct(id))     
    }

  return (
    <div className='w-full min-h-screen'> 
        {cartEmpty}
      <ul>
        {products?.map((product) => (
        <li key={product.id} className='flex items-start space-x-10 bg-slate-800 mb-5'>
            <figure>
            <div className='w-[200px] h-[250px]'>
                <Image src={product.images[0]} width={200} height={250} alt='product image'/>
            </div>
            <figcaption>{product.title}</figcaption> 
            </figure>
            <span>price: {product.price}$</span>
            <button onClick={() => removeHandler(product.id)} className='bg-red-600 px-3'>Delete</button>
        </li>))}
      </ul>
    </div>
  )
}

export default Cart

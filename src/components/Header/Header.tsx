"use client"
import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { BsBasket } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { setCategoryString, setSearchString } from '@/app/lib/features/search/searchSlice';
import { useGetAllCategoriesQuery } from '@/app/lib/features/products/productsSlice';
import { ICategories } from '@/interfaces/interfaces';

const Header: React.FC = () => {
    const [openInput, setOpenInput] = useState<boolean>(false)
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const { search } = useAppSelector((state) => state.search)
    const products  = useAppSelector((state) => state.cart.products)
    const dispatch = useAppDispatch()

    const { data } = useGetAllCategoriesQuery()
    
    const closeOrOpenInput = () => {
        setOpenInput((prev) => !prev)
        dispatch(setSearchString(''))
    }

    const handleSearch = (e: any) => dispatch(setSearchString(e.target.value))

  return (
    <header className='w-full min-h-16 fixed bg-slate-800 top-0 left-0'>
        <nav className='max-w-[1200px] mx-auto flex items-center justify-between min-h-16'>
            <ul className='flex items-center space-x-5'>
                <Link href={'/'}><li>Logo</li></Link>
                <li className='relative'>
                    <button onClick={() => {setShowCategory((prev) => !prev), dispatch(setCategoryString(''))}}>Categories</button>
                    {showCategory && <select onClick={(e: any) => dispatch(setCategoryString(e.target.value))} className='absolute text-black -bottom-[20px] w-full left-0'>
                        {data.map((name: string) =>
                        <option  
                        key={name} 
                        value={name}>
                            {name}
                        </option>)}
                    </select>
                    }
                </li>
                <li>Collections</li>
                <li>Store</li>
                <li>Blog</li>
            </ul>
            <ul className='flex items-center space-x-7'>
                <li className='flex items-center'>
                    <input 
                    value={search}
                    onChange={handleSearch}
                    type="text" 
                    className={openInput? 'block duration-300 transition-all mr-2 text-black px-2' : 'hidden'}
                    />
                    <button className='inline-flex items-center' onClick={closeOrOpenInput}>
                        <GoSearch className='mr-2'/> 
                    Search
                    </button>
                </li>
                <Link href={'/cart'}>
                <li>
                    <button className='inline-flex items-center'>
                        <BsBasket className='mr-2'/> 
                    Chart {products.length? products.length : ''}
                    </button>
                </li>
                </Link>
                <li>
                    <button className='inline-flex items-center'>
                        <AiOutlineLogin className='mr-2'/> 
                    Login
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

import React from 'react'
import { GoSearch } from "react-icons/go";
import { BsBasket } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header className='w-full min-h-16 fixed bg-slate-800 top-0 left-0'>
        <nav className='max-w-[1200px] mx-auto flex items-center justify-between min-h-16'>
            <ul className='flex items-center space-x-5'>
                <li><a href='#'>Logo</a></li>
                <li>Categories</li>
                <li>Collections</li>
                <li>Store</li>
                <li>Blog</li>
            </ul>
            <ul className='flex items-center space-x-7'>
                <li>
                    <button className='inline-flex items-center'>
                        <GoSearch className='mr-2'/> 
                    Search
                    </button>
                </li>
                <li>
                    <button className='inline-flex items-center'>
                        <BsBasket className='mr-2'/> 
                    Chart
                    </button>
                </li>
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

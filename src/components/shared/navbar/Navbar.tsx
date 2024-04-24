"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import x from '../../../images/x.svg'
import brash from '../../../images/align-justify.svg'


export default function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, item: <Link href="/">Home</Link> },
        { id: 3, item: <Link href="/blogs">Blogs</Link> },
        { id: 4, item: <Link href="/">Latest Blogs</Link> },
        { id: 5, item: <Link href="/">Create Blog</Link> },
        { id: 6, item: <Link href="/about">About</Link> },
        { id: 7, item: <Link href="/news">News</Link> },
        { id: 7, item: <Link href="/signup">Sign Up</Link> },
    ];

    return (
        <div className="bg-[#404040]">
            <div className="flex justify-between  items-center h-20 max-w-[1300px] mx-auto text-white text-medium p-6">
                <h2 className='text-2xl font-bold text-white'>BLOGS</h2>
                <ul className="hidden lg:flex">
                    {navItems.map((v) => (
                        <li
                            key={v.id}
                            className="p-2 rounded-xl m-1 duration-300 hover:text-black"
                        >
                            {v.item}
                        </li>
                    ))}
                </ul>
                <div onClick={handleNav} className="block lg:hidden  bg-white p-1">
                    {nav ? <Image src={x} width={20} height={20} alt='menu' /> : <Image src={brash} width={20} height={20} alt='menu' />}
                </div>
                <ul
                    className={
                        nav
                            ? "fixed lg:hidden left-0 top-0 w-[280px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
                            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                    }
                >
                    {navItems.map((v) => (
                        <li
                            key={v.id}
                            className="p-4 text-white border-b rounded-xl  cursor-pointer border-gray-600"
                        >
                            {v.item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}



// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';


// const Navbar = () => {
//     const [menuItems, setMenuItems] = useState([]);

//     useEffect(() => {
//         // Fetch menu items from API
//         axios.get(`https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/menus/primary`)
//             .then(response => {
//                 const formattedMenu = formatMenu(response.data);
//                 setMenuItems(formattedMenu);
//             })
//             .catch(error => console.error('Error fetching menu:', error));
//     }, []);

//     const formatMenu = (items) => {
//         const rootItems = items.filter(item => !item.menu_item_parent || item.menu_item_parent === "0");
//         const findChildren = (parent) => items.filter(item => item.menu_item_parent === parent.ID.toString())
//                                               .map(child => ({ ...child, name: child.title, path: child.url, subsections: findChildren(child) }));
//         return rootItems.map(rootItem => ({ name: rootItem.title, path: rootItem.url, subsections: findChildren(rootItem) }));
//     };

//     return (
//         <nav id="header" className="fixed w-full z-30 top-0 text-white ">
//             <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
//                 <div className="pl-4 flex items-center">
//                     <Link
//                         className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
//                         href="#"
//                     >
//                         {/* Your logo or brand name */}
//                     </Link>
//                 </div>
//                 <div className="block lg:hidden pr-4">
//                     <button
//                         id="nav-toggle"
//                         className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
//                     >
//                         {/* Menu toggle button */}
//                     </button>
//                 </div>
//                 <div
//                     className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
//                     id="nav-content"
//                 >
//                     <ul className="list-reset lg:flex justify-end flex-1 items-center">
//                         {/* Dynamic menu items */}
//                         {menuItems.map((item, index) => (
//                             <li key={index} className="mr-3">
//                                 <Link href={item.path}><i className="inline-block py-2 px-4 text-black font-bold no-underline">{item.name}</i></Link>
//                             </li>
//                         ))}
//                     </ul>
//                     <button
//                         id="navAction"
//                         className="mx-auto lg:mx-0 hover:underline  bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
//                     >
//                         Action
//                     </button>
//                 </div>
//             </div>
//             <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
//         </nav>
//     );
// };

// export default Navbar;
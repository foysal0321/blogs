"use client"

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, item: <Link href="/">Home</Link> },
    { id: 3, item: <Link href="/products">Products</Link> },
    { id: 4, item: <Link href="/flash-sale">Solution</Link> },
    { id: 5, item: <Link href="/about">Download</Link> },
    { id: 6, item: <Link href="/contact">Services</Link> },
    { id: 7, item: <Link href="/dashboard">News</Link> },
    { id: 7, item: <Link href="/dashboard">About</Link> },
  ];

  return (
    <div className="">
      <div className="title">
       <h2 className="text-5xl font-bold text-center">Blogs</h2> 
      </div>
      <div className="flex justify-center items-center h-20 max-w-[1300px] mx-auto text-zinc-950 p-6">
        
        <ul className="hidden lg:flex">
          {navItems.map((v) => (
            <li
              key={v.id}
              className="p-2  rounded-xl m-1 duration-300 hover:text-black"
            >
              {v.item}
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? "X" : "Y"}
        </div>
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 top-0 w-[280px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <a href="/">{/* <img src={logo} alt="" /> */}</a>
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

// "use client"


// import Link from "next/link";
// import NavLinks from "./Navlinks";
// import { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-white">
//       <div className="flex items-center font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//           logo
//           <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
//             {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//         </ul>
//         <div className="md:block hidden">
//           {/* <Button /> */}
//           button
//         </div>
//         {/* Mobile nav */}
//         <ul
//           className={`
//         md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
//         duration-500 ${open ? "left-0" : "left-[-100%]"}
//         `}
//         >
//           <li>
//             <Link href="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//           <div className="py-5">
//             {/* <Button /> */}
//             button
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
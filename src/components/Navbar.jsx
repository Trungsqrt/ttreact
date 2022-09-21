import React, { useState } from "react";
import {
   AiOutlineClose,
   AiOutlineMenu,
   AiOutlineSearch,
   AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
const Navbar = () => {
   const [nav, setNav] = useState(false);

   return (
      <div
         className="mx-auto flex max-w-screen-xl items-center 
      justify-between p-4"
      >
         {/* Navbar */}
         <nav className="flex items-center">
            <section className="cursor-pointer" onClick={() => setNav(true)}>
               <AiOutlineMenu size={30} className="relative top-[2px]" />
            </section>
            <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
               Best <span className="font-bold">Eats</span>
            </h1>
            <section
               className="hidden items-center rounded-full
             bg-gray-200 p-1 text-[14px] lg:flex"
            >
               <p className="rounded-full bg-black p-2 text-white">Delivery</p>
               <p className="p-2">Pickup</p>
            </section>
         </nav>

         {/* Search */}
         <div
            className="flex w-[200px] items-center rounded-full
          bg-gray-200 px-2 sm:w-[400px] lg:w-[600px]"
         >
            <AiOutlineSearch size={25} />
            <input
               className="w-full bg-transparent p-2 focus:outline-none"
               type="text"
               placeholder="Search food..."
            ></input>
         </div>

         {/* Cart button */}
         <button
            className="hidden items-center rounded-full bg-black py-2 text-white
         md:flex"
         >
            <BsFillCartFill size={20} className="mr-2" /> Cart
         </button>

         {/* Mobile menu */}
         {/* Overlay */}
         {nav ? (
            <div
               className="fixed top-0 left-0 z-10 h-screen w-full
                bg-black/80"
               onClick={() => setNav(false)}
            ></div>
         ) : (
            ""
         )}

         {/* side drawer */}
         <section
            className={
               nav
                  ? "fixed top-0 left-0 z-10 h-screen w-[300px] overflow-y-scroll bg-white duration-300"
                  : "fixed left-[-100%] top-0 z-10 h-screen w-[300px] bg-white duration-1000"
            }
         >
            <AiOutlineClose
               size={30}
               className="absolute right-4 top-4 cursor-pointer"
               onClick={() => setNav(false)}
            />
            <h2 className="p-4 text-2xl">
               Best <span className="font-bold">Eats</span>
            </h2>
            <nav>
               <ul className="flex flex-col p-4 text-gray-800">
                  <li className="flex cursor-pointer py-4 text-xl">
                     <TbTruckDelivery size={25} className="mr-4" />
                     Order
                  </li>
                  <li className="flex cursor-pointer py-4 text-xl">
                     <MdFavorite size={25} className="mr-4" />
                     Favourites
                  </li>
                  <li className="flex cursor-pointer py-4 text-xl">
                     <FaWallet size={25} className="mr-4" />
                     Wallet
                  </li>
                  <li className="flex cursor-pointer py-4 text-xl">
                     <MdHelp size={25} className="mr-4" />
                     Help
                  </li>
                  <li className="flex cursor-pointer py-4 text-xl">
                     <BsFillSaveFill size={25} className="mr-4" />
                     Best Ones
                  </li>
                  <li className="flex cursor-pointer py-4 text-xl">
                     <AiFillTag size={25} className="mr-4" />
                     Promotions
                  </li>
                  <li className="flex cursor-pointer py-4 text-xl">
                     <FaUserFriends size={25} className="mr-4" />
                     Invite Friends
                  </li>

                  {/* aaaaaaaaaaaaaa */}
                  <li className="flex py-4 text-xl">
                     <FaWallet size={25} className="mr-4" />
                     Wallet
                  </li>
                  <li className="flex py-4 text-xl">
                     <MdHelp size={25} className="mr-4" />
                     Help
                  </li>
                  <li className="flex py-4 text-xl">
                     <BsFillSaveFill size={25} className="mr-4" />
                     Best Ones
                  </li>
                  <li className="flex py-4 text-xl">
                     <AiFillTag size={25} className="mr-4" />
                     Promotions
                  </li>
                  <li className="flex py-4 text-xl">
                     <FaUserFriends size={25} className="mr-4" />
                     Invite Friends
                  </li>
                  <li className="flex py-4 text-xl">
                     <FaWallet size={25} className="mr-4" />
                     Wallet
                  </li>
                  <li className="flex py-4 text-xl">
                     <MdHelp size={25} className="mr-4" />
                     Help
                  </li>
                  <li className="flex py-4 text-xl">
                     <BsFillSaveFill size={25} className="mr-4" />
                     Best Ones
                  </li>
                  <li className="flex py-4 text-xl">
                     <AiFillTag size={25} className="mr-4" />
                     Promotions
                  </li>
                  <li className="flex py-4 text-xl">
                     <FaUserFriends size={25} className="mr-4" />
                     Invite Friends
                  </li>
                  <li className="flex py-4 text-xl">
                     <FaWallet size={25} className="mr-4" />
                     Wallet
                  </li>
                  <li className="flex py-4 text-xl">
                     <MdHelp size={25} className="mr-4" />
                     Help
                  </li>
                  <li className="flex py-4 text-xl">
                     <BsFillSaveFill size={25} className="mr-4" />
                     Best Ones
                  </li>
                  <li className="flex py-4 text-xl">
                     <AiFillTag size={25} className="mr-4" />
                     Promotions
                  </li>
                  <li className="flex py-4 text-xl">
                     <FaUserFriends size={25} className="mr-4" />
                     Invite Friends
                  </li>
               </ul>
            </nav>
         </section>
      </div>
   );
};

export default Navbar;

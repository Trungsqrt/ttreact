import React, { useState } from "react";
import { data } from "../data/data";
function Food() {
   const [foods, setFoods] = useState(data);

   // category filter handler
   const filterType = (category) => {
      setFoods(
         data.filter((item) => {
            return item.category === category;
         })
      );
   };
   // price filter handler
   const filterPrice = (Price) => {
      setFoods(
         data.filter((item) => {
            return item.price === Price;
         })
      );
   };
   return (
      <div className="m-auto max-w-[1640px] px-4 py-12">
         <h1 className="text-center text-4xl font-bold text-orange-600">
            Top Rated Menu Items
         </h1>

         {/* Filter */}
         <div className="flex flex-col justify-between">
            {/* Filter type */}
            <p className="font-bold text-gray-700">Filter Type</p>
            <section className="flex flex-wrap justify-center gap-x-4 md:justify-start">
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => setFoods(data)}
               >
                  All
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterType("burger")}
               >
                  Burger
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterType("pizza")}
               >
                  Pizza
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterType("salad")}
               >
                  Salads
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterType("chicken")}
               >
                  Chicken
               </button>
            </section>
         </div>

         {/* Filter price */}
         <div>
            <p className="font-bold text-gray-700">Filter Price</p>
            <section className="flex w-full flex-wrap justify-center gap-x-4 md:justify-start">
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterPrice("$")}
               >
                  $
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterPrice("$$")}
               >
                  $$
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterPrice("$$$")}
               >
                  $$$
               </button>
               <button
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  onClick={() => filterPrice("$$$$")}
               >
                  $$$$
               </button>
            </section>
         </div>
         {/* display food */}
         <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {foods.map((item, index) => (
               <div
                  key={index}
                  className="rounded-lg border shadow-lg duration-300 hover:scale-105"
               >
                  <img
                     src={item.image}
                     alt={item.name}
                     className="h-[200px] w-full rounded-t-lg object-cover"
                  />
                  <article className="flex justify-between px-2 py-4">
                     <p className="font-bold">{item.name}</p>
                     <p className="">
                        <span className="rounded-full bg-orange-500 p-1 px-2 text-white">
                           {item.price}
                        </span>
                     </p>
                  </article>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Food;

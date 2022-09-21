import React from "react";
import burger1 from "../assets/images/burger1.jpg";
import burger2 from "../assets/images/burger2.jpg";
import burger3 from "../assets/images/burger3.jpg";

function HeadlineCards() {
   return (
      <div className="mx-auto grid max-w-[1640px] gap-8 p-4 py-12 pt-4 md:grid-cols-3">
         {/* Card */}
         {/* Card 1 */}
         <div className="relative rounded-xl">
            {/* Overlay */}
            <section className="absolute h-full w-full rounded-xl bg-black/50 text-white">
               <p className="px-2 pt-4 text-xl font-bold lg:text-2xl ">
                  Sun's Out, BOGO's OUT
               </p>
               <p className="px-2">Through 8/26</p>
               <section className="flex justify-end">
                  <button className="absolute bottom-4 mx-2 border-white bg-white font-semibold text-black hover:border-2 hover:bg-transparent hover:text-white">
                     Order Now
                  </button>
               </section>
            </section>
            <img
               src={burger1}
               alt=""
               className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
            />
         </div>

         {/* Card 2 */}
         <div className="relative rounded-xl">
            {/* Overlay */}
            <section className="absolute h-full w-full rounded-xl bg-black/50 text-white">
               <p className="px-2 pt-4 text-xl font-bold lg:text-2xl ">
                  Main Dishes
               </p>
               <p className="px-2">Tasty</p>
               <section className="flex justify-end">
                  <button className="absolute bottom-4 mx-2 border-white bg-white font-semibold text-black hover:border-2 hover:bg-transparent hover:text-white">
                     Order Now
                  </button>
               </section>
            </section>
            <img
               src={burger2}
               alt=""
               className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
            />
         </div>
         {/* Card 3 */}
         <div className="relative rounded-xl">
            <section className="absolute h-full w-full rounded-xl bg-black/50 text-white">
               <p className="px-2 pt-4 text-xl font-bold lg:text-2xl ">
                  New Restaurants
               </p>
               <p className="px-2">Added Daily</p>
               <section className="flex justify-end">
                  <button className="absolute bottom-4 mx-2 border-white bg-white font-semibold text-black hover:border-2 hover:bg-transparent hover:text-white">
                     Order Now
                  </button>
               </section>
            </section>
            <img
               src={burger3}
               alt=""
               className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
            />
         </div>
      </div>
   );
}

export default HeadlineCards;

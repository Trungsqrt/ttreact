import React from "react";
import burgerHero from "../assets/images/burgerHero.jpg";
function Hero() {
   return (
      <div className="mx-auto max-w-[1640px] p-4">
         <div className="relative max-h-[500px]">
            {/* Overlay */}
            <section className=" absolute flex h-full max-h-[500px] w-full flex-col justify-center rounded-xl bg-black/50 text-gray-200">
               <h1 className="px-4 text-3xl font-bold leading-8 sm:text-4xl md:text-5xl lg:text-6xl">
                  The <span className="text-red-500">Best</span>
               </h1>
               <h1 className="px-4 text-3xl font-bold leading-8 sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-red-500">Foods</span> Delivered
               </h1>
            </section>
            <img
               src={burgerHero}
               alt="best-food"
               className="max-h-[500px] w-full rounded-xl object-cover"
            />
         </div>
      </div>
   );
}

export default Hero;

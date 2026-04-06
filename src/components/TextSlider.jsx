import React from "react";

const TextSlider = () => {
  return (
    <div className="relative overflow-hidden py-6 sm:py-8 lg:py-10 mt-5 sm:mt-6 lg:mt-7 bg-[#f5f5f5] mx-4 sm:mx-10 lg:mx-20">

      {/* Left Overlay */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-24 lg:w-46 bg-linear-to-r from-[#f5f5f5] via-white to-transparent z-10"></div>

      {/* Right Overlay */}
      <div className="absolute right-0 top-0 h-full w-16 sm:w-24 lg:w-46 bg-linear-to-l from-[#f5f5f5] via-white to-transparent z-10"></div>

      {/* Sliding Track */}
      <div className="flex whitespace-nowrap animate-marquee">

        <p className="mx-4 sm:mx-6 lg:mx-10 text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold text-gray-800 leading-snug">
          We create powerful digital experiences that inspire Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Similique, molestias,
          laboriosam deserunt assumenda quo quasi facilis quis animi ducimus
          perspiciatis ullam quibusdam excepturi ipsam numquam atque. Assumenda
          error omnis ipsum est eaque officia doloremque quia iure distinctio
          aut molestias aperiam esse, ipsam ea dolorem atque ex minima
          accusamus similique beatae.
        </p>

      </div>

    </div>
  );
};

export default TextSlider;
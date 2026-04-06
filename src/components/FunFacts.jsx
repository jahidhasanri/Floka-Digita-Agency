/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import hoverEffect from "hover-effect";
import { motion } from "framer-motion";

const FunFacts = () => {
  const imgRef = useRef(null);
  const [count, setCount] = useState(0);

  /* ---------------- HOVER DISTORTION ---------------- */

  useEffect(() => {
    if (!imgRef.current) return;

    new hoverEffect({
      parent: imgRef.current,
      intensity: 0.35,
      image1: "/images/mans.webp",
      image2: "/images/mans.webp",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, []);

  /* ---------------- COUNTER ---------------- */

  useEffect(() => {
    let start = 0;
    const end = 5;
    const duration = 1000;

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, duration / end);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-16 xl:py-24">
      <div className="max-w-331 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-0 px-4 xl:px-0">

        {/* LEFT IMAGE (STICKY) */}

        <div className="lg:sticky w-full lg:w-125 h-105 lg:h-150 top-24 rounded-2xl border overflow-hidden">
          <div ref={imgRef} className="w-full h-full" />
        </div>

        {/* RIGHT CONTENT */}

        <div className="space-y-10 xl:space-y-14">

          {/* TITLE */}

          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase text-gray-500 mb-5 mt-8 xl:mt-14">
              Fun Facts
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-3 mb-16 xl:mb-32">
              Consistently delivering impactful results through a perfect
              blend of design and functionality.
            </h2>
          </motion.div>

          {/* CARDS GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* LEFT COLUMN */}

            <div className="space-y-6">

              {/* CARD 1 */}

              <motion.div
                className="bg-white px-4 py-8 rounded-xl shadow flex items-center justify-between gap-6"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-500 text-[18px] font-semibold">
                  Successful projects Completed
                </p>

                <h3 className="text-4xl font-bold">2k+</h3>
              </motion.div>

              {/* CARD 2 */}

              <motion.div
                className="bg-black h-75 xl:h-100 rounded-xl relative overflow-hidden flex flex-col justify-end p-4 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {/* Images */}

                <div className="absolute inset-0">

                  <motion.img
                    src="https://picsum.photos/200"
                    className="absolute w-20 h-20 md:w-24 md:h-24 rounded-lg top-10 left-10 md:left-16"
                    whileInView={{ x: -60 }}
                    transition={{ duration: 0.8 }}
                  />

                  <img
                    src="https://picsum.photos/210"
                    className="absolute w-20 h-20 md:w-24 md:h-24 rounded-lg top-14 left-20 md:left-24 z-10"
                  />

                  <motion.img
                    src="https://picsum.photos/220"
                    className="absolute w-20 h-20 md:w-24 md:h-24 rounded-lg top-20 left-28 md:left-32"
                    whileInView={{ x: 60 }}
                    transition={{ duration: 0.8 }}
                  />

                </div>

                {/* Text */}

                <p className="relative z-20 text-[16px] md:text-[18px] text-gray-400 font-semibold">
                  More than 2k+ projects completed—each crafted to deliver
                  real-world results for ambitious brands.
                </p>

              </motion.div>

            </div>

            {/* RIGHT COLUMN */}

            <div className="space-y-6">

              {/* RATING CARD */}

              <motion.div
                className="bg-white p-6 md:p-8 rounded-xl shadow"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-yellow-500 text-lg">★★★★★</p>

                <h3 className="text-4xl md:text-5xl font-semibold mb-6 md:mb-8">
                  4.9/5
                </h3>

                <hr className="text-gray-600" />

                <p className="text-gray-500 mt-6 md:mt-8 text-[16px] md:text-[18px] font-semibold">
                  We offer end-to-end creative solutions that make brands unforgettable.
                </p>

                <div className="flex justify-start mt-8 md:mt-10 mb-6 md:mb-8">

                  <div className="flex gap-5 items-center">

                    <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center duration-300 transition-transform hover:rotate-180">
                      +
                    </button>

                    <p className="text-[14px] font-semibold">HIRE US NOW</p>

                  </div>

                </div>

              </motion.div>

              {/* BG IMAGE CARD */}

              <motion.div
                className="relative rounded-xl h-28 md:h-30 overflow-hidden"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="https://picsum.photos/500/300"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex justify-between items-center px-6">

                  <p className="text-white text-sm md:text-base">
                    Worldwide base
                  </p>

                  <h3 className="text-white text-3xl md:text-4xl font-bold">
                    {count}+
                  </h3>

                </div>

              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
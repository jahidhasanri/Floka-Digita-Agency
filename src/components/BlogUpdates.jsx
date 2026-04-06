import React from "react";
import { Plus } from "lucide-react";

export default function BlogUpdates() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-gray-500 mb-3">
            INSIGHTS
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Company blog & updates
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="flex flex-col gap-6">

            {/* Card */}
            <div className="bg-black text-white p-8 rounded-3xl">
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>WEB3</span>
                <span>NOV 07, 2025</span>
              </div>

              <h3 className="text-xl">
                Seamless user interfaces, crafted with intent.
              </h3>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Button */}
              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Plus />
                </div>
              </div>
            </div>

          </div>


          {/* Center Column */}
          <div className="flex flex-col gap-6">

            {/* Image Big */}
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Plus />
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="bg-white p-8 rounded-3xl">
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>WEB3</span>
                <span>NOV 07, 2025</span>
              </div>

              <h3 className="text-xl">
                Creative web platforms, designed for growth.
              </h3>
            </div>

          </div>


          {/* Right Column */}
          <div className="flex flex-col gap-6">

            {/* Card */}
            <div className="bg-black text-white p-8 rounded-3xl">
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>WEB3</span>
                <span>NOV 07, 2025</span>
              </div>

              <h3 className="text-xl">
                Immersive virtual journeys, built with precision
              </h3>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Plus />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
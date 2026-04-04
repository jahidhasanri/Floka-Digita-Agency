import React, { useState } from "react";
import DotMenu from "./DotMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-16 py-6 flex justify-between items-center bg-white">

      {/* Logo */}
      <img src="../images/Logo.png" alt="Logo" className="w-28 h-8" />

        <p className="cursor-pointer font-semibold hidden xl:flex text-[18px] text-black">Home</p>
        <p className="cursor-pointer font-semibold hidden xl:flex  text-[18px] text-black">Pages</p>
        <p className="cursor-pointer font-semibold hidden xl:flex text-[18px] text-black">Portfolio</p>
        <p className="cursor-pointer font-semibold hidden xl:flex text-[18px] text-black">Blog</p>

        <div className=" items-center gap-6 hidden xl:flex">
          <p className="text-[18px] font-semibold text-black">info@floka.com</p>
          <p className="text-gray-300">|</p>
          <DotMenu />
        </div>


      {/* Hamburger - lg to xl */}
      <div className="xl:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu Popup */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <img src="../images/Logo.png" alt="Logo" className="w-28 h-8" />
          <button onClick={() => setMenuOpen(false)} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        {/* Search Field */}
        <div className="px-6 py-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-md px-3 py-2 outline-none"
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 px-6 mt-6">
          <p className="cursor-pointer font-bold text-[20px]">Home</p>
          <p className="cursor-pointer font-bold text-[20px]">Pages</p>
          <p className="cursor-pointer font-bold text-[20px]">Portfolio</p>
          <p className="cursor-pointer font-bold text-[20px]">Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState } from "react";

const DotMenu = () => {

  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-6 h-6 cursor-pointer"
    >

      {/* center */}
      <span className="absolute w-1 h-1 bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>

      {/* top */}
      <span
        className={`absolute w-1 h-1 bg-black rounded-full left-1/2 -translate-x-1/2 transition-all duration-300
        ${hover ? "top-full" : "top-0"}`}
      ></span>

      {/* bottom */}
      <span
        className={`absolute w-1 h-1 bg-black rounded-full left-1/2 -translate-x-1/2 transition-all duration-300
        ${hover ? "bottom-full" : "bottom-0"}`}
      ></span>

      {/* left */}
      <span
        className={`absolute w-1 h-1 bg-black rounded-full top-1/2 -translate-y-1/2 transition-all duration-300
        ${hover ? "left-full" : "left-0"}`}
      ></span>

      {/* right */}
      <span
        className={`absolute w-1 h-1 bg-black rounded-full top-1/2 -translate-y-1/2 transition-all duration-300
        ${hover ? "right-full" : "right-0"}`}
      ></span>

    </div>
  );
};

export default DotMenu;
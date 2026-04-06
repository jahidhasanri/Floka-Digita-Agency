import React, { useRef } from "react";

const Banner = () => {
  const imgRef = useRef();

  const handleMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    imgRef.current.style.transform =
      `scale(1.2) translate(${x * 10}px, ${y * 10}px)`;
  };

  const reset = () => {
    imgRef.current.style.transform = "scale(1) translate(0,0)";
  };

  return (
    <div className="relative h-screen pl-1 pr-1 lg:pl-5 lg:pr-5 mt-20 bg-white overflow-hidden">
      
      {/* Background Video with gap and rounded corners */}
      <div className="absolute top-0 lg:left-5 lg:right-5 bottom-0  rounded-2xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="../images/home-1-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      

      
      
      
      
      <div className="relative z-10 md:flex items-center justify-between h-full lg:px-20 mt-36">
        {/* Left Text */}
        <div>
          <h1 className="text-[80px] xl:text-[240px] text-white font-normal">Floka</h1>
          <p className="text-[40px] lg:text-[60px] xl:text-[100px] ml-28 xl:ml-64 -mt-5 xl:-mt-24 text-gray-400">Studio</p>
        </div>

        {/* Card */}
       <div>

       <div className="bg-white rounded-2xl p-3 ml-0.5 w-full  lg:w-105 h-70 md:h-40 md:flex gap-6 mb-5">
          <div
            className="w-35 h-35 overflow-hidden rounded-xl"
            onMouseMove={handleMove}
            onMouseLeave={reset}
          >
            <img
              ref={imgRef}
              src="../images/home-1-img-slide-300x300.jpg"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>

          <div>

          <div className="flex-1">
            <p className="text-[16px] text-gray-500">HEAD OF IDEA</p>
            <p className="text-[20px] font-bold text-black">Almond D. Nelsi</p>
          </div>

          <div className="flex gap-5 items-center mt-7">
            <div>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center duration-300 transition-transform hover:rotate-180">
            +
          </button>
            </div>
          <p className="text-[14px] font-semibold">LET'S TALK</p>
          </div>

          </div>
        </div>

      <p className=" text-[15px] md:text-[20px] text-white font-semibold ml-1">No cookie-cutter websites. No fluff. </p>
      <p className="text-[15px]md:text-[18px] font-semibold text-gray-300 ml-1">Just real tools and smart strategies to grow your <br /> business and elevate your brand.</p>

       </div>


      </div>
    </div>
  );
};

export default Banner;
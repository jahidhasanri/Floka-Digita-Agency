import React, { useEffect, useRef } from 'react';

const OurApproch = () => {
    const imgRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY;

      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${Math.min(scrollY * 0.05, 20)}px)`;
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);
    return (
        <div className='w-265 mx-auto mt-32.5  '>
            <div>
                {/* 1st section */}
                <div className='flex gap-60 items-center'>
                    <div>
                        <img src="../images/logo1.png" alt="" />
                    <p className='mt-2 w-62.5 text-[15px] font-medium text-gray-400'>We design every project with long-term success in mind.</p>
                    </div>
                    <div>
                        <p className='text-gray-800 font-semibold w-150 text-[32px]'>Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions.</p>
                    </div>

                </div>
                <div>
                </div>

               {/* 2nd section */}
<div className="grid grid-cols-8 gap-6 mt-12 ">

  {/* Left Card */}
  <div className="col-span-2 bg-[#ffffff] rounded-3xl p-8">
    <h1 className="text-6xl font-bold">
      25<span className="text-gray-400">+</span>
    </h1>

    <p className="text-gray-500 mt-2">Years of experience</p>

    <hr className="my-6" />

    <p className="text-gray-500 text-sm">
      Explore how we transform ideas into extraordinary digital experiences.
    </p>

    <div className="flex items-center mt-20">
      <img
        className="w-8 h-8 rounded-full border-2 border-white"
        src="../images/img1.webp"
        alt=""
      />
      <img
        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
        src="../images/img2.webp"
        alt=""
      />
      <img
        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
        src="../images/img3.webp"
        alt=""
      />
      <img
        className="w-8 h-8 rounded-full border-2 border-white -ml-2"
        src="../images/img4.webp"
        alt=""
      />
    </div>

    <p className="text-sm mt-2">1200+ happy users review</p>
  </div>


  {/* Middle Big Card */}
   <div className="col-span-4 bg-black rounded-3xl relative h-100 flex overflow-visible p-8">

      {/* Left Image */}
      <div className="w-1/2 relative flex items-end">

        <img
          ref={imgRef}
          src="../images/home1-author-img1.webp"
          alt=""
          className="absolute -top-36 left-0 h-111.5 object-contain transition-transform duration-300"
        />

      </div>


      {/* Right Content */}
      {/* Right Content */}
<div className="absolute top-8 right-8 space-y-3">

  <img src="../images/home-1-icon1.svg" className="w-14 h-14" alt="" />

  <img src="../images/home-1-icon2.svg" className="w-14 h-14" alt="" />

</div>


      {/* Bottom Quote */}
      <div className="absolute bottom-0 left-0 w-full p-8">

        <p className="text-white text-lg leading-relaxed">
          “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Merizo H. Yelso /CEO
        </p>

      </div>

    </div>




  {/* Right Cards */}
  <div className="col-span-2 grid grid-rows-2 gap-6">

    {/* Follow card */}
    <div className="bg-[#ffffff] rounded-3xl p-6">
      <p className="text-sm text-gray-400">Follow us</p>
      <p className="text-sm mb-4">For check updates</p>

      <div className="flex flex-wrap gap-2">
        <button className="px-3 py-1 text-xs font-bold border rounded-full">DRIBBBLE</button>
        <button className="px-3 py-1 text-xs font-bold border rounded-full">BEHANCE</button>
        <button className="px-3 py-1 text-xs font-bold border rounded-full">LINKEDIN</button>
        <button className="px-3 py-1 text-xs font-bold border rounded-full">X</button>
        <button className="px-3 py-1 text-xs font-bold border rounded-full">XING</button>
      </div>
    </div>


    {/* Impressions card */}
    <div className="bg-[#ffffff] rounded-3xl p-6">

      <p className="text-sm text-gray-400 mb-4">Impressions</p>

      <div className="space-y-3 text-sm">

        <div>
          <p>Solutions</p>
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full w-full"></div>
          </div>
        </div>

        <div>
          <p>UI/UX</p>
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full w-[90%]"></div>
          </div>
        </div>

        <div>
          <p>Explore</p>
          <div className="w-full bg-gray-300 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full w-[72%]"></div>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>



            </div>
        </div>
    );
};

export default OurApproch;
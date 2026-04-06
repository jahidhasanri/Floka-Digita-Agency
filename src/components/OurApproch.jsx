import React, { useEffect, useRef, useState } from "react";

const OurApproch = () => {
  const imgRef = useRef(null);

  const [years, setYears] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${Math.min(
          scrollY * 0.05,
          20
        )}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Counter Animation */
  useEffect(() => {
    let yearCount = 0;
    let userCount = 0;

    const yearInterval = setInterval(() => {
      yearCount += 1;
      setYears(yearCount);
      if (yearCount >= 25) clearInterval(yearInterval);
    }, 50);

    const userInterval = setInterval(() => {
      userCount += 40;
      setUsers(userCount);
      if (userCount >= 1200) {
        setUsers(1200);
        clearInterval(userInterval);
      }
    }, 10);

    return () => {
      clearInterval(yearInterval);
      clearInterval(userInterval);
    };
  }, []);

  return (
    <div className="max-w-331 mx-auto mt-20 lg:mt-32.5 px-4  xl:px-0">
      <div>

        {/* 1st section */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-60 items-start lg:items-center mb-16 lg:mb-32">
          
          <div>
            <img src="../images/logo1.png" alt="" />
            <p className="mt-2 w-full lg:w-62.5 text-[15px] font-medium text-gray-400">
              We design every project with long-term success in mind.
            </p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold w-full lg:w-150 text-[24px] sm:text-[28px] lg:text-[40px]">
              Our approach is straightforward— prioritizing functionality,
              speed, and clarity for solutions.
            </p>
          </div>
        </div>

        {/* 2nd section */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mt-12">

          {/* Left Card */}
          <div className="lg:col-span-2 bg-[#ffffff] rounded-3xl p-6 lg:p-8 md:mb-22 lg:mb-0">

            <h1 className="text-5xl lg:text-6xl font-bold">
              {years}
              <span className="text-gray-400">+</span>
            </h1>

            <p className="text-gray-500 mt-2">Years of experience</p>

            <hr className="my-6" />

            <p className="text-gray-500 text-sm">
              Explore how we transform ideas into extraordinary digital experiences.
            </p>

            <div className="flex items-center mt-10 lg:mt-20">
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

            <p className="text-sm mt-2">
              {users}+ happy users review
            </p>
          </div>

          {/* Middle Card */}
          <div className="lg:col-span-4 bg-black rounded-3xl relative h-100 flex overflow-visible p-8">

            <div className="w-1/2 relative flex items-end">

              <img
                ref={imgRef}
                src="../images/home1-author-img1.webp"
                alt=""
                className="absolute -top-36 left-0 h-111.5 object-contain transition-transform duration-300"
              />

            </div>

            <div className="absolute top-8 right-8 space-y-3">

              <img src="../images/home-1-icon1.svg" className="w-14 h-14" alt="" />

              <img src="../images/home-1-icon2.svg" className="w-14 h-14" alt="" />

            </div>

            <div className="absolute bottom-0 left-0 w-full p-8">

              <p className="text-white text-lg md:text-[22px] md:font-semibold leading-relaxed">
                “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Merizo H. Yelso /CEO
              </p>

            </div>

          </div>

          {/* Right Cards */}
          <div className="lg:col-span-2 grid grid-rows-1 lg:grid-rows-2 gap-6">

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
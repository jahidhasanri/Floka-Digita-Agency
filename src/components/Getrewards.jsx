import { useEffect, useRef, useState } from "react";
import hoverEffect from "hover-effect";

const Getreward = () => {

  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const [show, setShow] = useState(false);

  /* -------- SCROLL ANIMATION -------- */

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);


  /* -------- IMAGE GLITCH / SLICE HOVER -------- */

  useEffect(() => {

    if (!imgRef.current) return;

    new hoverEffect({
      parent: imgRef.current,
      intensity: 0.35,
      image1: "/images/home12.jpg",
      image2: "/images/home12.jpg",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });

  }, []);



  /* -------- EXPERIENCE ITEMS -------- */

  const items = [
    { title: "Product Designer", sub: "Dribbble", year: "2016" },
    { title: "UI Designer", sub: "Behance", year: "2018" },
    { title: "Lead Designer", sub: "Awwwards", year: "2019" },
    { title: "Creative Director", sub: "Envato", year: "2021" },
    { title: "Founder", sub: "Your Studio", year: "2024" },
  ];



  return (
    <div
      ref={sectionRef}
      className="max-w-330 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 px-4 xl:px-0"
    >

      {/* LEFT IMAGE */}

      <div className="xl:sticky top-24 mt-10 md:mt-36 lg:mt-44 w-full max-w-[320px] lg:w-80 h-80 lg:h-80 rounded-2xl overflow-hidden">

        <div ref={imgRef} className="w-full h-full" />

      </div>



      {/* RIGHT CONTENT */}

      <div className="flex flex-col">

        {/* LOGO */}

        <img
          src="/images/cup.png"
          className="w-20 md:w-24 lg:w-28 mb-6"
        />


        {/* PARAGRAPH */}

        <div className="space-y-2 mb-10 lg:mb-12 overflow-hidden">

          <h4 className="text-2xl md:text-3xl lg:text-[40px] font-semibold max-w-full lg:max-w-177.5">

            Driven by passion and grounded in expertise,
            our team turns bold ideas into reality,
            leading the way in creative innovation.

          </h4>

        </div>


        {/* EXPERIENCE LIST */}

        <div className="flex flex-col">

          {items.map((item, i) => (

            <div
              key={i}
              className={`flex justify-between items-center py-4 lg:py-5 border-y border-gray-200
              hover:bg-white hover:px-4 lg:hover:px-6 transition-all duration-500
              ${
                show
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 180}ms` }}
            >

              <div>

                <h3 className="font-semibold text-base lg:text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.sub}
                </p>

              </div>

              <span className="text-gray-400 text-sm lg:text-base">
                {item.year}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Getreward;
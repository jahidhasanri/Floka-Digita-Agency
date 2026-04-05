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
      className="max-w-330 mx-auto grid grid-cols-2 gap-16 py-24"
    >

      {/* LEFT IMAGE */}

      <div className="sticky top-24 w-80 h-80 rounded-2xl border overflow-hidden">
  <div ref={imgRef} className="w-full h-full" />
</div>



      {/* RIGHT CONTENT */}

      <div className="flex flex-col">

        {/* LOGO */}

        <img
          src="/images/cup.png"
          className="w-28 mb-6"
        />



        {/* PARAGRAPH */}

        <div className="space-y-2 mb-12 overflow-hidden">

          <h4 className="text-[40px] font-semibold max-w-177.5">Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.</h4>

        </div>



        {/* EXPERIENCE LIST */}

        <div className="flex flex-col">

          {items.map((item, i) => (

            <div
              key={i}
              className={`flex justify-between items-center py-5 border-y border-gray-200
              hover:bg-white hover:px-6 transition-all duration-500
              ${
                show
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 180}ms` }}
            >

              <div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.sub}
                </p>

              </div>

              <span className="text-gray-400">
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
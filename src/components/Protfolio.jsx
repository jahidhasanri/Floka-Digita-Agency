import React, { useState, useRef, useEffect } from "react";

/* ---------------- SCROLL REVEAL HOOK ---------------- */

const useReveal = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, show];
};

/* ---------------- CARD ---------------- */

const PortfolioCard = ({
  image,
  title,
  year,
  logo,
  height = "h-[360px]",
  delay = 0,
}) => {
  const [hover, setHover] = useState(false);

  const containerRef = useRef(null);
  const pos = useRef({ x: 50, y: 50 });
  const target = useRef({ x: 50, y: 50 });

  const [revealRef, show] = useReveal();

  /* ---------- IMAGE PARALLAX ---------- */

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (containerRef.current) {
        const img = containerRef.current.querySelector("img");
        if (img) {
          img.style.transform = hover
            ? `scale(1.2) translate(${(pos.current.x - 50) / 8}%, ${(pos.current.y - 50) / 8}%)`
            : "scale(1)";
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [hover]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    target.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    target.current.y = ((e.clientY - rect.top) / rect.height) * 100;
  };

  return (
    <div
      ref={revealRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-full transition-all duration-700 ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      {/* Image Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Image */}
        <img
          src={image}
          alt=""
          className={`w-full ${height} object-cover transition-transform duration-500`}
        />

        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img src={logo} alt="logo" className="h-5 sm:h-6 opacity-90" />
        </div>

        {/* Arrow Button */}
        <div
          className={`absolute top-4 right-4 transition-all duration-300 ${
            hover ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full shadow-lg">
            ↗
          </button>
        </div>

        {/* Bottom Text */}
        <div
          className={`absolute bottom-4 left-4 text-white transition-all duration-300 ${
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p className="text-xs sm:text-sm">{title}</p>
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Bottom Card */}
      <div className="flex justify-between items-center bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg mt-3 shadow-sm">
        <p className="text-xs sm:text-sm font-medium">{title}</p>
        <p className="text-xs sm:text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

/* ---------------- SECTION ---------------- */

const Portfolio = () => {
  return (
    <div className="max-w-331 mx-auto px-4 xl:px-0 ">

      {/* Header */}
      <p className="mb-4 text-sm sm:text-base font-semibold">PORTFOLIO</p>
      <hr className="border-gray-300 mb-10" />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-14 text-center leading-tight">
        Strategy to build powerful <br /> digital solutions.
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">

        <PortfolioCard
          image="/images/car.webp"
          logo="/images/home-1-icon6.svg"
          title="ALDAN BRANDING"
          year="2025"
          delay={0}
        />

        <PortfolioCard
          image="/images/gogels.jpg"
          logo="/images/home-1-icon7.svg"
          title="ALDAN BRANDING"
          year="2025"
          delay={200}
        />

      </div>

      {/* Large Card */}

      <PortfolioCard
        image="/images/cloth.webp"
        logo="/images/home-1-icon6.svg"
        title="ALDAN BRANDING"
        year="2025"
        height="h-[420px] sm:h-[460px] lg:h-[520px]"
        delay={300}
      />

      {/* Bottom Grid */}

      <div className="flex justify-center mt-20 mb-20">
  <div className="flex gap-5 items-center">
    
    <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center duration-300 transition-transform hover:rotate-180">
      +
    </button>

    <p className="text-[14px] font-semibold">LET'S TALK</p>

  </div>
</div>
    </div>
  );
};

export default Portfolio;
import React, { useState, useRef, useEffect } from "react";

const PortfolioCard = ({
  image,
  title,
  year,
  logo,
  height = "h-[360px]",
}) => {
  const [hover, setHover] = useState(false);

  const containerRef = useRef(null);
  const pos = useRef({ x: 50, y: 50 });
  const target = useRef({ x: 50, y: 50 });

  // Smooth animation (lerp)
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
    <div className="w-full">
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

        {/* Top-left logo */}
        <div className="absolute top-4 left-4">
          <img src={logo} alt="logo" className="h-6 opacity-90" />
        </div>

        {/* Top-right circular button */}
        <div
          className={`absolute top-4 right-4 transition-all duration-300 ${
            hover ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg">
            ↗
          </button>
        </div>

        {/* Bottom-left text */}
        <div
          className={`absolute bottom-4 left-4 text-white transition-all duration-300 ${
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p className="text-sm">{title}</p>
        </div>

        {/* Optional dark overlay (premium feel) */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Bottom Info Card */}
      <div className="flex justify-between items-center bg-white px-4 py-3 rounded-lg mt-3 shadow-sm">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

const Protfolio = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Header */}
      <p className="mb-4 font-semibold">PORTFOLIO</p>
      <hr className="border-gray-300 mb-10" />

      {/* Title */}
      <h1 className="text-4xl font-semibold mb-16 text-center">
        Strategy to build powerful <br /> digital solutions.
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <PortfolioCard
          image="/images/car.webp"
          logo="/images/home-1-icon6.svg"
          title="ALDAN BRANDING"
          year="2025"
        />

        <PortfolioCard
          image="/images/gogels.jpg"
          logo="/images/home-1-icon7.svg"
          title="ALDAN BRANDING"
          year="2025"
        />
      </div>

      {/* 3rd Portfolio (Custom Height) */}
      <PortfolioCard
        image="/images/cloth.webp"
        logo="/images/home-1-icon6.svg"
        title="ALDAN BRANDING"
        year="2025"
        height="h-[480px]"
      />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <PortfolioCard
          image="/images/run.webp"
          logo="/images/home-1-icon6.svg"
          title="ALDAN BRANDING"
          year="2025"
        />

        <PortfolioCard
          image="/images/fly.webp"
          logo="/images/home-1-icon7.svg"
          title="ALDAN BRANDING"
          year="2025"
        />
      </div>


    </div>
  );
};

export default Protfolio;
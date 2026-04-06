import { Play } from "lucide-react";

const logos = [
  "../images/icon1.svg",
  "../images/icon2.svg",
  "../images/icon3.svg",
  "../images/icon4.svg",
  "../images/icon1.svg",
  "../images/icon2.svg",
  "../images/icon3.svg",
  "../images/icon4.svg",
];

const HappyUsers = () => {
  return (
    <div className="max-w-331 mx-auto py-10 px-4 xl:px-0">

      {/* TOP TEXT */}

      <div className="flex flex-col md:flex-row justify-between md:items-center mb-5 font-medium text-gray-400 gap-2">
        <p>HAPPY USERS</p>
        <p>©2025 Case-Themes™ Studio</p>
      </div>

      {/* LOGO GRID */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">

        {logos.map((logo, i) => {

          let radius = "";

          if (i === 0) radius = "rounded-tl-2xl";
          if (i === 3) radius = "rounded-tr-2xl";
          if (i === 4) radius = "rounded-bl-2xl";
          if (i === 7) radius = "rounded-br-2xl";

          return (
            <div
              key={i}
              className={`relative group h-28 md:h-40 xl:h-50 bg-white flex items-center justify-center overflow-hidden cursor-pointer ${radius}`}
            >

              <img
                src={logo}
                alt="logo"
                className="h-8 md:h-10 w-24 md:w-40 object-contain transition duration-500"
              />

            </div>
          );
        })}

      </div>

      {/* VIDEO IMAGE SECTION */}

      <div className="relative mt-10 rounded-2xl overflow-hidden group cursor-pointer">

        <img
          src="../images/home1-bg.webp"
          alt="team"
          className="w-full h-80 md:h-112.5 xl:h-175 object-cover transition duration-500 group-hover:blur-sm"
        />

        <div
          className="absolute left-6 bottom-6 transition-all duration-500
          group-hover:left-1/2 group-hover:bottom-1/2
          group-hover:-translate-x-1/2 group-hover:translate-y-1/2"
        >

          <button className="flex items-center gap-2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg font-medium">

            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
              <Play size={14} color="white" />
            </div>

            Play Reel

          </button>

        </div>

      </div>

    </div>
  );
};

export default HappyUsers;
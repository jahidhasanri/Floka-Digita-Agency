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
    <div className="max-w-331  mx-auto  py-10 ">
        <div className="flex justify-between items-center mb-5 font-medium text-gray-400">
            <p>HAPPY USERS</p>
            <p>©2025 Case-Themes™ Studio</p>
        </div>
      {/* Logo Grid */}
    <div className="grid grid-cols-4 gap-0.5">

  {logos.map((logo, i) => {

    let radius = "";

    if (i === 0) radius = "rounded-tl-2xl";
    if (i === 3) radius = "rounded-tr-2xl";
    if (i === 4) radius = "rounded-bl-2xl";
    if (i === 7) radius = "rounded-br-2xl";

    return (
      <div
        key={i}
        className={`relative group h-50 bg-white flex items-center justify-center overflow-hidden cursor-pointer ${radius}`}
      >

        <img
          src={logo}
          alt="logo"
          className="h-10 w-40 object-contain transition duration-500"
        />

      </div>
    );
  })}

</div>

      {/* Video Image Section */}
      <div className="relative mt-10 rounded-2xl overflow-hidden group cursor-pointer">

        <img
          src="../images/home1-bg.webp"
          alt="team"
          className="w-full h-175 object-cover transition duration-500 group-hover:blur-sm"
        />

        <div className="absolute left-6 bottom-6 transition-all duration-500 
        group-hover:left-1/2 group-hover:bottom-1/2 
        group-hover:-translate-x-1/2 group-hover:translate-y-1/2">

          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg font-medium">
  
  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
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
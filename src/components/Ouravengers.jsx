import React, { useEffect, useState } from "react";

const designTeam = [
  {
    name: "Nicolas K. Ellington",
    role: "FOUNDER",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Carlos E. Ashcroft",
    role: "CEO",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Leonardo F. Ashton",
    role: "UX DESIGNER",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ricardo P. Winslow",
    role: "UI DESIGNER",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const devTeam = [
  {
    name: "Amit Sharma",
    role: "Frontend Dev",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Priya Verma",
    role: "Backend Dev",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Rahul Das",
    role: "Full Stack Dev",
    img: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "QA Engineer",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];

const Ouravengers = () => {
  const [team, setTeam] = useState("design");

  const currentTeam = team === "design" ? designTeam : devTeam;

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white max-w-331 mx-auto rounded-2xl py-14 lg:py-20 px-4 sm:px-6 lg:px-16">

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1">

          <p className="text-xs tracking-widest text-gray-500 mb-4">
            OUR AVENGERS
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Meet with our team <br /> member
          </h1>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 text-sm font-medium cursor-pointer">

            <span
              onClick={() => setTeam("design")}
              className={`pb-1 ${
                team === "design"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              DESIGN TEAM
            </span>

            <span
              onClick={() => setTeam("dev")}
              className={`pb-1 ${
                team === "dev"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              DEVELOPMENT TEAM
            </span>

          </div>

          <p className="text-gray-600 mb-6 max-w-md text-sm sm:text-base">
            What began over coffee-fueled brainstorming sessions has grown into
            a thriving digital agency dedicated to helping brands stand out.
          </p>

          {/* Button */}
          <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:opacity-90 transition">
            <span className="text-lg">+</span>
            JOIN WITH US
          </button>

          {/* IMAGE */}
          <div className="mt-10">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
              alt="team"
              className="w-125 h-52 sm:h-64 md:h-72 lg:h-64 object-cover rounded-2xl shadow-md"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {currentTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >

              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
              />

              <h3 className="font-semibold text-base sm:text-lg">
                {member.name}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                {member.role}
              </p>

              <div className="flex gap-2">

                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  f
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  t
                </span>

                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  in
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Ouravengers;
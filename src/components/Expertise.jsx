import React, { useState } from "react";

const data = [
  {
    title: "User Interface & Experience Design",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
  },
  {
    title: "Web Development",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Search Engine Optimization",
    desc: "Improve visibility and reach your audience with strategic SEO solutions.",
    tags: ["SEO", "ANALYTICS", "MARKETING"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Low-Code Development",
    desc: "Build scalable digital products faster using modern low-code technologies.",
    tags: ["NO-CODE", "AUTOMATION", "TOOLS"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const testimonials = [
  {
    name: "Alex",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Great in UI/UX",
  },
  {
    name: "Sara",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Best design communicator",
  },
  {
    name: "David",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "10/10 well recommended",
  },
  {
    name: "Ryan",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "Super speedy website",
  },
  {
    name: "Alex",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Great in UI/UX",
  },
  {
    name: "Sara",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Best design communicator",
  },
  {
    name: "David",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "10/10 well recommended",
  },
  {
    name: "Ryan",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "Super speedy website",
  },
];

const Expertise = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-black text-white ml-5 mr-5 rounded-2xl px-10 py-20">

      {/* heading */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl lg:text-9xl font-semibold">Company</h1>
        <h2 className=" text-3xl md:text-5xl lg:text-9xl text-gray-600 mt-2">expertise</h2>
      </div>

      {/* accordion */}
      <div className="max-w-331 mx-auto">
        {data.map((item, index) => (
          <div key={index} className="border-b border-gray-800 py-8">

            {/* header */}
            <div
              className="flex items-center gap-6 cursor-pointer"
              onClick={() => setActive(index)}
            >
              <div className="w-10 h-10 flex items-center justify-center border lg:mr-32  border-gray-600 rounded-full text-xl">
                {active === index ? "-" : "+"}
              </div>

              <h3 className="text-xl">{item.title}</h3>
            </div>

            {/* content */}
            {active === index && (
              <div className="grid md:grid-cols-2 gap-10 mt-8 items-center">

                {/* left */}
                <div>
                  <p className="text-gray-400 mb-5">{item.desc}</p>

                  <div className="flex gap-3 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border border-gray-600 px-4 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* right image */}
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-xl w-75 h-62.5 object-cover lg:ml-56"
                  />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* hire button */}
        <div className="flex items-center gap-5 mt-12">
          <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full text-xl">
            +
          </div>
          <p className="uppercase tracking-widest">Hire Us Today</p>
        </div>
      </div>

      {/* testimonial slider */}
      <div className="mt-20 overflow-hidden">
        <div className="flex gap-44 animate-scroll whitespace-nowrap">

          {testimonials.map((t, i) => (
            <div key={i} className="flex items-center gap-6">
              <img
                src={t.img}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-gray-300 font-bold text-[20px]">“ {t.quote} ”</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Expertise;
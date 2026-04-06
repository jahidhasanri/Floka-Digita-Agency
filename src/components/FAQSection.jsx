import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import hoverEffect from "hover-effect";

const faqData = [
  {
    title: "How do I purchase tickets?",
    desc: "You can purchase tickets directly from the ticket machine or online.",
    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
  {
    title: "Can I refund my ticket?",
    desc: "Refunds are available depending on ticket type and timing.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Do you offer discounts?",
    desc: "Yes, discounts are available for students and seniors.",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  },
  {
    title: "Is there customer support?",
    desc: "Yes, customer support is available 24/7.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    title: "Where can I find stations?",
    desc: "Use our station finder on the homepage.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

const sliderItems = [
  "Fast Booking",
  "24/7 Support",
  "Easy Payment",
  "Smart Ticket",
  "Secure System",
  "Quick Travel",
];

export default function FAQSection() {

  const [active, setActive] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const imgRef = useRef(null);

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

  /* Slider scroll */

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => prev + 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Title */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          faq & get answer
        </h2>

        <hr className="mb-12 lg:mb-16 text-gray-400" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

          {/* LEFT */}

          <div className="xl:mt-29.5">

            <h3 className="text-base md:text-lg font-medium mb-6">
              Don’t found anything yet. Feel free <br />
              to ask anything. Let’s Talk
            </h3>

            <div className="sticky top-24 w-full max-w-[320px] h-75 md:h-80 rounded-2xl overflow-hidden">
              <div ref={imgRef} className="w-full h-full" />
            </div>

          </div>


          {/* RIGHT */}

          <div>

            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">

              {faqData.map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-5 cursor-pointer shadow-sm"
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                >

                  <div className="flex justify-between items-center">

                    <h4 className="font-semibold text-sm md:text-base">
                      {item.title}
                    </h4>

                    {active === index ? (
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform hover:rotate-180">
                        <Minus size={18} />
                      </div>
                    ) : (
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center">
                        <Plus size={18} />
                      </div>
                    )}

                  </div>

                  {active === index && (

                    <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start">

                      <img
                        src={item.img}
                        className="w-full sm:w-28 h-40 sm:h-20 object-cover rounded-lg"
                        alt=""
                      />

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* SLIDER */}

        <div className="mt-16 lg:mt-20 overflow-hidden border-t pt-8 lg:pt-10">

          <div
            className="flex gap-8 lg:gap-10 whitespace-nowrap"
            style={{
              transform: `translateX(-${scrollX}px)`,
            }}
          >

            {[...sliderItems, ...sliderItems].map((item, index) => (

              <div
                key={index}
                className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 flex items-center gap-4"
              >

                <span>{item}</span>
                <span className="text-gray-400">||</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Plus } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animation =
    "transition-all duration-700 ease-out";

  return (
  <div className=" ml-5 mr-5 rounded-2xl px-10 py-20 bg-[url('/images/bg-img.png')] bg-cover bg-center">
      <div
      ref={sectionRef}
      className="max-w-331  mx-auto rounded-3xl  text-white  grid grid-cols-2 gap-20"
    >
      {/* LEFT SIDE */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-400 mt-5">
          GET IN TOUCH
        </p>

        <h2 className="text-[48px] font-semibold leading-tight mt-6 mb-16">
          Tell us about your project <br /> — whether it’s a website, <br />
          SEO, or marketing.
        </h2>

        <div className="flex gap-44">
          <div>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Phone size={16} />
              TALK TO US
            </div>

            <p className="text-gray-400 text-sm">
              Work and general inquiries
            </p>

            <p>+123 456 789 00</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin size={16} />
              POST ADDRESS
            </div>

            <p className="text-gray-400 text-sm">
              541 Melville Ave, Palo Alto, CA 94301
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white text-black p-10 rounded-3xl">
        <h3 className="text-xl mb-6">
          Have a project in mind?
        </h3>

        {/* INPUTS */}
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="YOUR NAME"
            className={`bg-gray-100 p-4 rounded-xl outline-none ${animation}
            ${
              show
                ? "scale-100 translate-y-0 blur-0 opacity-100"
                : "scale-75 translate-y-10 blur-sm opacity-0"
            }`}
          />

          <input
            placeholder="BUSINESS EMAIL"
            className={`bg-gray-100 p-4 rounded-xl outline-none ${animation} delay-100
            ${
              show
                ? "scale-100 translate-y-0 blur-0 opacity-100"
                : "scale-75 translate-y-10 blur-sm opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-4">

  {/* Budget */}
  <div className="flex flex-col gap-2">
    <label htmlFor="budget" className="text-gray-400 text-sm">
      Budget
    </label>

    <select
      id="budget"
      className={`bg-gray-100 p-4 rounded-xl outline-none ${animation} delay-200
      ${
        show
          ? "scale-100 translate-y-0 blur-0 opacity-100"
          : "scale-75 translate-y-10 blur-sm opacity-0"
      }`}
    >
      <option>$1000 - $5000</option>
      <option>$5000 - $10000</option>
    </select>
  </div>


  {/* Service */}
  <div className="flex flex-col gap-2">
    <label htmlFor="service" className="text-gray-400 text-sm">
      Service
    </label>

    <select
      id="service"
      className={`bg-gray-100 p-4 rounded-xl outline-none ${animation} delay-300
      ${
        show
          ? "scale-100 translate-y-0 blur-0 opacity-100"
          : "scale-75 translate-y-10 blur-sm opacity-0"
      }`}
    >
      <option>Web Development</option>
      <option>SEO</option>
    </select>
  </div>

</div>

        <textarea
          placeholder="MESSAGE"
          className={`bg-gray-100 p-4 rounded-xl w-full h-32 mt-4 outline-none ${animation} delay-400
          ${
            show
              ? "scale-100 translate-y-0 blur-0 opacity-100"
              : "scale-75 translate-y-10 blur-sm opacity-0"
          }`}
        />

        {/* BUTTON */}
        <button
          className={`flex items-center gap-4 mt-6 ${animation} delay-500
          ${
            show
              ? "scale-100 translate-y-0 blur-0 opacity-100"
              : "scale-75 translate-y-10 blur-sm opacity-0"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center duration-300 transition-transform hover:rotate-180">
            <Plus size={18} />
          </div>

          <span className="uppercase text-sm font-medium">
            LET'S TALK
          </span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default ContactSection;
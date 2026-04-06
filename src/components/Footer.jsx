import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 ml-4 md:ml-0 md:mx-5 rounded-2xl lg:pt-32 pb-12 lg:pb-16 relative overflow-hidden">

      <div className="max-w-full mx-auto px-4 sm:px-6">

        {/* Top Big Text */}
        <div className="text-center mb-14 md:mb-16 lg:mb-24 relative">

          <h2 className="text-5xl sm:text-6xl md:text-[90px] lg:text-[140px] font-semibold leading-none text-white/20">
            Let's
          </h2>

          <h2 className="text-5xl sm:text-6xl md:text-[90px] lg:text-[140px] font-semibold leading-none text-white/10">
            talk now
          </h2>

          {/* Circle Button */}
          <div className="w-20 sm:w-24 lg:w-28 -mt-8 sm:-mt-10 mx-auto">
            <img src="/images/rss.png" alt="" className="w-full" />
          </div>

        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

          {/* Left Image */}
          <div>
            <div className="rounded-2xl overflow-hidden space-y-4">

              <img
                src="/images/Screenshot_3.png"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                alt="footer"
              />

              <img
                src="/images/s1.png"
                alt=""
                className="w-full"
              />

            </div>
          </div>

          {/* Middle Menu */}
          <div className="space-y-4 sm:space-y-6 text-xl sm:text-2xl lg:text-3xl sm:ml-10 lg:ml-16">

            <p className="hover:text-gray-400 cursor-pointer font-semibold">About Us</p>
            <p className="hover:text-gray-400 cursor-pointer font-semibold">Journal</p>
            <p className="hover:text-gray-400 cursor-pointer font-semibold">Faq</p>
            <p className="hover:text-gray-400 cursor-pointer font-semibold">Get In Touch</p>
            <p className="hover:text-gray-400 cursor-pointer font-semibold">Careers</p>

          </div>

          {/* Right Content */}
          <div className="space-y-5 text-gray-400 text-sm sm:text-base lg:max-w-md">

            <p>
              At Floka, we believe furniture should be more than just
              functional—it should tell your story. With a focus on timeless
              design, sustainable materials, and expert craftsmanship.
            </p>

            <div className="space-y-2 text-white">
              <p>info@floka-design.com</p>
              <p>+123 (456 789 00)</p>
              <p>12/A, Booston Tower, NYC</p>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
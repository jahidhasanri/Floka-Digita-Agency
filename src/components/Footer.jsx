import {
  ArrowRight,
  
  
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Big Text */}
        <div className="text-center mb-24 relative">

          <h2 className="text-[80px] md:text-[140px] font-semibold leading-none text-white/20">
            Let's
          </h2>

          <h2 className="text-[80px] md:text-[140px] font-semibold leading-none text-white/10">
            talk now
          </h2>

          {/* Circle Button */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">

            <div className="relative w-28 h-28 rounded-full border border-white/20 flex items-center justify-center animate-spin">

              <span className="absolute text-xs tracking-widest">
                GET IN TOUCH
              </span>

              <ArrowRight className="absolute" />

            </div>

          </div>

        </div>


        {/* Footer Grid */}
        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* Left Image */}
          <div>
            <div className="rounded-2xl overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                className="w-full h-full object-cover"
                alt="footer"
              />

            </div>
          </div>


          {/* Middle Menu */}
          <div className="space-y-6 text-2xl">

            <p className="hover:text-gray-400 cursor-pointer">About Us</p>
            <p className="hover:text-gray-400 cursor-pointer">Journal</p>
            <p className="hover:text-gray-400 cursor-pointer">Faq</p>
            <p className="hover:text-gray-400 cursor-pointer">Get In Touch</p>
            <p className="hover:text-gray-400 cursor-pointer">Careers</p>

          </div>


          {/* Right Content */}
          <div className="space-y-6 text-gray-400">

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


            {/* Social Icons */}
            {/* <div className="flex gap-4 pt-4">

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FacebookIcon size={16} />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
                <TwitterIcon size={16} />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
                <LinkedinIcon size={16} />
              </div>

              {/* <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
                <DribbbleIcon size={16} />
              </div> */}

            {/* </div>  */}

          </div>

        </div>

      </div>

    </footer>
  );
}
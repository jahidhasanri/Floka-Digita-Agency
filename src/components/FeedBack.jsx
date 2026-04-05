import { Star } from "lucide-react";

const FeedBack = () => {
  return (
    <div className="max-w-331 mx-auto py-20">

      {/* Header */}
      <p className="text-sm tracking-widest text-gray-500">USER FEEDBACKS</p>
      <hr className="my-6" />

      {/* Paragraph */}
      <h2 className="text-5xl font-medium leading-tight max-w-205 ml-auto mb-20">
        Accelerating growth, and unlocking new potential.

        <span className="inline-flex mx-3">
          <img className="w-10 h-10 rounded-full border-2 border-white -ml-2" src="/images/girl.jpg"/>
          <img className="w-10 h-10 rounded-full border-2 border-white -ml-2" src="/images/girl.jpg"/>
          <img className="w-10 h-10 rounded-full border-2 border-white -ml-2" src="/images/girl.jpg"/>
        </span>

        Let’s build your brand—together.
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">

      {/* LEFT COLUMN */}
      <div className="group space-y-2">

        {/* SMALL CARD */}
        <div className="relative p-6 rounded-3xl bg-white overflow-hidden">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-500"></div>

          <div className="relative z-10 group-hover:text-white">
            <h4 className="font-semibold">Nicolas K. Ellington</h4>
            <p className="text-sm opacity-70">IT Specialist</p>
          </div>
        </div>

        {/* BIG CARD */}
        <div className="relative p-6 rounded-3xl bg-white h-72 overflow-hidden">
          <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition duration-500"></div>

          <div className="relative z-10 space-y-4 group-hover:text-white">
            <div className="flex text-orange-500 gap-1">
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
            </div>

            <p className="font-semibold text-[18px] mb-28">
              As we continued to use their tool and found more use cases,
              our feature requests quickly found their way into their backlog.
            </p>

            <p className="text-sm opacity-70">“ GREAT DESIGN SOLUTIONS ”</p>
          </div>
        </div>

      </div>


      {/* MIDDLE COLUMN */}
      <div className="group space-y-2">

        {/* BIG CARD */}
         <div className="relative p-6 rounded-3xl bg-white h-72 overflow-hidden">
          <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition duration-500"></div>

          <div className="relative z-10 space-y-4 group-hover:text-white">
            <div className="flex text-orange-500 gap-1">
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
            </div>

            <p className="font-semibold text-[18px] mb-28">
              As we continued to use their tool and found more use cases,
              our feature requests quickly found their way into their backlog.
            </p>

            <p className="text-sm opacity-70">“ GREAT DESIGN SOLUTIONS ”</p>
          </div>
        </div>

        {/* SMALL CARD */}
        <div className="relative p-6 rounded-3xl bg-white overflow-hidden">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-500"></div>

          <div className="relative z-10 group-hover:text-white">
            <h4 className="font-semibold">Julian T. Beaumont</h4>
            <p className="text-sm opacity-70">IT Specialist</p>
          </div>
        </div>

      </div>


      {/* RIGHT COLUMN */}
      <div className="group space-y-2">

        {/* SMALL CARD */}
        <div className="relative p-6 rounded-3xl bg-white overflow-hidden">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-500"></div>

          <div className="relative z-10 group-hover:text-white">
            <h4 className="font-semibold">Felipe D. Hawthorne</h4>
            <p className="text-sm opacity-70">IT Specialist</p>
          </div>
        </div>

        {/* BIG CARD */}
         <div className="relative p-6 rounded-3xl bg-white h-72 overflow-hidden">
          <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition duration-500"></div>

          <div className="relative z-10 space-y-4 group-hover:text-white">
            <div className="flex text-orange-500 gap-1">
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
              <Star size={17} />
            </div>

            <p className="font-semibold text-[18px] mb-28">
              As we continued to use their tool and found more use cases,
              our feature requests quickly found their way into their backlog.
            </p>

            <p className="text-sm opacity-70">“ GREAT DESIGN SOLUTIONS ”</p>
          </div>
        </div>

      </div>

    </div>
    </div>
  );
};

export default FeedBack;
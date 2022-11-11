import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center -mt-20  gap-3">
        <div className="text-emerald-400 text-xl uppercase sm:text-2xl lg:text-3xl">
          growing with data analytics
        </div>
        <div className="text-4xl sm:text-6xl lg:text-7xl font-bold">
          Grow with data.
        </div>
        <div className="sm:text-xl lg:text-2xl">
          Fast, flexible financing for{" "}
          <Typed
            strings={["BTC", "B2B", "SASS"]}
            typeSpeed={80}
            backSpeed={100}
            loop
          />
        </div>

        <div className="text-slate-500 px-6 text-center sm:text-xl lg:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </div>

        <button className="bg-emerald-400 py-2 px-8  rounded-md mt-8 text-slate-900">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Hero;
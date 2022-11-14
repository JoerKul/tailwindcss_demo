import React from "react";
import data from "../assets/data.png";
function Analytics() {
  return (
    <div className="bg-white text-slate-900 grid sm:grid-cols-2 p-16">
      <div>
        <img
          className="md:w-80 sm:mx-auto sm:py-32 md:py-8"
          src={data}
          alt="computer with man"
        />
      </div>
      <div className="flex flex-col text-center sm:text-left sm:px-8 md:px-0 justify-center gap-2 mt-6">
        <div className="uppercase text-emerald-400 font-medium text-xl">
          Data Analytics Dashboard
        </div>
        <div className="text-3xl font-semibold">
          Manage Data Analytics Centrally
        </div>
        <div className="lg:mr-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est maiores
          dolore rem distinctio asperiores suscipit quisquam perspiciatis iure
          nam. Iure nihil facilis quis numquam sunt magnam illum harum
          architecto ipsam!
        </div>
        <button className="bg-emerald-400 py-2 px-8 mx-auto sm:mx-0 sm:w-40 rounded-md mt-4 text-slate-900">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Analytics;

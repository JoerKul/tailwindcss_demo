import React from "react";
import {
  MdShowChart,
  MdOutlineAreaChart,
  MdOutlineAddchart,
} from "react-icons/md";
function Pricing() {
  return (
    <div className=" text-slate-900 max-w-5xl  my-20 mx-auto grid lg:grid-cols-3 justify-items-center gap-14 ">
      <div className="w-80 mt-6 border-gray-50 hover:scale-105 transform transition-all ease-linear">
        <div className="shadow-lg rounded-md p-12 flex flex-col place-items-center">
          <div className="mb-4 relative">
            <MdShowChart className="bg-white stroke-emerald-400 w-20 h-20 absolute -top-20 -left-10  rounded-full " />
          </div>
          <div className="text-4xl font-light mb-6 ">Basic</div>
          <div className="text-4xl font-extrabold mb-4">€ 0</div>
          <div className="mt-4">Singel User</div>
          <div className="border my-6 place-self-stretch"></div>
          <div>Limited to 30 Days</div>
          <div className="border my-6 place-self-stretch"></div>
          <button className="bg-emerald-400 text-white py-2 px-6 rounded-md">
            Try for free
          </button>
        </div>
      </div>

      <div className="w-80 mt-6 border-gray-50 hover:scale-105 transform transition-all ease-linear">
        <div className="shadow-lg rounded-lg p-12 flex flex-col place-items-center bg-gradient-to-bl from-green-300 via-emerald-500 to-emerald-700 scale-110">
          <div className="mb-4 relative">
            <MdOutlineAreaChart className="bg-white w-20 h-20 absolute -top-20 -left-10  rounded-full " />
          </div>
          <div className="text-4xl font-light mb-6 text-gray-50">Advanced</div>
          <div className="text-4xl font-extrabold mb-4 text-gray-50">€ 500</div>
          <div className="mt-4 text-gray-50">up to 20 User</div>
          <div className="border my-6 place-self-stretch border-gray-50"></div>
          <div className="text-gray-50">Limited to 1 Year</div>
          <div className="border my-6 place-self-stretch border-gray-50"></div>
          <button className="bg-slate-900 text-white py-2 px-6 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-80 mt-6 border border-gray-50 hover:scale-105 transform transition-all ease-linear">
        <div className="shadow-lg rounded-md p-12 flex flex-col place-items-center">
          <div className="mb-4 relative">
            <MdOutlineAddchart className="bg-white  w-20 h-20 absolute -top-20 -left-10  rounded-full " />
          </div>
          <div className="text-4xl font-light mb-6">Expert</div>
          <div className="text-4xl font-extrabold mb-4">€ Custom</div>
          <div className="mt-4">unlimited</div>
          <div className="border my-6 place-self-stretch"></div>
          <div>limited to 1 Year</div>
          <div className="border my-6 place-self-stretch"></div>
          <button className="bg-emerald-400 text-white py-2 px-6 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-slate-900 text-white  mx-auto">
      <div className="grid lg:grid-cols-2 h-[20rem] items-start max-w-5xl mx-auto  text-center lg:text-left place-content-center gap-6">
        <div className="">
          <div className="text-2xl font-bold">
            Want tips & tricks to optimize your flow?
          </div>
          <div className=" font-medium">
            Sign up our newsletter and stay up to date.
          </div>
        </div>
        <div className="my-2">
          <input
            className="rounded-md mr-4 w-52 py-2 px-4"
            type="text"
            placeholder="Enter your email"
          />
          <button className="text-slate-900 bg-emerald-400 py-2 px-8 rounded-md">
            Notify me
          </button>
          <div className="py-2 text-sm">
            <p>
              We care about the protection of your data. Read our{" "}
              <a className="underline text-emerald-400" href="/">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

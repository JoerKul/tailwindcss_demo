import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 p-6   place-content-center">
        <div>
          <div className="uppercase text-emerald-400">Next.</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            veritatis iure dolorum vitae delectus repellendus molestiae voluptas
            amet consectetur distinctio!
          </div>
          <div className="text-slate-500 flex justify-evenly md:justify-between my-4">
            <div>
              <FaFacebookSquare className="h-8 w-8" />
            </div>
            <div>
              <FaTwitterSquare className="h-8 w-8" />
            </div>
            <div>
              <FaInstagramSquare className="h-8 w-8" />
            </div>
            <div>
              <FaLinkedin className="h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-around ">
          <div className=" flex flex-col gap-2">
            <div className="text-slate-500">Solutions</div>
            <div>Analytics</div>
            <div>Marketing</div>
            <div>Commerce</div>
            <div>Insights</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-slate-500">Support</div>
            <div>Pricing</div>
            <div>Documentation</div>
            <div>Guides</div>
            <div>Press</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-slate-500">Company</div>
            <div>About</div>
            <div>Blog</div>
            <div>Jobs</div>
            <div>Partner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

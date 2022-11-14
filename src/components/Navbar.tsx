import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-50 bg-slate-900 text-white">
      <div className="flex max-w-5xl mx-auto lg:px-0 px-8 pt-8 pb-2 justify-between">
        <h1 className="text-teal-400 font-medium text-2xl uppercase">next.</h1>
        <div className="hidden sm:flex items-center">
          <ul className="flex font-light gap-4">
            <li>Home</li>
            <li>Company</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div
          onClick={toggleMenu}
          className="cursor-pointer flex items-center text-xl sm:hidden"
        >
          {!showMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div
          className={
            showMenu
              ? "bg-slate-900 absolute w-64 h-screen top-16 left-0  ease-in transition-all transform duration-400 sm:hidden"
              : "top16 -left-60  absolute"
          }
        >
          <ul className="flex flex-col p-6 font-light gap-4">
            <li className="border-b pb-2 ">Home</li>
            <li className="border-b pb-2 ">Company</li>
            <li className="border-b pb-2 ">Contact</li>
            <li className="border-b pb-2 ">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

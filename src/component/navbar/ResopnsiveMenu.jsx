import React from "react";
import { FaUserCircle } from "react-icons/fa";
const ResopnsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={` ${
        showMenu ? "left-[0]" : "-left-[100%]"
      } h-screen w-[70%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={30} />
          <div>
            <h1>Dilshad Ahme</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>Nguyen Nhu Hoai</h1>
      </div>
    </div>
  );
};

export default ResopnsiveMenu;

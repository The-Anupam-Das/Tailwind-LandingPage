import React from "react";
import {FaBarsProgress } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="/public/assets/Logo-2.svg" alt="logo" className="h-10"/>
        <button className="bg-gradient-to-r from-orange-400 to-red-300 text-xs whitespace-nowrap text-white px-2.5 py-1.5 rounded-2xl ">Hosterr is hiring</button>
      </div>
      <ul className=" hidden lg:flex justify-between gap-6 items-center font-lato text-gray-400">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hosterr</a></li>
      </ul>
      <div className="hidden lg:flex justify-between items-center font-lato gap-6">
        <a className="text-gray-400" href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className="pt-3 lg:hidden">
        <FaBarsProgress/>
      </div>
    </div>
  );
};

import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaYoutube } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { BiSolidMicrophone } from 'react-icons/bi';
import { TfiUpload } from 'react-icons/tfi';
import { GoBell } from 'react-icons/go';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 h-14 bg-white shadow-md sticky top-0 z-10">
      {/* Left Section */}
      <div className="flex items-center gap-6 text-2xl text-gray-700">
        <div>
          <RxHamburgerMenu className="cursor-pointer hover:text-gray-900" />
        </div>
        <div className="flex items-center gap-1">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-xl font-medium tracking-tight">YouTube</span>
        </div>
      </div>

      {/* Center Section: Search */}
      <div className="flex items-center flex-grow max-w-2xl mx-6">
        <form className="flex w-full">
          <div className="flex items-center w-full border border-gray-300 rounded-l-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 text-gray-700 bg-white focus:outline-none"
            />
          </div>
          <button className="h-10 w-16 flex items-center justify-center bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
            <CiSearch className="text-xl text-gray-600" />
          </button>
        </form>
        <div className="ml-4 p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
          <BiSolidMicrophone className="text-xl" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-xl text-gray-600">
        <TfiUpload className="cursor-pointer hover:text-gray-900" />
        <div className="relative">
          <GoBell className="cursor-pointer hover:text-gray-900 w-6 h-6" />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-red-600 text-white rounded-full px-1.5 py-0.5">
            9+
          </span>
        </div>
        <img
          src="https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f6161efad12c1fe76621c_Cat%2520PFP%2520for%2520Tiktok%252016.png"
          alt="Profile-logo"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;
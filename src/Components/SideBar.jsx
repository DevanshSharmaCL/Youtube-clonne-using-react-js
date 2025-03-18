import React from 'react';
import { MdHome } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

const mainlinks = [
    {
        icon: <MdHome className="w-6 h-6" />,
        name: "Home"
    },
    {
        icon: <MdOutlineOndemandVideo className="w-6 h-6" />,
        name: "Shorts"
    },
    {
        icon: <PiVideoLight className="w-6 h-6" />,
        name: "Subscriptions"
    }
];

const otherLink = [
    {
        icon: <MdHistory className="w-6 h-6" />,
        name: "History"
    },
    {
        icon: <BiSolidPlaylist className="w-6 h-6" />,
        name: "Playlists"
    },
    {
        icon: <GoVideo className="w-6 h-6" />,
        name: "Your videos"
    },
    {
        icon: <MdOutlineWatchLater className="w-6 h-6" />,
        name: "Watch later"
    },
    {
        icon: <BiLike className="w-6 h-6" />,
        name: "Liked videos"
    }
];

const SideBar = () => {
  return (
    <div className="w-[240px] h-screen fixed top-0 left-0 bg-white overflow-y-auto text-[#0f0f0f] font-roboto">
      {/* Main Links Section */}
      <div className="pt-[56px] pb-2">
        {mainlinks.map(({ icon, name }) => (
          <a
            href="#"
            key={name}
            className="flex items-center pl-6 pr-3 py-3 mx-2 hover:bg-[#f2f2f2] active:bg-[#e5e5e5] rounded-xl transition-colors duration-200"
          >
            <span className="mr-[23px] text-[#606060]">{icon}</span>
            <span className="text-[14px] font-medium">{name}</span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <hr className="mx-6 border-t-[1px] border-[#e5e5e5]" />

      {/* Other Links Section */}
      <div className="pt-2 pb-4">
        {otherLink.map(({ icon, name }) => (
          <a
            href="#"
            key={name}
            className="flex items-center pl-6 pr-3 py-3 mx-2 hover:bg-[#f2f2f2] active:bg-[#e5e5e5] rounded-xl transition-colors duration-200"
          >
            <span className="mr-[23px] text-[#606060]">{icon}</span>
            <span className="text-[14px] font-medium">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
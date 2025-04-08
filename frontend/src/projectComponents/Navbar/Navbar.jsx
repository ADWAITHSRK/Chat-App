import { CircleHelp, Menu, Search, Settings, Grip, SearchIcon, SearchXIcon } from "lucide-react";
import { Image } from "antd";
import { ConfigProvider, Typography, Input, Avatar } from "antd";
import Gmail from "../../assets/gmail.png";
import "@fontsource/roboto";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 h-18 bg-gray-100">
      <div className="flex gap-2">
        <Menu />
        <img src={Gmail} className="w-6 h-6 rounded-md" />
        <div className="flex justify-center items-center h-6">
          <h1 className="  text-[19px] text-[#5f6368] font-normal tracking-wide  ">
            Gmail
          </h1>
        </div>
      </div>

      <div className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-1.5 rounded-full w-[700px] h-[44px]">
        <Search className="w-6 text-gray-500  mr-2"/>
        <input
          type="text"
          placeholder="Search mail"
          className="bg-transparent w-full outline-none text-gray-700 placeholder:text-gray-500"
        />
      </div>


      <div className="flex gap-2 justify-center items-center">
        <CircleHelp  />
        <Settings  />
        <Grip  />
        <div className="flex justify-center items-center"><Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          className="mt-2"
        /></div>
        
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Avatar, Button, Popover } from "antd";
import { ChartBarIcon, ChartNetwork, MessageCircleDashed } from "lucide-react";

const Navbar = () => {
  const user = {
    name: "Rahul Kumar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/960px-Elon_Musk_Royal_Society_crop.jpg?20250218152106", 
  };
  const PopoverContent = (
    <div flex flex-col items-center>
      <Avatar size={64} src={user.image} className="mb-2" />
      <p className="font-semibold text-lg">{user.name}</p>
      <Button type="primary" danger className="mt-4 w-full">
        Logout
      </Button>
    </div>
  );
  return (
    <nav className="w-full h-18 flex justify-between items-center px-18 py-3 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center gap-1">
        <MessageCircleDashed />
        <h1 className="text-xl font-bold text-blue-500">ChatVerse</h1>
      </div>
      <Popover
        content={PopoverContent}
        trigger="click"
        placement="bottomRight"
        className="cursor-pointer"
      >
        <Avatar src={user.image} className="cursor-pointer" />
      </Popover>
    </nav>
  );
};

export default Navbar;

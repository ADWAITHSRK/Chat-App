import {
  ArrowBigDown,
  ArrowBigDownIcon,
  EllipsisVertical,
  InboxIcon,
  NetworkIcon,
  RefreshCcw,
  RefreshCcwIcon,
  Square,
  TagIcon,
  User,
} from "lucide-react";
import {
  CaretDownOutlined,
  ReloadOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

export const Inbox = () => {
  const [curr, setCurr] = useState("first");
  return (
    <div className="flex flex-col py-3 px-6 w-[1200px]">
      <div className=" flex justify-between w-full h-10 bg-white  ">
        <div className="flex gap-2.5">
          <div className="flex">
            {" "}
            <Square className="text-gray-500 h-6" />
            <CaretDownOutlined size={"22"} className="h-7 w-7" />
          </div>
          <div className=" h-12">
            <ReloadOutlined className="w-ful font-bold" />
          </div>
          <div>
            <EllipsisVertical size={"20"} className="h-6" />
          </div>
        </div>
        <div className="flex gap-3 px-2">
          <span className="mr-0">50 out of 1000</span>
          <div className="flex">
            <LeftOutlined size={"15"} className="h-6 text-gray-300" />
            <RightOutlined size={"15"} className="h-6" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen mt-2 ">
        <div className="flex gap-4">
          <button
            className={`h-[50px] w-[180px]  border-b-2 ${
              curr === "first"
                ? "border-b-blue-500 bg-gray-300"
                : "border-b-transparent"
            }`}
            onClick={() => setCurr("first")}
          >
            <span className="flex items-center justify-center">
              <InboxIcon /> Primary
            </span>
          </button>

          <button
            className={`h-[50px] w-[180px]  border-b-2 ${
              curr === "second"
                ? "border-b-blue-500 bg-gray-300"
                : "border-b-transparent"
            }`}
            onClick={() => setCurr("second")}
          >
            <span className="flex items-center justify-center">
              <TagIcon /> Promotions
            </span>
          </button>

          <button
            className={`h-[50px] w-[180px]  border-b-2 ${
              curr === "third"
                ? "border-b-blue-500 bg-gray-300"
                : "border-b-transparent"
            }`}
            onClick={() => setCurr("third")}
          >
            <span className="flex items-center justify-center">
              <User /> Social
            </span>
          </button>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quae recusandae temporibus distinctio expedita minima atque, natus odit commodi voluptatum, blanditiis quod provident consequatur ratione dignissimos dolores incidunt delectus a?</p>
      </div>
    </div>
  );
};

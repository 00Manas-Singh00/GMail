import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoReload } from "react-icons/io5";
import {
  MdCheckBoxOutlineBlank,
  MdInbox,
  MdOutlineInfo,
  MdOutlinePeople,
} from "react-icons/md";
import { PiTag } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <PiTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <MdOutlinePeople size={"20px"} />,
    text: "Social",
  },
  {
    icon: <MdOutlineInfo size={"20px"} />, 
    text: "Updates",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="relative flex-1 bg-white rounded-xl mx-5">
      <div className=" p-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="flex items-center rounded-full hover:bg-gray-200 p-2 cursor-pointer">
            <MdCheckBoxOutlineBlank size={"18px"} />
            <RiArrowDropDownLine size={"18px"} />
          </div>
          <div className="flex items-center rounded-full hover:bg-gray-200 p-2 cursor-pointer">
            <IoReload size={"18px"} />
          </div>
          <div className="flex items-center rounded-full hover:bg-gray-200 p-2 cursor-pointer">
            <HiOutlineDotsVertical size={"18px"} />
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600 px-2">
          <p>1 of 100</p>
          <div className="flex items-center gap-2">
            <div className="p-3 rounded-full hover:bg-gray-200 hover:delay-100 hover:duration-500">
              <FaAngleLeft className="cursor-pointer" />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-200 hover:delay-100 hover:duration-500">
              <FaAngleRight className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] overflow-y-auto p-3">
        <div className="flex items-center">
          {mailType.map((item, index) => {
            return (
              <div
                onClick={() => setSelected(index)}
                className={`${
                  selected == index
                    ? "border-b-4 border-blue-600 text-blue"
                    : "border-b-4 border-transparent"
                } flex items-center gap-3 w-[20%] p-4 hover:bg-gray-200 cursor-pointer rounded-b-sm`}
                key={index}
              >
                {item.icon}
                {item.text}
              </div>
            );
          })}
        </div>
        <Emails />
      </div>
    </div>
  );
};

export default Inbox;

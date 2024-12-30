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
  return (
    <div className="relative flex-1 bg-white rounded-xl mx-5 h-[85vh]">
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
          <div className="flex items-center gap-5">
            <FaAngleLeft className="cursor-pointer" />
            <FaAngleRight className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="h-[83vh] overflow-y-auto p-3">
        <div className="flex items-center">
          {mailType.map((item, index) => {
            return (
              <div
                className="flex items-center gap-3 w-[20%] p-4 hover:bg-gray-200"
                key={index}
              >
                {item.icon}
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;

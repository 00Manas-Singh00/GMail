import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoCloseOutline, IoMailUnreadOutline } from "react-icons/io5";
import {
  MdDriveFileMoveOutline,
  MdOutlineArchive,
  MdOutlineReport,
} from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 p-2">
      <div className="flex items-center justify-between px-1">
        <div className="flex">
          <div className="flex items-center gap-2 text-gray-600 py-1 border-r-2 border-r-gray-100 pr-2">
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <FaAngleLeft size={"18px"} />
            </div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <MdOutlineArchive size={"18px"} />
            </div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <MdOutlineReport size={"18px"} />
            </div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <RiDeleteBin6Line size={"18px"} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600 py-1 pl-2">
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <IoMailUnreadOutline size={"18px"} />
            </div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <MdDriveFileMoveOutline size={"18px"} />
            </div>
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-center cursor-pointer p-2 rounded-full hover:bg-gray-200"
            >
              <BsThreeDotsVertical size={"18px"} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600 px-2">
          <p>1 of 100</p>
          <div className="flex items-center gap-1">
            <div className="p-3 rounded-full hover:bg-gray-200 hover:delay-100 hover:duration-500">
              <FaAngleLeft className="cursor-pointer" size={"16px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-200 hover:delay-100 hover:duration-500">
              <FaAngleRight className="cursor-pointer" size={"16px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-normal text-gray-600">Subject</h1>
            <span className="text-gray-600 text-center bg-gray-300 text-xs rounded-md flex items-center ">
              <span className="flex items-center justify-center hover:bg-gray-600 hover:text-white p-1 rounded-l-md">
                Inbox
              </span>
              <span className="flex items-center justify-center p-1 rounded-r-md hover:bg-gray-600 hover:text-white">
                <IoCloseOutline />
              </span>
            </span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <h1>manassingh2705@gmail.com</h1>
          <span>To ...</span>
        </div>
        <div className="my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque vero
          enim eos alias impedit labore nulla necessitatibus explicabo placeat
          ipsa blanditiis quibusdam amet eligendi dolore excepturi commodi,
          soluta voluptates sint consequatur expedita harum voluptatum nesciunt
          est eum? Facilis delectus veniam deserunt similique, quis accusantium
          aut, sequi temporibus tempore nulla non?
        </div>
      </div>
    </div>
  );
};

export default Mail;

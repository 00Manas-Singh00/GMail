import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import { RiExpandDiagonalLine } from "react-icons/ri";

const ComposeMail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`absolute  bg-white max-w-6xl shadow-xl shadow-gray-600 rounded-t-md ${
        isExpanded
          ? "w-[70%] h-[80vh] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md"
          : "w-[30%] right-20 bottom-0"
      }`}
    >
      <div className=" rounded-t-md flex items-center justify-between bg-[#F2F6FC] px-3 py-2">
        <h1 className="font-medium text-sm text-zinc-700">New Message</h1>
        <div className="flex gap-2 items-center">
          <div className="hover:bg-gray-300 text-gray-700">
            <MdMinimize size={"18px"} />
          </div>
          <div
            onClick={() => toggleExpand()}
            className={`hover:bg-gray-300 text-gray-700`}
          >
            <RiExpandDiagonalLine size={"18px"} />
          </div>
          <div className="hover:bg-gray-300 text-gray-700">
            <IoIosClose size={"18px"} />
          </div>
        </div>
      </div>
      <form action="" className="flex flex-col px-3">
        <input
          type="text"
          placeholder="To"
          className="outline-none py-2 border-b-2 border-b-gray-100"
        />
        <input
          type="text"
          placeholder="Subject"
          className="outline-none py-2 border-b-2 border-b-gray-100"
        />
        <textarea
          rows={"10"}
          cols={"30"}
          placeholder="Write your mail here"
          className="outline-none resize-none py-2"
        ></textarea>
      </form>
    </div>
  );
};

export default ComposeMail;

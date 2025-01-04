import { CiFileOn } from "react-icons/ci";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdInbox } from "react-icons/md";
import { RiArrowDropDownLine, RiPencilLine } from "react-icons/ri";
import { setOpen } from "../redux/appSlice";
import { useDispatch } from "react-redux";

const sidebarItems = [
  {
    icon: <MdInbox size={"18px"} />,
    text: "Inbox",
  },
  {
    icon: <FaRegStar size={"18px"} />,
    text: "Starred",
  },
  {
    icon: <FaRegClock size={"18px"} />,
    text: "Snoozed",
  },
  {
    icon: <IoMdSend size={"18px"} />,
    text: "Sent",
  },
  {
    icon: <CiFileOn size={"18px"} />,
    text: "Drafts",
  },
  {
    icon: <RiArrowDropDownLine size={"18px"} />,
    text: "More",
  },
];

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[18%] ">
      <div className="p-3 ">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 text-sm font-semibold p-4 rounded-2xl bg-[#C2E7FF] hover:shadow-md hover:duration-400"
        >
          <RiPencilLine size={"26px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-600">
        {sidebarItems.map((item, index) => {
          return (
            <div
              className="flex items-center gap-3 pl-3 py-2 rounded-r-full hover:cursor-pointer hover:bg-gray-200"
              key={index}
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

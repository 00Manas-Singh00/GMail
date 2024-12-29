import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 text-xl rounded-full text-gray-950 hover:bg-gray-200 cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
            alt="logo"
          />
          <h1 className="text-xl text-gray-500 text-bolder">GMail</h1>
        </div>
      </div>
      <div className="w-[45%] bg-[#EAF1FB] rounded-full">
        <div className="relative flex items-center justify-center px-2 py-3 rounded-full text-gray-700">
          <IoIosSearch size={"24px"} />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent px-3 outline-none text-l"
          />
          <div className="absolute right-2 top-[50%] translate-y-[-50%] p-2 rounded-full hover:bg-gray-200">
            <HiOutlineAdjustmentsHorizontal size={"24px"} />
          </div>
        </div>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-4">
        <div className="p-2 rounded-full hover:bg-gray-200">
          <CiCircleQuestion size={"28px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200">
          <CiSettings size={"28px"} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200">
          <PiDotsNineBold size={"28px"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

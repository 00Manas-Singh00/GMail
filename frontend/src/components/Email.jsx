import { FaRegStar } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Email = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 text-sm cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="text-gray-400">
          <MdCheckBoxOutlineBlank size={"20px"} />
        </div>
        <div className="text-gray-400">
          <FaRegStar />
        </div>
        <div className="font-semibold">
          <h1>From</h1>
        </div>
      </div>
      <div className="flex-1 ml-20 overflow-hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          asperiores!
        </p>
      </div>
      <div className="flex-none text-gray-600 ">
        <p>x days ago</p>
      </div>
    </div>
  );
};

export default Email;

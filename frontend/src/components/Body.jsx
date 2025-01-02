import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="p-2 flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;

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
      <div>
        <input type="text" placeholder="Search Mail" />
      </div>
    </div>
  );
};

export default NavBar;

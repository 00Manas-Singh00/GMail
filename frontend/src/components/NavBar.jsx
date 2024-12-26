import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

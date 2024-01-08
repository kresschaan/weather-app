import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavItem() {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirect = (endpoint) => {
    navigate(`/${endpoint}`, { replace: true });
  };

  const navToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const mobileNav = (
    <>
      <div className="border-shadow absolute left-0 top-full z-50 flex h-[230px] w-full flex-col items-center justify-center bg-slate-700 p-8 backdrop-blur-lg md:hidden">
        <div
          className="cursor-pointer p-2 pr-5 font-semibold text-white hover:text-slate-400"
          onClick={() => redirect("/")}
        >
          Home
        </div>
        <div
          className="cursor-pointer p-2 pr-5 font-semibold text-white hover:text-slate-400"
          onClick={() => logout()}
        >
          Logout
        </div>
      </div>
    </>
  );

  return (
    <>
      {isMenuOpen && mobileNav}

      <div className="flex h-full translate-y-[-0.5rem] flex-row justify-evenly md:hidden">
        <div
          className={`group my-2 w-12 text-white hover:cursor-pointer md:hidden ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={() => navToggle()}
        >
          <span className="hamburger-top group-hover:bg-primary-1 mb-4"></span>
          <span className="hamburger-middle group-hover:bg-primary-1 mb-4"></span>
          <span className="hamburger-bottom group-hover:bg-primary-1 mb-4"></span>
        </div>
      </div>

      <div className="hidden h-full flex-row items-center justify-evenly text-white md:flex">
        <div
          className="cursor-pointer pr-5 font-semibold hover:text-slate-400"
          onClick={() => redirect("")}
        >
          Home
        </div>
        <div
          className="cursor-pointer pr-5 font-semibold  hover:text-slate-400"
          onClick={() => logout()}
        >
          Logout
        </div>
      </div>
    </>
  );
}

export default NavItem;

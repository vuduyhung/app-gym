import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [openMdMenu, setOpenMdMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* Logo section */}
          <div className="flex items-center gap-2 text-2xl font-bold uppercase">
            <FaDumbbell />
            <p>App </p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block px-3 py-1 font-semibold hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-2xl duration-200 hover:bg-primary hover:text-white">
              <CiSearch className="" />
            </button>
            <button className="rounded-full p-2 text-2xl duration-200 hover:bg-primary hover:text-white">
              <PiShoppingCartThin className="" />
            </button>
            <button className="hidden rounded-md border-2 border-primary p-2 px-6 font-semibold text-primary duration-200 hover:bg-primary hover:text-white md:block">
              Login
            </button>
          </div>
          {/* Mobile hamburger menu section */}
          <div className="md:hidden" onClick={() => setOpenMdMenu(!openMdMenu)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <MobileMenu openMenu={openMdMenu} />
    </>
  );
};

export default Navbar;

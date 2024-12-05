import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import navlist from "../../data/navlist.json";
import { FcWorkflow } from "react-icons/fc";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.querySelector(".Navlist");
      if (!navElement?.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[80px] flex justify-between items-center capitalize shadow-lg bg-white z-10 px-10 lg:px-36 relative">
      <div className="cursor-pointer group logo flex gap-2 items-center font-semibold text-lg scale-150">
        cn-vis
        <span className="group-hover:animate-spin-once">
          <FcWorkflow />
        </span>
      </div>

      <div className="hidden lg:flex Navlist gap-8">
        {navlist.map((item, index) => (
          <div key={index} className="nav-item relative group text-sm">
            <div
              className="flex group items-center gap-2 cursor-pointer text-md"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering document click
                toggleDropdown(index);
              }}
            >
              <span>{item.name}</span>

              {activeDropdown === index ? (
                ""
              ) : (
                <span className="group-hover:animate-bounce ">
                  <FaAngleDown />
                </span>
              )}
            </div>
            {activeDropdown === index && item.hasDrop && (
              <div className="dropdown absolute top-full left-0 bg-white shadow-lg rounded mt-2 py-3 w-44 z-20 border border-gray-300">
                {item.topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="dropdown-item py-1 ps-2 text-[14px] pe-1 hover:bg-gray-100 cursor-pointer"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile menu button */}
      <div
        className="lg:hidden flex items-center cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering document click
          toggleMobileMenu();
        }}
      >
        <GiHamburgerMenu className="text-2xl" />
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden  absolute top-[80px] left-0 w-full bg-white shadow-lg z-30">
          {navlist.map((item, index) => (
            <div key={index} className="flex flex-col p-4">
              <div
                className="flex -110 items-center justify-between cursor-pointer text-lg font-medium"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering document click
                  toggleDropdown(index);
                }}
              >
                <span className="hover:scale-110">{item.name}</span>
                {activeDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {activeDropdown === index && item.hasDrop && (
                <div className="dropdown mt-2 p-2">
                  {item.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="dropdown-item py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      {topic}
                      <div className="h-[1px] w-[100%] bg-gray-300"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

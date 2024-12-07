import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import navlist from "../../data/navlist.json";
import { FcWorkflow } from "react-icons/fc";

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
      if (window.innerWidth >= 1024) {
        const navElement = document.querySelector(".Navlist");
        if (!navElement?.contains(event.target)) {
          closeDropdown();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[80px] flex justify-between items-center capitalize shadow-lg bg-white z-10 px-10 lg:px-36 relative">
      {/* Logo */}
      <div className="cursor-pointer group logo flex gap-2 items-center font-semibold text-lg scale-150">
        cn-vis
        <span className="group-hover:animate-spin-once">
          <FcWorkflow />
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex Navlist gap-8">
        {navlist.map((item, index) => (
          <div key={index} className="nav-item relative group text-sm">
            {/* Dropdown Toggle */}
            <div
              className="flex group items-center gap-2 cursor-pointer text-md"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(index);
              }}
            >
              <span>{item.name}</span>
              {activeDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {/* Dropdown Menu */}
            {activeDropdown === index && item.hasDrop && (
              <div className="dropdown flex flex-col absolute top-full left-0 bg-white shadow-lg rounded mt-2 py-3 w-44 z-20 border border-gray-300">
                {Object.values(item.topics).map((topic, idx) => (
                  <Link
                    key={idx}
                    to={`/${topic.link}`} // Use the link from navlist.json
                    className="dropdown-item py-1 px-2 text-[14px] hover:bg-gray-100 cursor-pointer"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    {topic.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div
        className="lg:hidden flex items-center cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          toggleMobileMenu();
        }}
      >
        <GiHamburgerMenu className="text-2xl" />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg z-30"
          onClick={(e) => e.stopPropagation()} // Prevent menu closure on inside click
        >
          {navlist.map((item, index) => (
            <div key={index} className="flex flex-col p-4">
              {/* Mobile Dropdown Toggle */}
              <div
                className="flex items-center justify-between cursor-pointer text-lg font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(index);
                }}
              >
                {item.name}
                {activeDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
              </div>

              {/* Mobile Dropdown Menu */}
              {activeDropdown === index && item.hasDrop && (
                <div className="dropdown mt-2 p-2 flex flex-col ">
                  {Object.values(item.topics).map((topic, idx) => (
                    <Link
                      key={idx}
                      to={`/${topic.link}`}
                      className="dropdown-item py-1 px-2  hover:bg-gray-100 rounded cursor-pointer"
                      onClick={closeDropdown} // Close dropdown on click
                    >
                      {topic.name}
                    </Link>
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

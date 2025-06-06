import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import FilterAndSort from "../context/FilterAndSortContext";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    openSearch: false,
    openMobileMenu: false,
  });
  const { currentPage } = FilterAndSort();

  // const [openearch, setOpenSearch] = useState(false)
  // const [openearch, setOpenSearch] = useState(false)

  return (
    <>
      <div className=" md:hidden flex items-start justify-between px-3 pt-6 pb-5">
        <div className="flex flex-1 ">
          {!menuState?.openMobileMenu ? (
            <span
              className=" hover:border border-dashed  border-gray-400 mr-2"
              onClick={() =>
                setMenuState({ ...menuState, openMobileMenu: true })
              }
            >
              <IoMenuOutline className="text-3xl cursor-pointer" />
            </span>
          ) : (
            <div className={`flex flex-col relative text-[#003459]`}>
              <span
                className=" hover:border border-dashed  border-gray-400 mr-2 z-20"
                onClick={() =>
                  setMenuState({ ...menuState, openMobileMenu: false })
                }
              >
                <LiaTimesSolid className="text-3xl cursor-pointer" />
              </span>
              <div className="absolute top-[-6px] left-[-2px] h-[380px] w-[250px] bg-white z-10"></div>
              <ul className="list-none absolute top-[65px] left-[50px] flex flex-col gap-y-5 z-20 ">
                <li className="flex">
                  <Link
                    to="/"
                    className="w-full py-1 hover:bg-gradient-to-r from-transparent to-[#003459be]"
                    onClick={() =>
                      setMenuState({ ...menuState, openMobileMenu: false })
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    to="/company"
                    className="w-full py-1 hover:bg-gradient-to-r from-transparent to-[#003459be]
                    transition-colors duration-500
                    "
                    onClick={() =>
                      setMenuState({ ...menuState, openMobileMenu: false })
                    }
                  >
                    Company
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    to="/about"
                    className="w-full py-1 hover:bg-gradient-to-r from-transparent to-[#003459be]  transition-colors duration-500"
                    onClick={() =>
                      setMenuState({ ...menuState, openMobileMenu: false })
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    to="/contact"
                    className="w-full py-1 hover:bg-gradient-to-r from-transparent to-[#003459be]  transition-colors duration-500"
                    onClick={() =>
                      setMenuState({ ...menuState, openMobileMenu: false })
                    }
                  >
                    Contact
                  </Link>
                </li>
                <li
                  className="flex items-center justify-center gap-x-5 text-lg"
                  onClick={() =>
                    setMenuState({ ...menuState, openMobileMenu: false })
                  }
                >
                  <span>
                    <Link to="/">
                      <FaFacebook />
                    </Link>
                  </span>

                  <span>
                    <Link to="/twitter">
                      <FaTwitter />
                    </Link>
                  </span>

                  <span>
                    <Link to="/instagram">
                      <FaInstagram />
                    </Link>
                  </span>

                  <span>
                    <Link to="/youtube">
                      <FaYoutube />
                    </Link>
                  </span>
                </li>

                <li className="mt-3 flex justify-center">
                  <img src="/logo_svg.svg" alt="" />
                </li>
              </ul>
            </div>
          )}
        </div>

        {currentPage !== "home" && (
          <span className="text-[#003459] cursive">
            {" "}
            {String(currentPage).toUpperCase()}{" "}
          </span>
        )}

        <div
          className={` cursor-pointer flex-1 flex items-center pe-2 ${
            currentPage !== "home" ? "justify-end" : "justify-center"
          }  `}
        >
          <Link to="/">
            <img src="/logo_svg.svg" alt="logo" />
          </Link>
        </div>

        {currentPage === "home" && (
          <div className="  flex-1 flex items-start justify-end">
            {!menuState?.openSearch ? (
              <span
                className="hover:border border-dashed  border-gray-400 mr-2"
                onClick={() => setMenuState({ ...menuState, openSearch: true })}
              >
                <CiSearch className="text-3xl font-bold cursor-pointer" />
              </span>
            ) : (
              <div className="flex flex-col justify-end items-end relative">
                <span
                  className=" hover:border border-dashed  border-gray-400 mr-2"
                  onClick={() =>
                    setMenuState({ ...menuState, openSearch: false })
                  }
                >
                  <LiaTimesSolid className="text-3xl cursor-pointer" />
                </span>

                <div className=" inline-flex relative h-[70px]">
                  <div className="absolute right-0 top-[15px] w-[70vw]">
                    <SearchInput />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Large screen */}

      <div className="hidden md:flex items-center justify-between pt-10 pb-5 gap-x-12 max-w-7xl mx-auto px-8 7xl:px-0  ">
        <Link to="/">
          <div className="inline cursor-pointer">
            <img src="/logo_svg.svg" alt="logo" />
          </div>
        </Link>

        <div className="flex w-full lg:w-[70%] xl:w-[80%] ">
          <ul className="list-none flex justify-between items-center w-full text-base text-[#003459]  ">
            <li>
              <Link
                to="/"
                className={`py-2 px-3 rounded ${
                  currentPage === "home" &&
                  "bg-[#fceed5] transition-colors duration-500"
                } `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`py-2 px-3 rounded ${
                  currentPage === "company" &&
                  "bg-[#fceed5] transition-colors duration-500 "
                } `}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`py-2 px-3 rounded ${
                  currentPage === "about" &&
                  "bg-[#fceed5] transition-colors duration-500 "
                } `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`py-2 px-3 rounded ${
                  currentPage === "contact" &&
                  "bg-[#fceed5] transition-colors duration-500 "
                } `}
              >
                Contact
              </Link>
            </li>
            {currentPage === "home" && (
              <li className="hidden xl:flex items-center">
                <span>
                  <SearchInput />
                </span>
              </li>
            )}
            <li className="flex">
              <Link className="px-3 py-2 rounded-2xl bg-[#2f6c98fe] text-white">
                Join the community
              </Link>
            </li>
            <li className=" relative flex items-center justify-center">
              {/* dropdown */}
              <img
                src="/images/red-yellow-star.svg"
                alt=""
                className="w-[18px]"
              />
              <div className="dropdown dropdown-end  flex ">
                <div tabIndex={0} role="button" className=" m-1 flex">
                  <a href="#">VND</a>

                  <IoMdArrowDropdown className="self-center" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm mt-10"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {currentPage === "home" && (
        <div className="hidden md:flex items-center justify-center pt-2 pb-5 max-w-7xl mx-auto px-8 7xl:px-0 ">
          <div className="w-[50%] hidden xl:hidden  md:flex items-center justify-center ">
            <SearchInput />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

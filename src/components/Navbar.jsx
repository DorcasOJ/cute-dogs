import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <div className=" md:hidden flex items-center justify-between px-3 pt-6 pb-5">
        <div className="flex">
          <span className=" hover:border border-dashed  border-gray-400 mr-2">
            <IoMenuOutline className="text-3xl cursor-pointer" />
          </span>
          <span className=" hidden hover:border border-dashed  border-gray-400 mr-2">
            <LiaTimesSolid className="text-3xl cursor-pointer" />
          </span>
        </div>
        <div className="inline cursor-pointer">
          <img src="/logo_svg.svg" alt="logo" />
        </div>
        <div className=" hover:border border-dashed  border-gray-400 mr-2">
          <CiSearch className="text-3xl font-bold cursor-pointer" />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between pt-10 pb-5 gap-x-12 max-w-7xl mx-auto px-8 7xl:px-0  ">
        <div className="inline cursor-pointer">
          <img src="/logo_svg.svg" alt="logo" />
        </div>
        <div className="flex w-full lg:w-[70%] xl:w-full ">
          <ul className="list-none flex justify-between items-center w-full text-base text-[#003459]  ">
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="">
                About
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
            <li className="hidden xl:flex items-center">
              <span>
                <SearchInput />
              </span>
            </li>
            <li className="flex">
              <Link className="px-3 py-2 rounded-2xl bg-[#2f6c98fe] text-white">
                Join the community
              </Link>
            </li>
            <li className=" relative flex items-center justify-center">
              {/* dropdown */}
              <img
                src="/public/images/red-yellow-star.svg"
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

      <div className="hidden md:flex items-center justify-center pt-2 pb-5 max-w-7xl mx-auto px-8 7xl:px-0 ">
        <div className="w-[50%] hidden xl:hidden  md:flex">
          <SearchInput />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import SortButton from "./sortButton";

const LargeSubHeader = () => {
  return (
    <div className="hidden md:inline-flex align-center justify-end w-full">
      <div className="py-8 pe-10 w-full">
        <>
          <div className="flex items-center justify-between w-full">
            <div className="text-[#003459] flex items-center  gap-x-3">
              {/* annimation here */}
              <h2 className=" font-bold text-2xl">Monito Dogs</h2>
              <span className="text-sm font-light pt-2">10 Dogs</span>
            </div>

            <SortButton />
          </div>
        </>
      </div>
    </div>
  );
};

export default LargeSubHeader;

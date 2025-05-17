import React from "react";
import SortButton from "./SortButton";

import { IoMdArrowDropdown } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import FilterAndSort from "../context/FilterAndSortContext";

const LargeSubHeader = () => {
  const { filterResult } = FilterAndSort();
  return (
    <div className="hidden md:inline-flex align-center justify-end w-full">
      <div className="py-8 pe-10 w-full">
        <>
          <div className="flex items-center justify-between w-full">
            <div className="text-[#003459] flex items-center  gap-x-3">
              {/* annimation here */}
              <Fade
                delay={200} // Wait before starting
                duration={1000} // Animation duration
                fraction={0.5} // Trigger when 50% visible
                triggerOnce
              >
                <h2 className=" font-bold text-2xl">Monito Dogs</h2>
                <span className="text-sm font-light pt-2">
                  {" "}
                  {filterResult?.length} Dogs
                </span>
              </Fade>
            </div>

            <SortButton />
          </div>
        </>
      </div>
    </div>
  );
};

export default LargeSubHeader;

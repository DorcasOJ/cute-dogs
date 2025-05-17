import SortButton from "./sortButton";
import PopoverFilter from "./PopoverFilter";
import { Fade } from "react-awesome-reveal";
// import { FilterAndSort } from "../context/FilterAndSortContext";
import FilterAndSort from "../context/FilterAndSortContext";

const MobileSubHeader = () => {
  const { filterValues, filterResult } = FilterAndSort();
  return (
    <div className="w-full py-8 md:hidden">
      <div className="px-4">
        <div className="flex items-center justify-around sm:justify-between ">
          <Fade
            delay={100} // Wait before starting
            duration={1000} // Animation duration
            fraction={0.5} // Trigger when 50% visible
            triggerOnce
          >
            <SortButton />
            <PopoverFilter />
          </Fade>
        </div>
        <Fade>
          <div className="pt-4 ps-4">
            {filterResult && filterResult.length} Dogs Selected
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MobileSubHeader;

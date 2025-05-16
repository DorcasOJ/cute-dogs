import SortButton from "./sortButton";
import PopoverFilter from "./PopoverFilter";

const MobileSubHeader = () => {
  return (
    <div className="w-full py-8 md:hidden">
      <div className="flex items-center justify-around sm:justify-between px-4">
        <SortButton />
        <PopoverFilter />
      </div>
    </div>
  );
};

export default MobileSubHeader;

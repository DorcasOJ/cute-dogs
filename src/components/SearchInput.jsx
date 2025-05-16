import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div>
      <form
        action=""
        className="flex items-center gap-x-1 border border-[#2f6c98fe]/10 rounded-2xl ps-2 bg-[#2f6c98fe]/90 w-full"
      >
        <label htmlFor="menu-search-input">
          <CiSearch className="text-2xl font-bold cursor-pointer text-white " />
        </label>

        <input
          type="text"
          name="menu-search-input"
          id="menu-search-input"
          placeholder="Search dog breeds!"
          className="text-black placeholder:text-gray-300 focus:outline-none px-2 py-1 bg-white rounded-e-2xl w-full text-lg"
        />
      </form>
    </div>
  );
};

export default SearchInput;

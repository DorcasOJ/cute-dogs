import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import FilterAndSort from "../context/FilterAndSortContext";

const SearchInput = () => {
  const {
    returnSearchResult,
    setSearchValue,
    searchValue,
    cancelSearchResult,
    filteredOptions,
    filteredResult,
  } = FilterAndSort();

  useEffect(() => {
    if (searchValue) {
      returnSearchResult(searchValue);
      filteredOptions(filteredResult);
    } else {
      cancelSearchResult();
    }
  }, [searchValue]);

  function handleSubmit() {
    if (searchValue) {
      returnSearchResult(searchValue);
      filteredOptions(filteredResult);
    } else {
      cancelSearchResult();
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <div className="w-full bg-white rounded-lg flex items-center justify-between  border border-[#03459]">
          <div className=" flex gap-0 p-2 w-full items-center ">
            <Input
              type="text"
              className="flex-grow py-5 px-4 focus:outline-0 focus-shadow-0 text-base rounded-s-3xl rounded-r-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search dogs"
            />
            <button
              type="submit"
              className=" btn btn-outline border shadow-md rounded-r-3xl bg-gradient-to-r from-[#fceed5] to-[#fceed2] p cursor-pointer btn-md text-white  transition duration-200 ease-in-out transform  hover:bg-gradient-to-r hover:from-[#003459] from-78% hover:to-[#fceed5] to-20% hover:shadow-none px-0 py-3
                      "
            >
              <span className=" flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#fceed5] hover:to-[#003459] hover:bg-clip-text from-85% to-5% hover:text-transparent tracking-wider transition  text-[#003459] ps-4 pe-6 py-4  ">
                Search
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

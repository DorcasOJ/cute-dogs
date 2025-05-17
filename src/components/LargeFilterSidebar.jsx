import React, { useEffect } from "react";

import FilterAndSort from "../context/FilterAndSortContext";

const LargeFilterSidebar = () => {
  // const { filterValues } = FilterAndSort();
  const {
    setFilterValues,
    filterValues,
    filterOptions,
    filteredOptions,
    filterResult,
  } = FilterAndSort();
  useEffect(() => {
    const options = filteredOptions(filterResult);
  }, [filterResult]);

  return (
    <div className="hidden md:inline-flex align-center justify-start ">
      <div className="py-8 ps-10 w-full  ">
        <div className="text-[#003659] font-bold text-2xl">Filter</div>
        <form action="" className="py-4">
          {filterOptions?.gender && (
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-black text-base text-bold">Gender</span>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  id="male"
                  checked={filterValues?.gender === "Male"}
                  onChange={(e) =>
                    e.target.checked &&
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                Male
              </label>
              <label className=" flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  id="female"
                  checked={filterValues?.gender === "Female"}
                  onChange={(e) =>
                    e.target.checked &&
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                Female
              </label>
            </div>
          )}
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="" className="py-4">
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-black text-base text-bold">Safety</span>
            <label className="flex gap-2">
              <input
                type="radio"
                name="vaccinated"
                id="vaccinated"
                checked={filterValues?.vaccinated === true}
                onChange={(e) =>
                  e.target.checked &&
                  setFilterValues({
                    ...filterValues,
                    [e.target.name]: true,
                  })
                }
              />
              Vaccinated
            </label>
            <label className=" flex gap-2">
              <input
                type="radio"
                name="microchipped"
                id="microchipped"
                checked={filterValues?.microchipped === true}
                onChange={(e) =>
                  e.target.checked &&
                  setFilterValues({
                    ...filterValues,
                    [e.target.name]: true,
                  })
                }
              />
              Microchipped
            </label>
          </div>
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="">
          {filterOptions?.dogBreedGroup && (
            <div className="py-4 flex flex-col gap-2 text sm">
              <span className="text-black text-base text-bold">
                Breed Group
              </span>
              {filterOptions?.dogBreedGroup.map((breedGroup) => (
                <span className=" flex gap-2">
                  <label htmlFor={breedGroup} className="flex gap-1">
                    <input
                      type="radio"
                      name="breed_group"
                      id={breedGroup}
                      value={breedGroup}
                      checked={filterValues.breed_group == { breedGroup }}
                      onChange={(e) =>
                        e.target.checked &&
                        setFilterValues({
                          ...filterValues,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    {breedGroup}
                  </label>
                </span>
              ))}
            </div>
          )}
        </form>
        <hr className="border-[#00345942]/50" />

        <form action="">
          {filterOptions?.dogBreed && (
            <div className="py-4 flex flex-col gap-2 text sm">
              <span className="text-black text-base text-bold">Breed</span>

              {filterOptions?.dogBreed.map((breed) => (
                <span className=" flex gap-2">
                  <label htmlFor={breed} className="flex gap-1">
                    <input
                      type="radio"
                      name="breed"
                      id={breed}
                      value={breed}
                      checked={filterValues?.breed === breed}
                      onChange={(e) =>
                        e.target.checked &&
                        setFilterValues({
                          ...filterValues,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    {breed}
                  </label>
                </span>
              ))}
            </div>
          )}
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="">
          {filterOptions?.dogCountryOfOrigin && (
            <div className="py-4 flex flex-col gap-2 text sm">
              <span className="text-black text-base text-bold">
                Country of Origin
              </span>

              <select
                name="country_of_origin"
                id="country"
                className="border-2 ps-2 py-2 w-[150px]"
                onChange={(e) =>
                  setFilterValues({
                    ...filterValues,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option
                  value="select"
                  selected
                  disabled="disabled"
                  id="country"
                >
                  select
                </option>
                {filterOptions?.dogCountryOfOrigin.map((country) => (
                  <option
                    value={country}
                    id="country"
                    name={country.toLowerCase()}
                    selected={filterValues?.country_of_origin == country}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>
          )}
        </form>

        <button
          className="cursor-pointer"
          onClick={() => window.location.reload(true)}
        >
          Clear all
        </button>
        {/* <hr className="border-[#00345942]/50" /> */}
      </div>
    </div>
  );
};

export default LargeFilterSidebar;

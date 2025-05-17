import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiFilter } from "react-icons/fi";
import dogData from "../data/dogs.json";

import FilterAndSort from "../context/FilterAndSortContext";
import { useEffect } from "react";

function PopoverFilter() {
  // const temperaments = [...new Set(dogData.dogs.map((dog) =>
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
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="text-[#003459] font-medium flex items-center gap-1 sm:w-[100px] sm:h-[40px] cursor-pointer"
        >
          <FiFilter className="text-2xl font-bolder" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4 ">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Filter Images</h4>
          </div>

          <div className="grid gap-2 ">
            {filterOptions?.dogBreed && (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="breed">Breed</Label>

                <select
                  name="breed"
                  id="breed"
                  className="col-span-2 h-8 ps-1 border rounded-md"
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option
                    value="select"
                    className="col-span-2 h-8"
                    disabled="disabled"
                    selected
                  >
                    select
                  </option>
                  {filterOptions?.dogBreed.map((breed) => (
                    <option
                      value={breed}
                      className="col-span-2 h-8"
                      selected={filterValues?.breed == { breed }}
                    >
                      {breed}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {filterOptions?.dogBreedGroup && (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="breedGroup">Breed Group</Label>

                <select
                  name="breed_group"
                  id="breedGroup"
                  className="col-span-2 h-8 ps-1 border rounded-md"
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option
                    value="select"
                    className="col-span-2 h-8"
                    disabled="disabled"
                    selected
                  >
                    select
                  </option>

                  {filterOptions?.dogBreedGroup.map((group) => (
                    <option
                      value={group}
                      className="col-span-2 h-8"
                      selected={filterValues?.breed_group == { group }}
                    >
                      {group}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {filterOptions?.dogCountryOfOrigin && (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="country">Country of origin</Label>

                <select
                  name="country_of_origin"
                  id="country"
                  className="col-span-2 h-8 ps-1 border rounded-md"
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option
                    value="select"
                    className="col-span-2 h-8"
                    disabled="disabled"
                    selected
                  >
                    select
                  </option>
                  {filterOptions.dogCountryOfOrigin.map((country) => (
                    <option
                      value={country}
                      className="col-span-2 h-8"
                      selected={filterValues?.country_of_origin == { country }}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {filterOptions?.gender && (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="gender">Gender</Label>

                <select
                  name="gender"
                  id="gender"
                  className="col-span-2 h-8 ps-1 border rounded-md"
                  onChange={(e) =>
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option
                    value="select"
                    className="col-span-2 h-8"
                    disabled="disabled"
                    selected
                  >
                    select
                  </option>
                  {filterOptions.gender.map((g) => (
                    <option
                      value={g}
                      name="gender"
                      className="col-span-2 h-8"
                      selected={filterValues?.gender == { g }}
                    >
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="vaccinated">Vaccinated</Label>
              <Input
                id="vaccinated"
                name="vaccinated"
                type="checkbox"
                className="col-span-2 h-8"
                checked={filterValues?.vaccinated == true}
                onChange={(e) => {
                  () =>
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: true,
                    });
                }}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="microchipped">MicroChipped</Label>
              <Input
                id="microchipped"
                name="microchipped"
                type="checkbox"
                checked={filterValues?.microchipped == true}
                className="col-span-2 h-8"
                onChange={(e) => {
                  () =>
                    setFilterValues({
                      ...filterValues,
                      [e.target.name]: true,
                    });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              window.location.reload(true);
            }}
            className="cursor-pointer"
          >
            Clear all
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverFilter;

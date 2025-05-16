import React from "react";
import {
  dogBreed,
  dogBreedGroup,
  dogCountryOfOrigin,
  temperamentUnique,
} from "../data/dogs_data_details";

const LargeFilterSidebar = () => {
  return (
    <div className="hidden md:inline-flex align-center justify-start ">
      <div className="py-8 ps-10 w-full  ">
        <div className="text-[#003659] font-bold text-2xl">Filter</div>
        <form action="" className="py-4">
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-black text-base text-bold">Gender</span>
            <span className="flex gap-2">
              <input type="checkbox" name="Male" id="male" />
              <label htmlFor="male">Male</label>
            </span>
            <span className=" flex gap-2">
              <input type="checkbox" name="Female" id="female" />
              <label htmlFor="female">Female</label>
            </span>
          </div>
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="" className="py-4">
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-black text-base text-bold">Max Price</span>
            <span className="flex gap-2">
              <input
                type="number"
                name="price"
                id="price"
                className="border-2 bg-white w-[150px] px-1 py-2"
              />
            </span>
          </div>
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="" className="py-4">
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-black text-base text-bold">Safety</span>
            <span className="flex gap-2">
              <input type="checkbox" name="vaccinated" id="vaccinated" />
              <label htmlFor="vaccinated">Vaccinated</label>
            </span>
            <span className=" flex gap-2">
              <input type="checkbox" name="microchipped" id="microchipped" />
              <label htmlFor="microchipped">Microchipped</label>
            </span>
          </div>
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="">
          <div className="py-4 flex flex-col gap-2 text sm">
            <span className="text-black text-base text-bold">Breed Group</span>
            {dogBreedGroup.map((breedGroup) => (
              <span className=" flex gap-2">
                <input
                  type="checkbox"
                  name={breedGroup.replace(" ", "").toLowerCase()}
                  id={breedGroup.replace(" ", "").toLowerCase()}
                  value={breedGroup}
                />
                <label htmlFor={breedGroup.replace(" ", "").toLowerCase()}>
                  {breedGroup}
                </label>
              </span>
            ))}
          </div>
        </form>
        <hr className="border-[#00345942]/50" />

        <form action="">
          <div className="py-4 flex flex-col gap-2 text sm">
            <span className="text-black text-base text-bold">Breed</span>

            {dogBreed.map((breed) => (
              <span className=" flex gap-2">
                <input
                  type="checkbox"
                  name={breed.replace(" ", "").toLowerCase()}
                  id={breed.replace(" ", "").toLowerCase()}
                  value={breed}
                />
                <label htmlFor={breed.replace(" ", "").toLowerCase()}>
                  {breed}
                </label>
              </span>
            ))}
            <div></div>
          </div>
        </form>

        <hr className="border-[#00345942]/50" />

        <form action="">
          <div className="py-4 flex flex-col gap-2 text sm">
            <span className="text-black text-base text-bold">
              Country of Origin
            </span>
            <select
              name="country"
              id="country"
              className="border-2 ps-2 py-2 w-[150px]"
            >
              <option value="select" selected disabled="disabled" id="country">
                select
              </option>
              {dogCountryOfOrigin.map((country) => (
                <option
                  value={country}
                  id="country"
                  name={country.toLowerCase()}
                >
                  {country}
                </option>
              ))}
            </select>

            <div></div>
          </div>
        </form>
        {/* <hr className="border-[#00345942]/50" /> */}

        <form action="">
          <div className="py-4 flex flex-col gap-2 text sm">
            <span className="text-black text-base text-bold">Temperaments</span>
            <select
              name="temperaments"
              id="temperaments"
              className="border-2 ps-2 py-2 w-[150px]"
            >
              <option
                value="select"
                selected
                disabled="disabled"
                id="temperaments"
              >
                select
              </option>
              {temperamentUnique.map((temperament) => (
                <option
                  value={temperament}
                  id="temperament"
                  name={temperament.toLowerCase()}
                >
                  {temperament}
                </option>
              ))}
            </select>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LargeFilterSidebar;

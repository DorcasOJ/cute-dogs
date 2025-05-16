import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiFilter } from "react-icons/fi";
import dogData from "../data/dogs_data.json";
import {
  dogBreed,
  dogBreedGroup,
  dogCountryOfOrigin,
  temperamentUnique,
} from "../data/dogs_data_details";

function PopoverFilter() {
  // const temperaments = [...new Set(dogData.dogs.map((dog) =>

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
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2 ">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="breed">Breed</Label>

              <select
                name="breed"
                id="breed"
                className="col-span-2 h-8 ps-1 border rounded-md"
              >
                <option
                  value="select"
                  className="col-span-2 h-8"
                  disabled="disabled"
                  selected
                >
                  select
                </option>
                {dogBreed.map((breed) => (
                  <option
                    value={breed.replace(" ", "").toLowerCase()}
                    className="col-span-2 h-8"
                  >
                    {breed}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="breedGroup">Breed Group</Label>

              <select
                name="breedGroup"
                id="breedGroup"
                className="col-span-2 h-8 ps-1 border rounded-md"
              >
                <option
                  value="select"
                  className="col-span-2 h-8"
                  disabled="disabled"
                  selected
                >
                  select
                </option>

                {dogBreedGroup.map((group) => (
                  <option
                    value={group.replace(" ", "").toLowerCase()}
                    className="col-span-2 h-8"
                  >
                    {group}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="country">Country of origin</Label>

              <select
                name="country"
                id="country"
                className="col-span-2 h-8 ps-1 border rounded-md"
              >
                <option
                  value="select"
                  className="col-span-2 h-8"
                  disabled="disabled"
                  selected
                >
                  select
                </option>
                {dogCountryOfOrigin.map((country) => (
                  <option
                    value={country.replace(" ", "").toLowerCase()}
                    className="col-span-2 h-8"
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="lifeSpan">Max Life-span (years)</Label>

              <Input id="lifeSpan" value="2" className="col-span-2 h-8 " />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="temperament">Temperaments</Label>

              <select
                name="temperament"
                id="temperament"
                className="col-span-2 h-8 ps-1 border rounded-md"
              >
                <option
                  value="select"
                  className="col-span-2 h-8"
                  disabled="disabled"
                  selected
                >
                  select
                </option>

                {temperamentUnique.map((temperament) => (
                  <option value={temperament} className="col-span-2 h-8">
                    {temperament}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="gender">Gender</Label>

              <select
                name="gender"
                id="gender"
                className="col-span-2 h-8 ps-1 border rounded-md"
              >
                <option
                  value="male"
                  className="col-span-2 h-8"
                  disabled="disabled"
                  selected
                >
                  select
                </option>
                <option value="male" className="col-span-2 h-8">
                  Male
                </option>
                <option value="female" className="col-span-2 h-8">
                  Female
                </option>
              </select>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="price">Price (max)</Label>
              <Input id="price" value="30000" className="col-span-2 h-8" />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="vaccinated">Vaccinated</Label>
              <Input
                id="vaccinated"
                type="checkbox"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="microchipped">MicroChipped</Label>
              <Input
                id="microchipped"
                type="checkbox"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverFilter;

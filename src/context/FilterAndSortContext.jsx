import { useContext, useState, createContext, useEffect } from "react";
import dogData from "../data/dogs.json";

export const FilterContext = createContext();
export function FilterContextProvider({ children }) {
  const [filterValues, setFilterValues] = useState();
  const [filterOptions, setFilterOptions] = useState();
  const [filterResult, setFilterResult] = useState(dogData.dogs);
  const [sortValue, setSortValue] = useState();
  const [sortResult, setSortResult] = useState();

  function returnFilteredDogs(filterResult) {
    if (filterResult || filterValues) {
      const results = dogData.dogs.filter((item) =>
        Object.entries(filterValues).every(
          ([key, value]) => item[key] === value
        )
      );

      setFilterResult(results);

      // return results;
      // return results;
    }

    return;
  }

  function filteredOptions(filterResult) {
    if (filterResult) {
      const dogBreed = [...new Set(filterResult.map((dog) => dog.breed))];

      const dogBreedGroup = [
        ...new Set(filterResult.map((dog) => dog.breed_group)),
      ];
      const dogCountryOfOrigin = [
        ...new Set(filterResult.map((dog) => dog.country_of_origin)),
      ];
      const gender = [...new Set(filterResult.map((dog) => dog.gender))];

      setFilterOptions({
        dogBreed: dogBreed,
        dogBreedGroup: dogBreedGroup,
        dogCountryOfOrigin: dogCountryOfOrigin,
        gender: gender,
      });
    }
    return;
  }
  //   async function filterGender() {}

  //  {
  //     value: "name",
  //     label: "Name Asc",
  //   },
  //   {
  //     value: "likes",
  //     label: "Most Popular",
  //   },
  //    {
  //     value: "likes_least",
  //     label: "Least Popular",
  //   },
  //    {
  //     value: "likes",
  //     label: "Age Desc",
  //   },
  //   {
  //     value: "age_months",
  //     label: "Age Asc",
  //   },
  //   {
  //     value: "price_naria_higest",
  //     label: "Highest price",
  //   }
  //   {
  //     value: "price_naria",
  //     label: "Lowest price",
  //   },

  function sortValueInput(sortValue) {
    if (sortValue === "likes") {
      setFilterResult([...filterResult].sort((a, b) => b.like - a.like));
      // console.log(filterResult);
    } else if (sortValue === "age_months") {
      setFilterResult(
        [...filterResult].sort((a, b) => a.age_months - b.age_months)
      );
    } else if (sortValue === "price_naria_higest") {
      setFilterResult(
        [...filterResult].sort((a, b) => b.price_naira - a.price_naira)
      );
    } else if (sortValue === "like_least") {
      setFilterResult([...filterResult].sort((a, b) => a.like - b.like));
    } else if (sortValue === "name") {
      setFilterResult([...filterResult].sort((a, b) => a.name - b.name));
    } else if (sortValue === "price_naria") {
      setFilterResult(
        [...filterResult].sort((a, b) => a.price_naira - b.price_naira)
      );
    } else if (sortValue === "age_months_desc") {
      [...filterResult].sort((a, b) => b.age_months - a.age_months);
    }
  }

  useEffect(() => {
    returnFilteredDogs(filterValues);
    filteredOptions(filterResult);
  }, [filterValues]);

  return (
    <FilterContext.Provider
      value={{
        setFilterResult,
        filterResult,
        filterValues,
        setFilterValues,
        filterOptions,
        filteredOptions,
        returnFilteredDogs,
        setSortValue,
        sortValue,
        setSortResult,
        sortResult,
        sortValueInput,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default function FilterAndSort() {
  return useContext(FilterContext);
}

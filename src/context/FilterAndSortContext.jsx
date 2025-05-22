import { useContext, useState, createContext, useEffect } from "react";
import dogData from "../data/dogs.json";
import { shuffleData } from "../model/helpers";
import { useLocation } from "react-router-dom";

export const FilterContext = createContext();
export function FilterContextProvider({ children }) {
  const [filterValues, setFilterValues] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [filterResult, setFilterResult] = useState(shuffleData(dogData.dogs));
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loadAnimation, setLoadAnimation] = useState({
    heroCompleted: false,
  });
  const [currentPage, setCurrentPage] = useState("home");

  function enableSearchFunction(location) {
    const pathArray = location.pathname.split("/").filter(Boolean);

    const path = pathArray[0] || "home";

    setCurrentPage(String(path));
  }

  function returnSearchResult(searchValue) {
    const results = shuffleData(dogData.dogs).filter((obj) =>
      Object.values(obj).some((value) =>
        String(value)
          .toLowerCase()
          .includes(
            String(searchValue)
              .trim()
              .replace(/\s+/g, " ")
              .replace(/[^\w\s]/gi, "")
              .toLowerCase()
          )
      )
    );

    setFilterResult(results);
  }

  function cancelSearchResult() {
    setFilterResult(shuffleData(dogData.dogs));
  }

  function returnFilteredDogs(filterValues) {
    if (filterResult && filterValues) {
      const results = dogData.dogs.filter((item) =>
        Object.entries(filterValues).every(
          ([key, value]) => item[key] === value
        )
      );

      setFilterResult(results);
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
    } else if (sortValue === "likes_least") {
      setFilterResult([...filterResult].sort((a, b) => a.like - b.like));
    } else if (sortValue === "name") {
      setFilterResult(
        filterResult.sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (sortValue === "name_desc") {
      setFilterResult(
        filterResult.sort((a, b) => b.name.localeCompare(a.name))
      );
    } else if (sortValue === "price_naria") {
      setFilterResult(
        [...filterResult].sort((a, b) => a.price_naira - b.price_naira)
      );
    } else if (sortValue === "age_months_desc") {
      filterResult.sort((a, b) => b.age_months - a.age_months);
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
        setSearchValue,
        searchValue,
        sortValueInput,
        setLoadAnimation,
        loadAnimation,
        returnSearchResult,
        cancelSearchResult,
        currentPage,
        enableSearchFunction,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default function FilterAndSort() {
  return useContext(FilterContext);
}

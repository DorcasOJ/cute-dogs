import dogData from "./dogs.json";

export const allCountryOfOrigin = [
  ...new Set(dogData.dogs.map((item) => item.country_of_origin)),
];

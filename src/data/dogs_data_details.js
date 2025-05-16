// {
//   "breed" "German Shepherd"hepherd",
//     "Labrador Retriever"r",
//     "Border Collie",
//     "Poodle",
//     "Rottweiler"ler"
//   }
// }

// export const breads = [
//   "German Shepherd",
//   "Labrador Retriever",
//   "Border Collie",
//   "Poodle",
//   "Rottweiler",
// ];

import dogData from "./dogs_data.json";

export const dogBreed = [...new Set(dogData.dogs.map((dog) => dog.breed))];
export const dogBreedGroup = [
  ...new Set(dogData.dogs.map((dog) => dog.breed_group)),
];
export const dogCountryOfOrigin = [
  ...new Set(dogData.dogs.map((dog) => dog.country_of_origin)),
];

const temperaments = [...new Set(dogData.dogs.map((dog) => dog.temperament))];

export const temperamentUnique = [
  ...new Set(temperaments.map((temperament) => temperament.split("and")[0])),
];

export const imageUrls = dogData.dogs.map((item) => item.image_url);

import dogData from "./dogs.json";

export const imageUrls = dogData.dogs.map((item) => item.image_url);

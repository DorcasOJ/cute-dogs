import dogData from "../data/dogs.json";
import { formatPrice } from "../model/helpers";
import { Skeleton } from "./ui/skeleton";
import StarRatings from "react-star-ratings";

const DisplayDogData = ({ id }) => {
  return (
    <div className="py-5 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-1 ">
      {Object.entries(dogData.dogs[id])
        .filter(
          ([key]) => key !== "id" && key !== "image_url" && key !== "color"
        )
        .map(([key, value]) => (
          <div
            key={key}
            className="border-b border-gray-200 flex flex-col md:flex-row justify-center items-center sm:flex-row sm:items-start sm:justify-between md:justify-start gap-1 md:gap-2 lg:flex-row lg:justify-between lg:items-start xl:flex-row"
          >
            <span>
              {String(key).replace(/_/g, " ").trim().toUpperCase()} :{" "}
            </span>
            <span>
              {key === "temperaments" ? (
                String(value)
                  .match(/[A-Z][a-z]*/g)
                  .join(", ")
              ) : typeof value === "boolean" ? (
                value.toString()
              ) : key === "price_naira" ? (
                <span> {formatPrice(value)} Naira </span>
              ) : key === "like" ? (
                <span>
                  <StarRatings
                    rating={value / 40}
                    starRatedColor="red"
                    numberOfStars={5}
                    name="rating"
                    starDimension="1rem"
                    starSpacing=".2rem"
                  />
                </span>
              ) : (
                value
              )}
            </span>
          </div>
        ))}
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default DisplayDogData;

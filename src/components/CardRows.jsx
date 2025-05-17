import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { preloadImages, truncateText, formatPrice } from "../model/helpers";
import SkeletonCard from "./SkeletonCard";
import { Badge } from "@/components/ui/badge";
import CardPagination from "./CardPagination";
import { imageUrls } from "../data/dogs_data_details";
import { Fade } from "react-awesome-reveal";
import FilterAndSort from "../context/FilterAndSortContext";

const CardRows = () => {
  const itemPerPage = 10;
  const [dogs, setDogs] = useState();
  const [loadedCardImages, setLoadedCardImages] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemPerPage);

  const { filterResult } = FilterAndSort();

  useEffect(() => {
    preloadImages(imageUrls).then((results) => {
      const loadedMap = {};
      results.forEach(({ imgUrl, loaded }) => {
        loadedMap[imgUrl] = loaded;
      });
      setLoadedCardImages(loadedMap);
    });
  }, [dogs]);

  return (
    <div className="px-4 md:px-0 pb-5 7xl:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-8 ">
        {filterResult &&
          filterResult.slice(startIndex, endIndex).map((item) =>
            loadedCardImages[item.image_url] ? (
              <Fade key={item.id}>
                <Card className="p-2 pb-8 h-[598px] sm:h-[640px] md:h-[700px] shadow-md">
                  <figure className="h-[350px] sm:h-[400px] md:h-[450px] w-[100%]">
                    <img
                      src={item.image_url}
                      alt="shoes"
                      className="object-cover h-full w-[100%] sm:rounded-xl"
                    />
                  </figure>
                  <div className="h-[210px] md:h-[250px] lg:h-[180px] ">
                    <CardHeader className="flex flex-col gap-3 md:gap-0 lg:gap-3 items-center lg:mb-3 md:mb-0 mb-1">
                      <CardTitle className="text-base sm:text-lg  md:text-xl lg:text-2xl text-center md:mb-1">
                        {item.name} - {item.breed}
                      </CardTitle>

                      <CardDescription className="md:mb-1 flex items-center justify-center">
                        <div className=" hidden sm:grid grid-cols-2 gap-1 text-xs">
                          <p>Bread Group: {item.breed_group}</p>
                          <p>Age (months): {item.age_months} </p>
                          <p>Life span: {item.life_span} </p>
                          <p>Gender: {item.gender} </p>
                          <p>
                            Health : {truncateText(item.health_history, 15)}{" "}
                          </p>
                          <p>
                            temperament: {truncateText(item.temperament, 15)}{" "}
                          </p>
                        </div>
                        <ul className="list-disc sm:hidden grid grid-cols-2 gap-x-5 ">
                          <li>{item.breed_group}</li>
                          <li>{item.age_months}</li>
                          <li>{item.gender}</li>
                          <li>{item.life_span}</li>
                          <li>{truncateText(item.temperament, 15)}</li>
                        </ul>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-base sm:text-base  md:text-lg font-bold text-center md:mb-1">
                      <p> {formatPrice(item.price_naira)} Naira </p>
                    </CardContent>

                    <CardFooter className="flex flex-col items-end md:items-center md:gap-0 gap-y-1 justify-end md:justify-between md:flex-row">
                      {item.vaccinated && (
                        <p>
                          <Badge variant="secondary text-[10px] sm:text:xs">
                            vaccinated
                          </Badge>
                        </p>
                      )}
                      {item.microchipped && (
                        <p>
                          <Badge variant="secondary text-[10px] sm:text-xs">
                            microchipped
                          </Badge>
                        </p>
                      )}
                    </CardFooter>
                  </div>
                </Card>
              </Fade>
            ) : (
              <SkeletonCard key={item.id} />
            )
          )}

        <CardPagination
          startIndex={startIndex}
          endIndex={endIndex}
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
          itemPerPage={itemPerPage}
          length={filterResult ? filterResult.length : 50}
        />
      </div>
    </div>
  );
};

export default CardRows;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dogData from "../data/dogs.json";
import { preloadImages } from "../model/helpers";
import { Skeleton } from "../components/ui/skeleton";
import DisplayDogData from "../components/DisplayDogData";

const DogDetails = () => {
  const [loadedImage, setLoadedImage] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    preloadImages([dogData.dogs[id - 1].image_url]).then((result) =>
      setLoadedImage({ [result[0].imgUrl]: result[0].loaded })
    );
  }, []);

  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-8  7xl:px-0 ">
      {loadedImage ? (
        <div className="flex lg:flex-row flex-col items-center pt-[35px] justify-center lg:gap-8 pb-[40px] ">
          <div className="pb-[20px]">
            <img
              src={Object.keys(loadedImage)[0]}
              alt=""
              className="object-contain md:object-cover lg:w-[47vw] lg:h-[66vh] md:max-h-[60vh] "
            />
          </div>

          <DisplayDogData id={id - 1} />
        </div>
      ) : (
        <div>
          <Skeleton className="w-[40vw] h-[60vh] " />
          <div className="py-8">
            <Skeleton className="w-[0vw] h-[80vh] " />
          </div>
        </div>
      )}
    </div>
  );
};

export default DogDetails;

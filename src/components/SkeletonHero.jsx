import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonHero = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8 7xl:px-0  border rounded-xl">
          <div className="hero bg-transparent min-h-[50vh] ">
            <div className="hero-content flex w-full ">
              <div className="flex flex-col gap-y-5 md:px-[6%] lg:px-[4%] xl:px-[3%] justify-end  w-full ">
                <Skeleton className="h-8 w-[280px] self-end " />

                <Skeleton className="h-6 w-[200px] self-end" />
                <Skeleton className="h-12 w-[200px] self-end" />

                <div className="flex flex-wrap gap-x-4 self-end">
                  <Skeleton className="h-8 w-[100px] rounded-xl" />
                  <Skeleton className="h-8 w-[100px] rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* mobile skeleton */}
        <div className="md:hidden  mx-4  border rounded-xl">
          <div className="hero min-h-[45vh] w-[50%] px-2">
            <div className="hero-content px-[5%]">
              <div className="  pb-15 flex flex-col gap-y-4 sm:gap-y-6 justify-start">
                <Skeleton className="h-8 w-[280px] " />

                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-12 w-[400px] sm:w-[475px]" />

                <div className="flex flex-wrap gap-x-4">
                  <Skeleton className="h-8 w-[100px] rounded-xl" />
                  <Skeleton className="h-8 w-[100px] rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHero;

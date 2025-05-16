import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";
import SkeletonHero from "./SkeletonHero";

const Hero = () => {
  //hero background image load with skeleton
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const [mobileBgLoaded, setMobileBgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero-big-banner-svg.svg";
    img.onload = () => setBgImageLoaded(true);

    const imgMobile = new Image();
    imgMobile.src = "/images/hero-mobile-svg.svg";
    imgMobile.onload = () => setMobileBgLoaded(true);
  });
  return (
    <div className="">
      <div className="hidden md:block max-w-7xl mx-auto px-8 7xl:px-0 ">
        {bgImageLoaded ? (
          <div className="py-20 bg-transparent min-h-[50vh] bg-gradient-to-br from-[#fceed5] bg-[url('/images/hero-big-banner-svg.svg')]  from-60% to-[#003459] bg-cover bg-no-repeat bg-right-top rounded-xl">
            <div className="hero-content text-neutral-content  ">
              <div className=" text-[#efeff0] text-right flex flex-col lg:gap-1 md:px-[6%] lg:px-[4%] xl:px-[3%]">
                <h1 className="mb-3 text-5xl font-bold tracking-wide ">
                  One More Friend
                </h1>
                <h5 className=" text-2xl mb-4 font-medium lg:text-3xl">
                  Thousands More Fun!{" "}
                </h5>
                <p className="mb-5 text-sm self-end text-right md:w-[40%] font-light lg:text-base lg:w-[35%] xl:w-[30%] ">
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
                <div className="flex flex-wrap gap-4 self-end ">
                  <button className="btn btn-outline border border-[#efeff0] shadow-md rounded-3xl cursor-pointer btn-lg">
                    Vie Intro
                    <FaRegCirclePlay className="text-[#efeff0] text-lg" />
                  </button>
                  <button className="btn btn-active btn-lg bg-[#efeff0] text-[#003459] shadow-md  rounded-3xl font-medium ">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <SkeletonHero />
          </div>
        )}
      </div>
      <div className="md:hidden px-4">
        {
          // small screen hero
          mobileBgLoaded ? (
            <div className="hero bg-[#003459]/20 min-h-[45vh] bg-[url('/images/hero-mobile-svg.svg')] bg-cover bg-no-repeat bg-center rounded-xl">
              <div className="hero-content text-neutral-content text-center sm:px-[5%]">
                <div className="  pb-15 text-[#003459] text-left flex flex-col sm:gap-5">
                  <h1 className="mb-2 text-[28px] font-bold tracking-wide ">
                    One More Friend
                  </h1>
                  <div className="flex items-center  gap-x-1 mb-3">
                    <h5 className=" text-xl font-medium">
                      Thousands More Fun!{" "}
                    </h5>
                    <img
                      src="/public/images/hero-mobile-rectangle.svg"
                      alt=""
                      className=""
                    />
                  </div>
                  <p className="mb-5 text-neutral-700 text-xs text-justify sm:w-[70%] ">
                    Having a pet means you have more joy, a new friend, a happy
                    person who will always be with you to have fun. We have 200+
                    different pets that can meet your needs!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn btn-outline border border-[#003459] shadow-md rounded-3xl cursor-pointer bg-[#fceed5]">
                      Vie Intro
                      <FaRegCirclePlay className="text-[#003459] text-lg" />
                    </button>
                    <button className="btn btn-active bg-[#003459] text-white shadow-md shadow-[#fceed5] rounded-3xl font-light ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <SkeletonHero />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Hero;

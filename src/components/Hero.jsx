import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";
import SkeletonHero from "./SkeletonHero";
import BlurText from "./bits-ui/blurText";
import { Fade } from "react-awesome-reveal";
import GradientText from "./bits-ui/gradientText";
import Ribbons from "./bits-ui/ribbons";
import FilterAndSort from "../context/FilterAndSortContext";
import { Link } from "react-router-dom";

const Hero = () => {
  //hero background image load with skeleton
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const [mobileBgLoaded, setMobileBgLoaded] = useState(false);
  const { setLoadAnimation, loadAnimation } = FilterAndSort();

  function scrollDownToCards() {
    window.scrollBy({
      top: 1000,
      behavior: "smooth",
    });
  }

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
          <>
            <div className="pt-20 bg-transparent min-h-[50vh] bg-gradient-to-br from-[#fceed5] bg-[url('/images/hero-big-banner-svg.svg')] from-60% to-[#003459] bg-cover bg-no-repeat bg-right-top rounded-xl pb-10">
              <div className="hero-content text-neutral-content  flex items-center justify-end ">
                <div className=" text-[#efeff0] text-right flex flex-col lg:gap-3 md:px-[4%] lg:px-[3%] xl:px-[2%] lg:w-[60%] md:w-[60%]  items-end md:gap-3">
                  <Fade
                    duration={1500}
                    className=" flex flex-col items-end justify-center md:gap-y-1 lg:gap-y-3"
                    fraction={0.5} // Trigger when 50% visible
                    triggerOnce
                  >
                    <BlurText
                      text=" One More Friend"
                      delay={200}
                      animateBy="words"
                      direction="top"
                      className="self-end text-right mb-2 md:text-4xl lg:text-5xl font-bold tracking-wide xl:tracking-wider pe-4 w-full "
                    />

                    <Fade
                      delay={1500}
                      cascade
                      damping={0.7}
                      triggerOnce
                      className="flex flex-col items-end  "
                    >
                      <BlurText
                        text="Thousands More Fun!"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className="text-2xl mb-4 font-medium lg:text-4xl pe-4"
                      />

                      <div className="mb-5 text-base self-end text-right font-light md:w-[85%] lg:text-lg lg:w-[55%] xl:w-[50%] pe-4">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                      </div>

                      <div className="flex flex-wrap gap-5 self-end pe-4 md:py-2  ">
                        <Fade
                          delay={3000} // Wait before starting
                          duration={3000} // Animation duration
                          fraction={0.5} // Trigger when 50% visible
                          triggerOnce
                        >
                          <GradientText
                            colors={[
                              "#40ffaa",
                              "#4079ff",
                              "#efeff0",
                              "#40ffaa",
                              "#fceed5",
                              "#4079ff",
                              "#40ffaa",
                            ]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class border rounded-full cursor-pointer hover:border-none "
                            onAnimationComplete={setTimeout(() => {
                              setLoadAnimation({
                                ...loadAnimation,
                                heroCompleted: true,
                              });
                            }, 4000)}
                          >
                            <Link to="/intro">
                              <button className="btn btn-outline border shadow-md rounded-3xl  cursor-pointer btn-lg transition duration-200 ease-in-out transform  hover:bg-gradient-to-r hover:from-[#fceed5] from-40% hover:to-[#003459] to-25% hover:shadow-none px-0">
                                <span className="w-full h-full flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#003459] hover:to-[#fceed5] hover:bg-clip-text from-30% to-50% hover:text-transparent tracking-wider transition duration-200 px-5">
                                  View{" "}
                                  <span className="flex items-center gap-2">
                                    Intro
                                    <FaRegCirclePlay className="text-[#efeff0] text-lg" />
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </GradientText>
                          <button
                            onClick={scrollDownToCards}
                            className="btn btn-outline border shadow-md rounded-3xl bg-gradient-to-r from-[#fceed5] to-[#fceed2] cursor-pointer btn-lg text-[#003459]  transition duration-200 ease-in-out transform  hover:bg-gradient-to-r hover:from-[#003459] from-59% hover:to-[#fceed5] to-25% hover:shadow-none px-0"
                          >
                            <span className="w-full h-full flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#fceed5] hover:to-[#003459] hover:bg-clip-text from-59% to-25% hover:text-transparent tracking-wider transition  text-[#003459] px-5">
                              Explore Now!
                            </span>
                          </button>
                        </Fade>
                      </div>
                    </Fade>
                  </Fade>
                </div>
              </div>
              {loadAnimation.heroCompleted && (
                <div className="overflow-hidden relative h-[60px] ">
                  <Ribbons
                    baseThickness={50}
                    colors={["#fff"]}
                    speedMultiplier={0.5}
                    maxAge={500}
                    enableFade={false}
                    enableShaderEffect={true}
                  />
                </div>
              )}
            </div>
          </>
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
            <div className="hero bg-[#003459]/20 min-h-[60vh] bg-[url('/images/hero-mobile-svg.svg')] bg-cover bg-no-repeat bg-center rounded-xl">
              <div className="hero-content text-neutral-content text-left sm:px-[5%] w-full flex items-start justify-start ">
                <div className="  pb-15 text-[#003459] text-left flex flex-col sm:gap-4 align-start justify-start h-[300px]">
                  <Fade
                    duration={1500}
                    className=" flex flex-col items-start justify-start md:gap-y-1 lg:gap-y-3 gap-3 w-[100%] sm:w-[80%]"
                    fraction={0.5} // Trigger when 50% visible
                    triggerOnce
                  >
                    <BlurText
                      text=" One More Friend"
                      delay={200}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={() => {
                        setLoadAnimation({ ...loadAnimation, bigText: true });
                      }}
                      className="mb-2 text-3xl sm:text-4xl font-bold tracking-wide text-left"
                    />

                    <Fade
                      delay={1500}
                      cascade
                      damping={0.7}
                      triggerOnce
                      className="flex flex-col items-end  "
                    >
                      <div className="flex items-center  gap-x-1 mb-3 ps-3">
                        <h5 className=" text-xl font-medium">
                          Thousands More Fun!{" "}
                        </h5>
                        <img
                          src="/public/images/hero-mobile-rectangle.svg"
                          alt=""
                          className=""
                        />
                      </div>
                      <p className="mb-5 text-neutral-700 text-xs text-justify pe-[10%] ps-3 sm-pe-0 self-start">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                      </p>

                      <div className="flex flex-wrap gap-4 ps-3">
                        <Link to="/intro">
                          <button className="btn btn-outline border shadow-md rounded-3xl  cursor-pointer transition duration-200 ease-in-out transform  hover:bg-gradient-to-r hover:from-[#003459] from-41% hover:to-[#fceed5] to-25% hover:shadow-none px-0">
                            <span className="w-full h-full flex items-center gap-1 hover:bg-gradient-to-r hover:from-[#fceed5] hover:to-[#003459] hover:bg-clip-text from-30% to-50% hover:text-transparent tracking-wider transition duration-200 px-5 py-1">
                              View{" "}
                              <span className="flex items-center gap-2">
                                Intro
                                <FaRegCirclePlay className="text-[#003459] text-lg" />
                              </span>
                            </span>
                          </button>
                        </Link>

                        <button
                          onClick={scrollDownToCards}
                          className="btn btn-outline border shadow-md rounded-3xl bg-gradient-to-r from-[#fceed5] to-[#fceed2] cursor-pointer text-[#003459]  transition duration-200 ease-in-out transform  hover:bg-gradient-to-r hover:from-[#003459] from-59% hover:to-[#fceed5] to-25% hover:shadow-none px-0"
                        >
                          <span className="w-full h-full flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#fceed5] hover:to-[#003459] hover:bg-clip-text from-55% to-25% hover:text-transparent tracking-wider transition duration-50 text-[#003459]  px-4">
                            Explore Now!
                          </span>
                        </button>
                      </div>
                    </Fade>
                  </Fade>
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

import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";
import SkeletonHero from "./SkeletonHero";
import BlurText from "./bits-ui/blurText";
import { Button } from "./ui/button";
import { Fade } from "react-awesome-reveal";
import GradientText from "./bits-ui/gradientText";

const Hero = () => {
  //hero background image load with skeleton
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const [mobileBgLoaded, setMobileBgLoaded] = useState(false);
  const [loadAnimation, setLoadAnimation] = useState({
    bigText: false,
    smallText: false,
  });

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
          <div className="py-20 bg-transparent min-h-[65vh] bg-gradient-to-br from-[#fceed5] bg-[url('/images/hero-big-banner-svg.svg')]  from-60% to-[#003459] bg-cover bg-no-repeat bg-right-top rounded-xl">
            <div className="hero-content text-neutral-content  flex items-center justify-end h-[40vh] ">
              <div className=" text-[#efeff0] text-right flex flex-col lg:gap-3 md:px-[4%] lg:px-[3%] xl:px-[2%] w-[70%]  items-end justify-start md:gap-2  ">
                {/* <h1 className="">
                 
                </h1> */}

                <BlurText
                  text=" One More Friend"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => {
                    setLoadAnimation({ ...loadAnimation, bigText: true });
                  }}
                  className="text-right mb-3 md:text-5xl lg:text-6xl font-bold tracking-wide xl:tracking-wider pe-4"
                />

                {loadAnimation.bigText && (
                  <BlurText
                    text="Thousands More Fun!"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => {
                      setLoadAnimation({ ...loadAnimation, smallText: true });
                    }}
                    className="text-2xl mb-4 font-medium lg:text-4xl pe-4 h-[]30px"
                  />
                )}

                <div className="mb-5 text-base self-end text-right font-light md:w-[85%] lg:text-lg lg:w-[55%] xl:w-[50%] pe-4 h-[80px]">
                  {loadAnimation.smallText && (
                    <Fade>
                      Having a pet means you have more joy, a new friend, a
                      happy person who will always be with you to have fun. We
                      have 200+ different pets that can meet your needs!
                    </Fade>
                  )}
                </div>

                <div className="flex flex-wrap gap-5 self-end pe-4 md:py-8  ">
                  {/* */}
                  <Fade
                    delay={3000} // Wait before starting
                    duration={3000} // Animation duration
                    fraction={0.5} // Trigger when 50% visible
                    triggerOnce
                  >
                    <button className="btn btn-outline border shadow-md rounded-3xl cursor-pointer btn-lg hover:bg-[#fceed5]">
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
                        className="custom-class"
                      >
                        View Intro
                      </GradientText>

                      <FaRegCirclePlay className="text-[#efeff0] text-lg" />
                    </button>
                    <button className="btn btn-active btn-lg bg-[#fceed5] text-[#003459] shadow-md  rounded-3xl font-medium ">
                      Explore Now!
                    </button>
                  </Fade>
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
            <div className="hero bg-[#003459]/20 min-h-[60vh] bg-[url('/images/hero-mobile-svg.svg')] bg-cover bg-no-repeat bg-center rounded-xl">
              <div className="hero-content text-neutral-content text-left sm:px-[5%] w-full flex items-start justify-start ">
                <div className="  pb-15 text-[#003459] text-left flex flex-col sm:gap-4 align-start justify-start w-[100%] sm:w-[80%] h-[300px]  ">
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

                  <div className="flex items-center  gap-x-1 mb-3 ps-3">
                    {loadAnimation.bigText && (
                      <Fade>
                        <h5 className=" text-xl font-medium">
                          Thousands More Fun!{" "}
                        </h5>
                        <img
                          src="/public/images/hero-mobile-rectangle.svg"
                          alt=""
                          className=""
                        />
                      </Fade>
                    )}
                  </div>

                  {loadAnimation.bigText && (
                    <Fade>
                      <p className="mb-5 text-neutral-700 text-xs text-justify sm:w-[70%] ps-3">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                      </p>
                    </Fade>
                  )}

                  <div className="flex flex-wrap gap-4 ps-3">
                    {loadAnimation.bigText && (
                      <Fade>
                        <Button className="btn btn-outline border border-[#003459] text-[#003459] shadow-md rounded-3xl cursor-pointer bg-[#fceed5] p-6">
                          Vie Intro
                          <FaRegCirclePlay className="text-[#003459] text-lg" />
                        </Button>
                        <Button className="btn btn-active bg-[#003459] text-white shadow-md shadow-[#fceed5] rounded-3xl font-light p-6">
                          Explore Now
                        </Button>
                      </Fade>
                    )}
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

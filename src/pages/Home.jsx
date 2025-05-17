// import Hero from "daisyui/components/hero";
import Hero from "../components/Hero";
import React, { useEffect, useRef, useState } from "react";
import MobileSubHeader from "../components/mobileSubHeader";
import LargeSubHeader from "../components/largeSubHeader";
import LargeFilterSidebar from "../components/LargeFilterSidebar";
import dogData from "../data/dogs.json";
import CardRows from "../components/CardRows";
import CardPagination from "../components/CardPagination";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:hidden ">
        <MobileSubHeader />

        <CardRows />
      </div>
      <div className="hidden md:flex max-w-7xl mx-auto ">
        <div className="flex align--center justify-center w-full">
          <div className="w-[25%]">
            <LargeFilterSidebar />
          </div>
          <div className="w-[75%] flex flex-col">
            <LargeSubHeader />
            <CardRows />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

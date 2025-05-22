import React from "react";
import FuzzyText from "../components/bits-ui/fuzzyText";

const Error = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="text-xl flex flex-col gap-y-5 h-[50vh] justify-start">
        <FuzzyText baseIntensity={0.1} hoverIntensity={0.5} enableHover={false}>
          404
        </FuzzyText>
        <div className="flex flex-col gap-y-1 items-center justify-center">
          <span>"I'm searching for something."</span>

          <span>Whatever you were looking for is no longer here</span>
        </div>
      </div>
    </div>
  );
};

export default Error;

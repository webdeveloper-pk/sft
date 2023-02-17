import React from "react";
import Button from "./common/Button";

const Hero = () => {
  return (
    <section class="px-6 md:px-8 lg:px-16 text-light-white">
      <div class="mx-auto flex py-12 md:flex-row flex-col items-center">
        <div class="slide-right lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 class="text-5xl xl:text-7xl mb-4 font-bold text-light-white uppercase mt-8">
            Become an <br /> 
            <span className="text-light-green">SFT Trader!</span>
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-12 leading-relaxed w-full text-light-white border-l-4 border-light-green pl-4  xl:text-xl">
          Join our challenge and enhance your skills to <br />
           manage real accounts upto <span className="text-light-green px-1">$500,000</span>as a  <br />
           successful SFT trader.
          </p>
          <div class="flex justify-center">
            <Button buttonText="Get started" goText="Start" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

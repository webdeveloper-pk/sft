import React from "react";
import textimage2 from "../assets/images/textimage2.png";

const TextWithImage2 = () => {
  return (
    <section class="px-6 md:px-8 xl:px-16 bg-lightest-white-bg">
      <div class="mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-6 pt-12 lg:pt-0 ">
        <div className="w-full lg:w-1/2 flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-4xl mb-4 font-bold uppercase">
            EARN UP TO <span className="text-light-green px-2">90%</span>OF THE
            <br />
            PROFITS YOU GENERATE
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-base w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1">
                Our compensation principle is simple: Our traders earn 80% of
                the profits they create at the beginning.
              </p>
              <p className="mt-4">
                Every month, hundreds of SFT traders pay themselves salaries
                ranging from a few hundred dollars to several thousand dollars.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="video"
            src={textimage2}
          />
        </div>
      </div>
    </section>
  );
};

export default TextWithImage2;

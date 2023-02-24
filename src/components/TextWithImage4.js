import React from "react";
import textimage4 from "../assets/images/textimage4.png";

const TextWithImage4 = () => {
  return (
    <section class="px-6 md:px-8 xl:px-16 bg-lightest-white-bg">
      <div class="mx-auto flex flex-col pt-8 pb-12 lg:pt-16 lg:flex-row items-center gap-y-8 gap-x-6 lg:pb-16">
        <div className="w-full lg:w-1/2 flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-4xl mb-4 font-bold uppercase">
            EARLY ACCESS TO SFT ACADEMY
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm xl:text-base w-full xl:w-[80%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1">
                The SFT Academy will soon be open, and participants in SFT
                Challenges will have early access to our training platform.
              </p>
              <p className="mt-4">
                Inside, you will find advice from world-renowned traders,
                in-depth masterclasses on the behavior of major currencies, and
                more. You will learn unique strategies that have generated
                hundreds of millions of dollars in profits over the past 20
                years.
              </p>
              <p className="mt-4">
                The world is changing rapidly, and we understand that the trader
                who will succeed tomorrow is the one who knows how to adapt. The
                SFT Academy will provide real-time strategies that will keep our
                traders informed of the tactics to prioritize.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end xl:justify-center">
          <div className="w-full lg:w-[70%]">
            <img width="100%" height="auto" alt="video" src={textimage4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage4;

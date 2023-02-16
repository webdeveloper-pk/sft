import React from "react";
import discoverVideo from "../assets/images/discover-video.png";

const DiscoverSFT = () => {
  return (
    <section class="px-6 md:px-8 xl:px-16 bg-lightest-white-bg">
      <div class="mx-auto flex flex-col py-12 lg:py-16 lg:flex-row items-start gap-y-8 gap-x-6">
        <div className="w-full lg:w-1/2 flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-4xl mb-4 font-bold uppercase">
            Trade for <span className="text-light-green">Proprietary</span>
            <br />
            <span className="text-light-green">Trading Firm</span>
          </h1>
          <div className="flex flex-row ml-2 items-start text-sm lg:text-xs xl:text-base w-full lg:w-[90%] xl:w-[75%]">
            <div className="border-l border-2 border-light-green h-[20px] mt-2" />
            <div className="ml-4 text-lighter-black">
              <p className="mt-1">
                FTMO developed a unique 2-step Evaluation Course for traders.
                This Evaluation Process consists of the FTMO Challenge and the
                Verification and is specifically tailored to discover trading
                talents.
              </p>
              <p className="mt-4">
                Upon successful completion of the Evaluation Course, you are
                offered a placement in the FTMO Proprietary Trading firm where
                you can remotely manage the FTMO Account with a balance of up to
                $400,000
              </p>
              <p className="mt-4">
                Your journey to get there might be challenging, but our
                educational applications, account analysis and performance coach
                are here to help you on the endeavour to financial independence.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="video"
            src={discoverVideo}
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverSFT;

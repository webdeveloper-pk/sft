import React from "react";
import chart from "../assets/images/features-chart.png";
import featuresbg1 from "../assets/images/features-bg1.png";
import featuresbg2 from "../assets/images/features-bg2.png";
import featuresbg3 from "../assets/images/features-bg3.png";
import featuresbg4 from "../assets/images/features-bg4.png";

const Features = () => {
  return (
    <section class="px-8 lg:px-12 pb-16 xl:mt-0 text-light-black features-bg relative">
      <div className="absolute left-0 bottom-0">
        <img
          src={featuresbg1}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="absolute right-0 top-0">
        <img
          src={featuresbg2}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="absolute left-0 -top-[10%]">
        <img
          src={featuresbg3}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="absolute right-0 -bottom-[10%]">
        <img
          src={featuresbg4}
          alt="dots"
          width="450px"
          height="auto"
          className="w-[200px] md:w-[300px] lg:w-[500px]"
        />
      </div>
      <div className="uppercase text-light-green text-3xl lg:text-5xl features-title">
        <h1>
          SCALING KEY
          <br />
          FEATURES
        </h1>
      </div>
      <div className="w-full lg:w-[100%] mt-6 md:mt-32 xl:mt-56 ml-0 md:ml-16 xl:ml-32 2xl:ml-40 2xl:mt-72">
        <div className="w-full md:w-[55%] lg:w-[40%] xl:w-[25%]">
          <p className="text-light-green font-bold text-md">
            Capital increases on the SFT challenge take place in four-month
            cycles.
          </p>
          <p className="text-light-white font-light text-sm mt-6">
            For a capital increase, the trader must generate at least 7% net
            profit (14% in the case of an Aggressive type account) in four
            consecutive monthly cycles. At the same time, the trader must
            process at least 2 withdrawals during the 4 month period.
          </p>
        </div>
      </div>
      <div className="absolute top-[40%] md:top-[30%] lg:top-[25%] xl:top-[15%] left-0">
        <img src={chart} alt="chart" width="100%" height="auto" />
      </div>
      <div className="w-full flex justify-between mt-[150px] md:mt-[200px] lg:mt-[300px] xl:mt-[200px]">
        <div className="flex w-[0%] md:w-[50%]"></div>
        <div className="w-[100%] md:w-[50%] pb-12 md:pb-36 xl:pb-44 mt-24 2xl:pb-56 2xl:mt-36">
          <p className="text-light-green font-bold text-sm w-[100%] md:w-[80%] xl:w-[50%]">
            It is important that the trader's account balance is greater than
            the initial account balance (in profit) at the time of scaling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import chart from "../assets/images/chart.png"

const Features = () => {
  return (
    <section class="px-8 lg:px-12 py-12 lg:py-16 text-light-black features-bg">
      <div className="uppercase text-light-green text-3xl">
        <h1>
          SCALING KEY
          <br />
          FEATURES
        </h1>
      </div>
      <div className="w-full lg:w-[100%] mt-12">
        <div className="w-full lg:w-[40%]">
        <p className="text-light-green font-bold text-md">
          Capital increases on the SFT challenge take place in four-month
          cycles.
        </p>
        <p className="text-light-white font-light text-sm mt-6">
          For a capital increase, the trader must generate at least 7% net
          profit (14% in the case of an Aggressive type account) in four
          consecutive monthly cycles. At the same time, the trader must process
          at least 2 withdrawals during the 4 month period.
        </p>
        </div>
      </div>
      <div>
        <img src={chart} alt="chart" />
      </div>
      <div className="w-full mt-36 flex justify-end">
        <div className="w-full lg:w-[40%]">
        <p className="text-light-green font-bold text-sm">
          It is important that the trader's account balance is greater than the
          initial account balance (in profit) at the time of scaling.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import Button from "./common/Button";
import Phase from "./common/Phase";

const Working = () => {
  return (
    <section class="px-6 md:px-8 xl:px-16 py-12 lg:py-16 text-light-black working-bg">
      <div className="flex flex-col items-center gap-y-14">
        <div className="uppercase font-bold text-light-green text-center text-3xl xl:text-5xl">
          HOW IT WORKS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
          <div>
            <Phase
              phase="PHASE 1"
              title="SFT CHALLENGE"
              description="Depending on the challenge you choose, you have between 30 and 40 days to reach the profitability goal on a demo account that will be assigned to you."
              borderWidth="border-r-light-green"
            />
          </div>
          <div>
            <Phase
              phase="PHASE 2"
              title="SFT CHALLENGE"
              description="If you succeed in phase #1, you can access phase 2, the validation phase, during which you will be asked to repeat your performance (with some slight modifications)."
              borderWidth="border-r-light-green border-b-light-green"
            />
          </div>
          <div>
            <Phase
              phase="PHASE 3"
              title="SFT TRADER"
              description="If you validate phase 2, you will join the SFT Elite Team and a real money account will be made available to you so that you can perform. You can pocket 90% of the account's profits."
            borderWidth="border-r-light-green border-b-light-green border-l-light-green border-t-light-green"
            />
          </div>
        </div>
        <div>
          <Button buttonText="get started" goText="start" />
        </div>
      </div>
    </section>
  );
};

export default Working;

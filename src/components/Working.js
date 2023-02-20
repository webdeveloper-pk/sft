import React from "react";
import HomepageButton from "./common/HomepageButton";
import Phase from "./common/Phase";
import workbg1 from "../assets/images/work-bg1.png";
import workbg2 from "../assets/images/work-bg2.png";
import workbg3 from "../assets/images/work-bg3.png";
import workbg4 from "../assets/images/work-bg4.png";
import workbg5 from "../assets/images/work-bg5.png";

const Working = () => {
  return (
    <section class="px-2 md:px-8 xl:px-16 py-32 lg:py-[250px] text-light-black working-bg">
        <div className="absolute bottom-0 left-0">
            <img src={workbg1} alt="dots" width="500px" height="auto" />
        </div>
        <div className="absolute top-[5%] xl:top-[25%] right-0">
            <img src={workbg2} alt="dots" width="500px" height="auto" />
        </div>
        <div className="absolute top-[15%] md:top-[10%] lg:top-[15%] left-0 xl:left-[5%] 2xl:left-[10%]">
            <img src={workbg3} alt="dots" width="500px" height="auto" />
        </div>
        <div className="absolute top-[35%] md:top-[20%] lg:top-[10%] left-0 md:left-[50%] lg:left-[25%] xl:left-[30%] 2xl:left-[35%]">
            <img src={workbg4} alt="dots" width="500px" height="auto" />
        </div>
        <div className="absolute top-[60%] md:top-[40%] lg:top-[40%] left-0 lg:left-[60%] xl:left-[60%] 2xl:left-[60%]">
            <img src={workbg5} alt="dots" width="500px" height="auto" />
        </div> 
      <div className="flex flex-col items-center gap-y-14">
        <div className="uppercase font-bold text-light-green text-center text-3xl lg:text-5xl">
          HOW IT WORKS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
          <div>
            <Phase
              phase="PHASE 1"
              title="SFT CHALLENGE"
              description="Depending on the challenge you choose, you have between 30 and 40 days to reach the profitability goal on a demo account that will be assigned to you."
              value="33"
            />
          </div>
          <div>
            <Phase
              phase="PHASE 2"
              title="SFT CHALLENGE"
              description="If you succeed in phase #1, you can access phase 2, the validation phase, during which you will be asked to repeat your performance (with some slight modifications)."
              value="66"
            />
          </div>
          <div>
            <Phase
              phase="PHASE 3"
              title="SFT TRADER"
              description="If you validate phase 2, you will join the SFT Elite Team and a real money account will be made available to you so that you can perform. You can pocket 90% of the account's profits."
              value="100"
            />
          </div>
        </div>
        <div>
          <HomepageButton buttonText="get started" goText="start" />
        </div>
      </div>
    </section>
  );
};

export default Working;

import React from "react";

const Phase = ({ phase, title, description, borderWidth }) => {
  return (
    <div
      className={`h-[280px] w-[280px] pt-12 pl-12 md:w-[320px] md:h-[320px] md:pt-14 md:pl-16 lg:w-[300px] lg:h-[300px] lg:pt-12 lg:pl-14 xl:w-[320px] xl:h-[320px] xl:pt-14 xl:pl-14 rounded-full border border-8 border-white p-4 relative`}
    >
      <div
        className={`h-[280px] w-[280px] pt-12 pl-12 md:w-[320px] md:h-[320px] md:pt-14 md:pl-16 lg:w-[300px] lg:h-[300px] lg:pt-12 lg:pl-14 xl:w-[320px] xl:h-[320px] xl:pt-14 xl:pl-14 rounded-full border border-transparent border-[16px] ${borderWidth} p-4 flex flex-col items-center absolute -right-2 -top-2`}
      >
        <p className="uppercase text-light-green font-bold w-[100%] text-left text-sm">
          {phase}
        </p>
        <p className="uppercase text-light-green text-xl w-[100%] text-left text-base md:text-lg xl:text-xl">
          {title}
        </p>
        <p className="mt-4 text-xs md:text-sm text-white w-[100%] text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Phase;

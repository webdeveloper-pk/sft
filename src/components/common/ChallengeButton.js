import React from "react";

const ChallengeButton = ({ text, bgColor, borderColor, tooltip }) => {
  return (
    <div class="group flex relative">
      <button
        className={`flex justify-center items-center gap-x-1.5 text-lightest-white-bg ${bgColor} border ${borderColor} hover:bg-light-green hover:border-light-green py-3 2xl:py-3 px-3 rounded-full text-sm`}
      >
        <span>{text}</span>
      </button>
      {tooltip && (
        <span
          class="group-hover:opacity-100 transition-opacity bg-light-green text-xs text-light-white rounded-full absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 -m-10 mx-auto px-2 uppercase w-[110px] text-center"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default ChallengeButton;

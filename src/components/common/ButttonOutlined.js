import React from "react";

const ButtonOutlined = ({ textSize, buttonText, paddingX, paddingY }) => {
  return (
    <div
      className={`${textSize} ${paddingX} ${paddingY} text-light-green bg-transparent hover:text-light-white hover:bg-light-green rounded-full uppercase font-bold border border-light-green hover:cursor-pointer`}
    >
      {buttonText}
    </div>
  );
};

export default ButtonOutlined;

import React from "react";

const ButtonOutlined = ({ textSize, buttonText }) => {
  return (
    <div className={`${textSize} text-light-green bg-transparent hover:text-light-white hover:bg-light-green py-1.5 lg:py-2 2xl:py-3 px-6 rounded-full uppercase font-bold border border-light-green`}>
      {buttonText}
    </div>
  );
};

export default ButtonOutlined;

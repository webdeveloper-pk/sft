import React from "react";

const ButtonFilled = ({ textSize, buttonText }) => {
  return (
    <div className={`${textSize} text-light-white bg-light-green hover:text-light-green hover:bg-transparent py-3 2xl:py-3 px-6 md:px-8 lg:px-12 rounded-full uppercase font-bold border border-light-green`}>
        {buttonText}
    </div>
  );
};

export default ButtonFilled;
